#!/usr/bin/env node
// Validates curated content so contributions stay complete and consistent.
//   npm run data:check                 → validate everything (exit code 1 on errors)
//   npm run data:check -- --resolve    → first fill in missing ids and photos for species entries
//                                        (network required), then validate the updated file
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const load = (path, query = '') => import(new URL(path, root).href + query);

if (process.argv.includes('--resolve')) await resolveSpecies();

const { SPECIES, GROUPS, DIETS, HABITATS } = await load('js/data/species.js');
const { GROUPS: TAXON_GROUPS } = await load('js/data/groups.js');
const { glossary } = await load('js/data/glossary.js');
const { TOPICS, PHASES } = await load('js/data/topics/index.js');
const { PREHISTORIC, PERIODS } = await load('js/data/prehistoric.js');

const errors = [];
const warnings = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);
const pair = v => Array.isArray(v) && v.length === 2 && v.every(x => typeof x === 'string' && x.trim());
const LEVELS = ['sd', 'smp', 'sma', 'kuliah'];

// Glossary
const termIds = new Set();
for (const g of glossary) {
  const where = `glossary/${g.id}`;
  if (!/^[a-z][a-z -]*$/.test(g.id)) fail(where, 'id must be lowercase words');
  if (termIds.has(g.id)) fail(where, 'duplicate id');
  termIds.add(g.id);
  (g.aliases || []).forEach(a => termIds.add(a.toLowerCase()));
  if (!pair(g.term)) fail(where, 'term must be [id, en]');
  if (!pair(g.def)) fail(where, 'def must be [id, en]');
  if (g.adv && !pair(g.adv)) fail(where, 'adv must be [id, en]');
  if (g.topic && !TOPICS.some(t => t.id === g.topic)) fail(where, `unknown topic "${g.topic}"`);
}
function checkTerms(where, text) {
  for (const m of String(text).matchAll(/\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]/g)) {
    if (!termIds.has(m[1].trim().toLowerCase())) fail(where, `unknown glossary term [[${m[1]}]]`);
  }
}

