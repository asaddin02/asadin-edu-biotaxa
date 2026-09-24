// Energy flow between trophic levels, plus a food-chain ordering game for young learners.
import { esc, shuffle } from '../core/dom.js';
import { S, fmt, pick } from '../core/prefs.js';

const s = S({
  energy: ['Energi produsen (unit)', 'Producer energy (units)'],
  efficiency: ['Efisiensi perpindahan (%)', 'Transfer efficiency (%)'],
  producer: ['Produsen', 'Producers'],
  primary: ['Konsumen I', 'Primary consumers'],
  secondary: ['Konsumen II', 'Secondary consumers'],
  tertiary: ['Konsumen III', 'Tertiary consumers'],
  game: ['Permainan: susun rantai makanan', 'Game: build the food chain'],
  gameHint: [
    'Klik makhluk hidup sesuai urutan “dimakan oleh”, mulai dari produsen.',
    'Click the organisms in “is eaten by” order, starting with the producer.',
  ],
  place: ['Tempat', 'Place'],
  reset: ['Ulangi', 'Reset'],
  correct: ['Hebat! Rantai makanan tersusun benar.', 'Great! The food chain is correct.'],
  wrong: [
    'Belum tepat. Siapa yang dimakan lebih dulu? Coba lagi.',
    'Not yet. Who gets eaten first? Try again.',
  ],
  next: ['Rantai berikutnya', 'Next chain'],
});

const CHAINS = [
  {
    place: ['Sawah', 'Rice field'],
    items: [
      ['🌾', 'Padi', 'Rice'],
      ['🦗', 'Belalang', 'Grasshopper'],
      ['🐸', 'Katak', 'Frog'],
      ['🐍', 'Ular sawah', 'Rice-field snake'],
      ['🦅', 'Elang', 'Eagle'],
    ],
  },
  {
    place: ['Laut', 'Sea'],
    items: [
      ['🟢', 'Fitoplankton', 'Phytoplankton'],
      ['🦐', 'Zooplankton', 'Zooplankton'],
      ['🐟', 'Ikan teri', 'Anchovy'],
      ['🐠', 'Ikan tongkol', 'Tuna'],
      ['🦈', 'Hiu', 'Shark'],
    ],
  },
  {
    place: ['Hutan', 'Forest'],
    items: [
      ['🍃', 'Daun', 'Leaves'],
      ['🐛', 'Ulat', 'Caterpillar'],
      ['🐦', 'Burung kutilang', 'Bulbul'],
      ['🐍', 'Ular', 'Snake'],
      ['🦅', 'Elang Jawa', 'Javan hawk-eagle'],
    ],
  },
  {
    place: ['Kebun', 'Garden'],
    items: [
      ['🥬', 'Sawi', 'Mustard greens'],
      ['🐌', 'Bekicot', 'Snail'],
      ['🐓', 'Ayam', 'Chicken'],
      ['🦊', 'Musang', 'Civet'],
    ],
  },
];

let game = { chain: 0, picked: [], order: [] };

function gameMarkup() {
  const chain = CHAINS[game.chain % CHAINS.length];
  if (!game.order.length) game.order = shuffle(chain.items.map((_, i) => i));
  const done = game.picked.length === chain.items.length;
  const ok = done && game.picked.every((v, i) => v === i);
  return `<section class="food-game" aria-labelledby="food-game-title"><h3 id="food-game-title">🧩 ${s.game}</h3><p class="muted">${s.gameHint} <strong>${s.place}: ${esc(pick(chain.place))}</strong></p>
    <div class="chain-slots" aria-live="polite">${chain.items
      .map((_, i) => {
        const it = game.picked[i] != null ? chain.items[game.picked[i]] : null;
        return `<span class="chain-slot${it ? ' filled' : ''}">${it ? `${it[0]} ${esc(pick([it[1], it[2]]))}` : '?'}</span>${i < chain.items.length - 1 ? '<span class="chain-arrow" aria-hidden="true">→</span>' : ''}`;
      })
      .join('')}</div>
    <div class="chain-pool">${game.order.map(i => `<button type="button" class="chip big" data-chain-pick="${i}"${game.picked.includes(i) || done ? ' disabled' : ''}>${chain.items[i][0]} ${esc(pick([chain.items[i][1], chain.items[i][2]]))}</button>`).join('')}</div>
    ${done ? `<p class="lab-note ${ok ? 'ok' : 'bad'}" role="status">${ok ? `🎉 ${s.correct}` : s.wrong}</p>` : ''}
    <div class="actions"><button type="button" class="btn secondary small" data-chain-reset>${s.reset}</button>${ok ? `<button type="button" class="btn small" data-chain-next>${s.next} →</button>` : ''}</div></section>`;
}

export default {
  id: 'food',
  icon: '🕸️',
  levels: ['sd', 'smp', 'sma', 'kuliah'],
  title: ['Aliran energi', 'Energy flow'],
  intro: [
    'Contoh umum: rumput → belalang → katak → ular. Panah menunjukkan aliran energi. Persentase tetap di sini adalah asumsi model; efisiensi nyata berbeda-beda. [[pengurai|Pengurai]] memproses sisa dari semua tingkat. Ini bukan rantai makanan setiap spesies.',
    'A general example: grass → grasshopper → frog → snake. Arrows show energy flow. The fixed percentage here is a model assumption; real efficiency varies. [[pengurai|Decomposers]] process remains from every level. This is not the food chain of every species.',
  ],
  question: [
    'Jika efisiensi turun dari 10% menjadi 5%, berapa energi yang sampai ke konsumen III?',
    'If efficiency drops from 10% to 5%, how much energy reaches the tertiary consumers?',
  ],
  controls: [
    { id: 'energy', label: () => s.energy, min: 100, max: 10000, step: 100, value: 1000 },
    { id: 'efficiency', label: () => s.efficiency, min: 1, max: 30, step: 1, value: 10 },
  ],
  compute(v) {
    const e = v.efficiency / 100;
    return { levels: [v.energy, v.energy * e, v.energy * e ** 2, v.energy * e ** 3], total: v.energy };
  },
  output(r) {
    const labels = [s.producer, s.primary, s.secondary, s.tertiary];
    return r.levels
      .map(
        (n, i) =>
          `<div class="bar-row"><span>${labels[i]}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.max(0.4, (n / r.total) * 100)}%"></div></div><strong>${fmt(Number(n.toFixed(3)))}</strong></div>`
      )
      .join('');
  },
  summary: r => r.levels.map(n => fmt(Number(n.toFixed(3)))).join(' → '),
  extra: () => gameMarkup(),
  bind(on, rerender) {
    on('click', '[data-chain-pick]', (e, b) => {
      game.picked.push(Number(b.dataset.chainPick));
      rerender();
    });
    on('click', '[data-chain-reset]', () => {
      game.picked = [];
      game.order = [];
      rerender();
    });
    on('click', '[data-chain-next]', () => {
      game = { chain: game.chain + 1, picked: [], order: [] };
      rerender();
    });
  },
};
