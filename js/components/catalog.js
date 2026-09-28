import { esc } from '../core/dom.js';
import { S, pick, fmt } from '../core/prefs.js';
import { FIELDS } from '../data/topics/index.js';
import { normalize } from '../services/localsearch.js';
import { routeURL } from './common.js';
import { icon } from './icons.js';

const s = S({
  search: ['Cari materi', 'Find a lesson'],
  hint: ['Coba “sel”, “DNA”, atau “ekosistem”', 'Try “cell”, “DNA”, or “ecosystem”'],
  field: ['Bidang biologi', 'Field of biology'],
  all: ['Semua bidang', 'All fields'],
  reset: ['Atur ulang', 'Reset'],
  count: ['{n} dari {total} materi', '{n} of {total} lessons'],
  empty: ['Belum ada materi yang cocok', 'No matching lessons'],
  help: ['Coba kata lain atau pilih semua bidang.', 'Try another word or choose all fields.'],
});

export function catalogTools() {
  return `<div class="catalog-tools"><div class="catalog-search"><label for="catalog-q">${s.search}</label><div>${icon('search')}<input type="search" id="catalog-q" placeholder="${esc(s.hint)}" aria-controls="catalog-results"></div></div>
    <div><label for="catalog-field">${s.field}</label><select id="catalog-field" aria-controls="catalog-results"><option value="">${s.all}</option></select></div>
    <button type="button" class="btn ghost" data-catalog-reset>${s.reset}</button>
    <p class="catalog-count muted small" role="status" aria-live="polite" aria-atomic="true"></p></div>`;
}

export function catalogGroups(topics, card) {
  return `<div id="catalog-results">${FIELDS.map(f => {
    const list = topics.filter(t => t.field === f.id);
    if (!list.length) return '';
    return `<section class="field-group" id="bidang-${f.id}" aria-labelledby="bidang-${f.id}-title"><div class="field-head"><span class="field-icon" aria-hidden="true">${f.icon}</span><div><h3 id="bidang-${f.id}-title">${esc(pick(f.name))}</h3><p class="muted small">${esc(pick(f.desc))}</p></div></div><div class="topic-grid">${list.map(t => card(t)).join('')}</div></section>`;
  }).join(
    ''
  )}<div class="catalog-empty" hidden><span aria-hidden="true">${icon('search')}</span><h3>${s.empty}</h3><p>${s.help}</p><button type="button" class="btn secondary" data-catalog-reset>${s.reset}</button></div></div>`;
}

/** Filter in place so typing never loses focus; keep filters in the shareable URL. */
export function bindCatalog(ctx, topics) {
  const query = ctx.main.querySelector('#catalog-q');
  const field = ctx.main.querySelector('#catalog-field');
  field.insertAdjacentHTML(
    'beforeend',
    FIELDS.filter(f => topics.some(t => t.field === f.id))
      .map(f => `<option value="${f.id}">${esc(pick(f.name))}</option>`)
      .join('')
  );
  query.value = ctx.params.get('q') || '';
  field.value = ctx.params.get('field') || '';
  if (field.selectedIndex < 0) field.value = '';
  const entries = topics.map(t => ({
    topic: t,
    node: ctx.main.querySelector(`[data-topic="${t.id}"]`),
    text: normalize([...t.title, ...t.summary].join(' ')),
  }));
  const apply = (updateURL = true) => {
    const words = normalize(query.value).split(' ').filter(Boolean);
    let count = 0;
    for (const { topic, node, text } of entries) {
      const visible = (!field.value || topic.field === field.value) && words.every(w => text.includes(w));
      node.hidden = !visible;
      if (visible) count++;
    }
    ctx.main.querySelectorAll('.field-group').forEach(group => {
      group.hidden = !group.querySelector('[data-topic]:not([hidden])');
    });
    ctx.main.querySelector('.catalog-count').textContent = s.count
      .replace('{n}', fmt(count))
      .replace('{total}', fmt(topics.length));
    ctx.main.querySelector('.catalog-empty').hidden = count > 0;
    const params = Object.fromEntries(ctx.params);
    if (query.value.trim()) params.q = query.value.trim();
    else delete params.q;
    if (field.value) params.field = field.value;
    else delete params.field;
    if (updateURL) history.replaceState(null, '', routeURL(ctx.page, params));
    const scope = ctx.main.querySelector('[data-catalog-scope]');
    if (scope) {
      if (scope.dataset.catalogScope) params.all = scope.dataset.catalogScope;
      else delete params.all;
      scope.href = routeURL(ctx.page, params);
    }
  };
  ctx.on('input', '#catalog-q', () => apply());
  ctx.on('change', '#catalog-field', () => apply());
  ctx.on('click', '[data-catalog-reset]', () => {
    query.value = '';
    field.value = '';
    apply();
    query.focus();
  });
  apply(false);
}
