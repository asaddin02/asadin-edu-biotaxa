import { esc } from '../core/dom.js';
import { S, pick, level, role, LEVELS, fmt } from '../core/prefs.js';
import { getProgress, trackTopic, BADGES } from '../core/userdata.js';
import { ui } from '../i18n/ui.js';
import { TOPICS, findTopic, PHASES } from '../data/topics/index.js';
import { findSpecies } from '../data/species.js';
import { pageHead, listenButton, notice, routeURL } from '../components/common.js';
import { rich } from '../components/richtext.js';
import { curatedCard } from '../components/cards.js';
import { quizMarkup, bindQuiz, questionsForLevel } from '../components/quiz.js';
import { icon } from '../components/icons.js';
import { modeLabel } from '../components/layout.js';

const s = S({
  title: ['Belajar', 'Learn'],
  heading: ['Belajar dengan caramu.', 'Learn your way.'],
  sub: [
    'Materi, kuis, dan kegiatan menyesuaikan mode belajarmu.',
    'Lessons, quizzes and activities adapt to your learning mode.',
  ],
  forYou: ['Materi untuk jenjangmu', 'Lessons for your level'],
  allTopics: ['Semua materi', 'All lessons'],
  showAll: ['Tampilkan semua materi', 'Show all lessons'],
  showMine: ['Hanya materi jenjangku', 'Only my level'],
  read: ['Sudah dibaca', 'Read'],
  best: ['Nilai kuis terbaik', 'Best quiz score'],
  activities: ['Kegiatan', 'Activities'],
  quiz: ['Kuis & tebak foto', 'Quizzes & photo game'],
  quizText: ['Uji pemahaman dan kumpulkan lencana.', 'Check your understanding and earn badges.'],
  compare: ['Bandingkan dua spesies', 'Compare two species'],
  compareText: ['Temukan persamaan dan perbedaan.', 'Find similarities and differences.'],
  nearby: ['Di sekitarku', 'Near me'],
  nearbyText: ['Makhluk hidup yang pernah diamati di dekatmu.', 'Living things observed near you.'],
  purba: ['Kehidupan purba', 'Prehistoric life'],
  purbaText: ['Garis waktu bumi dan fosil Indonesia.', 'Earth’s timeline and Indonesian fossils.'],
  glossary: ['Kamus istilah', 'Glossary'],
  glossaryText: [
    'Lebih dari 100 istilah biologi yang mudah dipahami.',
    'Over 100 biology terms made simple.',
  ],
  lab: ['Laboratorium virtual', 'Virtual laboratory'],
  labText: ['7 simulasi untuk menguji hipotesis.', '7 simulations to test hypotheses.'],
  teacher: ['Mode Guru', 'Teacher mode'],
  teacherText: [
    'Modul ajar, kunci jawaban, dan tugas lewat tautan.',
    'Lesson plans, answer keys and link-based assignments.',
  ],
  passport: ['Paspor Penjelajah', 'Explorer passport'],
  passportText: ['{n} dari {t} lencana terkumpul.', '{n} of {t} badges earned.'],
  yourMode: ['Mode belajarmu', 'Your learning mode'],
  change: ['Ganti', 'Change'],
  // Topic page
  version: ['Baca versi', 'Read the version for'],
  keySpecies: ['Kenali makhluk hidupnya', 'Meet the organisms'],
  activity: ['Coba kegiatan ini', 'Try this activity'],
  tryLab: ['Coba di laboratorium', 'Try it in the laboratory'],
  quizTitle: ['Kuis materi', 'Lesson quiz'],
  notesTitle: ['Catatanku', 'My notes'],
  teacherNotes: ['Catatan guru', 'Teacher notes'],
  goals: ['Tujuan pembelajaran', 'Learning objectives'],
  time: ['Alokasi waktu', 'Time allocation'],
  steps: ['Langkah kegiatan', 'Lesson steps'],
  assess: ['Asesmen', 'Assessment'],
  phase: ['Kaitan kurikulum (indikatif)', 'Curriculum link (indicative)'],
  phaseNote: [
    'Pemetaan ini bersifat indikatif. Cocokkan dengan Capaian Pembelajaran terbaru yang berlaku di sekolah Anda.',
    'This mapping is indicative. Check it against the current learning outcomes used by your school.',
  ],
  answerKey: ['Kunci jawaban', 'Answer key'],
  readMore: ['Bacaan lanjutan', 'Further reading'],
  printPlan: ['Cetak modul ajar', 'Print lesson plan'],
  prevTopic: ['Materi sebelumnya', 'Previous lesson'],
  nextTopic: ['Materi berikutnya', 'Next lesson'],
  notFound: ['Materi tidak ditemukan.', 'Lesson not found.'],
});

export const title = route => (route?.id && findTopic(route.id) ? pick(findTopic(route.id).title) : s.title);

