// DNA → mRNA → protein with the standard genetic code (NCBI translation table 1).
// Presets use the first 90 bases of the human HBB coding sequence (NCBI NM_000518.5) and
// documented variants, so learners compare a normal protein with real mutations.
import { esc } from '../core/dom.js';
import { S, fmt, pick } from '../core/prefs.js';

const s = S({
  preset: ['Contoh urutan', 'Example sequence'],
  custom: ['Urutan buatanku', 'My own sequence'],
  seq: ['Untai DNA pengode (5′→3′)', 'DNA coding strand (5′→3′)'],
  seqHint: [
    'Ketik huruf A, T, G, C. Huruf lain diabaikan. Maksimal 300 basa.',
    'Type the letters A, T, G, C. Other characters are ignored. Up to 300 bases.',
  ],
  start: ['Mulai membaca', 'Start reading'],
  fromAug: ['dari kodon awal ATG pertama', 'from the first ATG start codon'],
  fromFirst: ['dari basa pertama', 'from the first base'],
  template: ['DNA cetakan (3′→5′)', 'Template DNA (3′→5′)'],
  mrna: ['mRNA (5′→3′)', 'mRNA (5′→3′)'],
  protein: ['Protein (asam amino)', 'Protein (amino acids)'],
  length: ['Panjang protein', 'Protein length'],
  aa: ['asam amino', 'amino acids'],
  stop: ['berhenti di kodon henti', 'stops at a stop codon'],
  noStop: [
    'Urutan habis sebelum kodon henti (ini potongan gen).',
    'The sequence ends before a stop codon (this is part of a gene).',
  ],
  noStart: [
    'Tidak ada kodon awal ATG, sehingga tidak ada protein.',
    'No ATG start codon, so no protein is made.',
  ],
  compare: ['Dibanding protein normal', 'Compared with the normal protein'],
  table: ['Tabel DNA, mRNA, dan protein (dapat digeser)', 'DNA, mRNA and protein table (scrollable)'],
  same: ['Tidak ada perubahan asam amino.', 'No amino acid changes.'],
  silent: [
    'Urutan DNA berubah, tetapi protein sama (mutasi diam).',
    'The DNA changed but the protein is the same (silent mutation).',
  ],
  changed: ['Asam amino berubah pada posisi', 'Amino acid changed at position'],
  truncated: [
    'Protein terpotong karena muncul kodon henti lebih awal (mutasi tanpa arti).',
    'The protein is cut short by an early stop codon (nonsense mutation).',
  ],
  frameshift: [
    'Jumlah basa berubah bukan kelipatan tiga, sehingga kerangka baca bergeser.',
    'The number of bases changed by a non-multiple of three, so the reading frame shifts.',
  ],
  numbering: [
    'Nomor posisi dihitung dari metionin awal. Dalam penomoran klinis hemoglobin, metionin tidak dihitung, jadi posisi 7 di sini disebut posisi 6.',
    'Positions are counted from the starting methionine. Clinical haemoglobin numbering skips methionine, so position 7 here is called position 6.',
  ],
  source: [
    'Sumber urutan: NCBI NM_000518.5 (gen HBB manusia).',
    'Sequence source: NCBI NM_000518.5 (human HBB gene).',
  ],
});

const HBB = 'ATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAACGTGGATGAAGTTGGTGGTGAGGCCCTGGGC';
const mutate = (pos, from, to) => {
  if (HBB.slice(pos, pos + from.length) !== from) throw new Error('bad preset');
  return HBB.slice(0, pos) + to + HBB.slice(pos + from.length);
};
// Positions are 0-based offsets in HBB (codon n starts at 3·(n−1)).
export const PRESETS = {
  hbb: {
    name: ['β-globin normal (awal gen HBB)', 'Normal β-globin (start of HBB)'],
    seq: HBB,
  },
  sickle: {
    name: ['Sel sabit: GAG → GTG pada kodon 7', 'Sickle cell: GAG → GTG at codon 7'],
    seq: mutate(19, 'A', 'T'),
  },
  hbe: {
    name: ['HbE: GAG → AAG pada kodon 27', 'HbE: GAG → AAG at codon 27'],
    seq: mutate(78, 'G', 'A'),
  },
  cd17: {
    name: ['Talasemia beta kodon 17: AAG → TAG', 'Beta-thalassaemia codon 17: AAG → TAG'],
    seq: mutate(51, 'A', 'T'),
  },
  silent: {
    name: ['Contoh mutasi diam: GTG → GTC pada kodon 2', 'Silent example: GTG → GTC at codon 2'],
    seq: mutate(5, 'G', 'C'),
  },
  insert: {
    name: ['Contoh sisipan satu basa G setelah kodon 9', 'Example: one G inserted after codon 9'],
    seq: HBB.slice(0, 27) + 'G' + HBB.slice(27),
  },
};

