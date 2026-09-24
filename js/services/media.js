// Photo licensing, attribution and graceful fallbacks.
import { config } from '../config.js';
import { esc, safeURL } from '../core/dom.js';

const COMMERCIAL_SAFE = ['cc0', 'cc-by', 'cc-by-sa'];
const NON_COMMERCIAL = ['cc-by-nc', 'cc-by-nc-sa', 'cc-by-nc-nd', 'cc-by-nd'];

export const licenseAllowed = code => {
  const c = String(code || '').toLowerCase();
  return COMMERCIAL_SAFE.includes(c) || (config.allowNonCommercialMedia && NON_COMMERCIAL.includes(c));
};
export const licenseURL = code => {
  const c = String(code || '').toLowerCase();
  if (c === 'cc0') return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const m = c.match(/^cc-(by(?:-nc)?(?:-sa|-nd)?)$/);
  return m ? `https://creativecommons.org/licenses/${m[1]}/4.0/` : '';
};

export function normalizePhoto(p) {
  if (!p || !licenseAllowed(p.license_code)) return null;
  const base = safeURL(p.medium_url || p.url || p.square_url);
  if (!base) return null;
  const sized = size =>
    /\/photos\/\d+\/(square|small|medium|large|original)\./.test(base)
      ? base.replace(/\/(square|small|medium|large|original)\./, `/${size}.`)
      : base;
  return {
    id: p.id,
    small: sized('small'),
    medium: sized('medium'),
    large: safeURL(p.large_url) || sized('large'),
    attribution: p.attribution || p.attribution_name || 'iNaturalist contributor',
    license: p.license_code,
    source: `https://www.inaturalist.org/photos/${Number(p.id)}`,
  };
}

export function photosOf(taxon) {
  const list = [taxon?.default_photo, ...(taxon?.taxon_photos || []).map(p => p.photo)]
    .map(normalizePhoto)
    .filter(Boolean);
  return list.filter((p, i) => list.findIndex(x => x.id === p.id) === i).slice(0, 8);
}

/** Curated/local photos use the same shape: {url, license, attribution, source}. */
export function curatedPhoto(photo) {
  if (!photo || !licenseAllowed(photo.license)) return null;
  const url = safeURL(photo.url);
  if (!url) return null;
  return {
    id: photo.id,
    small: url.replace('/medium.', '/small.'),
    medium: url,
    large: url.replace('/medium.', '/large.'),
    attribution: photo.attribution,
    license: photo.license,
    source: photo.id ? `https://www.inaturalist.org/photos/${Number(photo.id)}` : safeURL(photo.source),
  };
}

export function photoMarkup(photo, alt, { hero = false, size = 'medium' } = {}) {
  if (!photo) return '';
  const src = hero ? photo.large : photo[size] || photo.medium;
  const fallback = hero ? ` data-fallback="${esc(photo.medium)}" fetchpriority="high"` : ' loading="lazy"';
  return `<img src="${esc(src)}"${fallback} decoding="async" alt="${esc(alt)}" width="640" height="480"><span class="photo-credit">${esc(photo.attribution)}</span>`;
}

// Errors never leave broken-image icons or silently remove attribution.
export function bindImageFallbacks(root = document) {
  root.querySelectorAll('img:not([data-bound])').forEach(img => {
    img.dataset.bound = 'true';
    img.addEventListener('error', () => {
      if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
        delete img.dataset.fallback;
        return;
      }
      img.hidden = true;
      img.closest('.media-frame,.gallery-stage,.hero-photo,.thumb')?.classList.add('image-unavailable');
    });
    if (img.complete && !img.naturalWidth && img.getAttribute('src')) img.dispatchEvent(new Event('error'));
  });
}
