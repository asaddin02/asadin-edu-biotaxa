// Uses real services. It is intentionally separate from deterministic tests.
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';
const base=process.env.BIOTAXA_URL||'http://127.0.0.1:8085';
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
page.setDefaultTimeout(15000);
const report={time:new Date().toISOString(),base,galleries:[],dossiers:[],errors:[]};
page.on('pageerror',e=>report.errors.push(e.stack||e.message));
const screenshots='docs/screenshots';await mkdir(screenshots,{recursive:true});
async function settleImages(root='main'){
 await page.locator(`${root} img`).evaluateAll(images=>Promise.all(images.filter(i=>!i.loading||i.loading!=='lazy'||i.getBoundingClientRect().top<innerHeight).map(img=>img.decode().catch(()=>{}))));
}
async function shot(name){await settleImages();await page.screenshot({path:`${screenshots}/${name}.png`,fullPage:true});}
try{
 const response=await page.goto(base);if(!response.ok())throw new Error('Local server failed');await page.locator('.hero h1').waitFor();await shot('home-desktop');
 await page.setViewportSize({width:390,height:844});await shot('home-mobile');await page.setViewportSize({width:1440,height:1000});
 const firstIDs={};
 for(const group of ['all','animals','birds','insects','plants','fungi','bacteria','archaea']){
  await page.goto(`${base}/#/search?group=${group}`);
  await page.locator('.discovery-card').first().waitFor({timeout:30000});
  await page.waitForFunction(()=>document.querySelector('#results')?.dataset.hydrating!=='true',{},{timeout:30000});
  await page.locator('.discovery-card').first().scrollIntoViewIfNeeded();await settleImages('#results');
  firstIDs[group]=await page.locator('.discovery-link').first().getAttribute('href');
  const result={group,shown:await page.locator('.discovery-card').count(),summary:await page.locator('.result-head').innerText(),photoCards:await page.locator('.discovery-card .media-frame img').count(),loadedImages:await page.locator('.discovery-card img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&i.naturalWidth>0).length),first:firstIDs[group]};
  assert.equal(result.shown,24,`${group}: expected a full page`);
  assert.ok(result.loadedImages>0,`${group}: no visible photo loaded`);
  report.galleries.push(result);console.log(JSON.stringify(result));
  if(group==='all'){
   // Scroll normally through this one page so its lazy photographs are visible in the artifact.
   for(let i=0;i<24;i+=4){await page.locator('.discovery-card').nth(i).scrollIntoViewIfNeeded();await settleImages('#results');}
   await page.evaluate(()=>scrollTo(0,0));await shot('gallery-desktop');
   await page.getByRole('link',{name:/Berikutnya/}).click();await page.waitForFunction(()=>new URLSearchParams(location.hash.split('?')[1]).get('page')==='2'&&document.querySelector('#results .discovery-card'));
   report.pagination={page:2,shown:await page.locator('.discovery-card').count(),first:await page.locator('.discovery-link').first().getAttribute('href')};
  }
  if(group==='bacteria')await shot('bacteria-gallery');
 }
 for(const [label,hash] of [['tiger','#/species/inat-41967'],['plant',firstIDs.plants],['fungus',firstIDs.fungi],['bacterium',firstIDs.bacteria],['archaeon',firstIDs.archaea]]){
  await page.goto(base+'/'+hash);await page.locator('.species-intro h1').waitFor({timeout:30000});
  await page.locator('#dossier-status').waitFor({state:'detached',timeout:65000});await settleImages('.species-visual');
  const data={label,name:await page.locator('h1').innerText(),photos:await page.locator('.photo-gallery figure').count(),heroLoaded:await page.locator('.species-visual .gallery-stage img').evaluateAll(imgs=>imgs.some(i=>i.complete&&i.naturalWidth>0))};
  if(label==='tiger')await shot('species-live');
  await page.getByRole('tab',{name:'Peta temuan',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('#occurrence-map')?.dataset.points!==undefined||document.querySelector('#occurrence-map')?.dataset.mapError==='true',{},{timeout:45000});
  data.basemap=await page.locator('#occurrence-map').getAttribute('data-basemap');data.mapPoints=await page.locator('#occurrence-map').getAttribute('data-points');data.mapSource=await page.locator('#occurrence-map').getAttribute('data-source');data.mapStatus=await page.locator('.map-status').innerText();
  await page.waitForFunction(()=>document.querySelector('#occurrence-map')?.dataset.basemap==='ready');
  data.basemap=await page.locator('#occurrence-map').getAttribute('data-basemap');
  assert.equal(data.basemap,'ready');assert.ok(Number(data.mapPoints)>0,`${label}: expected occurrence points for this sample`);assert.ok(data.heroLoaded,`${label}: expected a loaded photograph`);
  report.dossiers.push(data);console.log(JSON.stringify(data));
  if(label==='tiger'){
   await shot('map-desktop');await page.setViewportSize({width:390,height:844});await shot('map-mobile');await page.setViewportSize({width:1440,height:1000});
   await page.getByRole('button',{name:'EN',exact:true}).click();await page.locator('#dossier-status').waitFor({state:'detached',timeout:65000});await page.getByRole('tab',{name:'Overview',exact:true}).click();await shot('species-english');await page.getByRole('button',{name:'ID',exact:true}).click();await page.locator('#dossier-status').waitFor({state:'detached',timeout:65000});
  }
 }
 await page.goto(base+'/#/search?source=index&q=Panthera');await page.locator('.taxon-card').first().waitFor({timeout:30000});report.gbifIndex={shown:await page.locator('.taxon-card').count(),summary:await page.locator('.result-head').innerText()};
 await page.goto(base+'/#/lab');await page.locator('#lab-output').waitFor();await shot('lab-desktop');
 await page.getByRole('button',{name:'Catat hasil model',exact:true}).click();await page.emulateMedia({media:'print'});await page.pdf({path:'docs/laboratory-sample.pdf',format:'A4',printBackground:true});
}catch(error){report.errors.push(error.message);console.error(error);process.exitCode=1;}
finally{await writeFile('docs/live-report.json',JSON.stringify(report,null,2));await browser.close();}
if(report.errors.length)process.exitCode=1;
