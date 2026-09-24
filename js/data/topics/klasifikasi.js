export default {
  id: 'klasifikasi',
  icon: '🗂️',
  levels: ['sd', 'smp', 'sma', 'kuliah'],
  title: ['Klasifikasi & nama ilmiah', 'Classification & scientific names'],
  summary: [
    'Bagaimana ilmuwan mengelompokkan jutaan makhluk hidup dan memberinya nama?',
    'How do scientists group millions of living things and name them?',
  ],
  body: {
    sd: [
      `Di bumi ada sangat banyak makhluk hidup. Supaya mudah dipelajari, ilmuwan mengelompokkannya berdasarkan persamaan. Kegiatan ini disebut [[klasifikasi]].

Contohnya, hewan yang bertulang belakang (seperti ikan, katak, cicak, burung, dan kucing) disebut [[vertebrata]]. Hewan tanpa tulang belakang (seperti cacing, siput, dan kupu-kupu) disebut [[invertebrata]].

Setiap makhluk hidup juga punya nama ilmiah dari dua kata. Harimau bernama *Panthera tigris*. Kata pertama menunjukkan kelompok dekatnya (genus), kata kedua menunjukkan jenisnya ([[spesies]]). Nama ilmiah sama di seluruh dunia, jadi ilmuwan dari Indonesia dan Jepang tahu hewan yang sama sedang dibicarakan.

Coba buka **Pohon kehidupan** di BioTaxa dan ikuti cabangnya dari kelompok besar sampai ke satu spesies!`,
      `There are so many living things on Earth. To study them, scientists group them by what they share. This is called [[klasifikasi|classification]].

For example, animals with a backbone (fish, frogs, geckos, birds and cats) are [[vertebrata|vertebrates]]. Animals without one (worms, snails and butterflies) are [[invertebrata|invertebrates]].

Every living thing also has a two-word scientific name. The tiger is *Panthera tigris*. The first word is its close group (genus), the second tells the exact kind ([[spesies|species]]). Scientific names are the same everywhere, so scientists in Indonesia and Japan know they mean the same animal.

Open the **Tree of life** in BioTaxa and follow the branches from big groups down to one species!`,
    ],
    smp: [
      `[[taksonomi|Taksonomi]] adalah ilmu mengenali, memberi nama, dan mengelompokkan makhluk hidup. Tingkat klasifikasi dari yang paling luas: **[[domain]] → kingdom → filum → kelas → ordo → famili → genus → spesies**. Makin ke bawah, anggotanya makin sedikit dan makin mirip.

Contoh harimau: Eukarya → Animalia → Chordata → Mammalia → Carnivora → Felidae → *Panthera* → *Panthera tigris*. Kucing rumah ada di famili yang sama (Felidae), tetapi genusnya berbeda (*Felis*). Artinya harimau dan kucing berkerabat cukup dekat.

Aturan [[binomial|tata nama binomial]] yang diperkenalkan Carolus Linnaeus: nama ilmiah terdiri atas genus (huruf awal kapital) dan penunjuk spesies (huruf kecil), ditulis miring atau digarisbawahi bila ditulis tangan.

Sistem klasifikasi bisa berubah ketika ada bukti baru, misalnya dari DNA. Karena itu, katalog yang berbeda kadang menempatkan satu kelompok di tempat yang berbeda.`,
      `[[taksonomi|Taxonomy]] is the science of identifying, naming and grouping living things. The ranks from broadest are: **[[domain]] → kingdom → phylum → class → order → family → genus → species**. The lower you go, the fewer and more similar the members.

The tiger: Eukarya → Animalia → Chordata → Mammalia → Carnivora → Felidae → *Panthera* → *Panthera tigris*. The house cat is in the same family (Felidae) but a different genus (*Felis*), so tigers and cats are fairly close relatives.

The rules of [[binomial|binomial nomenclature]], popularised by Carl Linnaeus: a scientific name has a genus (capitalised) and a specific epithet (lower case), written in italics or underlined by hand.

Classifications can change when new evidence appears, for example from DNA. That is why different catalogues sometimes place a group differently.`,
    ],
    sma: [
      `Klasifikasi modern berupaya mencerminkan sejarah evolusi. Kelompok yang baik bersifat monofiletik: berisi satu nenek moyang dan seluruh keturunannya. Hubungan ini digambarkan dengan [[kladogram]] atau pohon filogenetik, yang disusun dari ciri turunan bersama—baik morfologi maupun urutan [[dna|DNA]].

Beberapa kelompok lama ternyata tidak monofiletik. “Reptilia” tradisional, misalnya, tidak memasukkan burung, padahal burung adalah keturunan dinosaurus. “Protista” juga bukan satu kelompok alami, melainkan kumpulan eukariota yang bukan hewan, tumbuhan, atau jamur.

Pada tingkat tertinggi, model tiga [[domain]] (Bacteria, Archaea, Eukarya) dari Carl Woese berbasis gen RNA ribosom. Penelitian filogenomik lebih baru mendukung model dua domain, dengan eukariota muncul dari dalam Archaea (dekat arkea Asgard).

Katalog seperti GBIF Backbone menggabungkan banyak sumber taksonomi. Tingkatan yang tidak lengkap atau penempatan yang berbeda antarkatalog adalah hal wajar dalam ilmu yang terus berkembang.`,
      `Modern classification aims to reflect evolutionary history. Good groups are monophyletic: one ancestor and all its descendants. Relationships are drawn as [[kladogram|cladograms]] or phylogenetic trees built from shared derived traits — morphology and [[dna|DNA]] sequences.

Some traditional groups are not monophyletic. Traditional “Reptilia” left out birds, even though birds descend from dinosaurs. “Protista” is not a natural group either, just eukaryotes that are not animals, plants or fungi.

At the top level, Carl Woese’s three-[[domain]] model (Bacteria, Archaea, Eukarya) was based on ribosomal RNA genes. More recent phylogenomic work supports a two-domain model in which eukaryotes arose from within Archaea (near the Asgard archaea).

Catalogues such as the GBIF Backbone combine many taxonomic sources. Missing ranks or different placements between catalogues are normal in a science that keeps growing.`,
    ],
    kuliah: [
      `Taksonomi menyatukan tiga kegiatan: deskripsi (mengenali takson), nomenklatur (penamaan menurut kode ICZN, ICN, ICNP, atau ICVCN), dan sistematika (merekonstruksi kekerabatan). Nomenklatur bersifat stabil melalui prinsip prioritas dan spesimen tipe, sementara klasifikasi dapat berubah seiring hipotesis filogenetik.

Rekonstruksi filogeni memakai metode parsimoni, kemungkinan maksimum (maximum likelihood), dan inferensi Bayes pada data molekuler, sering dengan ratusan hingga ribuan lokus. Takson monofiletik didefinisikan oleh sinapomorfi; kelompok parafiletik dan polifiletik dihindari dalam klasifikasi filogenetik.

Konsep spesies juga beragam: biologis (isolasi reproduksi), filogenetik (kelompok diagnosis terkecil), ekologis, dan kohesi. Untuk prokariota, taksonomi berbasis genom seperti GTDB memakai kedekatan genom rata-rata (ANI) dan filogeni protein penanda.

Saat memakai BioTaxa untuk penelitian, perhatikan status nama (accepted, synonym, doubtful), sumber kutipan, dan tanggal akses. Kutip dataset asli (misalnya GBIF Backbone Taxonomy, doi:10.15468/39omei).`,
      `Taxonomy combines description (recognising taxa), nomenclature (naming under the ICZN, ICN, ICNP or ICVCN codes) and systematics (reconstructing relationships). Nomenclature stays stable through priority and type specimens, while classification changes with phylogenetic hypotheses.

Phylogenies are inferred with parsimony, maximum likelihood and Bayesian methods on molecular data, often hundreds to thousands of loci. Monophyletic taxa are defined by synapomorphies; paraphyletic and polyphyletic groups are avoided in phylogenetic classification.

Species concepts vary: biological (reproductive isolation), phylogenetic (smallest diagnosable cluster), ecological and cohesion concepts. For prokaryotes, genome-based taxonomy such as GTDB uses average nucleotide identity (ANI) and marker-protein phylogenies.

When using BioTaxa for research, check name status (accepted, synonym, doubtful), the cited source and access date. Cite the original dataset (e.g. GBIF Backbone Taxonomy, doi:10.15468/39omei).`,
    ],
  },
  activity: {
    sd: [
      'Kumpulkan 8 gambar hewan. Kelompokkan menjadi dua: bertulang belakang dan tidak bertulang belakang. Lalu kelompokkan lagi: yang bertelur dan yang melahirkan.',
      'Collect 8 animal pictures. Sort them into backbone and no backbone. Then sort again: egg-laying and live-bearing.',
    ],
    smp: [
      'Buka Pohon kehidupan di BioTaxa. Telusuri harimau dan kucing sampai tingkat spesies. Di tingkat mana jalur keduanya berpisah? Gunakan juga fitur Bandingkan.',
      'Open the Tree of life in BioTaxa. Trace the tiger and the house cat down to species. At which rank do their paths split? Try the Compare feature too.',
    ],
    sma: [
      'Pilih tiga spesies (misalnya burung gereja, komodo, dan buaya). Susun kladogram berdasarkan ciri: bertelur bercangkang, bulu, dan sisik. Diskusikan mengapa burung lebih dekat dengan buaya daripada dengan kadal.',
      'Pick three species (e.g. a sparrow, a Komodo dragon and a crocodile). Build a cladogram from traits: shelled eggs, feathers and scales. Discuss why birds are closer to crocodiles than to lizards.',
    ],
    kuliah: [
      'Bandingkan klasifikasi satu genus di GBIF, Catalogue of Life, dan NCBI Taxonomy. Catat perbedaan status nama dan jelaskan sumber perbedaannya.',
      'Compare one genus in GBIF, Catalogue of Life and NCBI Taxonomy. Record differences in name status and explain where they come from.',
    ],
  },
  species: [
    'Panthera tigris',
    'Felis catus',
    'Panthera leo',
    'Varanus komodoensis',
    'Crocodylus porosus',
    'Passer montanus',
  ],
  lab: null,
  quiz: [
    {
      lv: ['sd', 'smp'],
      q: [
        'Nama ilmiah harimau adalah Panthera tigris. Kata “Panthera” menunjukkan…',
        'The tiger’s scientific name is Panthera tigris. “Panthera” is the…',
      ],
      a: [
        ['Spesies', 'Species'],
        ['Genus', 'Genus'],
        ['Famili', 'Family'],
        ['Kingdom', 'Kingdom'],
      ],
      c: 1,
      why: ['Kata pertama nama ilmiah adalah genus.', 'The first word of a scientific name is the genus.'],
    },
    {
      lv: ['sd'],
      q: ['Manakah hewan yang TIDAK bertulang belakang?', 'Which animal has NO backbone?'],
      a: [
        ['Ikan mas', 'Carp'],
        ['Kupu-kupu', 'Butterfly'],
        ['Katak', 'Frog'],
        ['Burung gereja', 'Sparrow'],
      ],
      c: 1,
      why: [
        'Kupu-kupu adalah serangga, termasuk invertebrata.',
        'Butterflies are insects, which are invertebrates.',
      ],
    },
    {
      lv: ['sd', 'smp'],
      q: ['Mengapa ilmuwan memakai nama ilmiah?', 'Why do scientists use scientific names?'],
      a: [
        ['Supaya terdengar keren', 'To sound cool'],
        ['Supaya sama di seluruh dunia', 'So they are the same worldwide'],
        ['Karena nama biasa dilarang', 'Because common names are banned'],
        ['Supaya lebih panjang', 'To make names longer'],
      ],
      c: 1,
      why: [
        'Nama sehari-hari berbeda antardaerah, nama ilmiah sama di mana pun.',
        'Common names vary by place; scientific names are the same everywhere.',
      ],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Urutan tingkat klasifikasi yang benar dari luas ke khusus adalah…',
        'The correct order of ranks from broad to specific is…',
      ],
      a: [
        ['Kingdom → kelas → filum → ordo', 'Kingdom → class → phylum → order'],
        ['Kingdom → filum → kelas → ordo', 'Kingdom → phylum → class → order'],
        ['Filum → kingdom → ordo → kelas', 'Phylum → kingdom → order → class'],
        ['Ordo → kelas → filum → kingdom', 'Order → class → phylum → kingdom'],
      ],
      c: 1,
      why: [
        'Kingdom → filum → kelas → ordo → famili → genus → spesies.',
        'Kingdom → phylum → class → order → family → genus → species.',
      ],
    },
    {
      lv: ['smp', 'sma'],
      q: [
        'Harimau (Panthera tigris) dan singa (Panthera leo) berada dalam genus yang sama. Artinya…',
        'Tigers (Panthera tigris) and lions (Panthera leo) share a genus. This means they…',
      ],
      a: [
        ['Tidak berkerabat', 'Are unrelated'],
        ['Berkerabat dekat', 'Are close relatives'],
        ['Spesies yang sama', 'Are the same species'],
        ['Berbeda kingdom', 'Are in different kingdoms'],
      ],
      c: 1,
      why: [
        'Makin rendah tingkat yang sama, makin dekat kekerabatannya.',
        'The lower the shared rank, the closer the relationship.',
      ],
    },
    {
      lv: ['sma', 'kuliah'],
      q: ['Kelompok monofiletik adalah kelompok yang…', 'A monophyletic group contains…'],
      a: [
        ['Berisi makhluk yang terlihat mirip', 'Organisms that look alike'],
        ['Berisi satu nenek moyang dan seluruh keturunannya', 'One ancestor and all its descendants'],
        ['Berisi beberapa nenek moyang berbeda', 'Several different ancestors'],
        ['Hanya berisi spesies punah', 'Only extinct species'],
      ],
      c: 1,
      why: [
        'Klasifikasi filogenetik mengutamakan kelompok monofiletik.',
        'Phylogenetic classification favours monophyletic groups.',
      ],
    },
    {
      lv: ['sma', 'kuliah'],
      q: [
        'Mengapa “Reptilia” tradisional disebut parafiletik?',
        'Why is traditional “Reptilia” called paraphyletic?',
      ],
      a: [
        ['Karena memasukkan mamalia', 'It includes mammals'],
        [
          'Karena tidak memasukkan burung, padahal burung keturunan dinosaurus',
          'It leaves out birds, although birds descend from dinosaurs',
        ],
        ['Karena reptil tidak bertelur', 'Reptiles do not lay eggs'],
        ['Karena semua reptil sudah punah', 'All reptiles are extinct'],
      ],
      c: 1,
      why: [
        'Kelompok parafiletik tidak memuat seluruh keturunan nenek moyangnya.',
        'A paraphyletic group leaves out some descendants of its ancestor.',
      ],
    },
  ],
  teacher: {
    goals: {
      sd: [
        'Peserta didik dapat mengelompokkan hewan berdasarkan ciri yang mudah diamati.',
        'Learners can group animals by easily observed traits.',
      ],
      smp: [
        'Peserta didik dapat menjelaskan tingkatan takson dan menulis nama ilmiah dengan benar.',
        'Learners can explain taxonomic ranks and write scientific names correctly.',
      ],
      sma: [
        'Peserta didik dapat menafsirkan kladogram dan membedakan kelompok monofiletik dan parafiletik.',
        'Learners can read cladograms and distinguish monophyletic from paraphyletic groups.',
      ],
    },
    time: ['2–3 × 40 menit', '2–3 × 40 minutes'],
    steps: [
      [
        'Pemantik: “Bagaimana kamu menyusun buku di perpustakaan?” Hubungkan dengan pengelompokan makhluk hidup.',
        'Hook: “How would you organise books in a library?” Link it to grouping organisms.',
      ],
      [
        'Eksplorasi: kelompokkan kartu spesies BioTaxa dengan kriteria buatan peserta didik.',
        'Explore: sort BioTaxa species cards using learners’ own criteria.',
      ],
      [
        'Penjelasan: perkenalkan tingkatan takson dan aturan penulisan nama ilmiah.',
        'Explain: introduce ranks and the rules for writing scientific names.',
      ],
      [
        'Penerapan: telusuri Pohon kehidupan BioTaxa dan fitur Bandingkan untuk dua spesies.',
        'Apply: follow the BioTaxa Tree of life and use Compare for two species.',
      ],
      [
        'Evaluasi: kuis dan tugas menulis nama ilmiah lima spesies di sekitar sekolah.',
        'Evaluate: quiz plus writing the scientific names of five local species.',
      ],
    ],
    assess: [
      [
        'Ketepatan penulisan nama ilmiah (genus kapital, miring).',
        'Correct scientific-name writing (capital genus, italics).',
      ],
      [
        'Penjelasan tertulis tentang tingkat takson tempat dua spesies berpisah.',
        'Written explanation of the rank at which two species diverge.',
      ],
    ],
  },
  read: [
    {
      label: 'OpenStax Biology 2e · 20.1 Organizing Life on Earth',
      url: 'https://openstax.org/books/biology-2e/pages/20-1-organizing-life-on-earth',
      lv: 'sma',
    },
    {
      label: 'OpenStax Biology 2e · 20.2 Determining Evolutionary Relationships',
      url: 'https://openstax.org/books/biology-2e/pages/20-2-determining-evolutionary-relationships',
      lv: 'kuliah',
    },
    {
      label: 'Woese, Kandler & Wheelis (1990) · Towards a natural system of organisms',
      url: 'https://doi.org/10.1073/pnas.87.12.4576',
      lv: 'kuliah',
    },
    {
      label: 'Williams et al. (2013) · An archaeal origin of eukaryotes',
      url: 'https://doi.org/10.1038/nature12779',
      lv: 'kuliah',
    },
  ],
};
