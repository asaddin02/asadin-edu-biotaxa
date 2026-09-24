import { copy, ranks, domains, kingdoms, examples } from './content.js';
import { API, PAGE_SIZE, commonNames, groups } from './api.js';
import { photosOf, photoMarkup, bindImageFallbacks } from './media.js';
import { featured } from './featured.js';
import { createOccurrenceMap } from './map.js';
const $ = s => document.querySelector(s);
const esc = s =>
  String(s ?? '').replace(
    /[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );
function safeURL(s) {
  try {
    const u = new URL(s);
    return ['https:', 'http:'].includes(u.protocol) ? u.href : '';
  } catch {
    return '';
  }
}
function plain(s) {
  const doc = new DOMParser().parseFromString(String(s || ''), 'text/html');
  return doc.body.textContent || '';
}
function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
let lang = read('biotaxa-language', 'id');
if (!['id', 'en'].includes(lang)) lang = 'id';
let t = copy[lang],
  epoch = 0,
  currentTaxon = null,
  labMode = 'claw',
  experiments = [];
const drafts = new Map(),
  labState = {};
let currentDetails = null,
  activePanel = 'overview',
  mapView = null,
  mapHost = null,
  lastRoute = '';
let collection = read('biotaxa-collection', []);
if (!Array.isArray(collection)) collection = [];
collection = collection
  .filter(x => (Number.isInteger(x.key) || /^inat-\d+$/.test(String(x.key))) && typeof x.name === 'string')
  .slice(0, 200);
const format = n => Number(n).toLocaleString(lang === 'id' ? 'id-ID' : 'en-US');
const link = (url, label) =>
  safeURL(url)
    ? `<a href="${esc(safeURL(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`
    : esc(label);
const rankName = rank => t[String(rank || '').toLowerCase()] || rank || t.unknown;
const taxonName = x =>
  x.nameType === 'INFORMAL'
    ? x.scientificName || x.canonicalName
    : x.canonicalName || x.scientificName || t.unknown;
function routeURL(path, params = {}) {
  return `#/${path}${Object.keys(params).length ? '?' + new URLSearchParams(params) : ''}`;
}
function taxonURL(x) {
  if (x.searchName) return routeURL('search', { q: x.searchName, source: 'index' });
  const key = /^inat-\d+$/.test(String(x.key))
    ? x.key
    : Number.isSafeInteger(Number(x.key))
      ? Number(x.key)
      : 0;
  return x.rank === 'SPECIES' ? `#/species/${key}` : `#/tree/${key}`;
}
function domainOf(x) {
  return Number(x.kingdomKey) === 2
    ? 'Archaea'
    : Number(x.kingdomKey) === 3
      ? 'Bacteria'
      : [1, 4, 5, 6, 7].includes(Number(x.kingdomKey))
        ? 'Eukarya'
        : null;
}
const brandImage = (cls = 'brand-symbol') =>
  `<img class="${cls}" src="assets/brand/biotaxa-mark.png" alt="" width="64" height="64">`;
const icons = {
  home: '<path d="m3 10 9-7 9 7v10H4V10m5 10v-7h6v7"/>',
  tree: '<path d="M12 3v8M5 20v-6h14v6M12 11v9"/><circle cx="12" cy="4" r="2"/><circle cx="5" cy="20" r="1"/><circle cx="19" cy="20" r="1"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  lab: '<path d="M9 3h6m-5 0v7L4 20h16l-6-10V3M7 15h10"/>',
  saved: '<path d="M6 3h12v18l-6-4-6 4Z"/>',
};
const icon = p =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[p] || icons.tree}</svg>`;
function shell(page) {
  document.documentElement.lang = lang;
  $('#main').dataset.page = page;
  document.title = `BioTaxa · ${t[page] || t.species}`;
  $('#header').innerHTML =
    `<div class="header-inner"><a class="brand" href="#/home">${brandImage()}<span>BioTaxa<small>ASADIN EDU</small></span></a><nav class="nav" aria-label="${lang === 'id' ? 'Navigasi utama' : 'Main navigation'}">${['home', 'tree', 'search', 'lab', 'saved'].map(p => `<a href="#/${p}" class="${page === p ? 'active' : ''}" ${page === p ? 'aria-current="page"' : ''}>${icon(p)}<span>${p === 'search' ? t.discover : t[p]}</span></a>`).join('')}</nav><div class="lang" aria-label="Language"><button data-lang="id" class="${lang === 'id' ? 'active' : ''}" aria-pressed="${lang === 'id'}">ID</button><button data-lang="en" class="${lang === 'en' ? 'active' : ''}" aria-pressed="${lang === 'en'}">EN</button></div></div>`;
  $('#footer').innerHTML =
    `<div class="footer-main"><a class="brand" href="#/home">${brandImage()}<span>BioTaxa<small>ASADIN EDU</small></span></a><p>${t.footer}</p><span class="footer-note">${t.footerSub}</span></div><div class="footer-discover"><span class="eyebrow">${lang === 'id' ? 'RASA INGIN TAHU TAK ADA HABISNYA.' : 'STAY ENDLESSLY CURIOUS.'}</span><p>${lang === 'id' ? 'Satu planet. Jutaan cerita.' : 'One planet. Millions of stories.'}</p><a href="#/about">${t.about} ↗</a></div><div class="footer-bottom"><span>© BioTaxa · Asadin Edu</span><span>GBIF / iNaturalist / Wikipedia</span></div>`;
}
function head(title, sub, eyebrow = 'BIOTAXA / ATLAS') {
  return `<div class="page-head">${brandImage('page-brand')}<span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(title)}</h1><p>${esc(sub)}</p></div>`;
}
function loading() {
  return `<div class="status" role="status">${brandImage('loading-brand')}<span class="spinner" aria-hidden="true"></span><p>${t.loading}</p></div>`;
}
function error() {
  return `<div class="status" role="alert"><h3>${t.error}</h3><p>${t.errorHint}</p><button class="btn" data-retry>${t.retry}</button></div>`;
}
function empty(message = t.empty) {
  return `<div class="status">${brandImage('empty-brand')}<h3>${message}</h3><p>${t.emptyHint}</p></div>`;
}
function domainCards() {
  return `<div class="grid">${domains.map((d, i) => `<a href="#/tree/${d.id}" class="card domain-card"><span class="eyebrow">0${i + 1} / ${t.domain.toUpperCase()}</span><div class="domain-art domain-art-${i}" aria-hidden="true"><i></i><i></i><i></i><span>0${i + 1}</span></div><h3>${d.id}</h3><p>${t[d.id]}</p><div class="card-link">${t.open} ${d.id}<span class="arrow">↗</span></div></a>`).join('')}</div>`;
}
function featuredCard(x) {
  return `<article class="discovery-card"><a href="#/species/inat-${x.id}" class="discovery-link"><div class="media-frame"><img src="${esc(x.image)}" alt="${esc(x.name)}" loading="lazy" width="640" height="480"><span class="photo-credit">${esc(x.credit)}</span></div><div class="discovery-body"><span class="overline">${t.species}</span><h3>${esc(lang === 'id' ? x.idName : x.enName)}</h3><p class="latin">${esc(x.name)}</p><span class="card-corner" aria-hidden="true">↗</span></div></a><a class="image-license" href="${esc(x.source)}" target="_blank" rel="noopener noreferrer">${esc(x.license.toUpperCase())} ↗</a></article>`;
}
function heroArt() {
  const tiger = featured.find(x => x.name === 'Panthera tigris') || featured[0];
  const butterfly = featured.find(x => x.name === 'Danaus plexippus') || featured[1];
  const bird = featured.find(x => x.name === 'Alcedo atthis') || featured[2];
  const tile = (x, cls) =>
    `<a class="hero-photo ${cls}" href="#/species/inat-${x.id}"><img src="${esc(x.image)}" alt="${esc(x.name)}" width="640" height="480" fetchpriority="${cls === 'hero-primary' ? 'high' : 'auto'}"><span class="hero-photo-caption"><strong>${esc(lang === 'id' ? x.idName : x.enName)}</strong><em>${esc(x.name)}</em></span><span class="photo-credit">${esc(x.credit)}</span></a>`;
  return `<div class="hero-mosaic"><div class="atlas-grid" aria-hidden="true"></div>${tile(tiger, 'hero-primary')}${tile(bird, 'hero-secondary')}${tile(butterfly, 'hero-tertiary')}<div class="explorer-seal" aria-hidden="true">${brandImage()}<span>STAY<br>CURIOUS.</span></div></div>`;
}
function home() {
  return `<section class="hero new-hero"><div class="hero-copy"><span class="eyebrow"><i class="live-dot"></i>${t.heroTop}</span><h1>${t.heroNew}</h1><p>${t.heroNewSub}</p><form class="hero-search" id="hero-search"><span aria-hidden="true">⌕</span><input name="q" aria-label="${t.search}" placeholder="${t.searchQuick}" maxlength="200"><button type="submit" aria-label="${t.search}">↗</button></form><div class="hero-links"><a class="btn" href="#/search">${t.discover} ${icon('search')}</a><a class="hero-tree-link" href="#/tree">${t.tree} ↗</a></div><div class="hero-footnote"><span>${lang === 'id' ? '3 domain. Satu pohon kehidupan.' : '3 domains. One tree of life.'}</span></div></div>${heroArt()}</section>
 <section class="discovery-strip"><span>${t.scientificSource}</span><strong>GBIF</strong><strong>iNaturalist</strong><strong>Wikipedia</strong><a href="#/about">${t.about} ↗</a></section>
 <section class="section featured-section"><div class="section-head"><div><span class="eyebrow">${t.catalog}</span><h2>${t.featured}</h2><p>${t.featuredSub}</p></div><a class="text-link" href="#/search">${t.viewAll} ↗</a></div><div class="discovery-grid featured-grid">${featured.slice(0, 6).map(featuredCard).join('')}</div></section>
 <section class="section domains-section"><div class="section-head"><div><span class="eyebrow">${t.journey}</span><h2>${t.journeyTitle}</h2></div><p>${t.journeyText}</p></div>${domainCards()}</section>
 <section class="section learning-section"><div class="section-head"><h2>${t.what}</h2><p>${t.whatText}</p></div><div class="learn-grid">${[
   ['01', t.namesTitle, t.namesText],
   ['02', t.evolutionTitle, t.evolutionText],
   ['03', t.ranksTitle, t.rankIntro],
 ]
   .map(
     ([n, h, p]) =>
       `<article class="learning-card"><span class="number">${n}</span><h3>${h}</h3><p>${p}</p></article>`
   )
   .join(
     ''
   )}</div><div class="steps">${ranks.map((r, i) => `<div class="step"><span>0${i + 1}</span><strong>${t[r]}</strong></div>`).join('')}</div><details class="science-note"><summary>${t.domainCaveat.split('.')[0]}.</summary><p>${t.domainCaveat} <a href="#/about">${t.read} ↗</a></p></details></section>
 <section class="lab-banner"><div><span class="eyebrow">BIOTAXA LAB</span><h2>${t.lessonCard}</h2><p>${t.lessonSub}</p><a href="#/lab" class="btn">${t.lab} ↗</a></div><div class="lab-art" aria-hidden="true"><div class="lab-orbit">${icon('lab')}</div>${brandImage()}<span class="lab-equation">F = M × R</span></div></section><section class="section"><div class="section-head"><h2>${t.audiences}</h2></div><div class="grid">${['kids', 'teens', 'teachers'].map((k, i) => `<article class="audience-card"><span class="overline">0${i + 1} / BIOTAXA</span><h3>${t[k]}</h3><p>${t[k + 'Text']}</p></article>`).join('')}</div></section>`;
}
function crumbs(items = []) {
  return `<nav class="breadcrumbs" aria-label="${t.taxonomy}"><a href="#/tree">${t.tree}</a>${items.map(x => `<span aria-hidden="true">›</span><a href="${esc(x.url)}">${esc(x.name)}</a>`).join('')}</nav>`;
}
function card(x) {
  return `<a class="card taxon-card" data-scientific="${esc(taxonName(x))}" href="${taxonURL(x)}"><span class="badge">${esc(rankName(x.rank))}</span>${x.nameType === 'INFORMAL' ? ` <span class="badge">${t.informal}</span>` : ''}<h3>${esc(taxonName(x))}</h3>${x.rank === 'SPECIES' && x.vernacularNames ? `<small class="source-meta">ID: ${esc(x.vernacularNames.find(n => ['ind', 'id'].includes(n.language))?.vernacularName || t.unknown)}<br>EN: ${esc(x.vernacularNames.find(n => ['eng', 'en'].includes(n.language))?.vernacularName || t.unknown)}</small>` : x.vernacularName ? `<small>${esc(x.vernacularName)}</small>` : ''}<div class="card-link"><span>${esc(x.family || x.kingdom || t.open)}</span><span aria-hidden="true">↗</span></div></a>`;
}
function pagination(page, hasNext, url, total) {
  return `<nav class="pagination" aria-label="${t.page}">${page > 1 ? `<a class="btn secondary" href="${url(page - 1)}">← ${t.prev}</a>` : `<button class="btn secondary" disabled>${t.prev}</button>`}<span>${t.page} ${format(page)}${total ? ` / ${format(Math.ceil(total / PAGE_SIZE))}` : ''}</span>${hasNext ? `<a class="btn secondary" href="${url(page + 1)}">${t.next} →</a>` : `<button class="btn secondary" disabled>${t.next}</button>`}</nav>`;
}
async function tree(id, params, token) {
  const page = validPage(params.get('page'));
  if (!id) {
    $('#main').innerHTML =
      head(t.treeTitle, t.treeSubtitle) + domainCards() + `<div class="notice">${t.treeNote}</div>`;
    return;
  }
  const d = domains.find(d => d.id === id);
  if (d) {
    $('#main').innerHTML =
      crumbs([{ name: d.id, url: `#/tree/${d.id}` }]) +
      head(d.id, t[d.id], t.domain.toUpperCase()) +
      `<div class="taxon-grid">${d.kingdoms.map(key => card({ key, canonicalName: kingdoms[key], rank: 'KINGDOM' })).join('')}</div><div class="notice">${t.treeNote}</div>`;
    return;
  }
  if (!/^\d+$/.test(id)) {
    location.hash = '#/tree';
    return;
  }
  $('#main').innerHTML = crumbs() + loading();
  const [node, parents, children] = await Promise.all([
    API.taxon(id),
    API.parents(id),
    API.children(id, page),
  ]);
  if (token !== epoch) return;
  if (node.rank === 'SPECIES') {
    location.hash = `#/species/${node.key}`;
    return;
  }
  const domain = domainOf(node);
  const path = [
    ...(domain ? [{ name: domain, url: `#/tree/${domain}` }] : []),
    ...parents.map(p => ({ name: taxonName(p), url: taxonURL(p) })),
    { name: taxonName(node), url: taxonURL(node) },
  ];
  $('#main').innerHTML =
    crumbs(path) +
    head(taxonName(node), t.rankNotes[node.rank] || t.treeSubtitle, rankName(node.rank)) +
    `<div class="notice">${t.treeNote}</div><h2>${t.children}</h2>` +
    (children.results.length
      ? `<div class="taxon-grid">${children.results.map(card).join('')}</div>`
      : empty(t.noChildren)) +
    pagination(page, !children.endOfRecords && children.results.length > 0, p =>
      routeURL(`tree/${id}`, { page: p })
    );
  if (node.rank === 'GENUS') hydrateIndex(taxonName(node), token);
}
function validPage(s) {
  const n = Number(s);
  return Number.isInteger(n) && n > 0 ? Math.min(n, 4167) : 1;
}
function visualCard(x) {
  const photo = photosOf(x)[0],
    common = x.preferred_common_name;
  return `<article class="discovery-card" data-taxon="${Number(x.id)}"><a href="#/species/inat-${Number(x.id)}" class="discovery-link"><div class="media-frame ${photo ? '' : 'no-photo'}">${photo ? photoMarkup(photo, x.name) : `<div class="photo-placeholder"><span aria-hidden="true">${x.iconic_taxon_name === 'Plantae' ? '❧' : x.iconic_taxon_name === 'Fungi' ? '♧' : '◎'}</span><small>${t.imageMissing}</small></div>`}<span class="media-badge">${esc(x.iconic_taxon_name || t.species)}</span><span class="image-error-text">${t.imageFailed}</span></div><div class="discovery-body"><h3>${esc(common || x.name)}</h3><p class="latin">${esc(x.name)}</p><div class="discovery-meta"><span><i class="live-dot"></i> ${format(x.observations_count || 0)} ${t.observations}</span><span aria-hidden="true">↗</span></div></div></a>${photo ? `<a class="image-license" href="${photo.source}" target="_blank" rel="noopener noreferrer">${esc(photo.license.toUpperCase())} ↗</a>` : ''}</article>`;
}
async function search(params, token) {
  const query = (params.get('q') || '').trim().slice(0, 200),
    page = validPage(params.get('page'));
  const source = params.get('source') === 'index' ? 'index' : 'visual',
    group = params.get('group') || 'all',
    kingdom = params.get('kingdom') || '';
  const groupTabs = groups
    .map(
      g =>
        `<a class="group-pill ${g.id === group ? 'selected' : ''}" href="${routeURL('search', { q: query, group: g.id, source, ...(source === 'index' ? { kingdom: g.kingdom || '' } : {}) })}"><span aria-hidden="true">${g.icon}</span>${lang === 'id' ? g.idLabel : g.enLabel}</a>`
    )
    .join('');
  $('#main').innerHTML =
    `<div class="explore-heading"><div><span class="eyebrow">BIOTAXA / EXPLORE</span><h1>${t.discoveryTitle}</h1><p>${t.discoveryIntro}</p></div><span class="explore-stamp" aria-hidden="true">${brandImage()}</span></div><form class="search-form catalog-search" id="search-form"><span class="search-symbol" aria-hidden="true">⌕</span><input name="q" aria-label="${t.search}" placeholder="${esc(t.placeholder)}" value="${esc(query)}" maxlength="200"><input type="hidden" name="source" value="${source}"><input type="hidden" name="group" value="${esc(group)}">${
      source === 'index'
        ? `<select name="kingdom" aria-label="${t.kingdom}"><option value="">${t.all}</option>${Object.entries(
            kingdoms
          )
            .map(([k, n]) => `<option value="${k}" ${k === kingdom ? 'selected' : ''}>${n}</option>`)
            .join('')}</select>`
        : ''
    }<button class="btn" type="submit">${t.submit} ↗</button></form><nav class="group-pills" aria-label="${t.groups}">${groupTabs}</nav><div class="catalog-tools"><div class="source-switch"><a href="${routeURL('search', { q: query, group, source: 'visual' })}" class="${source === 'visual' ? 'selected' : ''}">▦ ${t.visual}</a><a href="${routeURL('search', { q: query, group, source: 'index', kingdom })}" class="${source === 'index' ? 'selected' : ''}">☷ ${t.index}</a></div><span class="live-label"><i class="live-dot"></i> ${t.live} · ${source === 'visual' ? 'iNaturalist' : 'GBIF'}</span></div><div id="results" aria-live="polite">${loading()}</div><p class="catalog-footnote">${source === 'visual' ? t.galleryHint : t.indexHint}</p>`;
  if (source === 'visual') {
    const data = await API.visual(query, page, group, lang);
    if (token !== epoch) return;
    const count = data.total_results || 0,
      maxPages = Math.min(500, Math.ceil(count / PAGE_SIZE));
    $('#results').innerHTML =
      `<div class="result-head"><span><strong>${format(count)}</strong> ${t.gallerySource}${query ? ` · “${esc(query)}”` : ''}</span><span>${t.page} ${page}</span></div>` +
      (data.results?.length
        ? `<div class="discovery-grid">${data.results.map(visualCard).join('')}</div>`
        : `${empty()}<p class="notice">${t.noVisualResults} <a href="${routeURL('search', { q: query, source: 'index', kingdom: groups.find(g => g.id === group)?.kingdom || '' })}">${t.differentSource} ↗</a></p>`) +
      pagination(
        page,
        page < maxPages,
        p => routeURL('search', { q: query, source, group, page: p }),
        Math.min(count, 500 * PAGE_SIZE)
      ) +
      (page >= 500 ? `<p class="notice">${t.pageLimit}</p>` : '');
    hydrateGallery(data.results || [], token);
  } else {
    let resolved = params.get('resolved') || query;
    if (query && !params.has('resolved')) resolved = await API.resolveCommon(query, lang);
    if (token !== epoch) return;
    const data = await API.search(resolved, page, kingdom);
    if (token !== epoch) return;
    $('#results').innerHTML =
      `<div class="result-head"><span><strong>${format(data.count || 0)}</strong> ${t.results}${query ? ` · “${esc(query)}”` : ''}</span><span>${resolved !== query ? esc(resolved) + ' · ' : ''}GBIF Backbone</span></div>` +
      (data.results?.length ? `<div class="taxon-grid">${data.results.map(card).join('')}</div>` : empty()) +
      pagination(
        page,
        !data.endOfRecords && data.results.length > 0 && page * PAGE_SIZE < 100000,
        p => routeURL('search', { q: query, page: p, kingdom, resolved, source, group }),
        Math.min(data.count, 100000)
      );
    if (resolved) hydrateIndex(resolved, token);
  }
  bindImageFallbacks($('#main'));
}

