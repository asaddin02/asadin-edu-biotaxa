// Glossary. def = simple definition for every learner; adv = extra depth for SMA & university.
// id is the lowercase key used by [[term]] markup. Content license: CC BY-SA 4.0.
const T = (id, term, def, adv, aliases = [], topic = '') => ({ id, term, def, adv, aliases, topic });

export const glossary = [
  T(
    'adaptasi',
    ['Adaptasi', 'Adaptation'],
    [
      'Ciri tubuh atau perilaku yang membantu makhluk hidup bertahan di lingkungannya.',
      'A body feature or behaviour that helps an organism survive where it lives.',
    ],
    [
      'Adaptasi dapat bersifat morfologi (bentuk), fisiologi (fungsi tubuh), atau perilaku, dan muncul lewat seleksi alam pada populasi.',
      'Adaptations can be morphological, physiological or behavioural, and arise through natural selection in populations.',
    ],
    [],
    'adaptasi'
  ),
  T(
    'alel',
    ['Alel', 'Allele'],
    [
      'Bentuk lain dari satu gen, misalnya gen warna bunga ungu atau putih.',
      'A version of a gene, for example purple or white flower colour.',
    ],
    [
      'Individu diploid memiliki dua alel untuk setiap gen autosom, satu dari tiap induk.',
      'Diploid individuals carry two alleles of each autosomal gene, one from each parent.',
    ],
    [],
    'pewarisan'
  ),
  T(
    'amfibi',
    ['Amfibi', 'Amphibian'],
    [
      'Hewan bertulang belakang yang hidup di air saat kecil dan di darat saat dewasa, seperti katak.',
      'Vertebrates that live in water when young and on land as adults, such as frogs.',
    ],
    [
      'Kulit amfibi tipis dan lembap serta ikut dipakai bernapas, sehingga sangat peka terhadap pencemaran.',
      'Amphibian skin is thin, moist and used for breathing, making them sensitive to pollution.',
    ]
  ),
  T(
    'antibiotik',
    ['Antibiotik', 'Antibiotic'],
    [
      'Obat untuk membunuh atau menghambat bakteri. Antibiotik tidak mempan untuk virus.',
      'Medicine that kills or stops bacteria. Antibiotics do not work on viruses.',
    ],
    [
      'Penggunaan yang tidak tepat mempercepat seleksi bakteri yang resisten antibiotik.',
      'Misuse speeds up the selection of antibiotic-resistant bacteria.',
    ],
    [],
    'mikroorganisme'
  ),
  T(
    'arkea',
    ['Arkea', 'Archaea'],
    [
      'Makhluk bersel satu tanpa inti sel yang berbeda dari bakteri. Banyak yang hidup di tempat sangat panas, asin, atau asam.',
      'Single-celled life without a nucleus, different from bacteria. Many live in very hot, salty or acidic places.',
    ],
    [
      'Arkea berbeda dari bakteri dalam lipid membran, dinding sel, dan mesin transkripsi yang lebih mirip eukariota.',
      'Archaea differ from bacteria in membrane lipids, cell walls and transcription machinery that resembles eukaryotes.',
    ],
    ['archaea'],
    'mikroorganisme'
  ),
  T(
    'autotomi',
    ['Autotomi', 'Autotomy'],
    [
      'Kemampuan melepaskan bagian tubuh, misalnya ekor cicak, untuk menyelamatkan diri.',
      'Dropping a body part, such as a gecko’s tail, to escape danger.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'bakteri',
    ['Bakteri', 'Bacteria'],
    [
      'Makhluk bersel satu yang sangat kecil tanpa inti sel. Ada yang berguna, ada yang menyebabkan penyakit.',
      'Tiny single-celled organisms without a nucleus. Some are helpful, some cause disease.',
    ],
    [
      'Bakteri adalah prokariota; DNA-nya berada di nukleoid dan sering disertai plasmid.',
      'Bacteria are prokaryotes; their DNA lies in a nucleoid, often with plasmids.',
    ],
    [],
    'mikroorganisme'
  ),
  T(
    'biji',
    ['Biji', 'Seed'],
    [
      'Bagian tumbuhan yang berisi calon tumbuhan baru dan cadangan makanannya.',
      'The part of a plant that holds a baby plant and its food store.',
    ],
    null,
    [],
    'fotosintesis'
  ),
  T(
    'binomial',
    ['Tata nama binomial', 'Binomial nomenclature'],
    [
      'Cara memberi nama ilmiah dengan dua kata: genus dan penunjuk spesies, misalnya Panthera tigris.',
      'Naming a species with two words: genus and specific epithet, such as Panthera tigris.',
    ],
    [
      'Diperkenalkan secara konsisten oleh Linnaeus (1753 untuk tumbuhan, 1758 untuk hewan) dan diatur oleh kode nomenklatur internasional.',
      'Used consistently by Linnaeus (1753 for plants, 1758 for animals) and governed by international codes of nomenclature.',
    ],
    ['tata nama binomial', 'nama ilmiah'],
    'klasifikasi'
  ),
  T(
    'dna',
    ['DNA', 'DNA'],
    [
      'Bahan pewaris di dalam sel yang menyimpan “resep” untuk membangun makhluk hidup.',
      'The inherited material in cells that stores the “recipe” for building a living thing.',
    ],
    [
      'DNA adalah polimer nukleotida (A, T, G, C) berbentuk heliks ganda; urutannya menyandikan RNA dan protein.',
      'DNA is a double-helix polymer of nucleotides (A, T, G, C) whose sequence encodes RNA and proteins.',
    ],
    [],
    'pewarisan'
  ),
  T(
    'difusi',
    ['Difusi', 'Diffusion'],
    [
      'Perpindahan zat dari tempat yang lebih pekat ke tempat yang kurang pekat.',
      'Movement of a substance from where it is more concentrated to where it is less concentrated.',
    ],
    null,
    [],
    'sel'
  ),
  T(
    'domain',
    ['Domain', 'Domain'],
    [
      'Tingkat klasifikasi paling luas: Bacteria, Archaea, dan Eukarya.',
      'The broadest level of classification: Bacteria, Archaea and Eukarya.',
    ],
    [
      'Model tiga domain (Woese, 1990) didasarkan pada gen rRNA. Beberapa penelitian filogenomik mendukung model dua domain dengan eukariota di dalam Archaea.',
      'The three-domain model (Woese, 1990) is based on rRNA genes. Some phylogenomic studies support a two-domain model with eukaryotes inside Archaea.',
    ],
    [],
    'klasifikasi'
  ),
  T(
    'dominan',
    ['Dominan', 'Dominant'],
    [
      'Sifat yang tetap muncul walaupun hanya diwarisi dari satu induk.',
      'A trait that shows even when inherited from only one parent.',
    ],
    [
      'Alel dominan menentukan fenotipe individu heterozigot pada dominansi penuh.',
      'A dominant allele determines the phenotype of a heterozygote under complete dominance.',
    ],
    [],
    'pewarisan'
  ),
  T(
    'ekolokasi',
    ['Ekolokasi', 'Echolocation'],
    [
      'Cara menemukan benda dengan mengirim suara lalu mendengarkan pantulannya, seperti kelelawar dan lumba-lumba.',
      'Finding objects by sending out sounds and listening to the echoes, as bats and dolphins do.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'ekosistem',
    ['Ekosistem', 'Ecosystem'],
    [
      'Kesatuan makhluk hidup dan lingkungan tak hidup (air, tanah, udara, cahaya) yang saling berhubungan.',
      'Living things together with their non-living surroundings (water, soil, air, light), all interacting.',
    ],
    [
      'Ekosistem dicirikan oleh aliran energi satu arah dan daur materi (karbon, nitrogen, air).',
      'Ecosystems are characterised by one-way energy flow and cycling of matter (carbon, nitrogen, water).',
    ],
    [],
    'ekosistem'
  ),
  T(
    'endemik',
    ['Endemik', 'Endemic'],
    [
      'Hanya ditemukan secara alami di satu wilayah tertentu, misalnya komodo di Nusa Tenggara Timur.',
      'Found naturally in only one area, such as the Komodo dragon in East Nusa Tenggara.',
    ],
    null,
    [],
    'keanekaragaman'
  ),
  T(
    'epifit',
    ['Epifit', 'Epiphyte'],
    [
      'Tumbuhan yang menumpang pada tumbuhan lain tanpa mengambil makanannya, seperti anggrek.',
      'A plant that grows on another plant without taking its food, such as an orchid.',
    ],
    null,
    [],
    'fotosintesis'
  ),
  T(
    'eukariota',
    ['Eukariota', 'Eukaryote'],
    [
      'Makhluk hidup yang selnya memiliki inti sel, seperti hewan, tumbuhan, dan jamur.',
      'Organisms whose cells have a nucleus, such as animals, plants and fungi.',
    ],
    [
      'Sel eukariota memiliki organel bermembran; mitokondria dan kloroplas berasal dari endosimbiosis bakteri.',
      'Eukaryotic cells have membrane-bound organelles; mitochondria and chloroplasts came from bacterial endosymbiosis.',
    ],
    ['eukarya'],
    'sel'
  ),
  T(
    'evolusi',
    ['Evolusi', 'Evolution'],
    [
      'Perubahan sifat makhluk hidup dari generasi ke generasi dalam waktu yang sangat panjang.',
      'Change in the traits of living things over many generations.',
    ],
    [
      'Secara genetika populasi, evolusi adalah perubahan frekuensi alel, yang digerakkan oleh seleksi alam, hanyutan genetik, mutasi, dan aliran gen.',
      'In population genetics, evolution is change in allele frequencies, driven by selection, drift, mutation and gene flow.',
    ],
    [],
    'evolusi'
  ),
  T(
    'fenotipe',
    ['Fenotipe', 'Phenotype'],
    [
      'Sifat yang terlihat atau terukur, seperti warna bunga atau tinggi badan.',
      'A trait you can see or measure, such as flower colour or height.',
    ],
    [
      'Fenotipe dihasilkan interaksi genotipe dan lingkungan.',
      'The phenotype results from genotype interacting with environment.',
    ],
    [],
    'pewarisan'
  ),
  T(
    'fermentasi',
    ['Fermentasi', 'Fermentation'],
    [
      'Proses mikroba mengubah gula menjadi zat lain, misalnya pada pembuatan tempe, tapai, dan yoghurt.',
      'Microbes turning sugar into other substances, as in making tempeh, tapai and yoghurt.',
    ],
    [
      'Fermentasi menghasilkan ATP tanpa rantai transpor elektron, meregenerasi NAD⁺ dengan membentuk produk seperti laktat atau etanol.',
      'Fermentation makes ATP without an electron transport chain, regenerating NAD⁺ by forming products such as lactate or ethanol.',
    ],
    [],
    'mikroorganisme'
  ),
  T(
    'fosil',
    ['Fosil', 'Fossil'],
    [
      'Sisa atau jejak makhluk hidup purba yang tersimpan di batuan.',
      'Remains or traces of ancient life preserved in rock.',
    ],
    [
      'Umur fosil ditentukan dengan stratigrafi dan penanggalan radiometrik batuan di sekitarnya.',
      'Fossil ages are determined by stratigraphy and radiometric dating of surrounding rock.',
    ],
    [],
    'purba'
  ),
  T(
    'fotosintesis',
    ['Fotosintesis', 'Photosynthesis'],
    [
      'Cara tumbuhan membuat makanan (gula) dari air dan karbon dioksida dengan bantuan cahaya matahari, sambil melepaskan oksigen.',
      'How plants make food (sugar) from water and carbon dioxide using sunlight, releasing oxygen.',
    ],
    [
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Reaksi terang di membran tilakoid menghasilkan ATP dan NADPH; siklus Calvin di stroma mengikat CO₂.',
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Light reactions in thylakoids make ATP and NADPH; the Calvin cycle in the stroma fixes CO₂.',
    ],
    [],
    'fotosintesis'
  ),
  T(
    'gen',
    ['Gen', 'Gene'],
    [
      'Bagian DNA yang membawa satu “perintah” sifat, misalnya warna mata.',
      'A piece of DNA that carries one “instruction”, such as eye colour.',
    ],
    [
      'Gen adalah segmen DNA yang ditranskripsi menjadi RNA fungsional; banyak sifat dipengaruhi banyak gen (poligenik).',
      'A gene is a DNA segment transcribed into functional RNA; many traits are polygenic.',
    ],
    [],
    'pewarisan'
  ),
  T(
    'genotipe',
    ['Genotipe', 'Genotype'],
    ['Susunan gen suatu individu, misalnya Aa.', 'The set of alleles an individual carries, such as Aa.'],
    null,
    [],
    'pewarisan'
  ),
  T(
    'habitat',
    ['Habitat', 'Habitat'],
    ['Tempat hidup alami suatu makhluk hidup.', 'The natural home of an organism.'],
    null,
    [],
    'ekosistem'
  ),
  T(
    'herbivora',
    ['Herbivora', 'Herbivore'],
    [
      'Hewan pemakan tumbuhan, seperti sapi dan kambing.',
      'An animal that eats plants, such as a cow or goat.',
    ],
    null,
    ['pemakan tumbuhan'],
    'ekosistem'
  ),
  T(
    'hermafrodit',
    ['Hermafrodit', 'Hermaphrodite'],
    [
      'Makhluk hidup yang memiliki alat kelamin jantan dan betina sekaligus, seperti cacing tanah dan bekicot.',
      'An organism with both male and female parts, such as earthworms and snails.',
    ],
    null,
    [],
    'perkembangbiakan'
  ),
  T(
    'heterotrof',
    ['Heterotrof', 'Heterotroph'],
    [
      'Makhluk hidup yang tidak bisa membuat makanan sendiri, sehingga mendapatkannya dari makhluk atau zat lain.',
      'An organism that cannot make its own food and gets it from others.',
    ],
    null,
    [],
    'ekosistem'
  ),
  T(
    'heterozigot',
    ['Heterozigot', 'Heterozygous'],
    [
      'Memiliki dua alel yang berbeda untuk satu gen, misalnya Aa.',
      'Having two different alleles for a gene, such as Aa.',
    ],
    null,
    [],
    'pewarisan'
  ),
  T(
    'hifa',
    ['Hifa', 'Hypha'],
    ['Benang-benang halus yang menyusun tubuh jamur.', 'The fine threads that make up the body of a fungus.'],
    [
      'Kumpulan hifa disebut miselium; dinding selnya mengandung kitin.',
      'A mass of hyphae is a mycelium; its cell walls contain chitin.',
    ],
    ['miselium'],
    'mikroorganisme'
  ),
  T(
    'hipotesis',
    ['Hipotesis', 'Hypothesis'],
    [
      'Dugaan sementara yang dapat diuji dengan pengamatan atau percobaan.',
      'A testable explanation or prediction.',
    ],
    [
      'Hipotesis yang baik dapat difalsifikasi dan menghasilkan prediksi yang spesifik.',
      'A good hypothesis is falsifiable and makes specific predictions.',
    ],
    [],
    'ciri'
  ),
  T(
    'homozigot',
    ['Homozigot', 'Homozygous'],
    [
      'Memiliki dua alel yang sama untuk satu gen, misalnya AA atau aa.',
      'Having two identical alleles for a gene, such as AA or aa.',
    ],
    null,
    [],
    'pewarisan'
  ),
  T(
    'invasif',
    ['Spesies invasif', 'Invasive species'],
    [
      'Makhluk hidup pendatang yang menyebar cepat dan merugikan makhluk asli di suatu tempat.',
      'A non-native organism that spreads quickly and harms local species.',
    ],
    null,
    ['spesies invasif'],
    'keanekaragaman'
  ),
  T(
    'invertebrata',
    ['Invertebrata', 'Invertebrate'],
    [
      'Hewan tanpa tulang belakang, seperti serangga, cacing, dan siput.',
      'Animals without a backbone, such as insects, worms and snails.',
    ],
    null,
    [],
    'klasifikasi'
  ),
  T(
    'karnivora',
    ['Karnivora', 'Carnivore'],
    [
      'Hewan pemakan daging, seperti harimau dan elang.',
      'An animal that eats meat, such as a tiger or eagle.',
    ],
    null,
    ['pemakan daging'],
    'ekosistem'
  ),
  T(
    'kaki semu',
    ['Kaki semu', 'Pseudopod'],
    [
      'Juluran sementara tubuh sel yang dipakai amoeba untuk bergerak dan menangkap makanan.',
      'A temporary bulge of a cell that amoebas use to move and catch food.',
    ],
    null,
    ['pseudopodia'],
    'mikroorganisme'
  ),
  T(
    'kamuflase',
    ['Kamuflase', 'Camouflage'],
    [
      'Warna atau bentuk tubuh yang menyerupai lingkungan sehingga sulit terlihat.',
      'Colours or shapes that blend with the surroundings so an animal is hard to see.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'kauliflori',
    ['Kauliflori', 'Cauliflory'],
    [
      'Bunga dan buah yang tumbuh langsung dari batang pohon, seperti pada kakao dan nangka.',
      'Flowers and fruit growing straight from the trunk, as in cacao and jackfruit.',
    ],
    null,
    [],
    'fotosintesis'
  ),
  T(
    'kemosintesis',
    ['Kemosintesis', 'Chemosynthesis'],
    [
      'Membuat makanan memakai energi dari zat kimia, bukan dari cahaya matahari.',
      'Making food using energy from chemicals instead of sunlight.',
    ],
    null,
    [],
    'mikroorganisme'
  ),
  T(
    'klasifikasi',
    ['Klasifikasi', 'Classification'],
    [
      'Pengelompokan makhluk hidup berdasarkan persamaan dan perbedaan cirinya.',
      'Grouping living things by their similarities and differences.',
    ],
    [
      'Klasifikasi modern berupaya mencerminkan kekerabatan evolusioner (kelompok monofiletik).',
      'Modern classification aims to reflect evolutionary relationships (monophyletic groups).',
    ],
    [],
    'klasifikasi'
  ),
  T(
    'klorofil',
    ['Klorofil', 'Chlorophyll'],
    [
      'Zat hijau daun yang menangkap cahaya untuk fotosintesis.',
      'The green pigment that captures light for photosynthesis.',
    ],
    null,
    ['zat hijau daun'],
    'fotosintesis'
  ),
  T(
    'kloroplas',
    ['Kloroplas', 'Chloroplast'],
    [
      'Bagian sel tumbuhan tempat fotosintesis terjadi.',
      'The part of a plant cell where photosynthesis happens.',
    ],
    null,
    [],
    'sel'
  ),
  T(
    'konservasi',
    ['Konservasi', 'Conservation'],
    [
      'Upaya melindungi makhluk hidup dan tempat hidupnya agar tidak punah.',
      'Efforts to protect living things and their homes from extinction.',
    ],
    null,
    [],
    'keanekaragaman'
  ),
  T(
    'konsumen',
    ['Konsumen', 'Consumer'],
    [
      'Makhluk hidup yang mendapat energi dengan memakan makhluk lain.',
      'An organism that gets energy by eating other organisms.',
    ],
    null,
    [],
    'ekosistem'
  ),
  T(
    'kromosom',
    ['Kromosom', 'Chromosome'],
    [
      'Gulungan DNA yang sangat rapi di dalam inti sel. Manusia memiliki 46 kromosom.',
      'A tightly packed coil of DNA in the nucleus. Humans have 46 chromosomes.',
    ],
    null,
    [],
    'pewarisan'
  ),
  T(
    'keanekaragaman hayati',
    ['Keanekaragaman hayati', 'Biodiversity'],
    [
      'Keragaman makhluk hidup: jenis, gen, dan ekosistem.',
      'The variety of life: species, genes and ecosystems.',
    ],
    null,
    ['biodiversitas'],
    'keanekaragaman'
  ),
  T(
    'kepunahan',
    ['Kepunahan', 'Extinction'],
    ['Hilangnya seluruh anggota suatu spesies dari bumi.', 'When every member of a species has died out.'],
    null,
    ['punah'],
    'purba'
  ),
  T(
    'lamun',
    ['Lamun', 'Seagrass'],
    [
      'Tumbuhan berbunga yang hidup terendam di laut dangkal; makanan duyung dan penyu hijau.',
      'Flowering plants that live underwater in shallow seas; food for dugongs and green turtles.',
    ],
    null,
    [],
    'ekosistem'
  ),
  T(
    'membran sel',
    ['Membran sel', 'Cell membrane'],
    [
      'Selaput tipis pembungkus sel yang mengatur zat keluar-masuk.',
      'The thin layer around a cell that controls what goes in and out.',
    ],
    [
      'Membran tersusun atas lapisan ganda fosfolipid dengan protein; bersifat semipermeabel.',
      'Membranes are phospholipid bilayers with proteins and are selectively permeable.',
    ],
    [],
    'sel'
  ),
  T(
    'meranggas',
    ['Meranggas', 'Deciduous'],
    [
      'Menggugurkan daun pada musim tertentu, misalnya pohon jati saat kemarau.',
      'Dropping leaves in a certain season, like teak in the dry season.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'metamorfosis',
    ['Metamorfosis', 'Metamorphosis'],
    [
      'Perubahan bentuk tubuh selama tumbuh, misalnya telur → ulat → kepompong → kupu-kupu.',
      'A change in body form while growing, such as egg → caterpillar → pupa → butterfly.',
    ],
    [
      'Metamorfosis sempurna (holometabola) melalui tahap pupa; tidak sempurna (hemimetabola) melalui nimfa.',
      'Complete metamorphosis (holometabolous) has a pupal stage; incomplete (hemimetabolous) has nymphs.',
    ],
    [],
    'perkembangbiakan'
  ),
  T(
    'migrasi',
    ['Migrasi', 'Migration'],
    [
      'Perpindahan hewan secara teratur ke tempat lain, misalnya burung saat musim dingin.',
      'Regular movement of animals to another place, such as birds in winter.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'mikoriza',
    ['Mikoriza', 'Mycorrhiza'],
    [
      'Kerja sama jamur dengan akar tumbuhan: jamur memberi mineral, tumbuhan memberi gula.',
      'A partnership between fungi and plant roots: fungi give minerals, plants give sugar.',
    ],
    null,
    [],
    'mikroorganisme'
  ),
  T(
    'mikroskop',
    ['Mikroskop', 'Microscope'],
    [
      'Alat untuk melihat benda yang terlalu kecil untuk mata telanjang.',
      'A tool for seeing things too small for the naked eye.',
    ],
    [
      'Mikroskop cahaya terbatas sekitar 0,2 µm; mikroskop elektron dapat mengamati struktur hingga nanometer.',
      'Light microscopes are limited to about 0.2 µm; electron microscopes resolve nanometre structures.',
    ],
    [],
    'sel'
  ),
  T(
    'mimikri',
    ['Mimikri', 'Mimicry'],
    [
      'Menyerupai makhluk lain untuk melindungi diri, misalnya ngengat bersayap mirip kepala ular.',
      'Looking like another organism for protection, like a moth with snake-head wing tips.',
    ],
    null,
    [],
    'adaptasi'
  ),
  T(
    'mitokondria',
    ['Mitokondria', 'Mitochondria'],
    [
      'Bagian sel yang menghasilkan energi dari makanan lewat respirasi.',
      'The part of a cell that releases energy from food through respiration.',
    ],
    null,
    [],
    'sel'
  ),
  T(
    'mutasi',
    ['Mutasi', 'Mutation'],
    ['Perubahan pada DNA yang bisa menimbulkan sifat baru.', 'A change in DNA that can create a new trait.'],
    [
      'Mutasi adalah sumber utama variasi genetik baru; kebanyakan netral atau merugikan, sebagian kecil menguntungkan.',
      'Mutation is the main source of new genetic variation; most are neutral or harmful, a few beneficial.',
    ],
    [],
    'evolusi'
  ),
  T(
    'omnivora',
    ['Omnivora', 'Omnivore'],
    ['Hewan pemakan segala: tumbuhan dan hewan.', 'An animal that eats both plants and animals.'],
    null,
    ['pemakan segala'],
    'ekosistem'
  ),
  T(
    'osmosis',
    ['Osmosis', 'Osmosis'],
    [
      'Perpindahan air melalui selaput tipis menuju larutan yang lebih pekat.',
      'Movement of water through a thin membrane towards the more concentrated solution.',
    ],
    [
      'Osmosis adalah difusi air melewati membran semipermeabel mengikuti gradien potensial air.',
      'Osmosis is the diffusion of water across a semipermeable membrane down a water-potential gradient.',
    ],
    [],
    'sel'
  ),
  T(
    'ovipar',
    ['Ovipar', 'Oviparous'],
    [
      'Berkembang biak dengan bertelur, seperti ayam dan penyu.',
      'Reproducing by laying eggs, like chickens and turtles.',
    ],
    null,
    ['bertelur'],
    'perkembangbiakan'
  ),
  T(
    'parasit',
    ['Parasit', 'Parasite'],
    [
      'Makhluk hidup yang menumpang dan mengambil makanan dari makhluk lain sehingga merugikan inangnya.',
      'An organism that lives on or in another and takes food from it, harming its host.',
    ],
    null,
    ['parasitisme'],
    'ekosistem'
  ),
  T(
    'pengurai',
    ['Pengurai', 'Decomposer'],
    [
      'Makhluk hidup yang menguraikan sisa makhluk mati menjadi zat hara, seperti jamur dan bakteri.',
      'Organisms that break down dead things into nutrients, such as fungi and bacteria.',
    ],
    null,
    ['dekomposer'],
    'ekosistem'
  ),
  T(
    'penyerbukan',
    ['Penyerbukan', 'Pollination'],
    [
      'Berpindahnya serbuk sari ke kepala putik sehingga bunga bisa menjadi buah dan biji.',
      'Moving pollen to the stigma so flowers can become fruit and seeds.',
    ],
    null,
    ['polinasi', 'penyerbuk'],
    'fotosintesis'
  ),
  T(
    'plankton',
    ['Plankton', 'Plankton'],
    [
      'Makhluk kecil yang melayang terbawa arus air, makanan penting bagi hewan laut.',
      'Tiny drifting organisms that are key food for sea animals.',
    ],
    [
      'Fitoplankton berfotosintesis dan menghasilkan sebagian besar oksigen laut; zooplankton adalah konsumen.',
      'Phytoplankton photosynthesise and produce much of the ocean’s oxygen; zooplankton are consumers.',
    ],
    ['fitoplankton', 'zooplankton'],
    'ekosistem'
  ),
  T(
    'populasi',
    ['Populasi', 'Population'],
    [
      'Kumpulan individu satu spesies yang hidup di tempat yang sama.',
      'A group of individuals of one species living in the same place.',
    ],
    null,
    [],
    'ekosistem'
  ),
  T(
    'predasi',
    ['Predasi', 'Predation'],
    [
      'Hubungan pemangsa dan mangsa, misalnya elang memangsa tikus.',
      'The relationship between predator and prey, like an eagle catching a rat.',
    ],
    null,
    ['pemangsa'],
    'ekosistem'
  ),
  T(
    'primata',
    ['Primata', 'Primate'],
    [
      'Kelompok mamalia yang meliputi monyet, kera, dan manusia.',
      'The mammal group that includes monkeys, apes and humans.',
    ],
    null,
    [],
    'klasifikasi'
  ),
  T(
    'produsen',
    ['Produsen', 'Producer'],
    [
      'Makhluk hidup yang membuat makanannya sendiri, seperti tumbuhan.',
      'An organism that makes its own food, such as a plant.',
    ],
    null,
    [],
    'ekosistem'
  ),
  T(
    'prokariota',
    ['Prokariota', 'Prokaryote'],
    [
      'Makhluk hidup yang selnya tidak memiliki inti sel, yaitu bakteri dan arkea.',
      'Organisms whose cells have no nucleus: bacteria and archaea.',
    ],
    null,
    [],
    'sel'
  ),
  T(
    'rantai makanan',
    ['Rantai makanan', 'Food chain'],
    [
      'Urutan makan-dimakan yang menunjukkan aliran energi, misalnya padi → tikus → ular → elang.',
      'The order of who eats whom, showing energy flow: rice → rat → snake → eagle.',
    ],
    [
      'Rata-rata hanya sekitar 10% energi berpindah ke tingkat trofik berikutnya, meski nilainya bervariasi.',
      'On average only about 10% of energy passes to the next trophic level, though it varies.',
    ],
    ['jaring-jaring makanan'],
    'ekosistem'
  ),
  T(
    'regenerasi',
    ['Regenerasi', 'Regeneration'],
    ['Kemampuan menumbuhkan kembali bagian tubuh yang hilang.', 'The ability to regrow lost body parts.'],
    null,
    [],
    'adaptasi'
  ),
  T(
    'resesif',
    ['Resesif', 'Recessive'],
    [
      'Sifat yang hanya muncul bila diwarisi dari kedua induk.',
      'A trait that only shows when inherited from both parents.',
    ],
    null,
    [],
    'pewarisan'
  ),
  T(
    'respirasi',
    ['Respirasi', 'Respiration'],
    [
      'Proses sel mengubah makanan menjadi energi, biasanya dengan oksigen.',
      'How cells turn food into energy, usually using oxygen.',
    ],
    [
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP). Terjadi di sitoplasma dan mitokondria.',
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP), in the cytoplasm and mitochondria.',
    ],
    ['bernapas'],
    'ciri'
  ),
  T(
    'ruminansia',
    ['Ruminansia', 'Ruminant'],
    [
      'Hewan pemamah biak yang mengunyah ulang makanannya, seperti sapi, kambing, dan kerbau.',
      'Cud-chewing animals that chew their food twice, such as cows, goats and buffalo.',
    ],
    null,
    ['pemamah biak'],
    'adaptasi'
  ),
  T(
    'sel',
    ['Sel', 'Cell'],
    [
      'Satuan terkecil makhluk hidup. Ada makhluk bersel satu, ada yang bersel banyak.',
      'The smallest unit of life. Some organisms are one cell, others have many.',
    ],
    [
      'Teori sel: semua makhluk hidup tersusun atas sel, sel adalah unit struktural dan fungsional, dan sel berasal dari sel sebelumnya.',
      'Cell theory: all organisms are made of cells, cells are the basic unit of life, and cells come from pre-existing cells.',
    ],
    [],
    'sel'
  ),
  T(
    'seleksi alam',
    ['Seleksi alam', 'Natural selection'],
    [
      'Proses ketika makhluk yang sifatnya lebih cocok dengan lingkungan lebih banyak bertahan dan berketurunan.',
      'When organisms with traits better suited to their environment survive and reproduce more.',
    ],
    [
      'Syarat: variasi, pewarisan, dan perbedaan keberhasilan reproduksi. Seleksi bekerja pada fenotipe, mengubah frekuensi alel.',
      'Requires variation, inheritance and differential reproductive success; selection acts on phenotypes and shifts allele frequencies.',
    ],
    [],
    'evolusi'
  ),
  T(
    'sianobakteri',
    ['Sianobakteri', 'Cyanobacteria'],
    [
      'Bakteri yang bisa berfotosintesis. Merekalah yang pertama kali mengisi udara bumi dengan oksigen.',
      'Bacteria that photosynthesise. They first filled Earth’s air with oxygen.',
    ],
    null,
    ['ganggang biru-hijau'],
    'mikroorganisme'
  ),
  T(
    'silia',
    ['Silia', 'Cilia'],
    [
      'Rambut getar halus di permukaan sel untuk bergerak atau menggerakkan cairan.',
      'Tiny hair-like structures on cells used for moving or moving fluid.',
    ],
    null,
    ['rambut getar'],
    'mikroorganisme'
  ),
  T(
    'simbiosis mutualisme',
    ['Simbiosis mutualisme', 'Mutualism'],
    [
      'Hubungan dua makhluk hidup yang sama-sama untung, seperti ikan badut dan anemon.',
      'A relationship in which both partners benefit, like clownfish and anemones.',
    ],
    null,
    ['mutualisme', 'simbiosis'],
    'ekosistem'
  ),
  T(
    'simbiosis komensalisme',
    ['Simbiosis komensalisme', 'Commensalism'],
    [
      'Hubungan ketika satu pihak untung dan pihak lain tidak dirugikan, seperti anggrek pada pohon.',
      'One partner benefits and the other is unaffected, like an orchid on a tree.',
    ],
    null,
    ['komensalisme'],
    'ekosistem'
  ),
  T(
    'siklus hidup',
    ['Siklus hidup', 'Life cycle'],
    [
      'Tahapan hidup makhluk dari lahir, tumbuh, berkembang biak, hingga mati.',
      'The stages of life from birth, growth and reproduction to death.',
    ],
    null,
    ['daur hidup'],
    'perkembangbiakan'
  ),
  T(
    'spesies',
    ['Spesies', 'Species'],
    [
      'Kelompok makhluk hidup yang sangat mirip dan dapat kawin menghasilkan keturunan subur.',
      'A group of very similar organisms that can breed to produce fertile offspring.',
    ],
    [
      'Konsep spesies biologis (Mayr) tidak berlaku untuk organisme aseksual; ilmuwan juga memakai konsep filogenetik dan morfologis.',
      'The biological species concept (Mayr) fails for asexual organisms; scientists also use phylogenetic and morphological concepts.',
    ],
    ['jenis'],
    'klasifikasi'
  ),
  T(
    'spora',
    ['Spora', 'Spore'],
    [
      'Sel kecil untuk berkembang biak pada jamur, lumut, dan paku.',
      'A tiny reproductive cell of fungi, mosses and ferns.',
    ],
    null,
    [],
    'perkembangbiakan'
  ),
  T(
    'stomata',
    ['Stomata', 'Stomata'],
    [
      'Lubang kecil di daun untuk keluar-masuk udara dan uap air.',
      'Tiny pores on leaves that let air and water vapour in and out.',
    ],
    null,
    ['mulut daun'],
    'fotosintesis'
  ),
  T(
    'taksonomi',
    ['Taksonomi', 'Taxonomy'],
    [
      'Ilmu mengenali, memberi nama, dan mengelompokkan makhluk hidup.',
      'The science of identifying, naming and grouping living things.',
    ],
    null,
    [],
    'klasifikasi'
  ),
  T(
    'tigmonasti',
    ['Tigmonasti', 'Thigmonasty'],
    [
      'Gerak tumbuhan karena sentuhan, seperti daun putri malu yang menguncup.',
      'Plant movement in response to touch, like sensitive-plant leaves folding.',
    ],
    null,
    ['nasti'],
    'fotosintesis'
  ),
  T(
    'tingkat trofik',
    ['Tingkat trofik', 'Trophic level'],
    [
      'Posisi makhluk hidup dalam rantai makanan: produsen, konsumen I, konsumen II, dan seterusnya.',
      'A position in a food chain: producer, primary consumer, secondary consumer and so on.',
    ],
    null,
    ['trofik'],
    'ekosistem'
  ),
  T(
    'vertebrata',
    ['Vertebrata', 'Vertebrate'],
    [
      'Hewan bertulang belakang: ikan, amfibi, reptil, burung, dan mamalia.',
      'Animals with a backbone: fish, amphibians, reptiles, birds and mammals.',
    ],
    null,
    ['hewan bertulang belakang'],
    'klasifikasi'
  ),
  T(
    'virus',
    ['Virus', 'Virus'],
    [
      'Partikel sangat kecil yang hanya bisa memperbanyak diri di dalam sel makhluk lain. Banyak ilmuwan tidak menganggapnya makhluk hidup.',
      'A tiny particle that can only multiply inside another organism’s cells. Many scientists do not consider it alive.',
    ],
    [
      'Virus terdiri atas asam nukleat (DNA atau RNA) dalam kapsid protein, tanpa metabolisme sendiri; karena itu tidak dimasukkan dalam tiga domain.',
      'Viruses are nucleic acid (DNA or RNA) in a protein capsid, with no metabolism of their own, so they are not placed in the three domains.',
    ],
    [],
    'mikroorganisme'
  ),
  T(
    'vivipar',
    ['Vivipar', 'Viviparous'],
    [
      'Berkembang biak dengan melahirkan, seperti kucing dan manusia.',
      'Reproducing by giving birth to live young, like cats and humans.',
    ],
    null,
    ['melahirkan'],
    'perkembangbiakan'
  ),
  T(
    'vivipari',
    ['Vivipari (tumbuhan)', 'Vivipary (plants)'],
    [
      'Biji yang sudah berkecambah ketika masih menempel pada tumbuhan induk, seperti bakau.',
      'Seeds that sprout while still attached to the parent plant, like mangroves.',
    ],
    null,
    [],
    'fotosintesis'
  ),
  T(
    'ovovivipar',
    ['Ovovivipar', 'Ovoviviparous'],
    [
      'Telur menetas di dalam tubuh induk, lalu anaknya dilahirkan, seperti beberapa hiu dan ular.',
      'Eggs hatch inside the mother and the young are born alive, as in some sharks and snakes.',
    ],
    null,
    [],
    'perkembangbiakan'
  ),
  T(
    'garis wallace',
    ['Garis Wallace', 'Wallace Line'],
    [
      'Garis khayal di antara Bali–Lombok dan Kalimantan–Sulawesi yang memisahkan hewan tipe Asia dan tipe Australia.',
      'An imaginary line between Bali–Lombok and Borneo–Sulawesi separating Asian and Australian-type animals.',
    ],
    [
      'Wilayah di antara Garis Wallace dan Garis Lydekker disebut Wallacea, kaya spesies endemik.',
      'The region between the Wallace and Lydekker lines is Wallacea, rich in endemic species.',
    ],
    ['wallacea'],
    'keanekaragaman'
  ),
  T(
    'homologi',
    ['Organ homolog', 'Homologous structure'],
    [
      'Bagian tubuh yang asal-usulnya sama walau fungsinya berbeda, seperti lengan manusia dan sayap kelelawar.',
      'Body parts with the same origin but different uses, like a human arm and a bat wing.',
    ],
    null,
    ['homolog'],
    'evolusi'
  ),
  T(
    'kladogram',
    ['Kladogram', 'Cladogram'],
    [
      'Diagram bercabang yang menunjukkan kekerabatan makhluk hidup.',
      'A branching diagram showing how organisms are related.',
    ],
    [
      'Kladogram disusun berdasarkan ciri turunan bersama (sinapomorfi).',
      'Cladograms are built from shared derived traits (synapomorphies).',
    ],
    ['filogeni', 'pohon filogenetik'],
    'klasifikasi'
  ),
  T(
    'variabel',
    ['Variabel', 'Variable'],
    [
      'Hal yang dapat berubah dalam percobaan. Ubah satu variabel saja agar hasilnya jelas.',
      'Something that can change in an experiment. Change only one at a time for clear results.',
    ],
    [
      'Variabel bebas diubah peneliti, variabel terikat diukur, variabel kontrol dijaga tetap.',
      'The independent variable is changed, the dependent variable is measured, controlled variables are kept constant.',
    ],
    [],
    'ciri'
  ),
  T(
    'ciri makhluk hidup',
    ['Ciri makhluk hidup', 'Characteristics of life'],
    [
      'Bernapas, makan, tumbuh, berkembang biak, bergerak, peka rangsang, dan mengeluarkan zat sisa.',
      'Breathing, feeding, growing, reproducing, moving, responding and removing waste.',
    ],
    null,
    [],
    'ciri'
  ),
  T(
    'iritabilitas',
    ['Peka rangsang', 'Sensitivity'],
    [
      'Kemampuan makhluk hidup menanggapi rangsangan seperti cahaya, suhu, atau sentuhan.',
      'The ability to respond to stimuli such as light, heat or touch.',
    ],
    null,
    ['peka rangsang'],
    'ciri'
  ),
  T(
    'fototropisme',
    ['Fototropisme', 'Phototropism'],
    ['Gerak tumbuh tumbuhan ke arah cahaya.', 'Plant growth towards light.'],
    null,
    ['tropisme'],
    'fotosintesis'
  ),
  T(
    'kompetisi',
    ['Kompetisi', 'Competition'],
    [
      'Persaingan makhluk hidup untuk mendapatkan makanan, tempat, atau pasangan.',
      'Organisms competing for food, space or mates.',
    ],
    null,
    ['persaingan'],
    'ekosistem'
  ),
  T(
    'ekstremofil',
    ['Ekstremofil', 'Extremophile'],
    [
      'Makhluk hidup yang tumbuh di tempat ekstrem: sangat panas, asin, asam, atau dingin.',
      'An organism that thrives in extreme places: very hot, salty, acidic or cold.',
    ],
    null,
    ['ekstrem'],
    'mikroorganisme'
  ),
  T(
    'efek rumah kaca',
    ['Efek rumah kaca', 'Greenhouse effect'],
    [
      'Pemanasan bumi karena gas seperti karbon dioksida menahan panas di atmosfer.',
      'Warming of Earth as gases like carbon dioxide trap heat.',
    ],
    null,
    [],
    'keanekaragaman'
  ),
];
