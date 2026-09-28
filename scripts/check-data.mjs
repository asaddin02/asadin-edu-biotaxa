#!/usr/bin/env node
// Validates curated content so contributions stay complete and consistent.
//   npm run data:check                 → validate everything (exit code 1 on errors)
//   npm run data:check -- --resolve    → first fill in missing ids and photos for species entries
//                                        (network required), then validate the updated file
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const load = (path, query = '') => import(new URL(path, root).href + query);

if (process.argv.includes('--resolve')) await resolveSpecies();

const { SPECIES, GROUPS, DIETS, HABITATS } = await load('js/data/species.js');
const { GROUPS: TAXON_GROUPS } = await load('js/data/groups.js');
const { glossary } = await load('js/data/glossary.js');
const { TOPICS: TOPIC_META, FIELDS, PHASES, LAYERS, loadTopics } = await load('js/data/topics/index.js');
const TOPICS = await loadTopics();
const { ORGANIZATION, BRANCHES } = await load('js/data/biomap.js');
const LAB_IDS = new Set(
  (await readdir(fileURLToPath(new URL('js/labs/', root)))).map(f => f.replace(/\.js$/, ''))
);
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
const fieldIds = new Set(FIELDS.map(f => f.id));
const orgIds = new Set(ORGANIZATION.map(o => o.id));
for (const f of FIELDS)
  if (!pair(f.name) || !pair(f.desc)) fail(`fields/${f.id}`, 'name and desc must be [id, en]');
for (const t of TOPICS) {
  const where = `topics/${t.id}`;
  if (topicIds.has(t.id)) fail(where, 'duplicate id');
  topicIds.add(t.id);
}
for (const t of TOPICS) {
  const where = `topics/${t.id}`;
  if (!pair(t.title) || !pair(t.summary)) fail(where, 'title and summary must be [id, en]');
  if (!fieldIds.has(t.field)) fail(where, `unknown field "${t.field}"`);
  for (const o of t.org || []) if (!orgIds.has(o)) fail(where, `unknown organisation level "${o}"`);
  if (!t.levels?.length || t.levels.some(l => !LEVELS.includes(l)))
    fail(where, 'levels must list sd/smp/sma/kuliah');
  // Every recommended level needs its own layer of the lesson.
  for (const l of t.levels) if (!t.body?.[l]) fail(where, `no body text for recommended level ${l}`);
  for (const [l, v] of Object.entries(t.body || {})) {
    if (!LEVELS.includes(l)) fail(where, `unknown body level ${l}`);
    if (!pair(v)) fail(where, `body.${l} must be [id, en]`);
    else v.forEach(x => checkTerms(`${where}.body.${l}`, x));
  }
  for (const [l, v] of Object.entries(t.key || {})) {
    if (!t.body?.[l]) fail(where, `key.${l} has no matching body`);
    if (!pair(v)) fail(where, `key.${l} must be [id, en]`);
    else v.forEach(x => checkTerms(`${where}.key.${l}`, x));
  }
  for (const l of Object.keys(t.body || {}))
    if (!t.key?.[l]) warnings.push(`${where}: no key points for ${l}`);
  for (const [l, v] of Object.entries(t.activity || {}))
    if (!LEVELS.includes(l) || !pair(v)) fail(where, `activity.${l} must be [id, en]`);
  for (const sci of t.species || []) if (!scis.has(sci)) fail(where, `species "${sci}" has no curated card`);
  if (t.lab && !LAB_IDS.has(t.lab)) fail(where, `unknown lab "${t.lab}"`);
  for (const r of t.related || [])
    if (!topicIds.has(r) || r === t.id) fail(where, `bad related topic "${r}"`);
  if (!Array.isArray(t.quiz) || t.quiz.length < 4) fail(where, 'needs at least 4 quiz questions');
  (t.quiz || []).forEach((q, i) => {
    if (
      !pair(q.q) ||
      !Array.isArray(q.a) ||
      q.a.length < 3 ||
      !q.a.every(pair) ||
      !(q.c >= 0 && q.c < q.a.length) ||
      (q.why && !pair(q.why))
    )
      fail(`${where}.quiz[${i}]`, 'invalid question');
    if (q.lv && q.lv.some(l => !LEVELS.includes(l))) fail(`${where}.quiz[${i}]`, 'unknown level');
    const texts = new Set(q.a.map(a => a[0]));
    if (texts.size !== q.a.length) fail(`${where}.quiz[${i}]`, 'duplicate answer options');
  });
  for (const l of t.levels) {
    const n = (t.quiz || []).filter(q => !q.lv || q.lv.includes(l)).length;
    if (n < 3) warnings.push(`${where}: only ${n} quiz question(s) for ${l}`);
  }
  const teacher = t.teacher || {};
  for (const [l, v] of Object.entries(teacher.goals || {}))
    if (!LEVELS.includes(l) || !pair(v)) fail(where, `teacher.goals.${l} must be [id, en]`);
  for (const l of Object.keys(t.body || {}))
    if (!teacher.goals?.[l]) warnings.push(`${where}: no teacher goal for ${l}`);
  for (const key of ['steps', 'assess'])
    for (const x of teacher[key] || []) if (!pair(x)) fail(where, `teacher.${key} entries must be [id, en]`);
  if (teacher.time && !pair(teacher.time)) fail(where, 'teacher.time must be [id, en]');
  (teacher.misconceptions || []).forEach((m, i) => {
    if (!pair(m.wrong) || !pair(m.right))
      fail(`${where}.misconceptions[${i}]`, 'wrong and right must be [id, en]');
  });
  if (!teacher.misconceptions?.length) warnings.push(`${where}: no misconceptions for teachers`);
  for (const r of t.read || [])
    if (!/^https:\/\//.test(r.url)) fail(where, `reading link must be https: ${r.url}`);
}
if (TOPIC_META.length !== TOPICS.length) fail('topics', 'every topic needs metadata and a lesson file');
if (Object.keys(PHASES).some(l => !LEVELS.includes(l))) fail('topics/PHASES', 'unknown level');
if (LEVELS.some(l => !pair(LAYERS[l]))) fail('topics/LAYERS', 'every level needs a layer name');

// Biology map
const branchIds = new Set();
for (const o of ORGANIZATION) {
  if (!pair(o.name) || !pair(o.example)) fail(`biomap/${o.id}`, 'name and example must be [id, en]');
  for (const [l, v] of Object.entries(o.desc))
    if (!LEVELS.includes(l) || !pair(v)) fail(`biomap/${o.id}`, `bad desc.${l}`);
}
for (const b of BRANCHES) {
  const where = `biomap/${b.id}`;
  if (branchIds.has(b.id)) fail(where, 'duplicate branch');
  branchIds.add(b.id);
  if (!pair(b.name) || !pair(b.desc)) fail(where, 'name and desc must be [id, en]');
  if (!b.topics?.length) fail(where, 'must list at least one lesson');
  for (const id of b.topics || []) if (!topicIds.has(id)) fail(where, `unknown lesson "${id}"`);
  if (b.tree && b.tree !== 'root' && !Number.isInteger(b.tree))
    fail(where, 'tree must be a GBIF key or "root"');
}

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
  `Content OK: ${SPECIES.length} species, ${Object.keys(TAXON_GROUPS).length} groups, ${glossary.length} terms, ${TOPICS.length} topics in ${FIELDS.length} fields (${TOPICS.reduce((n, t) => n + t.quiz.length, 0)} questions), ${BRANCHES.length} branches, ${PREHISTORIC.length} prehistoric entries.`
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