function topicCard(topic, progress) {
  const best = progress.quizzes[`topic-${topic.id}`]?.best;
  return `<a class="topic-card" href="#/learn/${topic.id}"><span class="topic-icon" aria-hidden="true">${topic.icon}</span>
    <span class="topic-text"><strong>${esc(pick(topic.title))}</strong><small>${esc(pick(topic.summary))}</small>
    <span class="topic-meta">${topic.levels.map(l => `<span class="level-dot${l === level ? ' current' : ''}">${esc(ui[l])}</span>`).join('')}${progress.topics[topic.id] ? `<span class="done">✓ ${s.read}</span>` : ''}${best != null ? `<span class="done">⭐ ${fmt(Math.round(best * 100))}%</span>` : ''}</span></span></a>`;
}

function activityCard(href, iconName, title, text, tone) {
  return `<a class="action-card tone-${tone}" href="${href}"><span class="action-icon">${icon(iconName)}</span><span><strong>${esc(title)}</strong><small>${esc(text)}</small></span></a>`;
}

function hub(ctx) {
  const progress = getProgress();
  const showAll = ctx.params.get('all') === '1';
  const mine = TOPICS.filter(t => t.levels.includes(level));
  const list = showAll ? TOPICS : mine;
  const earned = Object.keys(progress.badges).length;
  ctx.main.innerHTML = `${pageHead(s.heading, s.sub, 'BIOTAXA / LEARN')}
    <div class="mode-banner"><span>${s.yourMode}: <strong>${esc(modeLabel())}</strong></span><button type="button" class="btn small secondary" data-open-mode>${s.change}</button></div>
    <section class="section"><div class="section-head"><h2>${showAll ? s.allTopics : s.forYou}</h2><a class="text-link" href="${routeURL('learn', showAll ? {} : { all: 1 })}">${showAll ? s.showMine : s.showAll} →</a></div>
      <div class="topic-grid">${list.map(t => topicCard(t, progress)).join('')}</div></section>
    <section class="section"><div class="section-head"><h2>${s.activities}</h2></div><div class="action-grid">
      ${activityCard('#/quiz', 'quiz', s.quiz, s.quizText, 'lime')}
      ${activityCard('#/compare', 'compare', s.compare, s.compareText, 'lilac')}
      ${activityCard('#/nearby', 'nearby', s.nearby, s.nearbyText, 'sky')}
      ${activityCard('#/purba', 'fossil', s.purba, s.purbaText, 'apricot')}
      ${activityCard('#/kamus', 'book', s.glossary, s.glossaryText, 'mint')}
      ${activityCard('#/lab', 'lab', s.lab, s.labText, 'blue')}
      ${activityCard('#/guru', 'teacher', s.teacher, s.teacherText, role === 'teacher' ? 'lime' : 'grey')}
      ${activityCard('#/saved?tab=passport', 'star', s.passport, s.passportText.replace('{n}', fmt(earned)).replace('{t}', fmt(BADGES.length)), 'apricot')}
    </div></section>`;
}

