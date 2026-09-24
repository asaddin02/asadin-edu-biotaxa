import {test,expect} from '@playwright/test';
const pixel=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jf1sAAAAASUVORK5CYII=','base64');
const photo=id=>({id,license_code:'cc-by',attribution:'CC BY · Example photographer',url:`https://images.test/photos/${id}/square.png`,medium_url:`https://images.test/photos/${id}/medium.png`,large_url:`https://images.test/photos/${id}/large.png`});
const taxon=(id=777)=>({id,name:`Example species${id}`,rank:'species',preferred_common_name:`Creature ${id}`,observations_count:200,iconic_taxon_name:'Mammalia',default_photo:photo(id),taxon_photos:[{photo:photo(id)},{photo:photo(id+1)}],ancestors:[{id:1,name:'Animalia',rank:'kingdom'},{id:2,name:'Chordata',rank:'phylum'},{id:3,name:'Mammalia',rank:'class'},{id:4,name:'Example',rank:'genus'}]});
async function api(page,{empty=false,outage=false,mismatch=false,broken=false,noGeo=false}={}){
 await page.route('https://**/*',async route=>{
  const u=new URL(route.request().url()),path=u.pathname;
  if(u.hostname==='images.test'){
   if(broken||path.includes('large'))return route.abort();
   return route.fulfill({contentType:'image/png',body:pixel});
  }
  if(u.hostname.includes('wikipedia'))return route.fulfill({status:503,body:'no wiki'});
  let body={results:[]};
  if(path==='/v1/taxa'){
   if(outage)return route.fulfill({status:503,body:'offline'});
   const start=(Number(u.searchParams.get('page')||1)-1)*24;
   body={total_results:empty?0:75,results:empty?[]:Array.from({length:24},(_,i)=>taxon(start+i+777))};
  }else if(path.startsWith('/v1/taxa/'))body={results:path.split('/').at(-1).split(',').map(id=>taxon(Number(id)))};
  else if(path==='/v1/species/match')body=mismatch?{matchType:'EXACT',usageKey:99}:{matchType:'NONE'};
  else if(path==='/v1/species/99')body={key:99,rank:'SPECIES',canonicalName:'Different species',scientificName:'Different species',nameType:'SCIENTIFIC'};
  else if(path==='/v1/observations')body={total_results:noGeo?0:2,results:noGeo?[]:[{id:1,geojson:{coordinates:[110,-7]},place_guess:'Java, Indonesia',observed_on:'2026-01-01'},{id:2,geojson:{coordinates:[102,4]},place_guess:'Malaysia',observed_on:'2026-02-01'}]};
  await route.fulfill({contentType:'application/json',body:JSON.stringify(body)});
 });
}
test('gallery opens without a query, paginates and filters real API parameters',async({page})=>{
 await api(page);await page.goto('/#/search');await expect(page.locator('.discovery-card')).toHaveCount(24);await expect(page.locator('.result-head')).toContainText('75');
 await page.getByRole('link',{name:/Berikutnya/}).click();await expect(page.locator('.discovery-card').first()).toContainText('Creature 801');
 const request=page.waitForRequest(r=>r.url().includes('/v1/taxa?')&&new URL(r.url()).searchParams.get('taxon_id')==='67333');
 await page.getByRole('link',{name:'Bakteri',exact:false}).click();await request;await expect(page.locator('.group-pill.selected')).toContainText('Bakteri');await expect(page.locator('.discovery-card')).toHaveCount(24);
});
test('empty gallery offers the wider index; failures remain distinct',async({page})=>{
 await api(page,{empty:true});await page.goto('/#/search?q=missing');await expect(page.locator('#results')).toContainText('Tidak ada hasil pada galeri');await expect(page.getByRole('link',{name:/Coba sumber lainnya/})).toHaveAttribute('href',/source=index/);
 await page.unrouteAll();await api(page,{outage:true});await page.goto('/#/search?q=offline');await expect(page.getByRole('alert')).toContainText('Sumber data belum dapat dihubungi');
});
test('native source remains accessible without an exact GBIF match; photos, lightbox and map work',async({page})=>{
 await api(page,{mismatch:true});await page.goto('/#/species/inat-777');await expect(page.locator('h1')).toHaveText('Example species777');await expect(page.locator('#dossier-status')).toHaveCount(0,{timeout:20000});
 await page.locator('.source-disclosure summary').first().click();await expect(page.locator('.source-disclosure').first()).toContainText('Belum ada kecocokan');await expect(page.locator('.taxonomy-list')).toContainText('Animalia');
 await page.locator('.species-visual [data-photo="0"]').first().click();await expect(page.locator('#photo-dialog')).toBeVisible();await expect(page.locator('#dialog-photo img')).toHaveJSProperty('naturalWidth',1);await page.keyboard.press('Escape');await expect(page.locator('#photo-dialog')).not.toBeVisible();
 await page.getByRole('tab',{name:'Peta temuan',exact:true}).click();await expect(page.locator('#occurrence-map')).toHaveAttribute('data-basemap','ready');await expect(page.locator('#occurrence-map')).toHaveAttribute('data-points','2');await expect(page.locator('#occurrence-map')).toHaveAttribute('data-source','iNaturalist');
 expect(await page.locator('.leaflet-atlas-land-pane path').count()).toBeGreaterThan(150);
 await page.locator('.leaflet-overlay-pane .leaflet-interactive').last().click();await expect(page.locator('.leaflet-popup-content')).toBeVisible();
 await page.getByRole('button',{name:'EN',exact:true}).click();await expect(page.getByRole('tab',{name:'Occurrence map',exact:true})).toHaveAttribute('aria-selected','true');await expect(page.locator('#occurrence-map')).toHaveAttribute('data-basemap','ready');
});
test('a zero-coordinate species still has a geographic basemap',async({page})=>{
 await api(page,{noGeo:true});await page.goto('/#/species/inat-777?tab=map');await expect(page.locator('#occurrence-map')).toHaveAttribute('data-basemap','ready');await expect(page.locator('#occurrence-map')).toHaveAttribute('data-points','0',{timeout:20000});await expect(page.locator('.map-status')).toContainText('lokasi tidak direkayasa');expect(await page.locator('.leaflet-atlas-land-pane path').count()).toBeGreaterThan(150);
});
test('broken photographs show an explicit fallback and dossier tabs support keyboard',async({page})=>{
 await api(page,{broken:true});await page.goto('/#/species/inat-777');await expect(page.locator('.species-visual .gallery-stage')).toHaveClass(/image-unavailable/);await expect(page.locator('.species-visual .image-error-text')).toBeVisible();
 await page.getByRole('tab',{name:'Ringkasan',exact:true}).focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:'Cara hidup',exact:true})).toBeFocused();await expect(page.locator('#panel-facts')).toBeVisible();
});
test('mobile photographic pages and map have no horizontal overflow',async({page})=>{
 await api(page);await page.setViewportSize({width:390,height:844});
 for(const route of ['home','search','tree','lab','species/inat-777?tab=map']){
  await page.goto('/#/'+route);
  if(route.startsWith('species'))await expect(page.locator('#occurrence-map')).toHaveAttribute('data-basemap','ready');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});

test('leaving a map during viewport updates does not leave animation callbacks',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await api(page);
 for(let i=0;i<3;i++){
  await page.goto('/#/species/inat-777?tab=map');
  await expect(page.locator('#occurrence-map')).toHaveAttribute('data-points','2');
  await page.setViewportSize({width:i%2?1440:390,height:844});
  await page.getByRole('button',{name:'EN',exact:true}).click();
  await expect(page.locator('#occurrence-map')).toHaveAttribute('data-points','2');
  await page.goto('/#/home');await expect(page.locator('.hero')).toBeVisible();
  await page.getByRole('button',{name:'ID',exact:true}).click();
 }
 expect(errors).toEqual([]);
});
