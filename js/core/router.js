// Hash router with lazily loaded pages. Every navigation gets a token so that late
// responses from a previous page can never overwrite the current one.
import { $ } from './dom.js';

const pages = {
  home: () => import('../pages/home.js'),
  search: () => import('../pages/explore.js'),
  tree: () => import('../pages/tree.js'),
  species: () => import('../pages/species.js'),
  learn: () => import('../pages/learn.js'),
  lab: () => import('../pages/lab.js'),
  quiz: () => import('../pages/quiz.js'),
  compare: () => import('../pages/compare.js'),
  nearby: () => import('../pages/nearby.js'),
  purba: () => import('../pages/prehistoric.js'),
  kamus: () => import('../pages/glossary.js'),
  saved: () => import('../pages/saved.js'),
  guru: () => import('../pages/teacher.js'),
  tugas: () => import('../pages/assignment.js'),
  about: () => import('../pages/about.js'),
  dukung: () => import('../pages/support.js'),
};

let epoch = 0;
let cleanups = [];
const scoped = [];
const hooks = { before: () => {}, after: () => {}, error: () => {} };

export const isCurrent = token => token === epoch;
export function configureRouter(options) {
  Object.assign(hooks, options);
}

export function parseRoute(hash = location.hash) {
  const body = hash.slice(1) || '/home';
  // An in-page anchor may follow the route: #/about#privasi
  const anchorAt = body.indexOf('#');
  const route = anchorAt >= 0 ? body.slice(0, anchorAt) : body;
  const anchor = anchorAt >= 0 ? body.slice(anchorAt + 1) : '';
  const [raw, query = ''] = route.split('?');
  const [page = 'home', ...rest] = raw.replace(/^\//, '').split('/');
  let id;
  try {
    id = rest.length ? decodeURIComponent(rest.join('/')) : undefined;
  } catch {
    id = rest.join('/');
  }
  return { page: page || 'home', id, params: new URLSearchParams(query), anchor };
}

/** Event handlers that live only while the current page is shown. */
function on(type, selector, fn) {
  scoped.push({ type, selector, fn });
}
function dispatch(event) {
  for (const h of [...scoped]) {
    if (h.type !== event.type) continue;
    const target = event.target instanceof Element ? event.target.closest(h.selector) : null;
    if (target) h.fn(event, target);
  }
}
['click', 'input', 'change', 'submit', 'keydown', 'suggest-pick'].forEach(type =>
  document.addEventListener(type, dispatch)
);
document.addEventListener('toggle', dispatch, true);

export async function render() {
  const token = ++epoch;
  cleanups.forEach(fn => {
    try {
      fn();
    } catch {
      /* ignore cleanup errors */
    }
  });
  cleanups = [];
  scoped.length = 0;
  const route = parseRoute();
  const main = $('#main');
  const known = pages[route.page];
  hooks.before(route);
  if (!known) {
    main.innerHTML = '';
    hooks.error(route, null, true);
    return;
  }
  try {
    const mod = await known();
    if (token !== epoch) return;
    main.dataset.page = route.page;
    await mod.render({
      ...route,
      main,
      token,
      isCurrent: () => token === epoch,
      on,
      cleanup: fn => cleanups.push(fn),
    });
    if (token !== epoch) return;
    document.title = `${mod.title ? mod.title(route) : 'BioTaxa'} · BioTaxa`;
    hooks.after(route, main);
  } catch (error) {
    if (token !== epoch) return;
    console.warn('BioTaxa render failed:', error);
    hooks.error(route, error, false);
  }
}