function topicPage(ctx, topic) {
  const version = LEVELS.includes(ctx.params.get('v')) ? ctx.params.get('v') : level;
  const at = (map, lv) => {
    if (!map) return null;
    if (map[lv] !== undefined) return map[lv];
    const i = LEVELS.indexOf(lv);
    for (let d = 1; d < LEVELS.length; d++)
      for (const l of [LEVELS[i - d], LEVELS[i + d]]) if (l && map[l] !== undefined) return map[l];
    return null;
  };
  const body = at(topic.body, version);
  const activity = at(topic.activity, version);
  const goals = at(topic.teacher?.goals, version);
  const questions = questionsForLevel(topic.quiz);
  const species = topic.species.map(sci => findSpecies({ sci })).filter(Boolean);
  const index = TOPICS.indexOf(topic);
  const prev = TOPICS[index - 1];
  const next = TOPICS[index + 1];
  const reads = (topic.read || []).filter(r => !r.lv || LEVELS.indexOf(version) >= LEVELS.indexOf(r.lv) - 1);
  const teacherOpen = role === 'teacher';
  const labNames = {
    photosynthesis: ['Fotosintesis', 'Photosynthesis'],
    food: ['Aliran energi', 'Energy flow'],
    osmosis: ['Osmosis', 'Osmosis'],
    mendel: ['Pewarisan sifat', 'Heredity'],
    selection: ['Seleksi alam', 'Natural selection'],
    scale: ['Skala kehidupan', 'Scale of life'],
    lever: ['Tuas & capit', 'Levers & pincers'],
  };

  ctx.main.innerHTML = `<nav class="breadcrumbs" aria-label="${s.title}"><a href="#/learn">${s.title}</a><span aria-hidden="true">›</span><a href="#/learn/${topic.id}" aria-current="page">${esc(pick(topic.title))}</a></nav>
    <header class="page-head topic-head"><span class="topic-hero-icon" aria-hidden="true">${topic.icon}</span><span class="eyebrow">${esc(pick(PHASES[version]))}</span><h1>${esc(pick(topic.title))}</h1><p>${esc(pick(topic.summary))}</p></header>
    <div class="version-switch" role="group" aria-label="${s.version}"><span>${s.version}:</span>${LEVELS.filter(
      l => topic.body[l]
    )
      .map(
        l =>
          `<a href="${routeURL(`learn/${topic.id}`, l === level ? {} : { v: l })}" class="${l === version ? 'selected' : ''}"${l === version ? ' aria-current="true"' : ''}>${esc(ui[l])}</a>`
      )
      .join('')}</div>
    <div class="topic-layout">
      <article class="topic-body" id="topic-read"><div class="topic-tools">${listenButton('#topic-text', `topic-${topic.id}`)}</div><div id="topic-text">${rich(pick(body))}</div></article>
      <aside class="topic-side">
        ${activity ? `<section class="card activity-card"><h2>🔎 ${s.activity}</h2>${rich(pick(activity))}</section>` : ''}
        ${topic.lab ? `<a class="action-card tone-blue" href="#/lab/${topic.lab}"><span class="action-icon">${icon('lab')}</span><span><strong>${s.tryLab}</strong><small>${esc(pick(labNames[topic.lab]))}</small></span></a>` : ''}
      </aside>
    </div>
    ${species.length ? `<section class="section"><div class="section-head"><h2>${s.keySpecies}</h2></div><div class="discovery-grid">${species.map(sp => curatedCard(sp, { showFact: version === 'sd' })).join('')}</div></section>` : ''}
    <section class="section" id="quiz"><div class="section-head"><h2>❓ ${s.quizTitle}</h2></div>${quizMarkup(`topic-${topic.id}`, questions, { seed: index + 7 })}</section>
    <section class="worksheet"><h2>${s.notesTitle}</h2><label class="sr-only" for="topic-notes">${ui.notes}</label><textarea id="topic-notes" data-note-key="topic-${topic.id}" data-note-label="${esc(pick(topic.title))}" placeholder="${ui.notesHint}"></textarea><small data-note-status>${ui.notesSaved}</small></section>
    <details class="teacher-notes"${teacherOpen ? ' open' : ''}><summary>${icon('teacher')} ${s.teacherNotes}</summary>
      <div class="teacher-grid">
        <section><h3>${s.phase}</h3><p>${esc(pick(PHASES[version]))}</p><p class="muted small">${s.phaseNote}</p></section>
        ${goals ? `<section><h3>${s.goals}</h3><p>${esc(pick(goals))}</p></section>` : ''}
        ${topic.teacher?.time ? `<section><h3>${s.time}</h3><p>${esc(pick(topic.teacher.time))}</p></section>` : ''}
        ${topic.teacher?.steps ? `<section class="wide"><h3>${s.steps}</h3><ol>${topic.teacher.steps.map(x => `<li>${esc(pick(x))}</li>`).join('')}</ol></section>` : ''}
        ${topic.teacher?.assess ? `<section><h3>${s.assess}</h3><ul>${topic.teacher.assess.map(x => `<li>${esc(pick(x))}</li>`).join('')}</ul></section>` : ''}
        <section class="wide"><h3>${s.answerKey}</h3><ol class="answer-key">${questions.map(q => `<li>${esc(pick(q.q))} <strong>→ ${esc(pick(q.a[q.c]))}</strong></li>`).join('')}</ol></section>
      </div>
      <div class="actions"><button type="button" class="btn secondary" data-print>${icon('print')} ${s.printPlan}</button><a class="btn ghost" href="#/guru?topic=${topic.id}">${icon('teacher')} ${ui.teacherLong}</a></div>
    </details>
    ${reads.length ? `<section class="section"><h2>${s.readMore}</h2><ul class="source-list">${reads.map(r => `<li><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} ↗</a></li>`).join('')}</ul></section>` : ''}
    <nav class="topic-nav" aria-label="${s.title}">${prev ? `<a class="btn secondary" href="#/learn/${prev.id}">← ${esc(pick(prev.title))}</a>` : '<span></span>'}${next ? `<a class="btn secondary" href="#/learn/${next.id}">${esc(pick(next.title))} →</a>` : ''}</nav>`;
  bindQuiz(ctx.on);
  trackTopic(topic.id);
}

export async function render(ctx) {
  if (!ctx.id) return hub(ctx);
  const topic = findTopic(ctx.id);
  if (!topic) {
    ctx.main.innerHTML = notice(s.notFound) + `<p><a class="btn" href="#/learn">← ${s.title}</a></p>`;
    return;
  }
  topicPage(ctx, topic);
}
