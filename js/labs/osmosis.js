// Net water movement across a semipermeable membrane.
import { S } from '../core/prefs.js';

const s = S({
  inside: ['Konsentrasi zat terlarut di dalam sel (%)', 'Solute concentration inside the cell (%)'],
  outside: ['Konsentrasi zat terlarut di luar sel (%)', 'Solute concentration outside the cell (%)'],
  inward: ['Aliran bersih air menuju ke dalam sel', 'Net water flow into the cell'],
  outward: ['Aliran bersih air menuju ke luar sel', 'Net water flow out of the cell'],
  balanced: ['Tidak ada aliran bersih air', 'No net water flow'],
  swell: ['Sel menggembung (larutan luar hipotonik).', 'The cell swells (outside solution is hypotonic).'],
  shrink: ['Sel mengerut (larutan luar hipertonik).', 'The cell shrinks (outside solution is hypertonic).'],
  same: ['Ukuran sel tetap (larutan isotonik).', 'The cell keeps its size (isotonic solution).'],
});

export default {
  id: 'osmosis',
  icon: '💧',
  levels: ['sd', 'smp', 'sma', 'kuliah'],
  title: ['Osmosis', 'Osmosis'],
  intro: [
    'Model membran yang dapat dilalui air tetapi tidak oleh zat terlarut. Air bergerak menuju larutan yang lebih pekat ([[osmosis]]). Dinding sel, tekanan, dan jenis zat juga memengaruhi sel nyata.',
    'A model membrane that lets water through but not the solute. Water moves towards the more concentrated solution ([[osmosis]]). Cell walls, pressure and the type of solute also matter in real cells.',
  ],
  question: [
    'Apa yang terjadi pada sel darah merah bila dimasukkan ke air murni? Bagaimana dengan sel tumbuhan?',
    'What happens to a red blood cell in pure water? What about a plant cell?',
  ],
  controls: [
    { id: 'inside', label: () => s.inside, min: 0, max: 10, step: 0.5, value: 3 },
    { id: 'outside', label: () => s.outside, min: 0, max: 10, step: 0.5, value: 1 },
  ],
  compute(v) {
    const direction = v.inside > v.outside ? 'inward' : v.inside < v.outside ? 'outward' : 'balanced';
    const scale = 1 + Math.max(-0.35, Math.min(0.35, (v.inside - v.outside) * 0.06));
    return { direction, scale };
  },
  output(r) {
    const arrows = r.direction === 'inward' ? '→ ○ ←' : r.direction === 'outward' ? '← ○ →' : '⇄';
    const note = r.direction === 'inward' ? s.swell : r.direction === 'outward' ? s.shrink : s.same;
    return `<div class="lab-result"><div class="cell" style="transform:scale(${r.scale.toFixed(2)})" aria-hidden="true"><span>${arrows}</span></div><span class="lab-headline">${s[r.direction]}</span><p class="lab-note">${note}</p></div>`;
  },
  summary: r => s[r.direction],
};
