// Enzyme rate: Michaelis–Menten kinetics scaled by a temperature curve (rising towards an
// optimum, then denaturing) and a pH curve. A teaching model, not measured data.
import { esc } from '../core/dom.js';
import { S, fmt, pick, atLeast } from '../core/prefs.js';

const s = S({
  enzyme: ['Enzim', 'Enzyme'],
  inhibitor: ['Penghambat (inhibitor)', 'Inhibitor'],
  none: ['Tanpa penghambat', 'No inhibitor'],
  competitive: ['Kompetitif', 'Competitive'],
  noncompetitive: ['Nonkompetitif', 'Non-competitive'],
  temp: ['Suhu (°C)', 'Temperature (°C)'],
  ph: ['pH', 'pH'],
  substrate: ['Konsentrasi substrat (satuan relatif)', 'Substrate concentration (relative units)'],
  rate: ['Laju reaksi', 'Reaction rate'],
  ofMax: ['dari laju maksimum enzim ini', 'of this enzyme’s maximum rate'],
  optimum: ['Optimum model: {t} °C, pH {p}', 'Model optimum: {t} °C, pH {p}'],
  cold: [
    'Di bawah suhu optimum, molekul bergerak lebih lambat sehingga tumbukan enzim–substrat lebih jarang.',
    'Below the optimum, molecules move more slowly, so enzyme–substrate collisions are rarer.',
  ],
  hot: [
    'Di atas suhu optimum, bentuk enzim mulai rusak (denaturasi) sehingga sisi aktif tidak cocok lagi.',
    'Above the optimum, the enzyme starts to lose its shape (denaturation), so the active site no longer fits.',
  ],
  best: ['Suhu mendekati optimum.', 'The temperature is close to the optimum.'],
  phOff: [
    'pH jauh dari optimum mengubah muatan gugus di sisi aktif sehingga laju turun.',
    'A pH far from the optimum changes charges in the active site, so the rate falls.',
  ],
  saturated: [
    'Hampir semua sisi aktif sudah terisi: menambah substrat tidak banyak menaikkan laju.',
    'Almost every active site is busy: adding substrate barely raises the rate.',
  ],
  limitedBySubstrate: [
    'Substrat masih sedikit: menambah substrat akan menaikkan laju.',
    'Substrate is still scarce: adding more will raise the rate.',
  ],
  vsTemp: ['Laju terhadap suhu', 'Rate vs temperature'],
  vsSubstrate: ['Laju terhadap substrat', 'Rate vs substrate'],
  chartNote: ['Titik menunjukkan pengaturanmu.', 'The dot shows your settings.'],
  km: ['Km semu', 'Apparent Km'],
  vmax: ['Vmaks semu', 'Apparent Vmax'],
});

// Illustrative optima for the model, based on typical textbook values.
const ENZYMES = {
  amylase: { name: ['Amilase ludah manusia', 'Human salivary amylase'], topt: 37, popt: 7, width: 1.6 },
  pepsin: { name: ['Pepsin lambung', 'Stomach pepsin'], topt: 37, popt: 2, width: 1.2 },
  thermo: {
    name: ['Enzim bakteri sumber air panas', 'Hot-spring bacterial enzyme'],
    topt: 75,
    popt: 8,
    width: 1.6,
  },
};
const KM = 20;

function tempFactor(t, topt) {
  if (t <= topt) return 2 ** ((t - topt) / 10);
  return Math.exp(-(((t - topt) / 9) ** 2));
}
const phFactor = (ph, popt, width) => Math.exp(-(((ph - popt) / width) ** 2));

function kinetics(v) {
  const e = ENZYMES[v.enzyme] || ENZYMES.amylase;
  const km = v.inhibitor === 'competitive' ? KM * 3 : KM;
  const vmax = v.inhibitor === 'noncompetitive' ? 1 / 3 : 1;
  const rateAt = (t, ph, sub) =>
    ((vmax * sub) / (km + sub)) * tempFactor(t, e.topt) * phFactor(ph, e.popt, e.width);
  return { e, km, vmax, rateAt };
}

function chart(points, current, xLabel, xMax, label) {
  const W = 220;
  const H = 110;
  const px = x => 28 + (x / xMax) * (W - 36);
  const py = y => H - 22 - y * (H - 34);
  const path = points.map(([x, y], i) => `${i ? 'L' : 'M'}${px(x).toFixed(1)},${py(y).toFixed(1)}`).join(' ');
  return `<figure class="mini-chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">
    <line x1="28" y1="${H - 22}" x2="${W - 6}" y2="${H - 22}" class="axis"/><line x1="28" y1="10" x2="28" y2="${H - 22}" class="axis"/>
    <path d="${path}" class="curve"/><circle cx="${px(current[0]).toFixed(1)}" cy="${py(current[1]).toFixed(1)}" r="4.5" class="dot"/>
    <text x="${W / 2}" y="${H - 5}" text-anchor="middle">${esc(xLabel)}</text></svg><figcaption>${esc(label)}</figcaption></figure>`;
}