async function hydrateGallery(items, token) {
  const missing = items.filter(x => !photosOf(x).length).map(x => x.id);
  if (!missing.length) return;
  const target = $('#results');
  target.dataset.hydrating = 'true';
  try {
    const enriched = await API.galleryPhotos(missing, lang);
    if (token !== epoch) return;
    for (const taxon of enriched) {
      if (!photosOf(taxon).length) continue;
      const card = $(`[data-taxon="${Number(taxon.id)}"]`);
      if (card) card.outerHTML = visualCard(taxon);
    }
    bindImageFallbacks($('#main'));
  } catch {
    /* Existing honest no-photo states remain usable. */
  } finally {
    if (target.isConnected) target.dataset.hydrating = 'false';
  }
}
async function hydrateIndex(query, token) {
  try {
    const response = await API.visual(query, 1, 'all', lang, 100);
    if (token !== epoch) return;
    const matches = new Map((response.results || []).map(x => [x.name.toLowerCase(), x]));
    document.querySelectorAll('.taxon-card').forEach(card => {
      const x = matches.get(card.dataset.scientific.toLowerCase()),
        photo = photosOf(x)[0];
      if (!photo) return;
      const frame = document.createElement('div');
      frame.className = 'media-frame index-photo';
      frame.innerHTML = photoMarkup(photo, x.name);
      card.prepend(frame);
      card.classList.add('has-photo');
    });
    bindImageFallbacks($('#main'));
  } catch {
    /* The GBIF index never depends on the photo provider. */
  }
}

