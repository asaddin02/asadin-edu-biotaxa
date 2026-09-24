export default {
  id: 'adaptasi',
  icon: '🦎',
  levels: ['sd', 'smp', 'sma'],
  title: ['Adaptasi', 'Adaptation'],
  summary: [
    'Paruh, kulit, perilaku: cara makhluk hidup cocok dengan tempat tinggalnya.',
    'Beaks, skins and behaviours: how living things fit their homes.',
  ],
  body: {
    sd: [
      `Setiap makhluk hidup punya cara untuk bertahan di tempat tinggalnya. Cara ini disebut [[adaptasi]].

Contoh adaptasi di sekitar kita:
- **Cicak** bisa memutuskan ekornya saat ditangkap ([[autotomi]]).
- **Bunglon dan belalang daun** berwarna mirip lingkungan sehingga sulit dilihat ([[kamuflase]]).
- **Unta** menyimpan lemak di punuknya untuk bertahan di gurun.
- **Kaktus** berdaun duri agar tidak banyak kehilangan air.
- **Pohon jati** menggugurkan daun saat kemarau ([[meranggas]]).
- **Bebek** punya selaput di kakinya untuk berenang.

Coba perhatikan hewan peliharaan atau tanaman di rumahmu. Bagian tubuh apa yang membantunya hidup?`,
      `Every living thing has ways to survive where it lives. These are called [[adaptasi|adaptations]].

Examples around us:
- **Geckos** can drop their tails when grabbed ([[autotomi|autotomy]]).
- **Chameleons and leaf insects** match their surroundings so they are hard to see ([[kamuflase|camouflage]]).
- **Camels** store fat in their humps to survive the desert.
- **Cacti** have spines instead of leaves to lose less water.
- **Teak trees** drop their leaves in the dry season ([[meranggas|deciduous]]).
- **Ducks** have webbed feet for swimming.

Look at a pet or plant at home. Which body part helps it live?`,
    ],
    smp: [
      `[[adaptasi|Adaptasi]] adalah ciri yang meningkatkan peluang makhluk hidup untuk bertahan dan berkembang biak di lingkungannya. Ada tiga jenis:
- **Morfologi** (bentuk tubuh): paruh elang yang bengkok untuk merobek daging, akar tunjang bakau untuk berdiri di lumpur.
- **Fisiologi** (fungsi tubuh): ikan laut membuang kelebihan garam lewat insang, sapi mencerna rumput dengan lambung empat ruang ([[ruminansia]]).
- **Tingkah laku**: burung [[migrasi|bermigrasi]], lumba-lumba memakai [[ekolokasi]], kerbau berkubang di lumpur.

Contoh [[mimikri]]: ujung sayap ngengat atlas menyerupai kepala ular untuk menakuti pemangsa. Contoh adaptasi tumbuhan: kantong semar menangkap serangga untuk mendapat nitrogen di tanah yang miskin hara.

Adaptasi tidak muncul karena makhluk hidup “ingin” berubah. Adaptasi terbentuk selama banyak generasi melalui [[seleksi alam]].`,
      `An [[adaptasi|adaptation]] is a trait that improves an organism’s chance to survive and reproduce where it lives. There are three kinds:
- **Structural** (body form): an eagle’s hooked beak for tearing meat; mangrove stilt roots for standing in mud.
- **Physiological** (body function): sea fish pump out extra salt through their gills; cattle digest grass with a four-chambered stomach ([[ruminansia|ruminants]]).
- **Behavioural**: birds [[migrasi|migrate]], dolphins use [[ekolokasi|echolocation]], buffalo wallow in mud.

An example of [[mimikri|mimicry]]: atlas moth wing tips look like snake heads to scare predators. A plant example: pitcher plants trap insects to get nitrogen in poor soil.

Adaptations do not appear because organisms “want” to change. They build up over many generations through [[seleksi alam|natural selection]].`,
    ],
    sma: [
      `Adaptasi adalah hasil [[seleksi alam]]: variasi yang diwariskan membuat sebagian individu lebih berhasil bereproduksi di lingkungan tertentu. Karena itu, adaptasi selalu relatif terhadap lingkungan—kamuflase gelap menguntungkan di batang pohon berjelaga tetapi merugikan di batang berlumut pucat.

Perlu dibedakan adaptasi (hasil seleksi) dari aklimatisasi (penyesuaian individu dalam hidupnya, misalnya peningkatan sel darah merah di dataran tinggi) dan dari eksaptasi (ciri yang awalnya berfungsi lain, seperti bulu dinosaurus yang kemudian berguna untuk terbang).

Evolusi konvergen menghasilkan adaptasi serupa pada kelompok yang tidak berkerabat dekat: sayap kelelawar dan burung (organ analog), atau bentuk tubuh ramping lumba-lumba dan hiu. Sebaliknya, organ [[homologi|homolog]] seperti lengan manusia dan sayap kelelawar berasal dari struktur leluhur yang sama.

Tidak semua ciri adalah adaptasi. Sebagian muncul karena hanyutan genetik atau keterbatasan perkembangan.`,
      `Adaptations result from [[seleksi alam|natural selection]]: heritable variation makes some individuals reproduce more successfully in a given environment. So adaptation is always relative to the environment — dark camouflage helps on sooty bark but hurts on pale lichen.

Distinguish adaptation (the result of selection) from acclimatisation (an individual adjusting within its lifetime, such as producing more red blood cells at altitude) and from exaptation (a trait that first served another function, like dinosaur feathers later useful for flight).

Convergent evolution produces similar adaptations in unrelated groups: bat and bird wings (analogous organs), or the streamlined bodies of dolphins and sharks. By contrast, [[homologi|homologous]] structures like the human arm and bat wing come from the same ancestral structure.

Not every trait is an adaptation. Some arise through genetic drift or developmental constraints.`,
    ],
  },
  activity: {
    sd: [
      'Pilih 3 kartu spesies BioTaxa (misalnya cicak, kantong semar, dan bekantan). Gambar hewan/tumbuhannya dan beri panah ke bagian tubuh yang membantunya bertahan hidup.',
      'Pick 3 BioTaxa species cards (e.g. a gecko, a pitcher plant and a proboscis monkey). Draw each and point arrows at the body parts that help it survive.',
    ],
    smp: [
      'Buat tabel adaptasi morfologi, fisiologi, dan tingkah laku untuk 6 spesies dari BioTaxa. Diskusikan mana yang paling sulit digolongkan.',
      'Make a table of structural, physiological and behavioural adaptations for 6 BioTaxa species. Discuss which were hardest to classify.',
    ],
    sma: [
      'Jalankan simulasi Seleksi alam di Laboratorium BioTaxa pada lingkungan bersih dan tercemar. Jelaskan mengapa warna yang “unggul” berubah.',
      'Run the BioTaxa Natural selection simulation in clean and polluted environments. Explain why the “winning” colour changes.',
    ],
  },
  species: [
    'Hemidactylus platyurus',
    'Attacus atlas',
    'Nepenthes gracilis',
    'Rhizophora mucronata',
    'Tursiops truncatus',
    'Draco volans',
    'Nasalis larvatus',
  ],
  lab: 'selection',
  quiz: [
    {
      lv: ['sd', 'smp'],
      q: [
        'Cicak memutuskan ekornya saat ditangkap. Ini membantunya…',
        'A gecko drops its tail when grabbed. This helps it…',
      ],
      a: [
        ['Mencari makan', 'Find food'],
        ['Menyelamatkan diri dari pemangsa', 'Escape predators'],
        ['Bertelur', 'Lay eggs'],
        ['Tidur', 'Sleep'],
      ],
      c: 1,
      why: [
        'Ekor yang bergerak mengalihkan perhatian pemangsa.',
        'The wriggling tail distracts the predator.',
      ],
    },
    {
      lv: ['sd'],
      q: ['Kaki bebek yang berselaput cocok untuk…', 'A duck’s webbed feet are good for…'],
      a: [
        ['Memanjat pohon', 'Climbing trees'],
        ['Berenang', 'Swimming'],
        ['Menggali tanah', 'Digging'],
        ['Terbang', 'Flying'],
      ],
      c: 1,
      why: ['Selaput mendorong air seperti dayung.', 'The webbing pushes water like a paddle.'],
    },
    {
      lv: ['sd', 'smp'],
      q: [
        'Belalang daun berwarna hijau seperti daun. Ini disebut…',
        'A leaf insect looks like a green leaf. This is called…',
      ],
      a: [
        ['Kamuflase', 'Camouflage'],
        ['Migrasi', 'Migration'],
        ['Hibernasi', 'Hibernation'],
        ['Fotosintesis', 'Photosynthesis'],
      ],
      c: 0,
      why: ['Kamuflase membuat hewan sulit terlihat.', 'Camouflage makes an animal hard to see.'],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Lumba-lumba menemukan mangsa dengan bunyi klik dan pantulannya. Ini adaptasi…',
        'Dolphins find prey with clicks and echoes. This adaptation is…',
      ],
      a: [
        ['Morfologi', 'Structural'],
        ['Tingkah laku', 'Behavioural'],
        ['Mimikri', 'Mimicry'],
        ['Autotomi', 'Autotomy'],
      ],
      c: 1,
      why: ['Ekolokasi adalah cara berperilaku dalam berburu.', 'Echolocation is a hunting behaviour.'],
    },
    {
      lv: ['smp', 'sma'],
      q: ['Akar tunjang bakau membantu pohon…', 'Mangrove stilt roots help the tree…'],
      a: [
        ['Berdiri kokoh di lumpur pantai', 'Stand firmly in coastal mud'],
        ['Menangkap serangga', 'Catch insects'],
        ['Berbunga lebih cepat', 'Flower faster'],
        ['Menarik penyerbuk', 'Attract pollinators'],
      ],
      c: 0,
      why: [
        'Akar tunjang menopang pohon di tanah lunak yang tergenang pasang.',
        'Stilt roots prop the tree up in soft, tidal ground.',
      ],
    },
    {
      lv: ['sma'],
      q: ['Sayap kelelawar dan sayap burung adalah contoh…', 'Bat wings and bird wings are an example of…'],
      a: [
        ['Organ homolog sebagai sayap', 'Homologous wings'],
        ['Evolusi konvergen (organ analog sebagai sayap)', 'Convergent evolution (analogous as wings)'],
        ['Aklimatisasi', 'Acclimatisation'],
        ['Hanyutan genetik', 'Genetic drift'],
      ],
      c: 1,
      why: [
        'Fungsi terbang berevolusi terpisah, meski tulang lengannya homolog.',
        'Flight evolved separately, even though the arm bones are homologous.',
      ],
    },
  ],
  teacher: {
    goals: {
      sd: [
        'Peserta didik dapat mengaitkan bagian tubuh hewan dan tumbuhan dengan fungsinya untuk bertahan hidup.',
        'Learners can link body parts of animals and plants to survival functions.',
      ],
      smp: [
        'Peserta didik dapat menggolongkan adaptasi morfologi, fisiologi, dan tingkah laku.',
        'Learners can classify structural, physiological and behavioural adaptations.',
      ],
      sma: [
        'Peserta didik dapat menjelaskan adaptasi sebagai hasil seleksi alam dan membedakannya dari aklimatisasi.',
        'Learners can explain adaptation as a product of selection and distinguish it from acclimatisation.',
      ],
    },
    time: ['2 × 40 menit', '2 × 40 minutes'],
    steps: [
      ['Pemantik: tebak-tebakan foto hewan berkamuflase.', 'Hook: a camouflage photo guessing game.'],
      [
        'Eksplorasi: kartu spesies BioTaxa — cari bagian “Fakta seru”.',
        'Explore: BioTaxa species cards — look at the “Fun fact” sections.',
      ],
      ['Klasifikasi: tabel jenis adaptasi.', 'Classify: a table of adaptation types.'],
      ['Simulasi (SMA): seleksi alam ngengat.', 'Simulate (high school): moth natural selection.'],
      [
        'Evaluasi: kuis dan desain “makhluk khayalan” yang teradaptasi pada lingkungan pilihan.',
        'Evaluate: quiz and designing an “imaginary creature” adapted to a chosen habitat.',
      ],
    ],
    assess: [
      [
        'Desain makhluk khayalan beserta alasan setiap adaptasinya.',
        'Imaginary creature design with a reason for each adaptation.',
      ],
      ['Kuis BioTaxa.', 'BioTaxa quiz.'],
    ],
  },
  read: [
    {
      label: 'OpenStax Biology 2e · 18.1 Understanding Evolution',
      url: 'https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution',
      lv: 'sma',
    },
  ],
};
