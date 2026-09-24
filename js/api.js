import {photosOf} from './media.js';
const GBIF='https://api.gbif.org/v1';
const INAT='https://api.inaturalist.org/v1';
const BACKBONE='d7dddbf4-2cf0-4f39-9b2a-bb099caae36c';
const cache=new Map(),pending=new Map();
let nextINat=0;
export const PAGE_SIZE=24;
export async function getJSON(url) {
  const hit=cache.get(url);
  if(hit&&Date.now()-hit.time<300000)return hit.data;
  if(pending.has(url))return pending.get(url);
  const task=(async()=>{
    if(url.startsWith(INAT)) {const wait=Math.max(0,nextINat-Date.now());nextINat=Math.max(nextINat,Date.now())+1050;if(wait)await new Promise(r=>setTimeout(r,wait));}
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
    try{
      const response=await fetch(url,{signal:controller.signal});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const data=await response.json();cache.set(url,{data,time:Date.now()});
      while(cache.size>100)cache.delete(cache.keys().next().value);
      return data;
    }finally{clearTimeout(timer);}
  })();
  pending.set(url,task);
  try{return await task;}finally{pending.delete(url);}
}
const url=(path,params={})=>`${GBIF}/${path}?${new URLSearchParams(params)}`;
const inat=(path,params={})=>getJSON(`${INAT}/${path}?${new URLSearchParams(params)}`);
const scientific=x=>x.nameType==='INFORMAL'?x.scientificName:(x.canonicalName||x.scientificName);
const same=(a,b)=>String(a).toLowerCase().trim()===String(b).toLowerCase().trim();
export const groups=[
 {id:'all',taxon:'',icon:'✳',idLabel:'Semua',enLabel:'All life'},
 {id:'animals',taxon:1,kingdom:1,icon:'♘',idLabel:'Hewan',enLabel:'Animals'},
 {id:'birds',taxon:3,icon:'⌁',idLabel:'Burung',enLabel:'Birds'},
 {id:'insects',taxon:47158,icon:'❋',idLabel:'Serangga',enLabel:'Insects'},
 {id:'plants',taxon:47126,kingdom:6,icon:'❧',idLabel:'Tumbuhan',enLabel:'Plants'},
 {id:'fungi',taxon:47170,kingdom:5,icon:'♧',idLabel:'Jamur',enLabel:'Fungi'},
 {id:'bacteria',taxon:67333,kingdom:3,icon:'⠿',idLabel:'Bakteri',enLabel:'Bacteria'},
 {id:'archaea',taxon:151817,kingdom:2,icon:'♨',idLabel:'Arkea',enLabel:'Archaea'}
];
export const API={
 taxon:key=>getJSON(url(`species/${key}`)),
 parents:key=>getJSON(url(`species/${key}/parents`)),
 children:(key,page=1)=>getJSON(url(`species/${key}/children`,{limit:PAGE_SIZE,offset:(page-1)*PAGE_SIZE})),
 async search(query,page=1,kingdom=''){
  const params={rank:'SPECIES',status:'ACCEPTED',datasetKey:BACKBONE,limit:PAGE_SIZE,offset:(page-1)*PAGE_SIZE};
  if(query)params.q=query;if(kingdom)params.highertaxonKey=kingdom;
  return getJSON(url('species/search',params));
 },
 async visual(query='',page=1,group='all',lang='id',limit=PAGE_SIZE){
  const g=groups.find(g=>g.id===group)||groups[0];
  const params={rank:'species',is_active:true,locale:lang,all_names:true,per_page:limit,page,order_by:'observations_count'};
  if(query)params.q=query;if(g.taxon)params.taxon_id=g.taxon;
  return inat('taxa',params);
 },
 async galleryPhotos(ids,lang){
  if(!ids.length)return [];
  const result=await inat(`taxa/${ids.slice(0,24).map(Number).join(',')}`,{locale:lang});
  return result.results||[];
 },
 async resolveCommon(query,lang){
  try{const data=await inat('taxa',{q:query,rank:'species',is_active:true,locale:lang,all_names:true,per_page:5});
   const match=data.results?.find(t=>[t.preferred_common_name,...(t.names||[]).map(n=>n.name)].some(n=>same(n,query)));
   return match?.name||query;
  }catch{return query;}
 },
 async photo(name,lang){
  const data=await inat('taxa',{q:name,rank:'species',is_active:true,locale:lang,all_names:true,per_page:5});
  const match=data.results?.find(t=>same(t.name,name));
  if(!match)return {photos:[]};
  // Full taxon records provide multiple credited photographs and complete ancestry.
  const full=await inat(`taxa/${match.id}`,{locale:lang,all_names:true}).catch(()=>null);
  const taxon=full?.results?.[0]||match;
  return {taxon,photos:photosOf(taxon)};
 },
 async exactGBIF(name){
  const data=await getJSON(url('species/match',{name,strict:true}));
  if(data.matchType!=='EXACT'||!data.usageKey)return null;
  const taxon=await this.taxon(data.acceptedUsageKey||data.usageKey);
  // Reject informal or fuzzy cross-provider joins; keep the original record instead.
  return taxon.rank==='SPECIES'&&taxon.nameType!=='INFORMAL'&&same(scientific(taxon),name)?taxon:null;
 },
 async seed(id,lang){
  if(String(id).startsWith('inat-')){
   const data=await inat(`taxa/${id.slice(5)}`,{locale:lang,all_names:true});
   const taxon=data.results?.[0];if(!taxon)throw new Error('Taxon unavailable');
   const ancestors=taxon.ancestors||[];
   const k=ancestors.find(a=>a.rank==='kingdom')?.name;
   const kingdomKey={Animalia:1,Archaea:2,Bacteria:3,Chromista:4,Fungi:5,Plantae:6,Protozoa:7}[k];
   return {taxon:{key:id,canonicalName:taxon.name,scientificName:taxon.name,rank:taxon.rank.toUpperCase(),kingdom:k,kingdomKey,taxonomicStatus:'ACCEPTED',source:'iNaturalist'},parents:ancestors.map(a=>({key:`inat-${a.id}`,canonicalName:a.name,rank:a.rank.toUpperCase(),searchName:a.name})),photo:{taxon,photos:photosOf(taxon)},failed:[],accessed:new Date().toISOString()};
  }
  const taxon=await this.taxon(id);
  return {taxon,failed:[],accessed:new Date().toISOString()};
 },
 async enrich(seed,lang){
  let data={...seed,failed:[]};
  if(data.taxon.source==='iNaturalist'){
   const gbif=await this.exactGBIF(data.taxon.canonicalName).catch(()=>null);
   if(gbif)data.gbifKey=gbif.key;
  }else data.gbifKey=data.taxon.key;
  const key=data.gbifKey,name=scientific(data.taxon);
  const tasks={};
  if(key){
   tasks.parents=this.parents(key);
   tasks.names=getJSON(url(`species/${key}/vernacularNames`,{limit:1000}));
   tasks.descriptions=getJSON(url(`species/${key}/descriptions`,{limit:100}));
   tasks.distributions=getJSON(url(`species/${key}/distributions`,{limit:100}));
  }
  if(!data.photo)tasks.photo=this.photo(name,lang);
  const entries=Object.entries(tasks),results=await Promise.allSettled(entries.map(([,p])=>p));
  results.forEach((r,i)=>{if(r.status==='fulfilled')data[entries[i][0]]=r.value;else data.failed.push(entries[i][0]);});
  return data;
 },
 async occurrences(data){
  const key=data.gbifKey||(!String(data.taxon.key).startsWith('inat-')?data.taxon.key:null);
  let failure=false;
  if(key){
   try{const result=await getJSON(url('occurrence/search',{taxon_key:key,has_coordinate:true,has_geospatial_issue:false,occurrence_status:'PRESENT',limit:300}));
    if(result.results?.length||!data.photo?.taxon)return {...result,provider:'GBIF',taxonKey:key};
   }catch{failure=true;}
  }
  const id=data.photo?.taxon?.id;
  if(id){
   const result=await inat('observations',{taxon_id:id,geo:true,per_page:100,order_by:'observed_on',quality_grade:'research'});
   return {provider:'iNaturalist',count:result.total_results||0,taxonKey:null,fallback:failure,results:(result.results||[]).filter(r=>r.geojson?.coordinates).map(r=>({key:r.id,decimalLongitude:r.geojson.coordinates[0],decimalLatitude:r.geojson.coordinates[1],country:r.place_guess,eventDate:r.observed_on,coordinateUncertaintyInMeters:r.positional_accuracy,sourceURL:`https://www.inaturalist.org/observations/${r.id}`}))};
  }
  if(failure)throw new Error('Occurrence source unavailable');
  return {results:[],count:0,provider:key?'GBIF':'iNaturalist',taxonKey:key};
 },
 async wikipedia(name,wikiURL,lang){
  let title=name;
  if(wikiURL){try{title=decodeURIComponent(new URL(wikiURL).pathname.split('/wiki/')[1]||name);}catch{}}
  if(lang==='id'){
   try{const links=await getJSON(`https://en.wikipedia.org/w/api.php?${new URLSearchParams({action:'query',format:'json',origin:'*',prop:'langlinks',lllang:'id',titles:title,redirects:1})}`);
    const page=Object.values(links.query?.pages||{})[0],idTitle=page?.langlinks?.[0]?.['*'];
    if(idTitle){const d=await getJSON(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(idTitle)}`);if(d.extract&&d.type!=='disambiguation')return {...d,language:'id'};}
   }catch{}
   try{const d=await getJSON(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);if(d.extract&&d.type!=='disambiguation')return {...d,language:'id'};}catch{}
  }
  const d=await getJSON(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
  return d.extract&&d.type!=='disambiguation'?{...d,language:'en'}:null;
 }
};
export function commonNames(data){
 const entries=data.names?.results||[],taxon=data.photo?.taxon;
 const get=codes=>{const filtered=entries.filter(n=>codes.includes(n.language)),frequency=new Map();for(const n of filtered){const key=n.vernacularName.toLowerCase();frequency.set(key,(frequency.get(key)||0)+1);}return filtered.sort((a,b)=>Number(!!b.isPreferredName)-Number(!!a.isPreferredName)||(frequency.get(b.vernacularName.toLowerCase())-frequency.get(a.vernacularName.toLowerCase()))).map(n=>n.vernacularName);};
 const names={id:get(['ind','id']),en:get(['eng','en'])};
 for(const n of taxon?.names||[]){if(n.lexicon==='Indonesian')names.id.unshift(n.name);if(n.lexicon==='English')names.en.unshift(n.name);}
 return Object.fromEntries(Object.entries(names).map(([k,v])=>[k,[...new Map(v.map(n=>[n.toLowerCase(),n])).values()].slice(0,3)]));
}