// Standard code: index = 16·first + 4·second + third, bases ordered U, C, A, G.
const TABLE = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
const ORDER = { U: 0, C: 1, A: 2, G: 3 };
const THREE = {
  A: 'Ala',
  R: 'Arg',
  N: 'Asn',
  D: 'Asp',
  C: 'Cys',
  Q: 'Gln',
  E: 'Glu',
  G: 'Gly',
  H: 'His',
  I: 'Ile',
  L: 'Leu',
  K: 'Lys',
  M: 'Met',
  F: 'Phe',
  P: 'Pro',
  S: 'Ser',
  T: 'Thr',
  W: 'Trp',
  Y: 'Tyr',
  V: 'Val',
  '*': 'STOP',
};
const PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };

export const cleanDNA = text =>
  String(text || '')
    .toUpperCase()
    .replace(/U/g, 'T')
    .replace(/[^ACGT]/g, '')
    .slice(0, 300);
export const translateCodon = codon => TABLE[16 * ORDER[codon[0]] + 4 * ORDER[codon[1]] + ORDER[codon[2]]];

/** Codons and amino acids read from `start` until a stop codon or the end. */
export function translate(dna, fromAug = true) {
  const mrna = dna.replace(/T/g, 'U');
  const start = fromAug ? mrna.indexOf('AUG') : 0;
  if (start < 0) return { mrna, start, codons: [], protein: '', stopped: false };
  const codons = [];
  let protein = '';
  let stopped = false;
  for (let i = start; i + 3 <= mrna.length; i += 3) {
    const codon = mrna.slice(i, i + 3);
    const aa = translateCodon(codon);
    codons.push({ codon, aa });
    if (aa === '*') {
      stopped = true;
      break;
    }
    protein += aa;
  }
  return { mrna, start, codons, protein, stopped };
}

let draft = null;

/** Edit distance, used to decide whether a typed sequence is a variant of HBB. */
function editDistance(a, b) {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++)
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = row;
  }
  return prev[b.length];
}

function sequenceOf(v) {
  if (draft != null) return cleanDNA(draft);
  if (v.preset !== 'custom' && PRESETS[v.preset]) return PRESETS[v.preset].seq;
  return cleanDNA(v.seq);
}