export default {
  id: 'enzyme',
  icon: '🧪',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Kerja enzim', 'Enzyme activity'],
  intro: [
    '[[enzim|Enzim]] mempercepat reaksi, tetapi lajunya bergantung pada suhu, pH, dan banyaknya substrat. Pilih enzim, ubah kondisinya, lalu amati grafiknya. Ini model pembelajaran sederhana; nilai optimum mengikuti angka khas di buku pelajaran, bukan hasil pengukuran.',
    '[[enzim|Enzymes]] speed up reactions, but their rate depends on temperature, pH and how much substrate there is. Choose an enzyme, change the conditions and watch the graphs. This is a simple teaching model; optima follow typical textbook values, not measurements.',
  ],
  question: [
    'Mengapa pepsin bekerja baik di lambung tetapi hampir berhenti di usus halus? Apa yang terjadi pada amilase ludah saat masuk ke lambung?',
    'Why does pepsin work well in the stomach but almost stop in the small intestine? What happens to salivary amylase when it reaches the stomach?',
  ],
  controls: [
    { id: 'temp', label: () => s.temp, min: 0, max: 100, step: 1, value: 37 },
    { id: 'ph', label: () => s.ph, min: 1, max: 13, step: 0.5, value: 7 },
    { id: 'sub', label: () => s.substrate, min: 0, max: 200, step: 5, value: 60 },
  ],
  defaults: { enzyme: 'amylase', inhibitor: 'none' },
  formatValue: (id, value) => fmt(value, id === 'ph' ? { maximumFractionDigits: 1 } : undefined),
  panel(v) {
    const select = (key, options) =>
      `<select data-lab-select="${key}">${Object.entries(options)
        .map(
          ([id, label]) => `<option value="${id}"${v[key] === id ? ' selected' : ''}>${esc(label)}</option>`
        )
        .join('')}</select>`;
    return `<label class="field"><span>${s.enzyme}</span>${select(
      'enzyme',
      Object.fromEntries(Object.entries(ENZYMES).map(([id, e]) => [id, pick(e.name)]))
    )}</label>${
      atLeast('sma')
        ? `<label class="field"><span>${s.inhibitor}</span>${select('inhibitor', {
            none: s.none,
            competitive: s.competitive,
            noncompetitive: s.noncompetitive,
          })}</label>`
        : ''
    }`;
  },
  compute(v) {
    const values = { ...v, inhibitor: atLeast('sma') ? v.inhibitor : 'none' };
    const { e, km, vmax, rateAt } = kinetics(values);
    const rate = rateAt(v.temp, v.ph, v.sub);
    const tempCurve = Array.from({ length: 51 }, (_, i) => [i * 2, rateAt(i * 2, v.ph, v.sub)]);
    const subCurve = Array.from({ length: 41 }, (_, i) => [i * 5, rateAt(v.temp, v.ph, i * 5)]);
    return {
      rate,
      e,
      km,
      vmax,
      tempCurve,
      subCurve,
      temp: v.temp,
      ph: v.ph,
      sub: v.sub,
      saturation: v.sub / (km + v.sub),
    };
  },
  output(r) {
    const pct = Math.round(r.rate * 100);
    const tNote = Math.abs(r.temp - r.e.topt) <= 4 ? s.best : r.temp < r.e.topt ? s.cold : s.hot;
    const notes = [tNote];
    if (Math.abs(r.ph - r.e.popt) > 1.5) notes.push(s.phOff);
    notes.push(r.saturation > 0.8 ? s.saturated : s.limitedBySubstrate);
    return `<div class="lab-result enzyme-result"><div class="bar-row"><span>${s.rate}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><strong>${fmt(pct)}%</strong></div>
      <p class="muted small">${fmt(pct)}% ${s.ofMax} · ${esc(s.optimum.replace('{t}', fmt(r.e.topt)).replace('{p}', fmt(r.e.popt)))}</p>
      <div class="chart-pair">${chart(r.tempCurve, [r.temp, r.rate], '°C', 100, s.vsTemp)}${chart(r.subCurve, [Math.min(200, r.sub), r.rate], '[S]', 200, s.vsSubstrate)}</div>
      <p class="muted small">${s.chartNote}${atLeast('kuliah') ? ` · ${s.km}: ${fmt(r.km)} · ${s.vmax}: ${fmt(r.vmax, { maximumFractionDigits: 2 })}` : ''}</p>
      ${notes.map(n => `<p class="lab-note">${n}</p>`).join('')}</div>`;
  },
  summary: r => `${fmt(Math.round(r.rate * 100))}% · ${pick(r.e.name)}`,
};
