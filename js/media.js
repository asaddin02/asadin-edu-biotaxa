export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeURL(value) {
  try { const u=new URL(value); return ['https:','http:'].includes(u.protocol)?u.href:''; } catch { return ''; }
}
const allowed=/^(cc0|cc-by|cc-by-sa|cc-by-nc|cc-by-nc-sa|cc-by-nc-nd|cc-by-nd)$/;
export function normalizePhoto(p) {
  if(!p || !allowed.test(p.license_code || '')) return null;
  const base=safeURL(p.medium_url||p.url||p.square_url);
  if(!base)return null;
  const resize=(size)=>/\/photos\/\d+\/(square|small|medium|large|original)\./.test(base)?base.replace(/\/(square|small|medium|large|original)\./,`/${size}.`):base;
  return {id:p.id,medium:resize('medium'),large:safeURL(p.large_url)||resize('large'),attribution:p.attribution||p.attribution_name||'iNaturalist contributor',license:p.license_code,source:`https://www.inaturalist.org/photos/${p.id}`};
}
export function photosOf(taxon) {
  const list=[taxon?.default_photo,...(taxon?.taxon_photos||[]).map(p=>p.photo)].map(normalizePhoto).filter(Boolean);
  return list.filter((p,i)=>list.findIndex(x=>x.id===p.id)===i).slice(0,8);
}
export function photoMarkup(photo,name,{hero=false}={}) {
  if(!photo)return '';
  return `<img src="${escapeHTML(hero?photo.large:photo.medium)}" ${hero?`data-fallback="${escapeHTML(photo.medium)}" fetchpriority="high"`:'loading="lazy"'} decoding="async" alt="${escapeHTML(name)}" width="640" height="480"><span class="photo-credit">${escapeHTML(photo.attribution)}</span>`;
}
// Errors never leave broken-image icons or silently remove attribution.
export function bindImageFallbacks(root=document) {
  root.querySelectorAll('img:not([data-bound])').forEach(img=>{
    img.dataset.bound='true';
    img.addEventListener('error',()=>{
      if(img.dataset.fallback&&img.src!==img.dataset.fallback){img.src=img.dataset.fallback;delete img.dataset.fallback;return;}
      img.hidden=true;img.closest('.media-frame,.gallery-stage,.hero-photo')?.classList.add('image-unavailable');
    });
    if(img.complete&&!img.naturalWidth)img.dispatchEvent(new Event('error'));
  });
}