export default {
  id: 'genetic',
  icon: '🔡',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Kode genetik', 'Genetic code'],
  intro: [
    'Sel membaca [[dna|DNA]] melalui dua tahap: transkripsi (DNA → mRNA) dan translasi (mRNA → protein). Setiap tiga basa mRNA (kodon) menentukan satu asam amino. Pilih contoh urutan gen β-globin manusia, atau ketik urutanmu sendiri lalu buat [[mutasi]].',
    'Cells read [[dna|DNA]] in two steps: transcription (DNA → mRNA) and translation (mRNA → protein). Every three mRNA bases (a codon) specify one amino acid. Choose an example from the human β-globin gene, or type your own sequence and make [[mutasi|mutations]].',
  ],
  question: [
    'Mengapa mengganti satu basa kadang tidak mengubah protein, tetapi menyisipkan satu basa hampir selalu mengubah banyak asam amino?',
    'Why does changing one base sometimes leave the protein unchanged, while inserting one base usually changes many amino acids?',
  ],
  controls: [],
  defaults: { preset: 'hbb', seq: HBB, start: 'aug' },
  refs: [
    { label: 'NCBI NM_000518.5 (HBB)', url: 'https://www.ncbi.nlm.nih.gov/nuccore/NM_000518.5' },
    { label: 'NCBI Genetic Codes', url: 'https://www.ncbi.nlm.nih.gov/Taxonomy/Utils/wprintgc.cgi' },
  ],
  onSelect(key, values) {
    draft = null;
    if (key === 'preset' && PRESETS[values.preset]) values.seq = PRESETS[values.preset].seq;
    if (key === 'seq') {
      values.seq = cleanDNA(values.seq);
      const match = Object.entries(PRESETS).find(([, p]) => p.seq === values.seq);
      values.preset = match ? match[0] : 'custom';
    }
  },
  panel(v) {
    const seq = v.preset !== 'custom' && PRESETS[v.preset] ? PRESETS[v.preset].seq : cleanDNA(v.seq);
    return `<label class="field"><span>${s.preset}</span><select data-lab-select="preset">${Object.entries(
      PRESETS
    )
      .map(
        ([id, p]) =>
          `<option value="${id}"${id === v.preset ? ' selected' : ''}>${esc(pick(p.name))}</option>`
      )
      .join(
        ''
      )}<option value="custom"${v.preset === 'custom' ? ' selected' : ''}>${s.custom}</option></select></label>
      <label class="field"><span>${s.seq}</span><textarea id="dna-seq" class="sequence-input" rows="3" spellcheck="false" autocomplete="off" data-lab-select="seq">${esc(seq)}</textarea><small class="muted">${s.seqHint}</small></label>
      <fieldset class="inline-options"><legend>${s.start}</legend>${[
        ['aug', s.fromAug],
        ['first', s.fromFirst],
      ]
        .map(
          ([id, label]) =>
            `<label><input type="radio" name="genetic-start" value="${id}" data-lab-select="start"${v.start === id ? ' checked' : ''}> ${label}</label>`
        )
        .join('')}</fieldset>`;
  },
  compute(v) {
    const dna = sequenceOf(v);
    const result = translate(dna, v.start !== 'first');
    const ref = translate(HBB, true);
    const onHbb = (v.preset !== 'custom' && draft == null) || editDistance(dna, HBB) <= 12;
    const diffs = [];
    if (onHbb && result.start >= 0) {
      const n = Math.min(result.protein.length, ref.protein.length);
      for (let i = 0; i < n; i++)
        if (result.protein[i] !== ref.protein[i])
          diffs.push({ pos: i + 1, from: ref.protein[i], to: result.protein[i] });
    }
    return {
      dna,
      ...result,
      ref,
      diffs,
      compareHbb: onHbb && dna !== HBB,
      frameshift: Math.abs(dna.length - HBB.length) % 3 !== 0,
      truncated: result.stopped && result.protein.length < ref.protein.length,
    };
  },
  output(r) {
    if (!r.dna.length) return `<p class="lab-note">${s.seqHint}</p>`;
    if (r.start < 0) return `<p class="lab-note bad">${s.noStart}</p>`;
    const offset = r.start;
    const lead = r.dna.slice(0, offset);
    const coding = r.codons.map((c, i) => r.dna.slice(offset + i * 3, offset + i * 3 + 3));
    const complement = seq => [...seq].map(b => PAIR[b]).join('');
    const changed = new Set(r.diffs.map(d => d.pos - 1));
    const row = (label, cells, cls = '') =>
      `<div class="codon-row ${cls}"><span class="codon-label">${label}</span><div class="codon-cells">${lead ? `<span class="codon lead">${esc(cls === 'template' ? complement(lead) : cls === 'mrna' ? lead.replace(/T/g, 'U') : lead)}</span>` : ''}${cells}</div></div>`;
    const dnaCells = coding
      .map((c, i) => `<span class="codon${changed.has(i) ? ' changed' : ''}">${c}</span>`)
      .join('');
    const templateCells = coding.map(c => `<span class="codon">${complement(c)}</span>`).join('');
    const mrnaCells = r.codons
      .map((c, i) => `<span class="codon${changed.has(i) ? ' changed' : ''}">${c.codon}</span>`)
      .join('');
    const aaCells = r.codons
      .map(
        (c, i) =>
          `<span class="codon aa${c.aa === '*' ? ' stop' : ''}${changed.has(i) ? ' changed' : ''}" title="${c.aa}">${THREE[c.aa]}</span>`
      )
      .join('');
    let verdict = '';
    if (r.compareHbb) {
      if (r.frameshift) verdict = `<p class="lab-note bad">${s.frameshift}</p>`;
      if (r.truncated) verdict += `<p class="lab-note bad">${s.truncated}</p>`;
      if (r.diffs.length && !r.frameshift)
        verdict += `<p class="lab-note bad">${s.changed} ${r.diffs.map(d => `${d.pos} (${THREE[d.from]} → ${THREE[d.to]})`).join(', ')}.</p>`;
      if (!r.diffs.length && !r.truncated && !r.frameshift)
        verdict += `<p class="lab-note ok">${s.silent}</p>`;
    }
    return `<div class="genetic-output"><div class="codon-scroll" tabindex="0" role="region" aria-label="${s.table}">${row(s.seq, dnaCells)}${row(s.template, templateCells, 'template')}${row(s.mrna, mrnaCells, 'mrna')}${row(s.protein, aaCells, 'protein')}</div>
      <p class="lab-headline">${s.length}: ${fmt(r.protein.length)} ${s.aa}${r.stopped ? ` · ${s.stop}` : ''}</p>
      ${r.stopped ? '' : `<p class="lab-note">${s.noStop}</p>`}
      ${r.compareHbb ? `<h4>${s.compare}</h4>${verdict}` : ''}
      <p class="muted small">${s.numbering} ${s.source}</p></div>`;
  },
  summary: r =>
    r.start < 0
      ? s.noStart
      : `${r.protein.slice(0, 40)}${r.protein.length > 40 ? '…' : ''} (${fmt(r.protein.length)} ${s.aa})${r.diffs.length ? ` · Δ ${r.diffs.map(d => `${d.from}${d.pos}${d.to}`).join(', ')}` : ''}`,
  bind(on, rerender) {
    on('input', '#dna-seq', (event, area) => {
      draft = area.value;
      rerender();
    });
  },
};
