// Curriculum topics. Each file holds text for every level, quizzes and teacher notes.
// To add a topic: create js/data/topics/<id>.js following an existing file, then list it here.
import ciri from './ciri.js';
import klasifikasi from './klasifikasi.js';
import sel from './sel.js';
import fotosintesis from './fotosintesis.js';
import ekosistem from './ekosistem.js';
import adaptasi from './adaptasi.js';
import perkembangbiakan from './perkembangbiakan.js';
import pewarisan from './pewarisan.js';
import evolusi from './evolusi.js';
import mikroorganisme from './mikroorganisme.js';
import keanekaragaman from './keanekaragaman.js';
import purba from './purba.js';

export const TOPICS = [
  ciri,
  klasifikasi,
  sel,
  fotosintesis,
  ekosistem,
  adaptasi,
  perkembangbiakan,
  pewarisan,
  evolusi,
  mikroorganisme,
  keanekaragaman,
  purba,
];
export const findTopic = id => TOPICS.find(t => t.id === id) || null;

/** Kurikulum Merdeka phases for each BioTaxa level (indicative mapping). */
export const PHASES = {
  sd: ['Fase A–C · SD kelas 1–6 (IPAS)', 'Phases A–C · Grades 1–6 (IPAS)'],
  smp: ['Fase D · SMP kelas 7–9 (IPA)', 'Phase D · Grades 7–9 (Science)'],
  sma: ['Fase E–F · SMA kelas 10–12 (Biologi)', 'Phases E–F · Grades 10–12 (Biology)'],
  kuliah: ['Perguruan tinggi · Biologi dasar', 'University · Introductory biology'],
};
