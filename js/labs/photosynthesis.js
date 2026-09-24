// Photosynthesis rate with limiting factors (Blackman-style model with a temperature optimum).
import { S, fmt } from '../core/prefs.js';

const s = S({
  light: ['Intensitas cahaya (%)', 'Light intensity (%)'],
  co2: ['Kadar CO₂ (%)', 'CO₂ level (%)'],
  temp: ['Suhu air (°C)', 'Water temperature (°C)'],
  bubbles: ['gelembung oksigen per menit', 'oxygen bubbles per minute'],
  limiting: ['Faktor pembatas saat ini', 'Current limiting factor'],
  lightName: ['cahaya', 'light'],
  co2Name: ['karbon dioksida', 'carbon dioxide'],
  tempName: ['suhu', 'temperature'],
  hot: [
    'Terlalu panas: enzim fotosintesis bekerja lambat atau rusak.',
    'Too hot: photosynthesis enzymes slow down or break.',
  ],
  cold: ['Terlalu dingin: reaksi kimia berjalan lambat.', 'Too cold: chemical reactions run slowly.'],
});

export default {
  id: 'photosynthesis',
  icon: '☀️',
  levels: ['sd', 'smp', 'sma'],
  title: ['Fotosintesis', 'Photosynthesis'],
  intro: [
    'Tanaman air seperti Hydrilla melepaskan gelembung oksigen saat berfotosintesis. Ubah cahaya, karbon dioksida, dan suhu. Laju fotosintesis dibatasi oleh faktor yang paling kurang ([[fotosintesis]]). Angka di sini adalah model sederhana, bukan hasil ukur tanaman nyata.',
    'Water plants such as Hydrilla release oxygen bubbles when they photosynthesise. Change light, carbon dioxide and temperature. The rate is limited by whichever factor is in shortest supply ([[fotosintesis|photosynthesis]]). These numbers come from a simple model, not a real plant.',
  ],
  question: [
    'Jika cahaya dinaikkan tetapi CO₂ tetap rendah, apakah gelembung akan terus bertambah? Mengapa?',
    'If you raise the light but keep CO₂ low, will the bubbles keep increasing? Why?',
  ],
  controls: [
    { id: 'light', label: () => s.light, min: 0, max: 100, step: 5, value: 60 },
    { id: 'co2', label: () => s.co2, min: 0, max: 100, step: 5, value: 50 },
    { id: 'temp', label: () => s.temp, min: 0, max: 50, step: 1, value: 25 },
  ],
  compute(v) {
    const light = v.light / 100;
    const co2 = v.co2 / 100;
    const temp = v.temp >= 45 || v.temp <= 0 ? 0 : Math.exp(-(((v.temp - 28) / 11) ** 2));
    const rate = Math.min(light, co2) * temp;
    const factors = [
      ['light', light],
      ['co2', co2],
      ['temp', temp],
    ].sort((a, b) => a[1] - b[1]);
    return { rate, bubbles: Math.round(rate * 60), limiting: factors[0][0], temp: v.temp };
  },
  output(r) {
    const names = { light: s.lightName, co2: s.co2Name, temp: s.tempName };
    const bubbles = Math.min(24, Math.round(r.bubbles / 2.5));
    return `<div class="lab-result photo-result"><div class="beaker" aria-hidden="true"><span class="plant">🌿</span>${Array.from({ length: bubbles }, (_, i) => `<i style="--i:${i};--x:${((i * 37) % 80) + 10}%"></i>`).join('')}</div>
      <div><strong>${fmt(r.bubbles)}</strong><span>${s.bubbles}</span></div></div>
      <p class="lab-note"><strong>${s.limiting}:</strong> ${names[r.limiting]}${r.limiting === 'temp' ? ` — ${r.temp > 28 ? s.hot : s.cold}` : ''}</p>`;
  },
  summary: r => `${fmt(r.bubbles)} O₂/min`,
};
