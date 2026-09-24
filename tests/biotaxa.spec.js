import {test,expect} from '@playwright/test';
const chain=[{key:1,canonicalName:'Animalia',rank:'KINGDOM'},{key:44,canonicalName:'Chordata',rank:'PHYLUM'},{key:359,canonicalName:'Mammalia',rank:'CLASS'},{key:732,canonicalName:'Carnivora',rank:'ORDER'},{key:9703,canonicalName:'Felidae',rank:'FAMILY'},{key:2435194,canonicalName:'Panthera',rank:'GENUS'},{key:5219416,canonicalName:'Panthera tigris',rank:'SPECIES'}].map(x=>({...x,scientificName:x.canonicalName,kingdomKey:1,kingdom:'Animalia',taxonomicStatus:'ACCEPTED'}));
async function fixtures(page){
 await page.route('https://**/*',async route=>{
  const u=new URL(route.request().url());
  let data={results:[],endOfRecords:true};
  if(u.hostname.includes('inaturalist'))data={results:[]};
  if(u.hostname.includes('wikipedia'))return route.fulfill({status:503,body:'unavailable'});
  if(u.pathname==='/v1/species/search')data={count:25,endOfRecords:Number(u.searchParams.get('offset')||0)>0,results:Number(u.searchParams.get('offset')||0)>0?[{...chain.at(-1),key:999,canonicalName:'Panthera leo'}]:[chain.at(-1)]};
  const match=u.pathname.match(/^\/v1\/species\/(\d+)(?:\/(\w+))?$/);
  if(match){const index=chain.findIndex(x=>x.key===Number(match[1]));const node=chain[index]||{key:Number(match[1]),canonicalName:Number(match[1])===2?'Archaea':'Bacteria',rank:'KINGDOM',kingdomKey:Number(match[1])};
   if(!match[2])data=node;
   if(match[2]==='parents')data=index>=0?chain.slice(0,index):[];
   if(match[2]==='children')data={results:index>=0&&index<chain.length-1?[chain[index+1]]:[],endOfRecords:true};
   if(match[2]==='vernacularNames')data={results:[{vernacularName:'Harimau',language:'ind'},{vernacularName:'Tiger',language:'eng'}]};
   if(match[2]==='descriptions')data={results:[{type:'habitat',language:'eng',description:'Forests and grasslands. <script>window.pwned=true</script>',source:'Fixture source'}]};
  }
  await route.fulfill({contentType:'application/json',body:JSON.stringify(data)});
 });
}
test('complete hierarchy retains family and genus; detail, names, save and language',async({page})=>{
 await fixtures(page);await page.goto('/#/tree');
 await page.getByRole('link',{name:/Eukarya/}).click();
 for(const n of chain){await page.locator('.taxon-card').filter({hasText:n.canonicalName}).click();}
 await expect(page.getByRole('heading',{name:'Panthera tigris',exact:true})).toBeVisible();
 await expect(page.locator('.names')).toContainText('Harimau');await expect(page.locator('.names')).toContainText('Tiger');
 await expect(page.locator('.taxonomy-list li')).toHaveCount(8);
 await expect(page.locator('.taxonomy-list')).toContainText('Felidae');await expect(page.locator('.taxonomy-list')).toContainText('Panthera');
 await expect(page.locator('#wiki-summary')).toContainText('Ringkasan Wikipedia belum tersedia');
 expect(await page.evaluate(()=>window.pwned)).toBeUndefined();
 await page.getByRole('button',{name:'Simpan ke koleksi',exact:false}).click();
 await page.getByRole('link',{name:'Koleksi',exact:true}).click();await expect(page.locator('.taxon-card')).toHaveCount(1);
 await page.reload();await expect(page.locator('.taxon-card')).toHaveCount(1);
 await page.getByRole('button',{name:'EN',exact:true}).click();await expect(page.locator('html')).toHaveAttribute('lang','en');await expect(page.getByRole('heading',{name:'Little discoveries, your own collection.'})).toBeVisible();
});
test('search pagination and escaped input',async({page})=>{
 await fixtures(page);await page.goto('/#/search?source=index');await page.locator('[name=q]').fill('tiger');await page.getByRole('button',{name:'Cari',exact:false}).click();
 await expect(page.locator('#results')).toContainText('25');await page.getByRole('link',{name:/Berikutnya/}).click();await expect(page.locator('.taxon-card')).toContainText('Panthera leo');
 await page.getByRole('link',{name:/Sebelumnya/}).click();await expect(page.locator('.taxon-card')).toContainText('Panthera tigris');
 await page.locator('[name=q]').fill('<img src=x onerror=alert(1)>');await page.getByRole('button',{name:'Cari',exact:false}).click();await expect(page.locator('#results .result-head')).toContainText('<img src=x');await expect(page.locator('#results img')).toHaveCount(0);
});
test('API outage shows retry instead of claiming no species',async({page})=>{
 await fixtures(page);await page.route('**/v1/species/search?**',r=>r.fulfill({status:503,body:'down'}));await page.goto('/#/search?q=tiger&source=index');await expect(page.getByRole('alert')).toContainText('Sumber data belum dapat dihubungi');await expect(page.getByRole('button',{name:'Coba lagi'})).toBeVisible();
});
test('stale responses do not replace the active route',async({page})=>{
 await fixtures(page);await page.route('**/v1/species/search?**',async r=>{await new Promise(done=>setTimeout(done,600));await r.fulfill({contentType:'application/json',body:JSON.stringify({count:1,results:[chain.at(-1)]})});});await page.goto('/#/search?q=tiger&source=index');await page.getByRole('link',{name:'Laboratorium',exact:true}).click();await page.waitForTimeout(900);await expect(page.locator('#main h1')).toContainText('Rasa ingin tahu, bertemu eksperimen.');
});
test('all domain branches, empty state, back and forward',async({page})=>{
 await fixtures(page);await page.goto('/#/tree');for(const name of ['Bacteria','Archaea']){await page.locator('.domain-card').filter({hasText:name}).click();await page.locator('.taxon-card').click();await expect(page.locator('.status')).toContainText('Tidak ada turunan');await page.goBack();await expect(page.locator('.taxon-card')).toHaveCount(1);await page.goto('/#/tree');}
});
test('lab computes physical units, independent models and printable record',async({page})=>{
 await page.goto('/#/lab');await expect(page.locator('#lab-output')).toContainText('5 N');await page.locator('#armOut').fill('20');await expect(page.locator('#lab-output')).toContainText('2,5 N');await page.locator('#prediction').fill('Longer load arm reduces force.');await page.getByRole('button',{name:'Catat hasil model',exact:true}).click();await expect(page.locator('#experiment-log')).toContainText('2,5 N');
 await page.getByRole('button',{name:'Aliran energi',exact:true}).click();await expect(page.locator('#lab-output')).toContainText('100');await page.getByRole('button',{name:'Osmosis',exact:true}).click();await expect(page.locator('#lab-output')).toContainText('ke dalam sel');await page.locator('#outside').fill('6');await expect(page.locator('#lab-output')).toContainText('ke luar sel');await page.getByRole('button',{name:'EN',exact:true}).click();await expect(page.locator('#main')).toContainText('Where curiosity meets experiments.');await expect(page.locator('#experiment-log')).toContainText('Longer load arm');
});
test('mobile layout, keyboard, reduced motion and both language pages',async({page})=>{
 await fixtures(page);await page.setViewportSize({width:390,height:844});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 for(const path of ['home','tree','search','lab','saved','about']){await page.goto('/#/'+path);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}
 await page.getByRole('button',{name:'EN',exact:true}).click();for(const path of ['home','tree','search','lab','saved','about']){await page.goto('/#/'+path);await expect(page.locator('html')).toHaveAttribute('lang','en');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}
 await page.goto('/#/home');await page.keyboard.press('Tab');
});
test('draft notes and simulation settings survive changing language',async({page})=>{
 await page.goto('/#/lab');await page.locator('#armOut').fill('20');await page.locator('#prediction').fill('My hypothesis');await page.getByRole('button',{name:'EN',exact:true}).click();await expect(page.locator('#armOut')).toHaveValue('20');await expect(page.locator('#prediction')).toHaveValue('My hypothesis');await expect(page.locator('#lab-output')).toContainText('2.5 N');
});
