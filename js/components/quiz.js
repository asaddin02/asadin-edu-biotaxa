// Multiple-choice quiz with instant feedback. Works offline (no network needed).
import { esc, seeded, shuffle } from '../core/dom.js';
import { S, pick, level, LEVELS, fmt } from '../core/prefs.js';
import { trackQuiz } from '../core/userdata.js';

const s = S({
  question: ['Soal', 'Question'],
  of: ['dari', 'of'],
  right: ['Benar!', 'Correct!'],
  wrong: ['Belum tepat.', 'Not quite.'],
  answer: ['Jawaban', 'Answer'],
  score: ['Skormu', 'Your score'],
  retry: ['Ulangi kuis', 'Try again'],
  great: ['Luar biasa! Kamu menguasai materi ini.', 'Excellent! You have mastered this topic.'],
  good: ['Bagus! Baca lagi bagian yang masih keliru.', 'Good work! Review the parts you missed.'],
  keep: ['Terus berlatih! Baca materinya lalu coba lagi.', 'Keep practising! Read the lesson and try again.'],
});

/** Questions for the current level, falling back to neighbouring levels when too few exist. */
export function questionsForLevel(quiz, min = 4) {
  const exact = quiz.filter(q => !q.lv || q.lv.includes(level));
  if (exact.length >= min) return exact;
  const i = LEVELS.indexOf(level);
  const near = quiz.filter(q => q.lv?.some(l => Math.abs(LEVELS.indexOf(l) - i) === 1) && !exact.includes(q));
  return [...exact, ...near].slice(0, Math.max(min, exact.length));
}

export function quizMarkup(id, questions, { seed = 1 } = {}) {
  const random = seeded(seed);
  return `<div class="quiz" data-quiz="${esc(id)}" data-total="${questions.length}">${questions
    .map((q, i) => {
      const order = shuffle(
        q.a.map((a, j) => j),
        random
      );
      return `<fieldset class="quiz-q" data-correct="${q.c}"><legend><span class="quiz-num">${s.question} ${i + 1} ${s.of} ${questions.length}</span>${esc(pick(q.q))}</legend>
        <div class="quiz-options">${order.map(j => `<button type="button" class="quiz-option" data-answer="${j}">${esc(pick(q.a[j]))}</button>`).join('')}</div>
        <p class="quiz-feedback" role="status" aria-live="polite"></p>
        <p class="quiz-why" hidden>${esc(pick(q.why || ''))}</p></fieldset>`;
    })
    .join('')}<div class="quiz-result" role="status" aria-live="polite" hidden></div></div>`;
}

/** Wire up a quiz rendered with quizMarkup. `on` is the page-scoped event helper. */
export function bindQuiz(on, { onFinish } = {}) {
  on('click', '.quiz [data-answer]', (event, button) => {
    const fieldset = button.closest('.quiz-q');
    if (fieldset.dataset.done) return;
    fieldset.dataset.done = 'true';
    const right = button.dataset.answer === fieldset.dataset.correct;
    fieldset.dataset.result = right ? 'right' : 'wrong';
    fieldset.querySelectorAll('.quiz-option').forEach(o => {
      o.disabled = true;
      if (o.dataset.answer === fieldset.dataset.correct) o.classList.add('right');
    });
    if (!right) button.classList.add('wrong');
    const correctText = fieldset.querySelector(`[data-answer="${fieldset.dataset.correct}"]`).textContent;
    fieldset.querySelector('.quiz-feedback').textContent = right
      ? `🎉 ${s.right}`
      : `${s.wrong} ${s.answer}: ${correctText}`;
    fieldset.querySelector('.quiz-why').hidden = false;
    const quiz = fieldset.closest('.quiz');
    const all = quiz.querySelectorAll('.quiz-q');
    const done = quiz.querySelectorAll('.quiz-q[data-done]');
    if (done.length === all.length) {
      const score = quiz.querySelectorAll('.quiz-q[data-result="right"]').length;
      const ratio = score / all.length;
      trackQuiz(quiz.dataset.quiz, ratio);
      const result = quiz.querySelector('.quiz-result');
      result.hidden = false;
      result.innerHTML = `<strong>${s.score}: ${fmt(score)} / ${fmt(all.length)}</strong><p>${ratio >= 0.8 ? `⭐ ${s.great}` : ratio >= 0.5 ? s.good : s.keep}</p><button type="button" class="btn secondary" data-quiz-retry>${s.retry}</button>`;
      onFinish?.(ratio);
    } else {
      const next = [...all].find(q => !q.dataset.done);
      next?.querySelector('.quiz-option')?.focus({ preventScroll: true });
    }
  });
  on('click', '[data-quiz-retry]', (event, button) => {
    const quiz = button.closest('.quiz');
    quiz.querySelectorAll('.quiz-q').forEach(q => {
      delete q.dataset.done;
      delete q.dataset.result;
      q.querySelector('.quiz-feedback').textContent = '';
      q.querySelector('.quiz-why').hidden = true;
      q.querySelectorAll('.quiz-option').forEach(o => {
        o.disabled = false;
        o.classList.remove('right', 'wrong');
      });
    });
    quiz.querySelector('.quiz-result').hidden = true;
    quiz.querySelector('.quiz-option')?.focus();
  });
}
