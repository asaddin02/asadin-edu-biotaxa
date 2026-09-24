// The scale of life on a logarithmic ruler, from DNA to the tallest trees.
import { esc } from '../core/dom.js';
import { S, pick, fmt } from '../core/prefs.js';

const s = S({
  zoom: ['Perbesaran (geser untuk memperbesar/memperkecil)', 'Zoom (slide to zoom in or out)'],
  around: ['Seukuran ini', 'About this size'],
  tool: ['Alat untuk melihatnya', 'Tool needed to see it'],
  eye: ['Mata telanjang', 'Naked eye'],
  light: ['Mikroskop cahaya', 'Light microscope'],
  electron: ['Mikroskop elektron', 'Electron microscope'],
  note: [
    'Ukuran adalah perkiraan umum. Setiap langkah ke kanan berarti 10 kali lebih besar.',
    'Sizes are typical estimates. Each step to the right is 10 times larger.',
  ],
});

// [size in metres, icon, Indonesian, English]
const ITEMS = [
  [2e-9, '🧬', 'Lebar untaian DNA', 'Width of a DNA strand'],
  [1e-7, '🦠', 'Virus influenza', 'Influenza virus'],
  [2e-6, '🧫', 'Bakteri E. coli', 'E. coli bacterium'],
  [7.5e-6, '🔴', 'Sel darah merah', 'Red blood cell'],
  [5e-5, '🔬', 'Euglena', 'Euglena'],
  [7e-5, '〰️', 'Tebal sehelai rambut', 'Width of a human hair'],
  [2.5e-4, '🥿', 'Paramecium', 'Paramecium'],
  [5e-4, '🫧', 'Amoeba', 'Amoeba'],
  [5e-3, '🐜', 'Semut rangrang', 'Weaver ant'],
  [5e-3, '🦟', 'Nyamuk', 'Mosquito'],
  [1e-2, '🐝', 'Lebah madu', 'Honey bee'],
  [1e-1, '🦋', 'Kupu-kupu raja (bentang sayap)', 'Monarch butterfly (wingspan)'],
  [4.6e-1, '🐈', 'Kucing', 'Cat'],
  [1, '🌺', 'Bunga Rafflesia', 'Rafflesia flower'],
  [1.7, '🧍', 'Manusia', 'Human'],
  [2.5, '🦎', 'Komodo', 'Komodo dragon'],
  [3, '🐘', 'Gajah Asia (tinggi)', 'Asian elephant (height)'],
  [12, '🦈', 'Hiu paus', 'Whale shark'],
  [28, '🐋', 'Paus biru', 'Blue whale'],
  [115, '🌲', 'Pohon tertinggi (redwood)', 'Tallest tree (redwood)'],
];

function formatSize(m) {
  const units = [
    [1e-6, 1e-9, 'nm'],
    [1e-3, 1e-6, 'µm'],
    [1e-2, 1e-3, 'mm'],
    [1, 1e-2, 'cm'],
    [Infinity, 1, 'm'],
  ];
  const [, base, unit] = units.find(([limit]) => m < limit);
  const v = m / base;
  return `${fmt(Number(v >= 10 ? v.toFixed(0) : v.toFixed(1)))} ${unit}`;
}

export default {
  id: 'scale',
  icon: '🔭',
  levels: ['sd', 'smp', 'sma'],
  title: ['Skala kehidupan', 'Scale of life'],
  intro: [
    'Seberapa kecil bakteri dan seberapa besar paus biru? Geser penggaris untuk menjelajah ukuran makhluk hidup. Benda lebih kecil dari sekitar 0,1 mm membutuhkan [[mikroskop]].',
    'How tiny is a bacterium and how huge is a blue whale? Slide the ruler to explore the sizes of life. Things smaller than about 0.1 mm need a [[mikroskop|microscope]].',
  ],
  question: [
    'Berapa kali lebih besar seekor semut dibandingkan satu bakteri E. coli?',
    'How many times bigger is an ant than one E. coli bacterium?',
  ],
  controls: [{ id: 'zoom', label: () => s.zoom, min: -9, max: 2, step: 0.25, value: -5.5 }],
  compute(v) {
    const size = 10 ** v.zoom;
    const near = ITEMS.filter(([m]) => Math.abs(Math.log10(m) - v.zoom) <= 0.75);
    const tool = size < 2e-7 ? 'electron' : size < 1e-4 ? 'light' : 'eye';
    return { size, zoom: v.zoom, near, tool };
  },
  output(r) {
    const min = -9;
    const max = 2.1;
    const pos = m => ((Math.log10(m) - min) / (max - min)) * 100;
    return `<div class="scale-output"><div class="scale-now"><strong>${formatSize(r.size)}</strong><span>${s.tool}: <b class="tool-${r.tool}">${s[r.tool]}</b></span></div>
      <div class="scale-ruler" aria-hidden="true"><div class="scale-bands"><span class="band electron" style="width:${pos(2e-7)}%"></span><span class="band light" style="width:${pos(1e-4) - pos(2e-7)}%"></span><span class="band eye"></span></div>
        ${ITEMS.map(([m, ic]) => `<span class="scale-mark" style="left:${pos(m)}%">${ic}</span>`).join('')}<span class="scale-cursor" style="left:${pos(r.size)}%"></span></div>
      <h4>${s.around}</h4><ul class="scale-list">${(r.near.length
        ? r.near
        : ITEMS.slice()
            .sort((a, b) => Math.abs(Math.log10(a[0]) - r.zoom) - Math.abs(Math.log10(b[0]) - r.zoom))
            .slice(0, 2)
      )
        .map(
          ([m, ic, id, en]) =>
            `<li><span aria-hidden="true">${ic}</span>${esc(pick([id, en]))}<small>${formatSize(m)}</small></li>`
        )
        .join('')}</ul><p class="lab-note">${s.note}</p></div>`;
  },
  summary: r => `${formatSize(r.size)} · ${s[r.tool]}`,
  formatValue: (id, v) => formatSize(10 ** v),
};
