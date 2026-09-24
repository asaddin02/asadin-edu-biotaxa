// Monohybrid cross with a Punnett square and a random-offspring simulation.
import { esc } from '../core/dom.js';
import { S, fmt } from '../core/prefs.js';

const s = S({
  parent1: ['Induk 1', 'Parent 1'],
  parent2: ['Induk 2', 'Parent 2'],
  trait: [
    'Sifat: warna bunga ercis. A = ungu (dominan), a = putih (resesif).',
    'Trait: pea flower colour. A = purple (dominant), a = white (recessive).',
  ],
  punnett: ['Kotak Punnett', 'Punnett square'],
  genotypes: ['Perbandingan genotipe', 'Genotype ratio'],
  phenotypes: ['Perbandingan fenotipe', 'Phenotype ratio'],
  purple: ['ungu', 'purple'],
  white: ['putih', 'white'],
  simulate: ['Simulasikan keturunan acak', 'Simulate random offspring'],
  offspring: ['keturunan', 'offspring'],
  expected: ['harapan', 'expected'],
  observed: ['hasil acak', 'random result'],
  chance: [
    'Rasio Mendel adalah peluang. Makin banyak keturunan, hasil acak makin dekat dengan harapan.',
    'Mendelian ratios are probabilities. The more offspring, the closer the random result gets to the expectation.',
  ],
});

const GENOTYPES = ['AA', 'Aa', 'aa'];
let lastSim = null;

function cross(p1, p2) {
  const cells = [];
  for (const a of p1) for (const b of p2) cells.push([a, b].sort().join(''));
  return cells.map(g => (g === 'aA' ? 'Aa' : g));
}

function flower(genotype) {
  return genotype.includes('A') ? '🟣' : '⚪';
}

export default {
  id: 'mendel',
  icon: '🧬',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Pewarisan sifat', 'Heredity'],
  intro: [
    'Gregor Mendel menyilangkan tanaman ercis. Setiap induk mewariskan satu [[alel]] untuk setiap gen. Pilih [[genotipe]] kedua induk, lalu lihat kemungkinan keturunannya.',
    'Gregor Mendel crossed pea plants. Each parent passes on one [[alel|allele]] of each gene. Choose both parents’ [[genotipe|genotypes]] and see the possible offspring.',
  ],
  question: [
    'Apakah dua bunga ungu bisa menghasilkan keturunan berbunga putih? Kapan?',
    'Can two purple-flowered plants have a white-flowered offspring? When?',
  ],
  controls: [],
  defaults: { p1: 'Aa', p2: 'Aa', n: 100 },
  compute(v) {
    const cells = cross(v.p1, v.p2);
    const counts = Object.fromEntries(GENOTYPES.map(g => [g, cells.filter(c => c === g).length]));
    const dominant = cells.filter(c => c.includes('A')).length;
    return { cells, counts, dominant, recessive: 4 - dominant, p1: v.p1, p2: v.p2 };
  },
  panel(v) {
    const select = (id, value) =>
      `<select id="${id}" data-lab-select="${id}">${GENOTYPES.map(g => `<option${g === value ? ' selected' : ''}>${g}</option>`).join('')}</select>`;
    return `<p class="muted">${s.trait}</p><div class="parents"><label class="field"><span>${s.parent1} ${flower(v.p1)}</span>${select('p1', v.p1)}</label><span class="cross" aria-hidden="true">×</span><label class="field"><span>${s.parent2} ${flower(v.p2)}</span>${select('p2', v.p2)}</label></div>`;
  },
  output(r) {
    const table = `<table class="punnett" aria-label="${s.punnett}"><thead><tr><th></th>${[...r.p2].map(a => `<th>${esc(a)}</th>`).join('')}</tr></thead><tbody>${[
      ...r.p1,
    ]
      .map(
        (a, i) =>
          `<tr><th>${esc(a)}</th>${[0, 1].map(j => `<td>${flower(r.cells[i * 2 + j])} ${esc(r.cells[i * 2 + j])}</td>`).join('')}</tr>`
      )
      .join('')}</tbody></table>`;
    const geno = GENOTYPES.filter(g => r.counts[g])
      .map(g => `${g} ${r.counts[g]}`)
      .join(' : ');
    const sim = lastSim && lastSim.key === `${r.p1}${r.p2}` ? lastSim : null;
    return `<div class="mendel-output">${table}<dl class="kv"><div><dt>${s.genotypes}</dt><dd>${geno}</dd></div><div><dt>${s.phenotypes}</dt><dd>🟣 ${s.purple} ${r.dominant} : ⚪ ${s.white} ${r.recessive}</dd></div></dl>
      <div class="actions"><select data-lab-select="n" aria-label="${s.offspring}">${[20, 100, 1000].map(n => `<option value="${n}"${sim?.n === n ? ' selected' : ''}>${fmt(n)} ${s.offspring}</option>`).join('')}</select><button type="button" class="btn secondary small" data-mendel-sim>${s.simulate}</button></div>
      ${sim ? `<div class="sim-result" role="status"><div class="bar-row"><span>🟣 ${s.observed}</span><div class="bar-track"><div class="bar-fill" style="width:${(sim.purple / sim.n) * 100}%"></div></div><strong>${fmt(sim.purple)}</strong></div><div class="bar-row"><span>⚪ ${s.observed}</span><div class="bar-track"><div class="bar-fill alt" style="width:${((sim.n - sim.purple) / sim.n) * 100}%"></div></div><strong>${fmt(sim.n - sim.purple)}</strong></div><p class="lab-note">${s.expected}: 🟣 ${fmt(Math.round((sim.n * r.dominant) / 4))} : ⚪ ${fmt(Math.round((sim.n * r.recessive) / 4))}. ${s.chance}</p></div>` : ''}</div>`;
  },
  summary: r =>
    `${r.p1} × ${r.p2} → ${GENOTYPES.filter(g => r.counts[g])
      .map(g => `${g}:${r.counts[g]}`)
      .join(' ')} (🟣${r.dominant}:⚪${r.recessive})`,
  bind(on, rerender, state) {
    on('click', '[data-mendel-sim]', () => {
      const n = Number(state.n) || 100;
      const cells = cross(state.p1, state.p2);
      let purple = 0;
      for (let i = 0; i < n; i++) if (cells[Math.floor(Math.random() * 4)].includes('A')) purple++;
      lastSim = { key: `${state.p1}${state.p2}`, n, purple };
      rerender();
    });
  },
};
