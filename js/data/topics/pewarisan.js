export default {
  id: 'pewarisan',
  icon: '🧬',
  levels: ['smp', 'sma', 'kuliah'],
  title: ['Pewarisan sifat', 'Heredity'],
  summary: [
    'Mengapa anak mirip orang tuanya? Dari gen, alel, hingga persilangan Mendel.',
    'Why do children resemble their parents? Genes, alleles and Mendel’s crosses.',
  ],
  body: {
    sd: [
      `Pernahkah kamu diberi tahu bahwa matamu mirip mata ibumu atau rambutmu mirip rambut ayahmu? Itu karena sifat diturunkan dari orang tua kepada anak.

Di dalam setiap [[sel]] ada “buku resep” kecil bernama [[dna|DNA]]. Resep ini diwariskan dari ayah dan ibu, sehingga kita punya campuran sifat keduanya.

Hewan dan tumbuhan juga begitu. Anak kucing belang bisa lahir dari induk yang belang. Biji mangga harum tumbuh menjadi pohon mangga, bukan pohon jambu.`,
      `Have you been told your eyes look like your mother’s or your hair like your father’s? That is because traits pass from parents to children.

Inside every [[sel|cell]] is a tiny “recipe book” called [[dna|DNA]]. It comes from both parents, so we get a mix of their traits.

Animals and plants are the same. A striped kitten can be born to a striped mother. A mango seed grows into a mango tree, not a guava tree.`,
    ],
    smp: [
      `Sifat makhluk hidup diatur oleh [[gen]], yaitu bagian [[dna|DNA]] yang tersimpan dalam [[kromosom]]. Setiap gen memiliki bentuk-bentuk yang disebut [[alel]]. Kita mewarisi satu alel dari ayah dan satu dari ibu.

Gregor Mendel meneliti tanaman ercis dan menemukan pola pewarisan. Bila bunga ungu (alel **A**, [[dominan]]) disilangkan dengan bunga putih (alel **a**, [[resesif]]), semua keturunan pertama berbunga ungu (**Aa**). Bila keturunan itu disilangkan sesamanya, perbandingan ungu : putih mendekati **3 : 1**.

Istilah penting:
- [[genotipe|Genotipe]]: susunan alel, misalnya AA, Aa, atau aa.
- [[fenotipe|Fenotipe]]: sifat yang tampak, misalnya ungu atau putih.
- [[homozigot|Homozigot]] (AA atau aa) dan [[heterozigot]] (Aa).

Coba Laboratorium Pewarisan di BioTaxa: pilih genotipe induk dan lihat kotak Punnett-nya.`,
      `Traits are controlled by [[gen|genes]], stretches of [[dna|DNA]] carried on [[kromosom|chromosomes]]. Each gene has versions called [[alel|alleles]]. We inherit one allele from each parent.

Gregor Mendel studied pea plants and found patterns. Crossing purple flowers (allele **A**, [[dominan|dominant]]) with white (allele **a**, [[resesif|recessive]]) gives all-purple first offspring (**Aa**). Crossing those together gives a purple : white ratio close to **3 : 1**.

Key terms:
- [[genotipe|Genotype]]: the alleles, such as AA, Aa or aa.
- [[fenotipe|Phenotype]]: the visible trait, such as purple or white.
- [[homozigot|Homozygous]] (AA or aa) and [[heterozigot|heterozygous]] (Aa).

Try the Heredity Lab in BioTaxa: choose parent genotypes and see the Punnett square.`,
    ],
    sma: [
      `Hukum Mendel I (segregasi): dua alel suatu gen berpisah saat pembentukan gamet, sehingga setiap gamet membawa satu alel. Hukum Mendel II (pemilahan bebas): alel dari gen yang berbeda diwariskan secara bebas bila gennya terletak pada kromosom berbeda atau berjauhan—menghasilkan rasio fenotipe 9 : 3 : 3 : 1 pada persilangan dihibrid.

Banyak pola tidak mengikuti Mendel sederhana: dominansi tidak sempurna (bunga pukul empat merah × putih → merah muda), kodominansi (golongan darah AB), alel ganda (sistem ABO), gen terpaut dan pindah silang, pewarisan terpaut kromosom X (buta warna, hemofilia), serta sifat poligenik (tinggi badan, warna kulit) yang juga dipengaruhi lingkungan.

Rasio Mendel adalah peluang. Pada jumlah keturunan kecil, hasil nyata bisa menyimpang cukup jauh dari 3 : 1; makin banyak keturunan, makin dekat ke rasio harapan. Simulasi acak di Lab BioTaxa memperlihatkan hal ini.`,
      `Mendel’s first law (segregation): the two alleles of a gene separate when gametes form, so each gamete carries one. The second law (independent assortment): alleles of different genes are inherited independently when the genes are on different chromosomes or far apart — giving a 9 : 3 : 3 : 1 ratio in a dihybrid cross.

Many patterns go beyond simple Mendelian inheritance: incomplete dominance (red × white four-o’clocks → pink), codominance (blood group AB), multiple alleles (ABO), linked genes and crossing over, X-linked inheritance (colour blindness, haemophilia) and polygenic traits (height, skin colour) shaped by environment too.

Mendelian ratios are probabilities. With few offspring, results can stray far from 3 : 1; with many, they approach the expected ratio. The random simulation in the BioTaxa Lab shows this.`,
    ],
    kuliah: [
      `Genetika populasi memperluas Mendel ke tingkat populasi. Kesetimbangan Hardy–Weinberg (p² + 2pq + q² = 1) berlaku bila tidak ada seleksi, mutasi, migrasi, hanyutan genetik, dan perkawinan tidak acak; penyimpangan dari kesetimbangan menjadi petunjuk adanya proses evolusi.

Pemetaan genetik memakai frekuensi rekombinasi (1% ≈ 1 cM). Sifat kuantitatif dianalisis dengan heritabilitas (h²), yakni proporsi variasi fenotipe yang dijelaskan oleh variasi genetik aditif dalam populasi dan lingkungan tertentu—bukan ukuran seberapa “genetis” sifat pada satu individu.

Pendekatan genomik (GWAS, sekuensing) mengungkap bahwa kebanyakan sifat kompleks dipengaruhi banyak varian berefek kecil. Dalam konservasi, keragaman genetik populasi kecil (misalnya badak Jawa) dipantau untuk menilai risiko depresi silang dalam (inbreeding depression).`,
      `Population genetics extends Mendel to populations. Hardy–Weinberg equilibrium (p² + 2pq + q² = 1) holds without selection, mutation, migration, drift or non-random mating; departures hint at evolutionary processes.

Genetic mapping uses recombination frequency (1% ≈ 1 cM). Quantitative traits are analysed with heritability (h²): the share of phenotypic variance due to additive genetic variance in a given population and environment — not how “genetic” a trait is in one individual.

Genomic methods (GWAS, sequencing) show most complex traits involve many small-effect variants. In conservation, genetic diversity in small populations (e.g. the Javan rhino) is monitored to assess inbreeding-depression risk.`,
    ],
  },
  activity: {
    smp: [
      'Lempar dua koin sebanyak 40 kali. Sisi angka = A, sisi gambar = a. Catat pasangan yang muncul (AA, Aa, aa) dan bandingkan dengan rasio 1 : 2 : 1.',
      'Toss two coins 40 times. Heads = A, tails = a. Record the pairs (AA, Aa, aa) and compare with 1 : 2 : 1.',
    ],
    sma: [
      'Di Lab Pewarisan BioTaxa, jalankan simulasi 20 dan 1.000 keturunan dari persilangan Aa × Aa. Mengapa hasil 1.000 lebih dekat ke 3 : 1?',
      'In the BioTaxa Heredity Lab, simulate 20 and 1,000 offspring of Aa × Aa. Why is 1,000 closer to 3 : 1?',
    ],
    kuliah: [
      'Diberikan 36% individu fenotipe resesif dalam populasi, hitung frekuensi alel dan proporsi heterozigot dengan asumsi Hardy–Weinberg. Diskusikan asumsi yang mungkin dilanggar.',
      'If 36% of a population shows the recessive phenotype, compute allele frequencies and heterozygote share under Hardy–Weinberg. Discuss which assumptions might be violated.',
    ],
  },
  species: ['Homo sapiens', 'Zea mays', 'Felis catus', 'Rhinoceros sondaicus'],
  lab: 'mendel',
  quiz: [
    {
      lv: ['smp', 'sma'],
      q: ['Bentuk lain dari suatu gen disebut…', 'A version of a gene is called an…'],
      a: [
        ['Alel', 'Allele'],
        ['Sel', 'Cell'],
        ['Organ', 'Organ'],
        ['Spora', 'Spore'],
      ],
      c: 0,
      why: ['Contohnya alel A (ungu) dan a (putih).', 'For example allele A (purple) and a (white).'],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Persilangan Aa × Aa menghasilkan perbandingan fenotipe dominan : resesif sebesar…',
        'Aa × Aa gives a dominant : recessive phenotype ratio of…',
      ],
      a: [
        ['1 : 1', '1 : 1'],
        ['3 : 1', '3 : 1'],
        ['1 : 2 : 1', '1 : 2 : 1'],
        ['9 : 3 : 3 : 1', '9 : 3 : 3 : 1'],
      ],
      c: 1,
      why: ['AA, Aa, Aa tampak dominan; aa tampak resesif.', 'AA, Aa, Aa look dominant; aa looks recessive.'],
    },
    {
      lv: ['smp'],
      q: ['Genotipe yang homozigot resesif adalah…', 'Which genotype is homozygous recessive?'],
      a: [
        ['AA', 'AA'],
        ['Aa', 'Aa'],
        ['aa', 'aa'],
        ['aA', 'aA'],
      ],
      c: 2,
      why: ['Dua alel resesif yang sama.', 'Two identical recessive alleles.'],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Sifat yang tampak, seperti warna bunga, disebut…',
        'The visible trait, such as flower colour, is the…',
      ],
      a: [
        ['Genotipe', 'Genotype'],
        ['Fenotipe', 'Phenotype'],
        ['Kromosom', 'Chromosome'],
        ['Gamet', 'Gamete'],
      ],
      c: 1,
      why: [
        'Fenotipe adalah hasil genotipe dan lingkungan.',
        'Phenotype results from genotype plus environment.',
      ],
    },
    {
      lv: ['sma', 'kuliah'],
      q: ['Golongan darah AB adalah contoh…', 'Blood group AB is an example of…'],
      a: [
        ['Dominansi penuh', 'Complete dominance'],
        ['Kodominansi', 'Codominance'],
        ['Pewarisan terpaut X', 'X-linked inheritance'],
        ['Mutasi', 'Mutation'],
      ],
      c: 1,
      why: ['Alel A dan B sama-sama tampak.', 'Both A and B alleles are expressed.'],
    },
    {
      lv: ['sma', 'kuliah'],
      q: [
        'Jika frekuensi alel resesif q = 0,6, proporsi heterozigot menurut Hardy–Weinberg adalah…',
        'If recessive allele frequency q = 0.6, the heterozygote share under Hardy–Weinberg is…',
      ],
      a: [
        ['0,16', '0.16'],
        ['0,36', '0.36'],
        ['0,48', '0.48'],
        ['0,24', '0.24'],
      ],
      c: 2,
      why: ['2pq = 2 × 0,4 × 0,6 = 0,48.', '2pq = 2 × 0.4 × 0.6 = 0.48.'],
    },
  ],
  teacher: {
    goals: {
      smp: [
        'Peserta didik dapat menjelaskan gen, alel, genotipe, fenotipe, dan meramalkan hasil persilangan monohibrid.',
        'Learners can explain genes, alleles, genotype and phenotype and predict monohybrid crosses.',
      ],
      sma: [
        'Peserta didik dapat menerapkan hukum Mendel dan menjelaskan penyimpangannya.',
        'Learners can apply Mendel’s laws and explain exceptions.',
      ],
    },
    time: ['2–3 × 40 menit', '2–3 × 40 minutes'],
    steps: [
      [
        'Pemantik: “Mengapa dua kakak beradik bisa berbeda warna rambut?”',
        'Hook: “Why can siblings have different hair colours?”',
      ],
      ['Aktivitas koin: simulasi segregasi alel.', 'Coin activity: simulate allele segregation.'],
      [
        'Lab Pewarisan BioTaxa: kotak Punnett dan simulasi acak.',
        'BioTaxa Heredity Lab: Punnett square and random simulation.',
      ],
      ['Latihan soal persilangan.', 'Practice cross problems.'],
      ['Evaluasi: kuis.', 'Evaluate: quiz.'],
    ],
    assess: [
      ['Lembar hasil lempar koin dan analisis rasio.', 'Coin-toss results sheet with ratio analysis.'],
      ['Kuis BioTaxa.', 'BioTaxa quiz.'],
    ],
  },
  read: [
    {
      label: 'OpenStax Biology 2e · 12.1 Mendel’s Experiments',
      url: 'https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability',
      lv: 'sma',
    },
    {
      label: 'OpenStax Biology 2e · 19.2 Population Genetics',
      url: 'https://openstax.org/books/biology-2e/pages/19-2-population-genetics',
      lv: 'kuliah',
    },
  ],
};
