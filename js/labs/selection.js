// Natural selection on peppered moths: predation removes the more visible colour.
import { S, fmt } from '../core/prefs.js';

const s = S({
  start: ['Ngengat gelap di awal (%)', 'Dark moths at the start (%)'],
  strength: ['Kekuatan pemangsaan (%)', 'Predation strength (%)'],
  env: ['Lingkungan', 'Environment'],
  clean: ['Batang pohon bersih berlumut pucat', 'Clean trunks with pale lichen'],
  polluted: ['Batang pohon hitam berjelaga', 'Sooty black trunks'],
  run1: ['Jalankan 1 generasi', 'Run 1 generation'],
  run10: ['Jalankan 10 generasi', 'Run 10 generations'],
  reset: ['Mulai ulang', 'Restart'],
  generation: ['Generasi', 'Generation'],
  dark: ['ngengat gelap', 'dark moths'],
  chart: ['Persentase ngengat gelap dari generasi ke generasi', 'Percentage of dark moths over generations'],
  note: [
    'Model: burung lebih mudah melihat ngengat yang warnanya kontras dengan batang pohon. Warna diwariskan tanpa perubahan; populasi 200 ekor dengan unsur peluang.',
    'Model: birds spot moths that contrast with the bark more easily. Colour is inherited unchanged; population of 200 with an element of chance.',
  ],
});

const N = 200;
let history = null;
let historyKey = '';

function nextGeneration(p, v) {
  const sStrength = v.strength / 100;
  const wDark = v.env === 'polluted' ? 1 : 1 - sStrength;
  const wLight = v.env === 'polluted' ? 1 - sStrength : 1;
  const expected = (p * wDark) / (p * wDark + (1 - p) * wLight || 1);
  let dark = 0;
  for (let i = 0; i < N; i++) if (Math.random() < expected) dark++;
  return dark / N;
}

function chart(values) {
  const w = 320;
  const h = 150;
  const max = Math.max(10, values.length - 1);
  const points = values
    .map((p, i) => `${((i / max) * (w - 30) + 25).toFixed(1)},${(h - 20 - p * (h - 35)).toFixed(1)}`)
    .join(' ');
  return `<svg class="selection-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${s.chart}"><line x1="25" y1="${h - 20}" x2="${w - 5}" y2="${h - 20}" class="axis"/><line x1="25" y1="15" x2="25" y2="${h - 20}" class="axis"/>
    <text x="4" y="20" class="tick">100%</text><text x="8" y="${h - 22}" class="tick">0%</text><text x="${w - 70}" y="${h - 4}" class="tick">${s.generation} →</text>
    <polyline points="${points}" class="line"/>${values.map((p, i) => `<circle cx="${((i / max) * (w - 30) + 25).toFixed(1)}" cy="${(h - 20 - p * (h - 35)).toFixed(1)}" r="2.6" class="dot"/>`).join('')}</svg>`;
}

export default {
  id: 'selection',
  icon: '🦋',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Seleksi alam', 'Natural selection'],
  intro: [
    'Di Inggris abad ke-19, ngengat *Biston betularia* gelap bertambah ketika batang pohon menghitam karena jelaga pabrik, lalu berkurang setelah udara bersih. Jalankan beberapa generasi dan amati [[seleksi alam]] bekerja.',
    'In 19th-century Britain, dark peppered moths (*Biston betularia*) increased when soot blackened tree trunks, then declined after the air cleaned up. Run a few generations and watch [[seleksi alam|natural selection]] at work.',
  ],
  question: [
    'Di lingkungan tercemar, berapa generasi yang dibutuhkan hingga ngengat gelap lebih dari separuh populasi?',
    'In a polluted environment, how many generations until dark moths are more than half the population?',
  ],
  controls: [
    { id: 'start', label: () => s.start, min: 1, max: 99, step: 1, value: 10 },
    { id: 'strength', label: () => s.strength, min: 0, max: 60, step: 5, value: 30 },
  ],
  defaults: { env: 'polluted' },
  panel(v) {
    return `<fieldset class="env-choice"><legend>${s.env}</legend>${['polluted', 'clean'].map(e => `<label class="radio-card${v.env === e ? ' selected' : ''}"><input type="radio" name="env" value="${e}" data-lab-select="env"${v.env === e ? ' checked' : ''}><span class="bark bark-${e}" aria-hidden="true"></span>${s[e]}</label>`).join('')}</fieldset>`;
  },
  compute(v) {
    const key = `${v.start}|${v.strength}|${v.env}`;
    if (!history || historyKey !== key) {
      history = [v.start / 100];
      historyKey = key;
    }
    return { history: [...history], current: history.at(-1), generation: history.length - 1, env: v.env };
  },
  output(r) {
    const dark = Math.round(r.current * 40);
    const moths = Array.from({ length: 40 }, (_, i) => `<i class="${i < dark ? 'dark' : 'light'}"></i>`).join(
      ''
    );
    return `<div class="selection-output"><div class="moth-field bark-${r.env}" aria-hidden="true">${moths}</div>
      <p class="lab-headline">${s.generation} ${fmt(r.generation)}: <strong>${fmt(Math.round(r.current * 100))}%</strong> ${s.dark}</p>${chart(r.history)}
      <div class="actions"><button type="button" class="btn small" data-sel-run="1">${s.run1}</button><button type="button" class="btn small secondary" data-sel-run="10">${s.run10}</button><button type="button" class="btn small ghost" data-sel-reset>${s.reset}</button></div>
      <p class="lab-note">${s.note}</p></div>`;
  },
  summary: r => `${s.generation} ${r.generation}: ${Math.round(r.current * 100)}% ${s.dark} (${s[r.env]})`,
  bind(on, rerender, state) {
    on('click', '[data-sel-run]', (e, b) => {
      for (let i = 0; i < Number(b.dataset.selRun); i++) {
        if (history.length > 60) break;
        history.push(nextGeneration(history.at(-1), state));
      }
      rerender();
    });
    on('click', '[data-sel-reset]', () => {
      history = [state.start / 100];
      rerender();
    });
  },
};
