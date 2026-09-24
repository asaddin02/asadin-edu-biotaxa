// Language, learning level and role. Exports are live bindings: importers always see current values.
import { read, write, KEYS } from './storage.js';

export const LANGS = ['id', 'en'];
export const LEVELS = ['sd', 'smp', 'sma', 'kuliah'];
export const ROLES = ['student', 'teacher'];

const storedLang = read(KEYS.lang, 'id');
const storedLevel = read(KEYS.level, null);
const storedRole = read(KEYS.role, 'student');

export let lang = LANGS.includes(storedLang) ? storedLang : 'id';
export let level = LEVELS.includes(storedLevel) ? storedLevel : 'smp';
export let role = ROLES.includes(storedRole) ? storedRole : 'student';
/** True once the visitor has chosen a level themselves. */
export let levelChosen = LEVELS.includes(storedLevel);

const listeners = new Set();
export function onPrefs(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function changed() {
  applyDocument();
  listeners.forEach(fn => fn());
}

export function setLang(value) {
  if (!LANGS.includes(value)) return;
  lang = value;
  write(KEYS.lang, value);
  changed();
}
export function setLevel(value) {
  if (!LEVELS.includes(value)) return;
  level = value;
  levelChosen = true;
  write(KEYS.level, value);
  changed();
}
export function setRole(value) {
  if (!ROLES.includes(value)) return;
  role = value;
  write(KEYS.role, value);
  changed();
}

/** Change several preferences with a single re-render. */
export function update({ lang: nextLang, level: nextLevel, role: nextRole } = {}) {
  let dirty = false;
  if (nextLang && LANGS.includes(nextLang) && nextLang !== lang) {
    lang = nextLang;
    write(KEYS.lang, nextLang);
    dirty = true;
  }
  if (nextLevel && LEVELS.includes(nextLevel) && (nextLevel !== level || !levelChosen)) {
    level = nextLevel;
    levelChosen = true;
    write(KEYS.level, nextLevel);
    dirty = true;
  }
  if (nextRole && ROLES.includes(nextRole) && nextRole !== role) {
    role = nextRole;
    write(KEYS.role, nextRole);
    dirty = true;
  }
  if (dirty) changed();
  return dirty;
}

export function applyDocument() {
  const root = document.documentElement;
  root.lang = lang;
  root.dataset.level = level;
  root.dataset.role = role;
}

export const atLeast = min => LEVELS.indexOf(level) >= LEVELS.indexOf(min);
export const atMost = max => LEVELS.indexOf(level) <= LEVELS.indexOf(max);

/** Choose the entry for the current level, falling back to the nearest level that exists. */
export function byLevel(map) {
  if (!map || typeof map !== 'object') return map;
  if (map[level] !== undefined) return map[level];
  const i = LEVELS.indexOf(level);
  for (let d = 1; d < LEVELS.length; d++) {
    const lower = LEVELS[i - d];
    const higher = LEVELS[i + d];
    if (lower && map[lower] !== undefined) return map[lower];
    if (higher && map[higher] !== undefined) return map[higher];
  }
  return map.all;
}

const isLevelMap = v =>
  v && typeof v === 'object' && !Array.isArray(v) && (LEVELS.some(l => l in v) || 'all' in v);

/**
 * Resolve bilingual and level-specific values:
 *   ['Indonesia', 'English']           → by language
 *   {sd: [...], sma: [...]}            → by level, then language
 *   (lang, level) => string            → computed
 */
export function pick(value) {
  if (value == null) return '';
  if (typeof value === 'function') return value(lang, level);
  if (Array.isArray(value)) return value[lang === 'en' ? 1 : 0] ?? value[0];
  if (isLevelMap(value)) return pick(byLevel(value));
  return value;
}

/** A small string table: S({title: ['Judul', 'Title']}).title */
export function S(pairs) {
  return new Proxy(pairs, { get: (target, key) => pick(target[key]) });
}

export const locale = () => (lang === 'id' ? 'id-ID' : 'en-US');
export const fmt = (n, options) => Number(n || 0).toLocaleString(locale(), options);
export function fmtDate(value, options = { day: 'numeric', month: 'short', year: 'numeric' }) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString(locale(), options);
}
