export default {
  id: 'fotosintesis',
  icon: '☀️',
  levels: ['sd', 'smp', 'sma'],
  title: ['Tumbuhan & fotosintesis', 'Plants & photosynthesis'],
  summary: [
    'Bagaimana tumbuhan “memasak” makanannya sendiri dengan cahaya matahari?',
    'How do plants “cook” their own food with sunlight?',
  ],
  body: {
    sd: [
      `Tumbuhan tidak perlu mencari makanan. Mereka membuat makanannya sendiri di daun! Proses ini disebut [[fotosintesis]].

Bahan yang dibutuhkan:
- **Air**, diserap akar dari tanah.
- **Udara** (karbon dioksida), masuk lewat lubang kecil di daun bernama [[stomata]].
- **Cahaya matahari**, ditangkap zat hijau daun ([[klorofil]]).

Hasilnya adalah gula (makanan tumbuhan) dan **oksigen**, gas yang kita hirup untuk bernapas. Jadi, tumbuhan membantu kita tetap hidup!

Bagian tumbuhan bekerja sama: akar menyerap air, batang mengangkutnya, daun membuat makanan, dan bunga membantu tumbuhan berkembang biak lewat [[penyerbukan]] hingga menjadi [[biji]].`,
      `Plants do not need to go looking for food. They make it themselves in their leaves! This is called [[fotosintesis|photosynthesis]].

What they need:
- **Water**, taken up by the roots.
- **Air** (carbon dioxide), which enters through tiny holes in leaves called [[stomata]].
- **Sunlight**, captured by the green pigment [[klorofil|chlorophyll]].

They make sugar (plant food) and **oxygen**, the gas we breathe. Plants help keep us alive!

Plant parts work together: roots take up water, stems carry it, leaves make food, and flowers help plants reproduce through [[penyerbukan|pollination]] to make [[biji|seeds]].`,
    ],
    smp: [
      `[[fotosintesis|Fotosintesis]] adalah proses pembentukan glukosa dari karbon dioksida dan air dengan energi cahaya, terjadi di [[kloroplas]]:

**6CO₂ + 6H₂O + energi cahaya → C₆H₁₂O₆ + 6O₂**

Tumbuhan adalah [[produsen]]: energi dalam gula yang mereka buat mengalir ke hewan pemakan tumbuhan dan seterusnya dalam [[rantai makanan]]. Gula juga dipakai tumbuhan sendiri dalam [[respirasi]] untuk menghasilkan energi, dan sebagian disimpan sebagai amilum (pati) di umbi, biji, atau batang.

Laju fotosintesis dipengaruhi **intensitas cahaya**, **kadar CO₂**, **suhu**, dan ketersediaan air. Faktor yang paling kurang disebut faktor pembatas. Misalnya, di pagi hari yang redup, cahaya membatasi laju fotosintesis walaupun CO₂ cukup.

Cobalah simulasi Fotosintesis di Laboratorium BioTaxa: ubah satu faktor dan amati jumlah gelembung oksigen.`,
      `[[fotosintesis|Photosynthesis]] makes glucose from carbon dioxide and water using light energy, inside [[kloroplas|chloroplasts]]:

**6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂**

Plants are [[produsen|producers]]: the energy in their sugar passes to plant eaters and onwards along [[rantai makanan|food chains]]. Plants also use the sugar in [[respirasi|respiration]] for energy and store some as starch in tubers, seeds or stems.

The rate depends on **light intensity**, **CO₂ level**, **temperature** and water. Whichever is in shortest supply is the limiting factor. On a dim morning, light limits photosynthesis even if there is plenty of CO₂.

Try the Photosynthesis simulation in the BioTaxa Laboratory: change one factor and watch the oxygen bubbles.`,
    ],
    sma: [
      `Fotosintesis berlangsung dalam dua tahap. **Reaksi terang** di membran tilakoid: klorofil pada fotosistem II dan I menyerap cahaya, air dipecah (fotolisis) melepaskan O₂, dan aliran elektron menghasilkan ATP (lewat ATP sintase) serta NADPH. **Siklus Calvin** di stroma: enzim rubisco mengikat CO₂ ke RuBP, lalu ATP dan NADPH dipakai untuk menghasilkan gula tiga karbon (G3P).

Tumbuhan C₃ (padi, kedelai) kehilangan efisiensi saat panas karena fotorespirasi. Tumbuhan C₄ (jagung, tebu) memekatkan CO₂ di sel seludang pembuluh, sedangkan tumbuhan CAM (nanas, kaktus, banyak anggrek) membuka [[stomata]] di malam hari untuk menghemat air.

Faktor pembatas saling berinteraksi: menambah CO₂ tidak menaikkan laju bila cahaya sangat rendah. Suhu terlalu tinggi menurunkan kerja enzim. Konsep ini dipakai dalam pertanian rumah kaca.

Fotosintesis global menyimpan karbon dalam biomassa, sehingga hutan dan [[lamun]] berperan penting dalam mengurangi [[efek rumah kaca]].`,
      `Photosynthesis has two stages. **Light reactions** in the thylakoid membranes: chlorophyll in photosystems II and I absorbs light, water is split (photolysis) releasing O₂, and electron flow makes ATP (via ATP synthase) and NADPH. **The Calvin cycle** in the stroma: rubisco fixes CO₂ onto RuBP, and ATP and NADPH are used to make three-carbon sugar (G3P).

C₃ plants (rice, soybean) lose efficiency in heat due to photorespiration. C₄ plants (maize, sugarcane) concentrate CO₂ in bundle-sheath cells, while CAM plants (pineapple, cacti, many orchids) open their [[stomata]] at night to save water.

Limiting factors interact: adding CO₂ does nothing if light is very low, and too much heat slows enzymes. Greenhouse farming uses these ideas.

Global photosynthesis locks carbon into biomass, so forests and [[lamun|seagrass]] meadows help reduce the [[efek rumah kaca|greenhouse effect]].`,
    ],
  },
  activity: {
    sd: [
      'Tutup sebagian daun tanaman di rumah dengan kertas aluminium selama 3 hari. Buka dan bandingkan warnanya. Apa yang terjadi pada bagian yang tidak terkena cahaya?',
      'Cover part of a leaf with foil for 3 days. Uncover it and compare the colour. What happened to the part that got no light?',
    ],
    smp: [
      'Masukkan tanaman air (misalnya Hydrilla) ke gelas berisi air. Letakkan dekat lampu pada jarak 10, 20, dan 40 cm. Hitung gelembung per menit. Bandingkan dengan simulasi BioTaxa.',
      'Put a water plant (e.g. Hydrilla) in a glass of water. Place a lamp at 10, 20 and 40 cm. Count bubbles per minute. Compare with the BioTaxa simulation.',
    ],
    sma: [
      'Gunakan simulasi Fotosintesis BioTaxa untuk membuat grafik laju terhadap intensitas cahaya pada dua kadar CO₂. Jelaskan titik ketika grafik mendatar.',
      'Use the BioTaxa Photosynthesis simulation to graph rate against light intensity at two CO₂ levels. Explain where the curve levels off.',
    ],
  },
  species: [
    'Oryza sativa',
    'Zea mays',
    'Mimosa pudica',
    'Phalaenopsis amabilis',
    'Nostoc commune',
    'Euglena gracilis',
  ],
  lab: 'photosynthesis',
  quiz: [
    {
      lv: ['sd', 'smp'],
      q: [
        'Gas yang dihasilkan tumbuhan saat fotosintesis dan kita hirup adalah…',
        'The gas plants release in photosynthesis, which we breathe, is…',
      ],
      a: [
        ['Karbon dioksida', 'Carbon dioxide'],
        ['Oksigen', 'Oxygen'],
        ['Nitrogen', 'Nitrogen'],
        ['Uap air', 'Water vapour'],
      ],
      c: 1,
      why: [
        'Oksigen dilepas saat air dipecah dalam fotosintesis.',
        'Oxygen is released when water is split during photosynthesis.',
      ],
    },
    {
      lv: ['sd'],
      q: ['Zat hijau daun yang menangkap cahaya disebut…', 'The green pigment that captures light is…'],
      a: [
        ['Klorofil', 'Chlorophyll'],
        ['Madu', 'Nectar'],
        ['Getah', 'Sap'],
        ['Serbuk sari', 'Pollen'],
      ],
      c: 0,
      why: ['Klorofil membuat daun berwarna hijau.', 'Chlorophyll makes leaves green.'],
    },
    {
      lv: ['sd', 'smp'],
      q: [
        'Bagian tumbuhan yang menyerap air dari tanah adalah…',
        'The plant part that takes up water from the soil is the…',
      ],
      a: [
        ['Daun', 'Leaf'],
        ['Bunga', 'Flower'],
        ['Akar', 'Root'],
        ['Buah', 'Fruit'],
      ],
      c: 2,
      why: ['Akar menyerap air dan mineral.', 'Roots absorb water and minerals.'],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Di pagi hari yang mendung, faktor yang paling membatasi fotosintesis biasanya…',
        'On a cloudy morning, the factor most likely limiting photosynthesis is…',
      ],
      a: [
        ['Cahaya', 'Light'],
        ['Oksigen', 'Oxygen'],
        ['Nitrogen', 'Nitrogen'],
        ['Gula', 'Sugar'],
      ],
      c: 0,
      why: ['Cahaya redup membuat reaksi terang lambat.', 'Dim light slows the light reactions.'],
    },
    {
      lv: ['smp', 'sma'],
      q: ['Mengapa tumbuhan disebut produsen?', 'Why are plants called producers?'],
      a: [
        ['Karena menghasilkan buah', 'They produce fruit'],
        [
          'Karena membuat makanan sendiri dari zat anorganik',
          'They make their own food from inorganic substances',
        ],
        ['Karena memakan hewan', 'They eat animals'],
        ['Karena tumbuh tinggi', 'They grow tall'],
      ],
      c: 1,
      why: ['Produsen membuat gula dari CO₂ dan air.', 'Producers make sugar from CO₂ and water.'],
    },
    {
      lv: ['sma'],
      q: ['Siklus Calvin terjadi di…', 'The Calvin cycle takes place in the…'],
      a: [
        ['Membran tilakoid', 'Thylakoid membrane'],
        ['Stroma kloroplas', 'Chloroplast stroma'],
        ['Mitokondria', 'Mitochondrion'],
        ['Inti sel', 'Nucleus'],
      ],
      c: 1,
      why: [
        'Rubisco di stroma mengikat CO₂ memakai ATP dan NADPH dari reaksi terang.',
        'Rubisco in the stroma fixes CO₂ using ATP and NADPH from the light reactions.',
      ],
    },
    {
      lv: ['sma'],
      q: [
        'Jagung dan tebu lebih efisien di cuaca panas karena termasuk tumbuhan…',
        'Maize and sugarcane cope well with heat because they are…',
      ],
      a: [
        ['C₃', 'C₃ plants'],
        ['C₄', 'C₄ plants'],
        ['Parasit', 'Parasites'],
        ['Tanpa klorofil', 'Chlorophyll-free'],
      ],
      c: 1,
      why: [
        'Tumbuhan C₄ memekatkan CO₂ sehingga mengurangi fotorespirasi.',
        'C₄ plants concentrate CO₂, reducing photorespiration.',
      ],
    },
  ],
  teacher: {
    goals: {
      sd: [
        'Peserta didik dapat menyebutkan bahan dan hasil fotosintesis serta fungsi bagian tumbuhan.',
        'Learners can name the inputs and outputs of photosynthesis and the roles of plant parts.',
      ],
      smp: [
        'Peserta didik dapat menjelaskan faktor yang memengaruhi laju fotosintesis melalui percobaan.',
        'Learners can explain factors affecting photosynthesis rate through experiments.',
      ],
      sma: [
        'Peserta didik dapat menjelaskan reaksi terang, siklus Calvin, dan perbedaan C₃/C₄/CAM.',
        'Learners can explain light reactions, the Calvin cycle and C₃/C₄/CAM differences.',
      ],
    },
    time: ['2–3 × 40 menit', '2–3 × 40 minutes'],
    steps: [
      [
        'Pemantik: “Dari mana asal berat sebatang pohon besar?”',
        'Hook: “Where does the mass of a big tree come from?”',
      ],
      [
        'Percobaan: daun ditutup aluminium / gelembung Hydrilla.',
        'Experiment: foil-covered leaf / Hydrilla bubbles.',
      ],
      [
        'Simulasi: Lab Fotosintesis BioTaxa, ubah satu faktor setiap kali.',
        'Simulate: BioTaxa Photosynthesis lab, one factor at a time.',
      ],
      [
        'Penjelasan: persamaan reaksi, faktor pembatas, peran produsen.',
        'Explain: the equation, limiting factors, the producer role.',
      ],
      ['Evaluasi: kuis dan grafik hasil percobaan.', 'Evaluate: quiz and experiment graph.'],
    ],
    assess: [
      ['Grafik laju fotosintesis dan interpretasinya.', 'A photosynthesis-rate graph with interpretation.'],
      ['Kuis BioTaxa.', 'BioTaxa quiz.'],
    ],
  },
  read: [
    {
      label: 'OpenStax Biology 2e · 8.1 Overview of Photosynthesis',
      url: 'https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis',
      lv: 'sma',
    },
    {
      label: 'OpenStax Biology 2e · Ch. 8 Photosynthesis',
      url: 'https://openstax.org/books/biology-2e/pages/8-introduction',
      lv: 'kuliah',
    },
  ],
};
