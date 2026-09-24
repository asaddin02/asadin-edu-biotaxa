// Lever model of a pincer. Illustrates effort and load arms; not a measurement of real animals.
import { S, fmt } from '../core/prefs.js';

const s = S({
  force: ['Gaya otot (N)', 'Muscle force (N)'],
  armIn: ['Lengan kuasa (mm)', 'Effort arm (mm)'],
  armOut: ['Lengan beban (mm)', 'Load arm (mm)'],
  output: ['Gaya ideal pada ujung capit', 'Ideal force at the pincer tip'],
  formula: [
    'Model tuas: F keluar = F otot × lengan kuasa ÷ lengan beban. Model ini mengabaikan gesekan, sudut, dan struktur capit; bukan hasil ukur hewan nyata.',
    'Lever model: output force = muscle force × effort arm ÷ load arm. It ignores friction, angles and pincer structure; it is not a measurement of a real animal.',
  ],
  venom: [
    'Mengapa tidak ada skor “bisa /100”? Gaya capit dan toksisitas bisa memakai satuan dan metode uji yang berbeda. Penelitian pada kalajengking menemukan hubungan antara bentuk, kinerja, dan perilaku, tetapi itu bukan hukum universal. Model ini tidak memprediksi bahaya bagi manusia. Jangan menangkap atau memegang hewan berbisa.',
    'Why is there no “venom /100” score? Pincer force and venom toxicity use different units and tests. Scorpion research links form, performance and behaviour, but that is not a universal rule. This model does not predict danger to people. Never catch or handle venomous animals.',
  ],
});

export default {
  id: 'lever',
  icon: '🦂',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Tuas & capit', 'Levers & pincers'],
  intro: [
    'Capit kepiting dan kalajengking bekerja seperti tuas. Ubah gaya otot dan panjang lengan untuk melihat gaya di ujung capit.',
    'Crab and scorpion pincers work like levers. Change the muscle force and arm lengths to see the force at the pincer tip.',
  ],
  question: [
    'Apa yang terjadi pada gaya ujung capit jika lengan beban menjadi dua kali lebih panjang?',
    'What happens to the tip force if the load arm becomes twice as long?',
  ],
  controls: [
    { id: 'force', label: () => s.force, min: 1, max: 20, step: 1, value: 10 },
    { id: 'armIn', label: () => s.armIn, min: 1, max: 20, step: 1, value: 5 },
    { id: 'armOut', label: () => s.armOut, min: 1, max: 40, step: 1, value: 10 },
  ],
  compute: v => ({ newtons: (v.force * v.armIn) / v.armOut }),
  output: r =>
    `<div class="lab-result"><span>${s.output}</span><strong>${fmt(Number(r.newtons.toFixed(2)))} N</strong></div><p class="source-meta">${s.formula}</p><div class="notice">${s.venom}</div>`,
  summary: r => `${fmt(Number(r.newtons.toFixed(2)))} N`,
  refs: [
    {
      label: 'van der Meijden et al. (2013) · Scorpion morphology and defensive performance',
      url: 'https://doi.org/10.1371/journal.pone.0078955',
    },
  ],
  chips: ['Pandinus imperator', 'Leiurus quinquestriatus', 'Birgus latro'],
};