function sourceDescription(d) {
  const language =
    d.language === 'ind' || d.language === 'id'
      ? 'id'
      : d.language === 'eng' || d.language === 'en'
        ? 'en'
        : '';
  const text = plain(d.description);
  const excerpt = text.length > 650 ? text.slice(0, 650) + '…' : text;
  return `<p class="prose" ${language ? `lang="${language}"` : ''}>${esc(excerpt)}</p>${text.length > 650 ? `<details><summary>${t.expand}</summary><p class="prose" ${language ? `lang="${language}"` : ''}>${esc(text)}</p></details>` : ''}<small class="source-meta">${t.sourceLanguage}: ${esc(d.language || t.unknown)} · ${d.sourceTaxonKey ? link(`https://www.gbif.org/species/${d.sourceTaxonKey}`, d.source || 'GBIF') : esc(d.source || 'GBIF')}</small>`;
}
function descriptionsFor(data, pattern) {
  return (data.descriptions?.results || [])
    .filter(d => pattern.test(d.type || ''))
    .sort(
      (a, b) =>
        Number(['id', 'ind'].includes(b.language) === (lang === 'id')) -
        Number(['id', 'ind'].includes(a.language) === (lang === 'id'))
    )
    .slice(0, 3);
}
function trait(data, title, pattern) {
  const found = descriptionsFor(data, pattern);
  return `<article class="card"><h3>${title}</h3>${found.length ? found.map(sourceDescription).join('') : `<p class="muted">${t.noTrait}</p>`}</article>`;
}
function worksheet(name, key) {
  return `<section class="worksheet">${brandImage('worksheet-brand')}<span class="eyebrow">${t.guide}</span><h2>${t.worksheet} · <em>${esc(name)}</em></h2><p>${t.worksheetIntro}</p><ol>${t.questions.map(q => `<li>${q}</li>`).join('')}</ol><label for="study-notes">${t.notes}</label><textarea id="study-notes" data-note-key="species-${key}" placeholder="${t.notesHint}"></textarea><small>${t.notePrivacy}</small><div class="actions"><button class="btn secondary" data-print>${t.print} ↗</button></div></section>`;
}
async function species(id, token) {
  if (!/^(inat-)?\d+$/.test(id || '')) {
    location.hash = '#/search';
    return;
  }
  $('#main').innerHTML = crumbs() + loading();
  const seed = await API.seed(id, lang);
  if (token !== epoch) return;
  if (seed.taxon.rank !== 'SPECIES') {
    location.hash = String(id).startsWith('inat-')
      ? routeURL('search', { q: taxonName(seed.taxon) })
      : `#/tree/${seed.taxon.acceptedKey || seed.taxon.key}`;
    return;
  }
  currentDetails = seed;
  renderSpecies(seed, false);
  try {
    const enriched = await API.enrich(seed, lang);
    if (token !== epoch) return;
    currentDetails = enriched;
    renderSpecies(enriched, true);
    const wiki = await API.wikipedia(
      taxonName(enriched.taxon),
      enriched.photo?.taxon?.wikipedia_url,
      lang
    ).catch(() => null);
    if (token !== epoch) return;
    currentDetails.wiki = wiki;
    const node = $('#wiki-summary');
    if (node) node.innerHTML = wikiHTML(wiki);
    $('#dossier-status')?.remove();
  } catch (e) {
    if (token !== epoch) return;
    const status = $('#dossier-status');
    if (status) status.innerHTML = `${t.loadFailed} <button class="chip" data-retry>${t.retry}</button>`;
  }
}
function wikiHTML(wiki) {
  return wiki
    ? `<p class="prose wiki-text" lang="${wiki.language}">${esc(wiki.extract)}</p><p class="source-meta">Wikipedia · ${wiki.language.toUpperCase()} · ${link(wiki.content_urls?.desktop?.page || `https://${wiki.language}.wikipedia.org/wiki/${encodeURIComponent(wiki.title)}`, t.read)}</p>${wiki.language !== lang ? `<p class="notice">${t.noTranslation}</p>` : ''}`
    : `<p class="muted">${t.noWiki}</p>`;
}
function galleryStage(photo, name, index = 0) {
  return `<button class="gallery-stage ${photo ? '' : 'no-photo'}" ${photo ? `data-photo="${index}" aria-label="${t.enlarge}: ${esc(name)}"` : 'disabled'}>${photo ? photoMarkup(photo, name, { hero: true }) : `<div class="photo-placeholder"><span aria-hidden="true">◎</span><small>${t.imageMissing}</small></div>`}<span class="image-error-text">${t.imageFailed}</span>${photo ? `<span class="enlarge-icon" aria-hidden="true">⤢</span>` : ''}</button>`;
}
function renderSpecies(data, complete) {
  if (mapView) {
    mapView.destroy();
    mapView = null;
  }
  mapHost = null;
  const x = data.taxon;
  currentTaxon = x;
  const name = taxonName(x),
    domain = domainOf(x),
    names = commonNames(data),
    photos = data.photo?.photos || [];
  const primary = data.photo?.taxon?.preferred_common_name || names[lang][0] || name;
  const rankNodes = [...(data.parents || []), x],
    gbif = data.gbifKey || (!String(x.key).startsWith('inat-') ? x.key : null);
  const classification = ranks
    .map(rank => {
      const node = rankNodes.find(n => n.rank === rank.toUpperCase());
      return `<li><span>${t[rank]}</span>${rank === 'domain' ? (domain ? `<a href="#/tree/${domain}">${domain}</a>` : t.unknown) : node ? `<a href="${taxonURL(node)}">${esc(taxonName(node))}</a>` : t.unknown}</li>`;
    })
    .join('');
  const overview = descriptionsFor(data, /general|overview|summary|description/i);
  const status = data.photo?.taxon?.conservation_status;
  const traits = [
    ['habitat', /habitat|ecology/i],
    ['diet', /diet|feeding|trophic|food/i],
    ['morphology', /morphology|diagnos|adaptation|description/i],
    ['reproduction', /reproduction|life.?cycle|breeding/i],
    ['measurements', /size|measurement|lifespan|longevity|description/i],
    ['evolutionary', /evolution|phylogeny|relationship/i],
  ];
  const available = traits.filter(([, pattern]) => descriptionsFor(data, pattern).length),
    missing = traits.filter(([, pattern]) => !descriptionsFor(data, pattern).length);
  const tabs = [
    ['overview', t.overviewTab],
    ['facts', t.factsTab],
    ['map', t.mapTab],
    ['photos', `${t.photoTab} (${photos.length})`],
    ['study', t.studyTab],
  ];
  $('#main').innerHTML =
    `<div class="detail-topbar"><a href="#/search">← ${t.returnSearch}</a><span>${esc(domain || x.kingdom || t.species)} / ${esc(x.kingdom || '')}</span><span class="live-label"><i class="live-dot"></i>${x.source || 'GBIF'}</span></div><section class="species-hero new-species-hero"><div class="species-visual">${galleryStage(photos[0], name)}${
      photos.length
        ? `<div class="photo-strip">${photos
            .slice(0, 4)
            .map(
              (p, i) =>
                `<button data-photo="${i}" aria-label="${t.enlarge} ${i + 1}"><img src="${esc(p.medium)}" alt="${esc(name)} ${i + 1}" loading="lazy" width="100" height="75"></button>`
            )
            .join(
              ''
            )}<button class="more-photos" data-panel-button="photos">+ ${photos.length}<small>${t.photoCount}</small></button></div>`
        : ''
    }</div><div class="species-intro"><span class="eyebrow">${t.species.toUpperCase()} / ${esc(x.kingdom || 'LIFE')}</span><h1>${esc(name)}</h1>${primary !== name ? `<h2 class="common-title">${esc(primary)}</h2>` : ''}${x.nameType === 'INFORMAL' ? `<div class="notice">${t.informalNote}</div>` : ''}<dl class="names"><div><dt>${t.indonesian}</dt><dd>${esc(names.id.join(' · ') || t.namesMissing)}</dd></div><div><dt>${t.english}</dt><dd>${esc(names.en.join(' · ') || t.namesMissing)}</dd></div></dl><div class="specimen-tags">${domain ? `<a class="tag" href="#/tree/${domain}">${domain}</a>` : ''}<span class="tag">${esc(x.taxonomicStatus === 'ACCEPTED' ? t.accepted : x.taxonomicStatus || t.species)}</span>${status ? `<span class="tag conservation-tag">${esc(status.status?.toUpperCase())} · ${esc(status.authority || 'iNaturalist')}</span>` : ''}</div><div class="actions"><button class="btn" data-save="${esc(x.key)}">${collection.some(s => String(s.key) === String(x.key)) ? '✓ ' + t.unsave : '＋ ' + t.save}</button><button class="btn secondary" data-panel-button="map">⌖ ${t.mapTab}</button></div><p class="source-meta">${t.fetched}: ${new Date(data.accessed).toLocaleDateString(lang)} · ${esc(x.authorship || x.source || 'GBIF Backbone')}</p></div></section>
 <nav class="dossier-tabs" role="tablist" aria-label="${t.tabNav}">${tabs.map(([id, title]) => `<button id="tab-${id}" role="tab" aria-controls="panel-${id}" aria-selected="${activePanel === id}" tabindex="${activePanel === id ? '0' : '-1'}" data-panel-button="${id}">${title}</button>`).join('')}</nav>
 <div id="dossier-status" class="inline-status" role="status">${t.loadingDetails}</div>
 <section id="panel-overview" class="dossier-panel" data-panel="overview" role="tabpanel" aria-labelledby="tab-overview"><div class="detail-grid"><div class="detail-body"><article class="overview-card"><span class="eyebrow">FIELD NOTES / 01</span><h2>${t.overview}</h2><div id="wiki-summary">${data.wiki ? wikiHTML(data.wiki) : `<p class="muted">${complete ? t.loadingDetails : t.loading}</p>`}</div>${overview.slice(0, 1).map(sourceDescription).join('')}</article><div class="overview-invites"><button class="card invitation" data-panel-button="map"><span aria-hidden="true">⌖</span><div><h3>${t.atlasTitle}</h3><p>${t.onlineMap}</p></div><b>↗</b></button><button class="card invitation" data-panel-button="study"><span aria-hidden="true">✎</span><div><h3>${t.worksheet}</h3><p>${t.teachers}</p></div><b>↗</b></button></div><details class="source-disclosure"><summary>${t.recordSources}</summary><p>${t.updatedNote}</p>${x.source === 'iNaturalist' ? `<p>${gbif ? t.exactJoin : t.noJoin}</p>` : ''}<ul class="source-list">${gbif ? `<li>${link(`https://www.gbif.org/species/${gbif}`, 'GBIF · ' + name)}</li>` : ''}${data.photo?.taxon ? `<li>${link(`https://www.inaturalist.org/taxa/${data.photo.taxon.id}`, 'iNaturalist')}</li>` : ''}<li>${link(`https://${lang}.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(name)}`, 'Wikipedia')}</li></ul>${data.failed?.length ? `<p>${t.partial}</p>` : ''}</details></div><aside class="taxonomy-aside"><span class="eyebrow">${t.taxonomy}</span><ol class="taxonomy-list">${classification}</ol><small>${t.treeNote}</small></aside></div></section>
 <section id="panel-facts" class="dossier-panel" data-panel="facts" role="tabpanel" aria-labelledby="tab-facts" hidden><div class="section-head"><h2>${t.availableData}</h2><span class="source-meta">${t.updatedNote}</span></div>${available.length ? `<div class="trait-grid">${available.map(([key, p]) => trait(data, t[key], p)).join('')}</div>` : ''}${missing.length ? `<div class="missing-data"><h3>${t.stillLearning}</h3><p>${t.noTrait}</p><div class="specimen-tags">${missing.map(([key]) => `<span class="tag">${t[key]}</span>`).join('')}</div></div>` : ''}<section class="card"><h3>${t.conservation}</h3>${status ? `<p>${esc(status.status?.toUpperCase())} — ${esc(status.status_name || '')}</p><small>${esc(status.authority || 'iNaturalist')} · ${link(`https://www.inaturalist.org/taxa/${data.photo.taxon.id}`, t.read)}</small>` : `<p class="muted">${t.unknown}</p>`}</section></section>
 <section id="panel-map" class="dossier-panel" data-panel="map" role="tabpanel" aria-labelledby="tab-map" hidden><div class="section-head"><div><span class="eyebrow">FIELD ATLAS / 02</span><h2>${t.atlasTitle}</h2><p>${t.atlasIntro}</p></div><button class="btn secondary" data-map-retry>${t.mapRetry}</button></div><div id="occurrence-map" class="occurrence-map"></div><div id="occurrence-table"></div><details class="source-disclosure"><summary>${t.distribution} · ${t.sourceRecords}</summary><p>${t.distributionNote}</p>${
   data.distributions?.results?.length
     ? `<ul>${data.distributions.results
         .slice(0, 20)
         .map(
           d =>
             `<li>${esc(d.locality || d.country || t.unknown)}${d.status ? ' · ' + esc(d.status) : ''}<small> — ${esc(d.source || 'GBIF')}</small></li>`
         )
         .join('')}</ul>`
     : `<p>${t.unknown}</p>`
 }</details></section>
 <section id="panel-photos" class="dossier-panel" data-panel="photos" role="tabpanel" aria-labelledby="tab-photos" hidden><div class="section-head"><h2>${t.photoTab} · ${photos.length}</h2><p>${t.allPhotos}</p></div>${photos.length ? `<div class="photo-gallery">${photos.map((p, i) => `<figure>${galleryStage(p, name, i)}<figcaption>${esc(p.attribution)} · ${link(p.source, p.license.toUpperCase())}</figcaption></figure>`).join('')}</div>` : empty(t.imageMissing)}</section>
 <section id="panel-study" class="dossier-panel" data-panel="study" role="tabpanel" aria-labelledby="tab-study" hidden>${worksheet(name, x.key)}</section><dialog id="photo-dialog" class="photo-dialog"><button class="dialog-close" data-close-dialog aria-label="${t.close}">×</button><div id="dialog-photo"></div></dialog>`;
  bindImageFallbacks($('#main'));
  restoreDrafts();
  showPanel(activePanel);
}
function showPanel(panel) {
  if (!['overview', 'facts', 'map', 'photos', 'study'].includes(panel)) return;
  activePanel = panel;
  document.querySelectorAll('[data-panel]').forEach(node => {
    node.hidden = node.dataset.panel !== panel;
  });
  document.querySelectorAll('[role=tab]').forEach(node => {
    const selected = node.dataset.panelButton === panel;
    node.setAttribute('aria-selected', String(selected));
    node.tabIndex = selected ? 0 : -1;
  });
  if (panel === 'map' && currentDetails) loadOccurrenceMap(currentDetails, epoch);
}
async function loadOccurrenceMap(data, token, force = false) {
  const host = $('#occurrence-map');
  if (!host) return;
  if (mapHost === host && !force) return;
  if (mapView) {
    mapView.destroy();
    mapView = null;
  }
  mapHost = host;
  const view = await createOccurrenceMap(host, lang).catch(() => null);
  if (token !== epoch || !host.isConnected || mapHost !== host) {
    view?.destroy();
    return;
  }
  mapView = view;
  if (!view) {
    host.innerHTML = `<div class="notice">${t.loadFailed}</div>`;
    return;
  }
  try {
    const records = await API.occurrences(data);
    if (token !== epoch || !host.isConnected || mapView !== view) return;
    view.update(records);
    $('#occurrence-table').innerHTML = records.results?.length
      ? `<details class="source-disclosure"><summary>${t.occurrences} · ${t.sourceRecords}</summary><div class="table-wrap"><table><thead><tr><th>${t.distribution}</th><th>${lang === 'id' ? 'Tanggal' : 'Date'}</th><th>${t.sources}</th></tr></thead><tbody>${records.results
          .slice(0, 12)
          .map(
            p =>
              `<tr><td>${esc(p.country || t.unknown)}</td><td>${esc(p.eventDate || t.unknown)}</td><td>${link(records.provider === 'iNaturalist' ? `https://www.inaturalist.org/observations/${Number(p.key)}` : `https://www.gbif.org/occurrence/${Number(p.key)}`, records.provider + ' #' + p.key)}</td></tr>`
          )
          .join('')}</tbody></table></div></details>`
      : '';
  } catch {
    if (token === epoch && mapView === view) view.error();
  }
}
function openPhoto(index) {
  const photo = currentDetails?.photo?.photos?.[index],
    dialog = $('#photo-dialog');
  if (!photo || !dialog) return;
  $('#dialog-photo').innerHTML =
    `<img src="${esc(photo.large)}" data-fallback="${esc(photo.medium)}" alt="${esc(taxonName(currentTaxon))}"><p>${esc(photo.attribution)} · ${link(photo.source, photo.license.toUpperCase())}</p>`;
  bindImageFallbacks(dialog);
  dialog.showModal();
}
function saved() {
  return (
    head(t.savedTitle, t.savedText) +
    (collection.length
      ? `<div class="taxon-grid">${collection.map(s => card({ key: s.key, canonicalName: s.name, rank: 'SPECIES' })).join('')}</div>`
      : empty(t.savedEmpty))
  );
}
function about() {
  return (
    head(t.aboutTitle, t.aboutText) +
    `<div class="grid">${[
      ['GBIF', t.gbif, 'https://techdocs.gbif.org/en/openapi/v1/species'],
      ['iNaturalist', t.inat, 'https://www.inaturalist.org/pages/taxonomy'],
      ['Wikipedia', t.wiki, 'https://www.mediawiki.org/wiki/API:Main_page'],
    ]
      .map(([h, p, u]) => `<article class="card"><h3>${h}</h3><p>${p}</p>${link(u, t.read)}</article>`)
      .join(
        ''
      )}</div><section class="section"><h2>${t.limits}</h2><p>${t.limitsText}</p><div class="notice">${t.domainCaveat}</div><ul class="source-list"><li>${link('https://doi.org/10.1073/pnas.87.12.4576', 'Woese, Kandler & Wheelis (1990) · Three domains')}</li><li>${link('https://doi.org/10.1038/nature12779', 'Williams et al. (2013) · An archaeal origin of eukaryotes supports only two primary domains of life')}</li><li>${link('https://doi.org/10.1371/journal.pone.0078955', 'van der Meijden et al. (2013) · Scorpion morphology and defensive performance')}</li></ul></section>`
  );
}
function control(id, label, min, max, value, step = 1) {
  return `<div class="control"><label for="${id}">${label}<output for="${id}" id="${id}-value">${value}</output></label><input type="range" id="${id}" min="${min}" max="${max}" value="${value}" step="${step}"></div>`;
}
function lab() {
  $('#main').innerHTML =
    head(t.labTitle, t.labIntro) +
    `<div class="lab-tabs" role="group" aria-label="${t.lab}">${['claw', 'food', 'osmosis'].map(m => `<button data-lab="${m}" class="${labMode === m ? 'active' : ''}" aria-pressed="${labMode === m}">${t[m]}</button>`).join('')}</div><section class="lab-grid"><div class="card"><span class="eyebrow">${t.model}</span><h2>${t[labMode]}</h2>${labMode === 'claw' ? control('force', t.force, 1, 20, 10) + control('armIn', t.armIn, 1, 20, 5) + control('armOut', t.armOut, 1, 40, 10) : labMode === 'food' ? control('energy', t.energy, 100, 10000, 1000, 100) + control('efficiency', t.efficiency, 1, 30, 10) : control('inside', t.inside, 0, 10, 3, 0.5) + control('outside', t.outside, 0, 10, 1, 0.5)}<div id="lab-output" aria-live="polite"></div></div><div class="card"><h3>${labMode === 'claw' ? t.venom : t.hypothesis}</h3><p>${labMode === 'claw' ? t.venomText : labMode === 'food' ? t.energyText : t.osmosisText}</p>${labMode === 'claw' ? `<p>${link('https://doi.org/10.1371/journal.pone.0078955', t.read)}</p><div class="notice">${t.labSafe}</div><h3>${t.hypothesis}</h3><p>${t.clawQuestion}</p><div class="chips"><a class="chip" href="${routeURL('search', { q: 'Pandinus imperator' })}">Pandinus imperator ↗</a><a class="chip" href="${routeURL('search', { q: 'Leiurus quinquestriatus' })}">Leiurus quinquestriatus ↗</a></div>` : ''}<label for="prediction">${t.predictions}</label><textarea id="prediction" data-note-key="lab-${labMode}" placeholder="${t.notesHint}"></textarea></div></section><section class="worksheet">${brandImage('worksheet-brand')}<h2>${t.log}</h2><p>${t.logIntro}</p><div class="actions"><button class="btn" data-record>${t.record}</button><button class="btn secondary" data-clear>${t.clear}</button><button class="btn secondary" data-print>${t.print}</button></div><div id="experiment-log"></div><small>${t.notePrivacy}</small></section>`;
  Object.entries(labState[labMode] || {}).forEach(([key, value]) => {
    const input = $(`#${key}`);
    if (input) input.value = value;
  });
  updateLab();
  renderLog();
  restoreDrafts();
}
function labValues() {
  return Object.fromEntries(
    [...document.querySelectorAll('.control input')].map(i => [i.id, Number(i.value)])
  );
}
function resultFor(v, mode = labMode) {
  if (mode === 'claw') return (v.force * v.armIn) / v.armOut;
  if (mode === 'food')
    return [
      v.energy,
      (v.energy * v.efficiency) / 100,
      v.energy * (v.efficiency / 100) ** 2,
      v.energy * (v.efficiency / 100) ** 3,
    ];
  return v.inside > v.outside ? 'inward' : v.inside < v.outside ? 'outward' : 'balanced';
}
function updateLab() {
  const v = labValues(),
    result = resultFor(v);
  labState[labMode] = v;
  Object.entries(v).forEach(([k, val]) => {
    const out = $(`#${k}-value`);
    if (out) out.textContent = format(val);
  });
  $('#lab-output').innerHTML =
    labMode === 'claw'
      ? `<div class="lab-result"><span>${t.output}</span><strong>${format(Number(result.toFixed(2)))} N</strong></div><p class="source-meta">${t.lever}</p>`
      : labMode === 'food'
        ? result
            .map(
              (n, i) =>
                `<div class="bar-row"><span>${t[['producer', 'primary', 'secondary', 'tertiary'][i]]}</span><div class="bar-track"><div class="bar-fill" style="width:${(n / v.energy) * 100}%"></div></div><strong>${format(Number(n.toFixed(3)))}</strong></div>`
            )
            .join('')
        : `<div class="lab-result"><div class="cell" aria-hidden="true">${result === 'inward' ? '→○←' : result === 'outward' ? '←○→' : '⇄'}</div><span>${t[result]}</span></div>`;
}
function renderLog() {
  if (!$('#experiment-log')) return;
  $('#experiment-log').innerHTML = experiments.length
    ? `<div class="table-wrap"><table><thead><tr><th>#</th><th>${t.model}</th><th>${t.record}</th><th>${t.predictions}</th></tr></thead><tbody>${experiments
        .map(
          (e, i) =>
            `<tr><td>${i + 1}</td><td>${t[e.mode]}<br>${Object.entries(e.values)
              .map(([k, v]) => `${t[k]}: ${format(v)}`)
              .join(
                '<br>'
              )}</td><td>${Array.isArray(e.result) ? e.result.map(n => format(Number(n.toFixed(3)))).join(' → ') : typeof e.result === 'number' ? format(Number(e.result.toFixed(2))) + ' N' : t[e.result]}</td><td>${esc(e.note)}</td></tr>`
        )
        .join('')}</tbody></table></div>`
    : '';
}
async function render() {
  const token = ++epoch;
  currentTaxon = null;
  currentDetails = null;
  if (mapView) {
    mapView.destroy();
    mapView = null;
  }
  mapHost = null;
  const [raw, query = ''] = (location.hash.slice(1) || '/home').split('?');
  const [page = 'home', id] = raw.replace(/^\//, '').split('/');
  const params = new URLSearchParams(query);
  if (location.hash !== lastRoute) {
    activePanel = params.get('tab') || 'overview';
    lastRoute = location.hash;
  }
  shell(page);
  try {
    if (page === 'tree') await tree(id, params, token);
    else if (page === 'search') await search(params, token);
    else if (page === 'species') await species(id, token);
    else if (page === 'lab') lab();
    else $('#main').innerHTML = page === 'saved' ? saved() : page === 'about' ? about() : home();
  } catch (e) {
    if (token === epoch) {
      const target = page === 'search' && $('#results') ? $('#results') : $('#main');
      target.innerHTML = error();
    }
    console.warn('BioTaxa source request failed:', e.message);
  }
  if (token === epoch) {
    restoreDrafts();
    bindImageFallbacks($('#main'));
  }
}
function restoreDrafts() {
  document.querySelectorAll('textarea[data-note-key]').forEach(area => {
    area.value = drafts.get(area.dataset.noteKey) || '';
  });
}
function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('show');
  setTimeout(() => $('#toast').classList.remove('show'), 3500);
}
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.lang) {
    lang = button.dataset.lang;
    t = copy[lang];
    try {
      localStorage.setItem('biotaxa-language', JSON.stringify(lang));
    } catch {}
    render();
  }
  if (button.hasAttribute('data-retry')) render();
  if (button.dataset.panelButton) showPanel(button.dataset.panelButton);
  if (button.hasAttribute('data-map-retry') && currentDetails) loadOccurrenceMap(currentDetails, epoch, true);
  if (button.hasAttribute('data-photo')) openPhoto(Number(button.dataset.photo));
  if (button.hasAttribute('data-close-dialog')) $('#photo-dialog')?.close();
  if (button.dataset.lab) {
    labMode = button.dataset.lab;
    lab();
  }
  if (button.hasAttribute('data-record')) {
    experiments.push({
      mode: labMode,
      values: labValues(),
      result: resultFor(labValues()),
      note: $('#prediction').value.slice(0, 5000),
    });
    if (experiments.length > 50) experiments.shift();
    renderLog();
  }
  if (button.hasAttribute('data-clear')) {
    experiments = [];
    renderLog();
  }
  if (button.hasAttribute('data-print')) {
    document.querySelectorAll('.print-only').forEach(n => n.remove());
    document.querySelectorAll('textarea').forEach(area => {
      const p = document.createElement('p');
      p.className = 'print-only';
      p.textContent = area.value || '\n\n\n';
      area.after(p);
    });
    window.print();
  }
  if (button.dataset.save && currentTaxon) {
    const key = currentTaxon.key;
    const next = collection.some(s => String(s.key) === String(key))
      ? collection.filter(s => String(s.key) !== String(key))
      : [...collection, { key, name: taxonName(currentTaxon) }].slice(-200);
    try {
      localStorage.setItem('biotaxa-collection', JSON.stringify(next));
      collection = next;
      button.textContent = collection.some(s => String(s.key) === String(key))
        ? '✓ ' + t.unsave
        : '＋ ' + t.save;
      toast(t.savedToast);
    } catch {
      toast(t.storageFail);
    }
  }
});
document.addEventListener('submit', event => {
  if (['search-form', 'hero-search'].includes(event.target.id)) {
    event.preventDefault();
    const values = new FormData(event.target);
    const q = String(values.get('q') || '').trim();
    const hash = routeURL('search', {
      q,
      source: values.get('source') || 'visual',
      group: values.get('group') || 'all',
      kingdom: values.get('kingdom') || '',
    });
    if (location.hash === hash) render();
    else location.hash = hash;
  }
});
document.addEventListener('keydown', event => {
  if (event.target.matches('[role=tab]') && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const tabs = [...document.querySelectorAll('[role=tab]')],
      i = tabs.indexOf(event.target);
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    showPanel(tabs[next].dataset.panelButton);
  }
});
document.addEventListener('input', event => {
  if (event.target.matches('.control input')) updateLab();
  if (event.target.dataset.noteKey) drafts.set(event.target.dataset.noteKey, event.target.value);
});
window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  render();
  $('#main').focus({ preventScroll: true });
});
render();