// Species
const ids = new Set();
const scis = new Set();
for (const s of SPECIES) {
  const where = `species/${s.sci}`;
  if (!/^(inat-\d+|\d+)$/.test(String(s.id))) fail(where, 'id must be "inat-<n>" or a GBIF key');
  if (ids.has(s.id)) fail(where, `duplicate id ${s.id}`);
  if (scis.has(s.sci)) fail(where, 'duplicate scientific name');
  ids.add(s.id);
  scis.add(s.sci);
  if (!GROUPS[s.g]) fail(where, `unknown group "${s.g}"`);
  if (!DIETS[s.diet]) fail(where, `unknown diet "${s.diet}"`);
  if (!Array.isArray(s.hab) || !s.hab.length || s.hab.some(h => !HABITATS[h]))
    fail(where, 'hab must list known habitats');
  for (const key of ['name', 'about', 'food', 'home', 'fun']) {
    if (!pair(s[key])) fail(where, `${key} must be [id, en]`);
    else s[key].forEach(t => checkTerms(`${where}.${key}`, t));
  }
  for (const key of ['size', 'life']) if (s[key] && !pair(s[key])) fail(where, `${key} must be [id, en]`);
  if (s.photo && !/^https:\/\//.test(s.photo.url || '')) fail(where, 'photo.url must be https');
  if (s.photo && !s.photo.license) fail(where, 'photo.license is required');
  if (!s.photo) warnings.push(`${where}: no photo`);
  if (!s.inat && !s.gbif) fail(where, 'needs an inat or gbif identifier (run with --resolve)');
}

// Higher groups
for (const [name, g] of Object.entries(TAXON_GROUPS)) {
  if (!pair(g.name) || !pair(g.desc)) fail(`groups/${name}`, 'name and desc must be [id, en]');
  if (typeof g.p !== 'number') fail(`groups/${name}`, 'p (priority) must be a number');
}

// Topics
const topicIds = new Set();
for (const t of TOPICS) {
  const where = `topics/${t.id}`;
  if (topicIds.has(t.id)) fail(where, 'duplicate id');
  topicIds.add(t.id);
  if (!pair(t.title) || !pair(t.summary)) fail(where, 'title and summary must be [id, en]');
  if (!t.levels?.length || t.levels.some(l => !LEVELS.includes(l)))
    fail(where, 'levels must list sd/smp/sma/kuliah');
  for (const l of t.levels)
    if (!t.body[l]) warnings.push(`${where}: no body text for recommended level ${l}`);
  for (const [l, v] of Object.entries(t.body)) {
    if (!LEVELS.includes(l)) fail(where, `unknown body level ${l}`);
    if (!pair(v)) fail(where, `body.${l} must be [id, en]`);
    else v.forEach(x => checkTerms(`${where}.body.${l}`, x));
  }
  for (const sci of t.species || []) if (!scis.has(sci)) fail(where, `species "${sci}" has no curated card`);
  if (!Array.isArray(t.quiz) || t.quiz.length < 4) fail(where, 'needs at least 4 quiz questions');
  t.quiz.forEach((q, i) => {
    if (
      !pair(q.q) ||
      !Array.isArray(q.a) ||
      q.a.length < 3 ||
      !q.a.every(pair) ||
      !(q.c >= 0 && q.c < q.a.length)
    )
      fail(`${where}.quiz[${i}]`, 'invalid question');
    if (q.lv && q.lv.some(l => !LEVELS.includes(l))) fail(`${where}.quiz[${i}]`, 'unknown level');
  });
  for (const r of t.read || [])
    if (!/^https:\/\//.test(r.url)) fail(where, `reading link must be https: ${r.url}`);
}
if (Object.keys(PHASES).some(l => !LEVELS.includes(l))) fail('topics/PHASES', 'unknown level');

// Prehistoric
for (const x of PREHISTORIC) {
  const where = `prehistoric/${x.id}`;
  for (const key of ['name', 'group', 'desc', 'found'])
    if (!pair(x[key])) fail(where, `${key} must be [id, en]`);
  if (!PERIODS.some(p => p.id === x.period)) fail(where, `unknown period ${x.period}`);
  if (!x.recent && !(Array.isArray(x.est) && x.est.length === 2 && x.est[0] >= x.est[1]))
    fail(where, 'est must be [from, to] in Ma');
}

for (const w of warnings) console.warn(`warning  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error    ${e}`);
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(
  `Content OK: ${SPECIES.length} species, ${Object.keys(TAXON_GROUPS).length} groups, ${glossary.length} terms, ${TOPICS.length} topics (${TOPICS.reduce((n, t) => n + t.quiz.length, 0)} questions), ${PREHISTORIC.length} prehistoric entries.`
);

/** Looks up iNaturalist/GBIF ids and an openly licensed photo for species entries that lack them. */
async function resolveSpecies() {
  // A separate module instance, so the validation above loads the rewritten file.
  const { SPECIES: entries } = await load('js/data/species.js', '?resolve');
  const missing = entries.filter(s => !s.id || !s.inat || !s.photo);
  if (!missing.length) return console.log('Nothing to resolve.');
  const script = fileURLToPath(new URL('scripts/resolve-taxa.mjs', root));
  const found = JSON.parse(
    execFileSync(process.execPath, [script, ...missing.map(s => s.sci)], { encoding: 'utf8' })
  );
  const path = fileURLToPath(new URL('js/data/species.js', root));
  let source = await readFile(path, 'utf8');
  let changed = 0;
  for (const r of found) {
    const s = missing.find(x => x.sci === r.name);
    if (!s || !r.inat) {
      console.warn(`not found  ${r.name}`);
      continue;
    }
    const add = {};
    if (!s.id) add.id = r.rank === 'species' || !r.gbif ? `inat-${r.inat}` : String(r.gbif);
    if (!s.inat) add.inat = r.inat;
    if (s.gbif == null && r.gbif) add.gbif = r.gbif;
    if (!s.photo && r.photo) {
      const { id, url, license, attribution } = r.photo;
      add.photo = { id, url, license, attribution };
    }
    if (!Object.keys(add).length) continue;
    // Insert the new fields right after the entry's `sci:` line; key order does not matter.
    const name = s.sci.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const line = new RegExp(`^([ \\t]*)sci:\\s*(['"])${name}\\2,[^\\n]*\\n`, 'm');
    const match = source.match(line);
    if (!match) {
      console.warn(`could not locate ${s.sci} in js/data/species.js`);
      continue;
    }
    const fields = Object.entries(add)
      .map(([key, value]) => `${match[1]}${key}: ${JSON.stringify(value)},\n`)
      .join('');
    source = source.replace(line, hit => hit + fields);
    changed++;
    console.log(`resolved   ${s.sci} (${Object.keys(add).join(', ')})`);
  }
  if (!changed) return;
  await writeFile(path, source);
  try {
    const prettier = fileURLToPath(new URL('node_modules/prettier/bin/prettier.cjs', root));
    execFileSync(process.execPath, [prettier, '--write', path], { stdio: 'ignore' });
  } catch {
    console.log('Run `npm run format` to tidy js/data/species.js.');
  }
}
