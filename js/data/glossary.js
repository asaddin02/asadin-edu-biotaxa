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
    ],
    [],
    'dunia-hewan'
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
    'tumbuhan'
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
    'dna-protein'
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
    'tumbuhan'
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
      'Bagian DNA yang membawa petunjuk untuk membuat satu protein. Banyak gen, bersama lingkungan, menentukan sifat seperti warna mata.',
      'A piece of DNA with instructions for making one protein. Many genes, together with the environment, shape traits such as eye colour.',
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
    [],
    'jamur'
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
    'metode-ilmiah'
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
    'dunia-hewan'
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
    'tumbuhan'
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
    'jamur'
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
      'Bagian sel yang melepaskan energi dari makanan lewat respirasi dan menyimpannya dalam ATP.',
      'The part of a cell that releases energy from food through respiration and stores it in ATP.',
    ],
    [
      'Mitokondria memiliki DNA dan ribosom sendiri serta membran dalam berlipat (krista) tempat rantai transpor elektron dan ATP sintase bekerja.',
      'Mitochondria have their own DNA and ribosomes and a folded inner membrane (cristae) where the electron transport chain and ATP synthase work.',
    ],
    [],
    'metabolisme'
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
    'dna-protein'
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
    'tumbuhan'
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
    'dunia-hewan'
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
    'metabolisme'
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
    'tumbuhan'
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
    'tumbuhan'
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
    'dunia-hewan'
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
    'virus'
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
    'tumbuhan'
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
    ['diagram kekerabatan'],
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
    'metode-ilmiah'
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
    'tumbuhan'
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
    [
      'Efek rumah kaca alami membuat bumi layak huni. Masalahnya adalah peningkatan gas rumah kaca akibat pembakaran bahan bakar fosil dan deforestasi.',
      'The natural greenhouse effect keeps Earth habitable. The problem is the rise in greenhouse gases from burning fossil fuels and deforestation.',
    ],
    ['gas rumah kaca'],
    'perubahan-lingkungan'
  ),
  // Molecules, cells and metabolism
  T(
    'enzim',
    ['Enzim', 'Enzyme'],
    [
      'Protein yang mempercepat reaksi kimia di dalam tubuh tanpa ikut habis.',
      'A protein that speeds up chemical reactions in the body without being used up.',
    ],
    [
      'Enzim menurunkan energi aktivasi; substrat berikatan di sisi aktif. Laju enzim dipengaruhi suhu, pH, konsentrasi substrat, dan inhibitor.',
      'Enzymes lower activation energy; the substrate binds at the active site. Enzyme rate depends on temperature, pH, substrate concentration and inhibitors.',
    ],
    ['katalis biologis'],
    'molekul'
  ),
  T(
    'atp',
    ['ATP', 'ATP'],
    [
      'Molekul pembawa energi di dalam sel, sering disebut “mata uang energi” sel.',
      'The molecule that carries energy in cells, often called the cell’s “energy currency”.',
    ],
    [
      'Adenosin trifosfat melepaskan energi saat gugus fosfat terakhirnya dilepas (menjadi ADP). Sebagian besar ATP dibuat ATP sintase di mitokondria.',
      'Adenosine triphosphate releases energy when its last phosphate is removed (becoming ADP). Most ATP is made by ATP synthase in mitochondria.',
    ],
    ['adenosin trifosfat'],
    'metabolisme'
  ),
  T(
    'karbohidrat',
    ['Karbohidrat', 'Carbohydrate'],
    [
      'Zat gizi sumber tenaga utama, seperti gula dan tepung pada nasi, jagung, dan ubi.',
      'The main energy nutrient, such as sugars and starch in rice, corn and sweet potato.',
    ],
    [
      'Monosakarida (glukosa, fruktosa) bergabung melalui ikatan glikosidik membentuk disakarida dan polisakarida (amilum, glikogen, selulosa).',
      'Monosaccharides (glucose, fructose) join by glycosidic bonds into disaccharides and polysaccharides (starch, glycogen, cellulose).',
    ],
    ['gula', 'amilum', 'pati'],
    'molekul'
  ),
  T(
    'protein',
    ['Protein', 'Protein'],
    [
      'Zat pembangun tubuh yang tersusun atas asam amino, misalnya pada ikan, telur, dan tempe.',
      'Body-building substances made of amino acids, found for example in fish, eggs and tempeh.',
    ],
    [
      'Fungsi protein ditentukan bentuk tiga dimensinya (struktur primer sampai kuarterner); panas dan pH ekstrem dapat merusaknya (denaturasi).',
      'A protein’s function depends on its 3D shape (primary to quaternary structure); heat and extreme pH can destroy it (denaturation).',
    ],
    [],
    'molekul'
  ),
  T(
    'asam amino',
    ['Asam amino', 'Amino acid'],
    ['Satuan kecil penyusun protein. Ada 20 jenis asam amino.', 'The small building blocks of proteins. There are 20 kinds.'],
    [
      'Asam amino memiliki gugus amino, gugus karboksil, dan gugus R; asam amino dihubungkan ikatan peptida.',
      'Amino acids have an amino group, a carboxyl group and an R group; they are joined by peptide bonds.',
    ],
    [],
    'molekul'
  ),
  T(
    'lipid',
    ['Lipid', 'Lipid'],
    [
      'Kelompok zat yang tidak larut dalam air, seperti lemak, minyak, dan kolesterol.',
      'Substances that do not dissolve in water, such as fats, oils and cholesterol.',
    ],
    [
      'Trigliserida menyimpan energi, fosfolipid menyusun membran, dan steroid menjadi bahan hormon.',
      'Triglycerides store energy, phospholipids build membranes and steroids are the basis of some hormones.',
    ],
    ['lemak'],
    'molekul'
  ),
  T(
    'metabolisme',
    ['Metabolisme', 'Metabolism'],
    ['Semua reaksi kimia yang terjadi di dalam sel.', 'All the chemical reactions that happen in a cell.'],
    [
      'Anabolisme menyusun molekul kompleks dan memerlukan energi; katabolisme memecah molekul dan melepaskan energi.',
      'Anabolism builds complex molecules and needs energy; catabolism breaks molecules down and releases energy.',
    ],
    ['anabolisme', 'katabolisme'],
    'metabolisme'
  ),
  T(
    'glikolisis',
    ['Glikolisis', 'Glycolysis'],
    [
      'Tahap pertama pemecahan gula di dalam sel.',
      'The first stage of breaking down sugar in a cell.',
    ],
    [
      'Berlangsung di sitoplasma tanpa oksigen: satu glukosa menjadi dua piruvat dengan hasil bersih 2 ATP dan 2 NADH.',
      'Takes place in the cytoplasm without oxygen: one glucose becomes two pyruvates, with a net 2 ATP and 2 NADH.',
    ],
    [],
    'metabolisme'
  ),
  T(
    'ribosom',
    ['Ribosom', 'Ribosome'],
    ['Bagian sel tempat protein dibuat.', 'The part of a cell where proteins are made.'],
    [
      'Ribosom tersusun atas RNA dan protein, membaca kodon mRNA, dan merangkai asam amino. Ribosom ada di semua sel, termasuk prokariota.',
      'Ribosomes are made of RNA and protein, read mRNA codons and join amino acids. They occur in every cell, prokaryotes included.',
    ],
    [],
    'dna-protein'
  ),
  T(
    'inti sel',
    ['Inti sel', 'Nucleus'],
    [
      'Bagian sel eukariota yang menyimpan DNA dan mengatur kegiatan sel.',
      'The part of a eukaryotic cell that holds DNA and controls the cell.',
    ],
    [
      'Inti dibungkus membran ganda berpori; di dalamnya terdapat kromatin dan anak inti (nukleolus) tempat pembentukan ribosom.',
      'The nucleus has a porous double membrane and contains chromatin and the nucleolus, where ribosomes are assembled.',
    ],
    ['nukleus'],
    'sel'
  ),
  T(
    'organel',
    ['Organel', 'Organelle'],
    [
      'Bagian kecil di dalam sel yang memiliki tugas khusus, seperti mitokondria dan kloroplas.',
      'A small structure inside a cell with a special job, such as a mitochondrion or chloroplast.',
    ],
    [
      'Organel bermembran (inti, retikulum endoplasma, badan Golgi, lisosom, mitokondria, kloroplas) khas sel eukariota.',
      'Membrane-bound organelles (nucleus, endoplasmic reticulum, Golgi body, lysosomes, mitochondria, chloroplasts) are typical of eukaryotic cells.',
    ],
    ['badan golgi', 'lisosom', 'retikulum endoplasma'],
    'sel'
  ),
  // DNA, genes and cell division
  T(
    'rna',
    ['RNA', 'RNA'],
    [
      'Salinan pesan dari DNA yang dipakai sel untuk membuat protein.',
      'A copy of a message from DNA that cells use to make proteins.',
    ],
    [
      'RNA memakai gula ribosa dan basa urasil (U). Jenis utamanya mRNA (pembawa pesan), tRNA (pembawa asam amino), dan rRNA (penyusun ribosom).',
      'RNA uses ribose sugar and the base uracil (U). Its main types are mRNA (messenger), tRNA (carries amino acids) and rRNA (in ribosomes).',
    ],
    ['mrna'],
    'dna-protein'
  ),
  T(
    'transkripsi',
    ['Transkripsi', 'Transcription'],
    ['Proses menyalin urutan DNA suatu gen menjadi RNA.', 'Copying a gene’s DNA sequence into RNA.'],
    [
      'RNA polimerase menempel pada promotor dan menyintesis RNA 5′→3′. Pada eukariota, pre-mRNA diproses (tudung, ekor poli-A, splicing).',
      'RNA polymerase binds the promoter and builds RNA 5′→3′. In eukaryotes, pre-mRNA is processed (cap, poly-A tail, splicing).',
    ],
    [],
    'dna-protein'
  ),
  T(
    'translasi',
    ['Translasi', 'Translation'],
    ['Proses membaca mRNA untuk merangkai protein di ribosom.', 'Reading mRNA to build a protein at the ribosome.'],
    [
      'Setiap kodon dibaca oleh tRNA dengan antikodon yang sesuai; AUG adalah kodon awal, UAA, UAG, dan UGA kodon henti.',
      'Each codon is read by a tRNA with a matching anticodon; AUG is the start codon, and UAA, UAG and UGA are stop codons.',
    ],
    [],
    'dna-protein'
  ),
  T(
    'kodon',
    ['Kodon', 'Codon'],
    [
      'Tiga huruf basa berurutan pada mRNA yang menentukan satu asam amino.',
      'Three bases in a row on mRNA that specify one amino acid.',
    ],
    [
      'Ada 64 kodon untuk 20 asam amino dan sinyal henti, sehingga kode genetik bersifat redundan dan hampir universal.',
      'There are 64 codons for 20 amino acids plus stop signals, so the genetic code is redundant and nearly universal.',
    ],
    ['kode genetik'],
    'dna-protein'
  ),
  T(
    'replikasi',
    ['Replikasi DNA', 'DNA replication'],
    ['Proses DNA menggandakan dirinya sebelum sel membelah.', 'How DNA copies itself before a cell divides.'],
    [
      'Replikasi bersifat semikonservatif; DNA polimerase hanya memperpanjang ujung 3′, sehingga untai tertinggal dibuat sebagai fragmen Okazaki.',
      'Replication is semi-conservative; DNA polymerase only extends the 3′ end, so the lagging strand is made as Okazaki fragments.',
    ],
    ['replikasi dna'],
    'dna-protein'
  ),
  T(
    'genom',
    ['Genom', 'Genome'],
    ['Seluruh DNA yang dimiliki suatu makhluk hidup.', 'All the DNA an organism has.'],
    [
      'Genom manusia berukuran sekitar 3 miliar pasang basa; hanya sekitar 1–2% yang menyandi protein.',
      'The human genome is about 3 billion base pairs; only about 1–2% codes for protein.',
    ],
    [],
    'dna-protein'
  ),
  T(
    'epigenetika',
    ['Epigenetika', 'Epigenetics'],
    [
      'Perubahan cara gen dinyalakan atau dimatikan tanpa mengubah urutan DNA.',
      'Changes in how genes are switched on or off without changing the DNA sequence.',
    ],
    [
      'Mekanismenya antara lain metilasi DNA dan modifikasi histon; contoh mapan adalah inaktivasi kromosom X.',
      'Mechanisms include DNA methylation and histone modification; an established example is X-chromosome inactivation.',
    ],
    ['epigenetik'],
    'dna-protein'
  ),
  T(
    'mitosis',
    ['Mitosis', 'Mitosis'],
    [
      'Pembelahan sel yang menghasilkan dua sel anak identik dengan induknya.',
      'Cell division that makes two daughter cells identical to the parent.',
    ],
    [
      'Tahapannya profase, metafase, anafase, dan telofase, diikuti sitokinesis. Jumlah kromosom tetap sama.',
      'Its stages are prophase, metaphase, anaphase and telophase, followed by cytokinesis. The chromosome number stays the same.',
    ],
    [],
    'pembelahan-sel'
  ),
  T(
    'meiosis',
    ['Meiosis', 'Meiosis'],
    [
      'Pembelahan sel untuk membentuk sel kelamin, menghasilkan empat sel dengan setengah jumlah kromosom.',
      'Cell division that makes sex cells, producing four cells with half the chromosome number.',
    ],
    [
      'Meiosis I memisahkan kromosom homolog, meiosis II memisahkan kromatid. Pindah silang dan pemilahan bebas menghasilkan variasi.',
      'Meiosis I separates homologous chromosomes; meiosis II separates chromatids. Crossing over and independent assortment create variation.',
    ],
    [],
    'pembelahan-sel'
  ),
  T(
    'haploid',
    ['Haploid dan diploid', 'Haploid and diploid'],
    [
      'Haploid (n) berarti satu set kromosom, seperti sel kelamin. Diploid (2n) berarti dua set, seperti sel tubuh.',
      'Haploid (n) means one set of chromosomes, as in sex cells. Diploid (2n) means two sets, as in body cells.',
    ],
    null,
    ['diploid'],
    'pembelahan-sel'
  ),
  T(
    'apoptosis',
    ['Apoptosis', 'Apoptosis'],
    [
      'Kematian sel yang terencana dan teratur untuk membuang sel yang rusak atau tidak diperlukan.',
      'Planned, orderly cell death that removes damaged or unneeded cells.',
    ],
    [
      'Apoptosis dikendalikan jalur sinyal dan enzim kaspase; kegagalannya berkaitan dengan kanker, sedangkan apoptosis berlebih berkaitan dengan penyakit degeneratif.',
      'Apoptosis is controlled by signalling pathways and caspase enzymes; its failure is linked to cancer, and excess apoptosis to degenerative disease.',
    ],
    [],
    'pembelahan-sel'
  ),
  T(
    'kanker',
    ['Kanker', 'Cancer'],
    [
      'Penyakit ketika sel tubuh membelah tanpa kendali dan dapat menyebar.',
      'A disease in which body cells divide out of control and can spread.',
    ],
    [
      'Kanker muncul dari mutasi yang menumpuk pada proto-onkogen dan gen penekan tumor, lalu berkembang melalui seleksi klonal.',
      'Cancer arises from mutations building up in proto-oncogenes and tumour-suppressor genes, then develops by clonal selection.',
    ],
    ['tumor'],
    'pembelahan-sel'
  ),
  T(
    'pindah silang',
    ['Pindah silang', 'Crossing over'],
    [
      'Pertukaran bagian antara kromosom pasangan saat meiosis, sehingga keturunan lebih beragam.',
      'Swapping of segments between paired chromosomes during meiosis, making offspring more varied.',
    ],
    [
      'Terjadi pada profase I di kiasma; frekuensi rekombinasi dipakai untuk memetakan gen (1% ≈ 1 cM).',
      'Happens in prophase I at chiasmata; recombination frequency is used to map genes (1% ≈ 1 cM).',
    ],
    ['rekombinasi'],
    'pewarisan'
  ),
  // Evolution and diversity
  T(
    'spesiasi',
    ['Spesiasi', 'Speciation'],
    ['Proses terbentuknya spesies baru.', 'How new species form.'],
    [
      'Spesiasi alopatrik terjadi saat populasi terpisah secara geografis; spesiasi simpatrik terjadi tanpa pemisahan geografis, misalnya melalui poliploidi pada tumbuhan.',
      'Allopatric speciation happens when populations are geographically separated; sympatric speciation happens without separation, for example through polyploidy in plants.',
    ],
    [],
    'evolusi'
  ),
  T(
    'hanyutan genetik',
    ['Hanyutan genetik', 'Genetic drift'],
    [
      'Perubahan acak sifat dalam populasi dari generasi ke generasi, terutama pada populasi kecil.',
      'Random change in a population’s traits from one generation to the next, especially in small populations.',
    ],
    [
      'Hanyutan dapat menghilangkan alel secara kebetulan; efek pendiri dan efek leher botol adalah contohnya.',
      'Drift can remove alleles by chance; founder effects and bottlenecks are examples.',
    ],
    ['genetic drift'],
    'evolusi'
  ),
  T(
    'filogeni',
    ['Filogeni', 'Phylogeny'],
    [
      'Sejarah kekerabatan makhluk hidup, biasanya digambarkan sebagai pohon bercabang.',
      'The history of how living things are related, usually drawn as a branching tree.',
    ],
    [
      'Pohon filogenetik disusun dari data morfologi dan molekuler dengan metode parsimoni, kemungkinan maksimum, atau Bayes.',
      'Phylogenetic trees are built from morphological and molecular data using parsimony, maximum likelihood or Bayesian methods.',
    ],
    ['pohon filogenetik'],
    'klasifikasi'
  ),
  T(
    'filum',
    ['Filum', 'Phylum'],
    [
      'Tingkat klasifikasi di bawah kingdom, berisi makhluk hidup dengan rancangan tubuh dasar yang sama.',
      'A rank below kingdom, grouping organisms with the same basic body plan.',
    ],
    [
      'Pada tumbuhan kadang disebut divisi. Contoh filum hewan: Chordata, Arthropoda, Mollusca.',
      'In plants it is sometimes called a division. Animal phyla include Chordata, Arthropoda and Mollusca.',
    ],
    ['divisi'],
    'dunia-hewan'
  ),
  T(
    'serangga',
    ['Serangga', 'Insect'],
    [
      'Hewan berkaki enam dengan tubuh tiga bagian: kepala, dada, dan perut, seperti semut dan kupu-kupu.',
      'Six-legged animals with three body parts: head, thorax and abdomen, such as ants and butterflies.',
    ],
    [
      'Kelas Insecta dalam filum Arthropoda adalah kelompok hewan dengan spesies terbanyak yang sudah dideskripsikan.',
      'The class Insecta in the phylum Arthropoda has the most described species of any animal group.',
    ],
    ['insecta'],
    'dunia-hewan'
  ),
  T(
    'mamalia',
    ['Mamalia', 'Mammal'],
    [
      'Hewan bertulang belakang yang berambut dan menyusui anaknya, seperti kucing, lumba-lumba, dan manusia.',
      'Vertebrates with hair that feed their young with milk, such as cats, dolphins and humans.',
    ],
    [
      'Mamalia dibagi menjadi monotremata (bertelur), marsupialia (berkantung), dan plasentalia.',
      'Mammals are divided into monotremes (egg-laying), marsupials (pouched) and placentals.',
    ],
    [],
    'dunia-hewan'
  ),
  T(
    'ektoterm',
    ['Ektoterm dan endoterm', 'Ectotherm and endotherm'],
    [
      'Ektoterm (ikan, amfibi, reptil) suhu tubuhnya dipengaruhi lingkungan; endoterm (burung, mamalia) menjaga suhu tubuhnya sendiri.',
      'Ectotherms (fish, amphibians, reptiles) take their temperature from the surroundings; endotherms (birds, mammals) keep their own.',
    ],
    null,
    ['endoterm', 'berdarah dingin', 'berdarah panas'],
    'dunia-hewan'
  ),
  T(
    'notokorda',
    ['Notokorda', 'Notochord'],
    [
      'Batang lentur penyokong tubuh di sepanjang punggung, ciri hewan Chordata pada suatu tahap hidupnya.',
      'A flexible supporting rod along the back, a feature of chordates at some stage of life.',
    ],
    null,
    [],
    'dunia-hewan'
  ),
  T(
    'monokotil',
    ['Monokotil dan dikotil', 'Monocot and dicot'],
    [
      'Monokotil berbiji keping satu, berakar serabut, dan bertulang daun sejajar. Dikotil berbiji keping dua dan berakar tunggang.',
      'Monocots have one seed leaf, fibrous roots and parallel veins. Dicots have two seed leaves and a taproot.',
    ],
    [
      'Dalam sistem APG, “dikotil” tradisional tidak monofiletik; sebagian besar anggotanya kini disebut eudikotil.',
      'In the APG system, the traditional “dicots” are not monophyletic; most are now called eudicots.',
    ],
    ['dikotil', 'eudikotil'],
    'dunia-tumbuhan'
  ),
  T(
    'gametofit',
    ['Gametofit dan sporofit', 'Gametophyte and sporophyte'],
    [
      'Dua generasi yang bergantian dalam hidup tumbuhan: gametofit membuat sel kelamin, sporofit membuat spora.',
      'Two alternating generations in plant life: the gametophyte makes sex cells, the sporophyte makes spores.',
    ],
    [
      'Gametofit haploid (n) dan sporofit diploid (2n). Pada lumut gametofit dominan; pada paku dan tumbuhan berbiji sporofit dominan.',
      'The gametophyte is haploid (n) and the sporophyte diploid (2n). Mosses are gametophyte-dominant; ferns and seed plants are sporophyte-dominant.',
    ],
    ['sporofit', 'metagenesis', 'pergiliran keturunan'],
    'dunia-tumbuhan'
  ),
  T(
    'liken',
    ['Lumut kerak (liken)', 'Lichen'],
    [
      'Simbiosis jamur dengan alga atau sianobakteri yang sering tumbuh di batang pohon dan batu.',
      'A partnership of a fungus with algae or cyanobacteria, often growing on tree bark and rocks.',
    ],
    [
      'Lumut kerak peka terhadap pencemaran udara seperti sulfur dioksida, sehingga dipakai sebagai bioindikator.',
      'Lichens are sensitive to air pollution such as sulfur dioxide, so they are used as bioindicators.',
    ],
    ['lumut kerak'],
    'jamur'
  ),
  T(
    'miselium',
    ['Miselium', 'Mycelium'],
    [
      'Anyaman benang-benang hifa yang menjadi tubuh utama jamur, biasanya tersembunyi di tanah atau kayu.',
      'The network of hyphae that forms the main body of a fungus, usually hidden in soil or wood.',
    ],
    null,
    [],
    'jamur'
  ),
  T(
    'khamir',
    ['Khamir (ragi)', 'Yeast'],
    [
      'Jamur bersel satu, misalnya ragi roti dan ragi tapai.',
      'A single-celled fungus, such as baker’s yeast and tapai yeast.',
    ],
    [
      'Saccharomyces cerevisiae adalah organisme model eukariota dan eukariota pertama yang genomnya diurutkan lengkap.',
      'Saccharomyces cerevisiae is a model eukaryote and the first eukaryote to have its genome fully sequenced.',
    ],
    ['ragi'],
    'jamur'
  ),
  T(
    'kapsid',
    ['Kapsid', 'Capsid'],
    ['Selubung protein yang membungkus materi genetik virus.', 'The protein coat around a virus’s genetic material.'],
    null,
    [],
    'virus'
  ),
  T(
    'bakteriofag',
    ['Bakteriofag', 'Bacteriophage'],
    ['Virus yang menginfeksi bakteri.', 'A virus that infects bacteria.'],
    [
      'Fag memiliki siklus litik dan lisogenik; kini diteliti untuk terapi infeksi bakteri yang resisten antibiotik.',
      'Phages have lytic and lysogenic cycles and are being studied to treat antibiotic-resistant infections.',
    ],
    ['fag'],
    'virus'
  ),
  T(
    'zoonosis',
    ['Zoonosis', 'Zoonosis'],
    [
      'Penyakit yang dapat berpindah dari hewan ke manusia, seperti rabies.',
      'A disease that can pass from animals to people, such as rabies.',
    ],
    [
      'Pencegahan zoonosis memakai pendekatan One Health yang memadukan kesehatan manusia, hewan, dan lingkungan.',
      'Preventing zoonoses uses a One Health approach combining human, animal and environmental health.',
    ],
    [],
    'virus'
  ),
  T(
    'retrovirus',
    ['Retrovirus', 'Retrovirus'],
    [
      'Virus RNA yang mengubah RNA-nya menjadi DNA di dalam sel inang, contohnya HIV.',
      'An RNA virus that turns its RNA into DNA inside the host cell, such as HIV.',
    ],
    [
      'Enzim transkriptase balik membuat DNA dari RNA, lalu DNA itu disisipkan ke genom inang sebagai provirus.',
      'Reverse transcriptase makes DNA from RNA, and the DNA is inserted into the host genome as a provirus.',
    ],
    ['transkriptase balik'],
    'virus'
  ),
  // Human and animal body
  T(
    'vili',
    ['Vili (jonjot usus)', 'Villi'],
    [
      'Tonjolan kecil seperti jari di dinding usus halus yang memperluas permukaan penyerapan sari makanan.',
      'Tiny finger-like bumps in the small intestine wall that enlarge the surface for absorbing nutrients.',
    ],
    [
      'Setiap vilus berisi kapiler darah dan pembuluh kil (lakteal); sel epitelnya memiliki mikrovili.',
      'Each villus contains blood capillaries and a lacteal; its epithelial cells carry microvilli.',
    ],
    ['jonjot usus', 'vilus'],
    'pencernaan'
  ),
  T(
    'empedu',
    ['Empedu', 'Bile'],
    [
      'Cairan dari hati yang membantu mencerna lemak dengan memecahnya menjadi butiran kecil.',
      'A liquid from the liver that helps digest fat by breaking it into small droplets.',
    ],
    [
      'Empedu disimpan di kantong empedu dan tidak mengandung enzim; garam empedu mengemulsikan lemak. Empedu juga membawa zat warna sisa pemecahan hemoglobin.',
      'Bile is stored in the gall bladder and contains no enzymes; bile salts emulsify fat. Bile also carries pigments from broken-down haemoglobin.',
    ],
    ['getah empedu'],
    'pencernaan'
  ),
  T(
    'peristaltik',
    ['Gerak peristaltik', 'Peristalsis'],
    [
      'Gerakan meremas otot saluran pencernaan yang mendorong makanan maju.',
      'Squeezing waves of gut muscle that push food along.',
    ],
    null,
    ['peristalsis'],
    'pencernaan'
  ),
  T(
    'gizi',
    ['Zat gizi', 'Nutrient'],
    [
      'Zat dalam makanan yang dibutuhkan tubuh: karbohidrat, protein, lemak, vitamin, mineral, dan air.',
      'Substances in food the body needs: carbohydrates, proteins, fats, vitamins, minerals and water.',
    ],
    null,
    ['nutrisi', 'zat gizi'],
    'pencernaan'
  ),
  T(
    'alveolus',
    ['Alveolus', 'Alveolus'],
    [
      'Gelembung udara sangat kecil di paru-paru tempat oksigen masuk ke darah.',
      'A tiny air sac in the lungs where oxygen passes into the blood.',
    ],
    [
      'Dinding alveolus sangat tipis dan dikelilingi kapiler; surfaktan mencegah alveolus mengempis.',
      'Alveolar walls are very thin and surrounded by capillaries; surfactant stops alveoli from collapsing.',
    ],
    ['alveoli'],
    'pernapasan'
  ),
  T(
    'diafragma',
    ['Diafragma', 'Diaphragm'],
    [
      'Otot berbentuk kubah di bawah paru-paru yang membantu kita menarik napas.',
      'A dome-shaped muscle below the lungs that helps us breathe in.',
    ],
    null,
    [],
    'pernapasan'
  ),
  T(
    'hemoglobin',
    ['Hemoglobin', 'Haemoglobin'],
    [
      'Protein merah di dalam sel darah merah yang mengangkut oksigen.',
      'The red protein in red blood cells that carries oxygen.',
    ],
    [
      'Hemoglobin memiliki empat subunit berisi besi; setiap molekul dapat mengikat hingga empat O₂. Karbon monoksida terikat jauh lebih kuat daripada oksigen.',
      'Haemoglobin has four iron-containing subunits; each molecule can bind up to four O₂. Carbon monoxide binds far more strongly than oxygen.',
    ],
    [],
    'peredaran-darah'
  ),
  T(
    'arteri',
    ['Arteri dan vena', 'Artery and vein'],
    [
      'Arteri membawa darah keluar dari jantung; vena membawa darah kembali ke jantung.',
      'Arteries carry blood away from the heart; veins carry it back.',
    ],
    [
      'Arteri berdinding tebal dan elastis; vena berdinding lebih tipis dan berkatup. Arteri pulmonalis membawa darah miskin oksigen.',
      'Arteries have thick elastic walls; veins have thinner walls with valves. The pulmonary artery carries oxygen-poor blood.',
    ],
    ['vena', 'pembuluh nadi', 'pembuluh balik'],
    'peredaran-darah'
  ),
  T(
    'kapiler',
    ['Kapiler', 'Capillary'],
    [
      'Pembuluh darah terkecil tempat zat berpindah antara darah dan sel tubuh.',
      'The smallest blood vessels, where substances pass between blood and body cells.',
    ],
    null,
    ['pembuluh kapiler'],
    'peredaran-darah'
  ),
  T(
    'nefron',
    ['Nefron', 'Nephron'],
    ['Unit penyaring terkecil di dalam ginjal.', 'The smallest filtering unit of the kidney.'],
    [
      'Nefron terdiri atas glomerulus, kapsula Bowman, tubulus proksimal, lengkung Henle, tubulus distal, dan saluran pengumpul.',
      'A nephron has a glomerulus, Bowman’s capsule, proximal tubule, loop of Henle, distal tubule and collecting duct.',
    ],
    [],
    'ekskresi'
  ),
  T(
    'homeostasis',
    ['Homeostasis', 'Homeostasis'],
    [
      'Kemampuan tubuh menjaga keadaan di dalamnya tetap seimbang, seperti suhu dan kadar air.',
      'The body’s ability to keep its inside conditions balanced, such as temperature and water content.',
    ],
    [
      'Homeostasis umumnya dijaga umpan balik negatif: reseptor, pusat kendali, dan efektor melawan perubahan.',
      'Homeostasis is usually maintained by negative feedback: receptors, a control centre and effectors oppose change.',
    ],
    ['umpan balik negatif'],
    'ekskresi'
  ),
  T(
    'sendi',
    ['Sendi', 'Joint'],
    ['Tempat bertemunya dua tulang, misalnya siku dan lutut.', 'Where two bones meet, such as the elbow and knee.'],
    [
      'Sendi gerak meliputi engsel, peluru, putar, pelana, dan geser; tulang rawan dan cairan sendi mengurangi gesekan.',
      'Movable joints include hinge, ball-and-socket, pivot, saddle and gliding joints; cartilage and joint fluid reduce friction.',
    ],
    [],
    'gerak'
  ),
  T(
    'neuron',
    ['Neuron (sel saraf)', 'Neuron (nerve cell)'],
    ['Sel yang membawa pesan listrik di dalam tubuh.', 'A cell that carries electrical messages through the body.'],
    [
      'Neuron terdiri atas dendrit, badan sel, dan akson; impulsnya berupa potensial aksi yang diteruskan ke sel lain melalui sinaps.',
      'A neuron has dendrites, a cell body and an axon; its impulse is an action potential passed to other cells at synapses.',
    ],
    ['sel saraf'],
    'koordinasi'
  ),
  T(
    'sinaps',
    ['Sinaps', 'Synapse'],
    [
      'Sambungan antara sel saraf dan sel lain tempat pesan diteruskan.',
      'The junction between a nerve cell and another cell where messages pass.',
    ],
    [
      'Di sinaps kimia, neurotransmiter dilepaskan ke celah sinaps dan berikatan dengan reseptor sel berikutnya.',
      'At a chemical synapse, neurotransmitters are released into the cleft and bind receptors on the next cell.',
    ],
    ['neurotransmiter'],
    'koordinasi'
  ),
  T(
    'refleks',
    ['Gerak refleks', 'Reflex'],
    [
      'Gerakan cepat tanpa berpikir untuk melindungi tubuh, misalnya menarik tangan dari benda panas.',
      'A fast movement made without thinking to protect the body, such as pulling a hand from something hot.',
    ],
    [
      'Lengkung refleks: reseptor → neuron sensorik → sumsum tulang belakang → neuron motorik → efektor.',
      'Reflex arc: receptor → sensory neuron → spinal cord → motor neuron → effector.',
    ],
    ['gerak refleks', 'lengkung refleks'],
    'koordinasi'
  ),
  T(
    'hormon',
    ['Hormon', 'Hormone'],
    [
      'Zat pembawa pesan kimia yang dibuat kelenjar dan diedarkan oleh darah.',
      'A chemical messenger made by a gland and carried in the blood.',
    ],
    [
      'Hormon peptida berikatan dengan reseptor di membran; hormon steroid masuk ke sel dan memengaruhi ekspresi gen.',
      'Peptide hormones bind membrane receptors; steroid hormones enter cells and affect gene expression.',
    ],
    ['kelenjar endokrin'],
    'koordinasi'
  ),
  T(
    'insulin',
    ['Insulin', 'Insulin'],
    [
      'Hormon dari pankreas yang menurunkan kadar gula darah.',
      'A hormone from the pancreas that lowers blood sugar.',
    ],
    [
      'Insulin dibuat sel beta pulau Langerhans. Diabetes tipe 1 terjadi karena sel beta rusak; tipe 2 terutama karena resistansi insulin.',
      'Insulin is made by beta cells in the islets of Langerhans. Type 1 diabetes follows beta-cell destruction; type 2 is mainly insulin resistance.',
    ],
    ['diabetes'],
    'koordinasi'
  ),
  T(
    'patogen',
    ['Patogen', 'Pathogen'],
    [
      'Makhluk atau zat yang dapat menyebabkan penyakit, seperti bakteri, virus, jamur, dan cacing parasit.',
      'Anything that can cause disease, such as bacteria, viruses, fungi and parasitic worms.',
    ],
    null,
    ['kuman', 'bibit penyakit'],
    'imun'
  ),
  T(
    'antigen',
    ['Antigen', 'Antigen'],
    [
      'Zat asing, misalnya bagian permukaan kuman, yang memicu tubuh membuat pertahanan.',
      'A foreign substance, such as part of a germ’s surface, that triggers the body’s defences.',
    ],
    [
      'Bagian kecil antigen yang dikenali antibodi atau reseptor sel T disebut epitop.',
      'The small part of an antigen recognised by an antibody or T-cell receptor is an epitope.',
    ],
    ['epitop'],
    'imun'
  ),
  T(
    'antibodi',
    ['Antibodi', 'Antibody'],
    [
      'Protein buatan sistem imun yang menempel khusus pada kuman atau zat asing tertentu.',
      'A protein made by the immune system that sticks to a particular germ or foreign substance.',
    ],
    [
      'Antibodi berbentuk Y, dibuat sel plasma (turunan limfosit B); kelasnya IgM, IgG, IgA, IgE, dan IgD.',
      'Antibodies are Y-shaped, made by plasma cells (from B lymphocytes); the classes are IgM, IgG, IgA, IgE and IgD.',
    ],
    ['imunoglobulin'],
    'imun'
  ),
  T(
    'vaksin',
    ['Vaksin', 'Vaccine'],
    [
      'Bahan yang melatih tubuh mengenali kuman tertentu sehingga tubuh kebal tanpa harus sakit parah.',
      'Something that trains the body to recognise a particular germ, giving immunity without serious illness.',
    ],
    [
      'Vaksin memicu respons imun primer dan sel memori; jenisnya antara lain vaksin hidup dilemahkan, inaktif, subunit, toksoid, dan mRNA.',
      'Vaccines trigger a primary immune response and memory cells; types include live attenuated, inactivated, subunit, toxoid and mRNA vaccines.',
    ],
    ['imunisasi', 'vaksinasi'],
    'imun'
  ),
  T(
    'limfosit',
    ['Limfosit', 'Lymphocyte'],
    [
      'Jenis sel darah putih yang mengenali kuman tertentu dan mengingatnya.',
      'A type of white blood cell that recognises particular germs and remembers them.',
    ],
    [
      'Limfosit B membuat antibodi; limfosit T helper (CD4) mengatur respons dan limfosit T sitotoksik (CD8) membunuh sel terinfeksi.',
      'B cells make antibodies; helper T cells (CD4) direct the response and cytotoxic T cells (CD8) kill infected cells.',
    ],
    [],
    'imun'
  ),
  T(
    'zigot',
    ['Zigot', 'Zygote'],
    [
      'Sel pertama makhluk hidup baru, hasil bersatunya sel sperma dan sel telur.',
      'The first cell of a new organism, formed when a sperm and an egg join.',
    ],
    null,
    ['fertilisasi', 'pembuahan'],
    'reproduksi-manusia'
  ),
  T(
    'pubertas',
    ['Pubertas', 'Puberty'],
    [
      'Masa perubahan tubuh dari anak-anak menuju dewasa yang dipicu hormon.',
      'The time when the body changes from child to adult, triggered by hormones.',
    ],
    null,
    ['akil balig'],
    'reproduksi-manusia'
  ),
  T(
    'menstruasi',
    ['Menstruasi', 'Menstruation'],
    [
      'Keluarnya darah dari rahim secara berkala ketika dinding rahim luruh karena tidak terjadi kehamilan.',
      'Regular bleeding from the uterus when its lining breaks down because there is no pregnancy.',
    ],
    [
      'Siklus diatur FSH, LH, estrogen, dan progesteron; panjangnya bervariasi antarorang dan antarbulan.',
      'The cycle is controlled by FSH, LH, oestrogen and progesterone; its length varies between people and months.',
    ],
    ['haid', 'siklus menstruasi'],
    'reproduksi-manusia'
  ),
  T(
    'plasenta',
    ['Plasenta', 'Placenta'],
    [
      'Organ yang menghubungkan janin dengan ibu untuk menyalurkan zat makanan dan oksigen.',
      'The organ that links the fetus with the mother to pass on nutrients and oxygen.',
    ],
    [
      'Darah ibu dan janin tidak bercampur; pertukaran terjadi melalui vili korion.',
      'Maternal and fetal blood do not mix; exchange happens across the chorionic villi.',
    ],
    ['ari-ari'],
    'reproduksi-manusia'
  ),
  // Plants
  T(
    'xilem',
    ['Xilem', 'Xylem'],
    [
      'Pembuluh tumbuhan yang mengangkut air dan mineral dari akar ke daun.',
      'Plant tubes that carry water and minerals from roots to leaves.',
    ],
    [
      'Sel xilem dewasa sudah mati dan berdinding lignin; air naik terutama karena tarikan transpirasi (teori kohesi–tegangan).',
      'Mature xylem cells are dead with lignified walls; water rises mainly by transpiration pull (cohesion–tension theory).',
    ],
    ['pembuluh kayu'],
    'tumbuhan'
  ),
  T(
    'floem',
    ['Floem', 'Phloem'],
    [
      'Pembuluh tumbuhan yang mengangkut hasil fotosintesis ke seluruh bagian tumbuhan.',
      'Plant tubes that carry the products of photosynthesis around the plant.',
    ],
    [
      'Pengangkutan floem dijelaskan hipotesis aliran tekanan dari sumber (daun) ke lubuk (akar, buah, umbi).',
      'Phloem transport is explained by the pressure-flow hypothesis, from sources (leaves) to sinks (roots, fruits, tubers).',
    ],
    ['pembuluh tapis'],
    'tumbuhan'
  ),
  T(
    'transpirasi',
    ['Transpirasi', 'Transpiration'],
    [
      'Penguapan air dari daun melalui stomata.',
      'Evaporation of water from leaves through the stomata.',
    ],
    null,
    ['penguapan'],
    'tumbuhan'
  ),
  T(
    'meristem',
    ['Meristem', 'Meristem'],
    [
      'Jaringan tumbuhan yang selnya terus membelah, terdapat di ujung akar dan ujung batang.',
      'Plant tissue whose cells keep dividing, found at root and shoot tips.',
    ],
    [
      'Meristem apikal menghasilkan pertumbuhan primer; meristem lateral (kambium) menghasilkan pertumbuhan sekunder.',
      'Apical meristems give primary growth; lateral meristems (cambium) give secondary growth.',
    ],
    ['kambium'],
    'tumbuhan'
  ),
  T(
    'auksin',
    ['Auksin', 'Auxin'],
    [
      'Hormon tumbuhan yang memacu sel memanjang dan membuat batang tumbuh ke arah cahaya.',
      'A plant hormone that makes cells lengthen and stems grow towards light.',
    ],
    [
      'Hormon tumbuhan lain: giberelin, sitokinin, asam absisat, dan etilen.',
      'Other plant hormones: gibberellin, cytokinin, abscisic acid and ethylene.',
    ],
    ['hormon tumbuhan', 'fitohormon'],
    'tumbuhan'
  ),
  // Ecology and environment
  T(
    'komunitas',
    ['Komunitas', 'Community'],
    [
      'Semua populasi berbagai spesies yang hidup bersama di suatu tempat.',
      'All the populations of different species living together in one place.',
    ],
    null,
    [],
    'organisasi'
  ),
  T(
    'bioma',
    ['Bioma', 'Biome'],
    [
      'Wilayah luas dengan iklim dan tumbuhan yang mirip, seperti hutan hujan tropis atau gurun.',
      'A large region with a similar climate and vegetation, such as tropical rainforest or desert.',
    ],
    null,
    [],
    'organisasi'
  ),
  T(
    'biosfer',
    ['Biosfer', 'Biosphere'],
    ['Seluruh bagian bumi yang dihuni makhluk hidup.', 'Every part of Earth where living things are found.'],
    null,
    [],
    'organisasi'
  ),
  T(
    'jaringan',
    ['Jaringan', 'Tissue'],
    [
      'Kumpulan sel yang bentuk dan tugasnya sama, misalnya jaringan otot.',
      'A group of cells with the same shape and job, such as muscle tissue.',
    ],
    [
      'Jaringan hewan: epitel, otot, saraf, dan ikat. Jaringan tumbuhan: meristem, epidermis, parenkim, pengangkut, dan penyokong.',
      'Animal tissues: epithelial, muscle, nervous and connective. Plant tissues: meristem, epidermis, parenchyma, vascular and supporting.',
    ],
    ['jaringan epitel', 'jaringan ikat'],
    'organisasi'
  ),
  T(
    'organ',
    ['Organ', 'Organ'],
    [
      'Bagian tubuh yang tersusun atas beberapa jaringan dan memiliki tugas tertentu, seperti jantung atau daun.',
      'A body part made of several tissues with a particular job, such as the heart or a leaf.',
    ],
    null,
    ['sistem organ'],
    'organisasi'
  ),
  T(
    'suksesi',
    ['Suksesi ekologi', 'Ecological succession'],
    [
      'Perubahan bertahap komunitas makhluk hidup di suatu tempat setelah terjadi gangguan.',
      'Gradual change in the community of a place after a disturbance.',
    ],
    [
      'Suksesi primer dimulai di lahan tanpa tanah (misalnya Krakatau setelah 1883); suksesi sekunder terjadi di lahan yang tanahnya masih ada.',
      'Primary succession starts on land without soil (such as Krakatau after 1883); secondary succession happens where soil remains.',
    ],
    ['suksesi primer', 'suksesi sekunder'],
    'perubahan-lingkungan'
  ),
  T(
    'pencemaran',
    ['Pencemaran', 'Pollution'],
    [
      'Masuknya zat atau energi yang merusak ke udara, air, atau tanah.',
      'Harmful substances or energy entering the air, water or soil.',
    ],
    null,
    ['polusi'],
    'perubahan-lingkungan'
  ),
  T(
    'eutrofikasi',
    ['Eutrofikasi', 'Eutrophication'],
    [
      'Ledakan pertumbuhan alga di perairan karena terlalu banyak pupuk, yang lalu membuat oksigen habis.',
      'An explosion of algae in water caused by too much fertiliser, which then uses up the oxygen.',
    ],
    null,
    ['ledakan alga'],
    'perubahan-lingkungan'
  ),
  T(
    'biomagnifikasi',
    ['Biomagnifikasi', 'Biomagnification'],
    [
      'Meningkatnya kadar zat beracun pada makhluk hidup di tingkat rantai makanan yang lebih tinggi.',
      'The rising concentration of a toxin in organisms higher up a food chain.',
    ],
    null,
    ['bioakumulasi'],
    'perubahan-lingkungan'
  ),
  T(
    'bioindikator',
    ['Bioindikator', 'Bioindicator'],
    [
      'Makhluk hidup yang keberadaannya menunjukkan kualitas lingkungan, seperti lumut kerak untuk udara bersih.',
      'An organism whose presence shows environmental quality, such as lichens for clean air.',
    ],
    null,
    [],
    'perubahan-lingkungan'
  ),
  T(
    'pemanasan global',
    ['Pemanasan global', 'Global warming'],
    [
      'Naiknya suhu rata-rata bumi karena bertambahnya gas rumah kaca akibat kegiatan manusia.',
      'The rise in Earth’s average temperature caused by extra greenhouse gases from human activity.',
    ],
    [
      'Menurut IPCC, suhu permukaan global telah naik sekitar 1,1 °C dibanding masa pra-industri.',
      'According to the IPCC, global surface temperature has risen by about 1.1 °C since pre-industrial times.',
    ],
    ['perubahan iklim'],
    'perubahan-lingkungan'
  ),
  T(
    'mikroplastik',
    ['Mikroplastik', 'Microplastic'],
    [
      'Potongan plastik yang sangat kecil (kurang dari 5 mm) yang dapat termakan hewan.',
      'Very small pieces of plastic (under 5 mm) that animals can swallow.',
    ],
    null,
    [],
    'perubahan-lingkungan'
  ),
  // Science and biotechnology
  T(
    'teori ilmiah',
    ['Teori ilmiah', 'Scientific theory'],
    [
      'Penjelasan luas tentang alam yang sudah diuji berkali-kali dan didukung banyak bukti.',
      'A broad explanation of nature that has been tested many times and is supported by much evidence.',
    ],
    [
      'Teori berbeda dari hipotesis dan hukum; contoh teori ilmiah adalah teori sel dan teori evolusi.',
      'A theory differs from a hypothesis and a law; examples are cell theory and the theory of evolution.',
    ],
    ['teori'],
    'metode-ilmiah'
  ),
  T(
    'bioteknologi',
    ['Bioteknologi', 'Biotechnology'],
    [
      'Pemanfaatan makhluk hidup untuk menghasilkan barang atau jasa, seperti tempe, obat, dan vaksin.',
      'Using living things to produce goods or services, such as tempeh, medicines and vaccines.',
    ],
    null,
    [],
    'bioteknologi'
  ),
  T(
    'rekayasa genetika',
    ['Rekayasa genetika', 'Genetic engineering'],
    [
      'Mengubah atau memindahkan gen suatu makhluk hidup di laboratorium.',
      'Changing or moving an organism’s genes in the laboratory.',
    ],
    [
      'Teknologi DNA rekombinan memakai enzim restriksi, ligase, dan vektor seperti plasmid.',
      'Recombinant DNA technology uses restriction enzymes, ligase and vectors such as plasmids.',
    ],
    ['transgenik', 'dna rekombinan', 'plasmid', 'enzim restriksi'],
    'bioteknologi'
  ),
  T(
    'pcr',
    ['PCR', 'PCR'],
    [
      'Cara memperbanyak potongan DNA tertentu menjadi jutaan salinan di laboratorium.',
      'A lab method that copies a chosen piece of DNA millions of times.',
    ],
    [
      'Setiap siklus terdiri atas denaturasi, penempelan primer, dan pemanjangan oleh DNA polimerase tahan panas.',
      'Each cycle has denaturation, primer annealing and extension by a heat-stable DNA polymerase.',
    ],
    ['reaksi berantai polimerase'],
    'bioteknologi'
  ),
  T(
    'kultur jaringan',
    ['Kultur jaringan', 'Tissue culture'],
    [
      'Memperbanyak tanaman dari potongan kecil jaringan di media steril.',
      'Growing new plants from small pieces of tissue on a sterile medium.',
    ],
    [
      'Memanfaatkan totipotensi sel tumbuhan; perbandingan auksin dan sitokinin mengatur pembentukan tunas dan akar.',
      'It relies on plant-cell totipotency; the auxin-to-cytokinin ratio controls shoot and root formation.',
    ],
    ['totipotensi'],
    'bioteknologi'
  ),
  T(
    'kloning',
    ['Kloning', 'Cloning'],
    [
      'Menghasilkan makhluk hidup yang DNA intinya sama dengan induknya, seperti domba Dolly.',
      'Producing an organism with the same nuclear DNA as its parent, such as Dolly the sheep.',
    ],
    null,
    ['klon'],
    'bioteknologi'
  ),
  T(
    'crispr',
    ['CRISPR', 'CRISPR'],
    [
      'Alat untuk menyunting gen yang berasal dari sistem pertahanan bakteri terhadap virus.',
      'A gene-editing tool that comes from a bacterial defence system against viruses.',
    ],
    [
      'Pada CRISPR–Cas9, RNA pemandu mengarahkan enzim Cas9 ke urutan target di samping motif PAM, lalu DNA dipotong dan diperbaiki sel.',
      'In CRISPR–Cas9, a guide RNA steers the Cas9 enzyme to a target beside a PAM motif; the DNA is cut and then repaired by the cell.',
    ],
    ['crispr cas', 'penyuntingan gen'],
    'bioteknologi'
  ),
  T(
    'endositosis',
    [
      'Endositosis',
      'Endocytosis',
    ],
    [
      'Cara sel memasukkan partikel besar dengan membungkusnya dalam lipatan membran.',
      'How a cell takes in large particles by wrapping them in a fold of membrane.',
    ],
    [
      'Meliputi fagositosis (partikel padat), pinositosis (cairan), dan endositosis yang diperantarai reseptor (vesikel berselubung klatrin). Kebalikannya, eksositosis, mengeluarkan isi vesikel ke luar sel.',
      'Includes phagocytosis (solid particles), pinocytosis (fluid) and receptor-mediated endocytosis (clathrin-coated vesicles). Its opposite, exocytosis, releases vesicle contents outside the cell.',
    ],
    [
      'eksositosis',
      'fagositosis',
      'pinositosis',
    ],
    'sel'
  ),
  T(
    'peroksisom',
    [
      'Peroksisom',
      'Peroxisome',
    ],
    [
      'Kantong kecil di dalam sel berisi enzim yang memecah lemak dan zat beracun.',
      'A small sac in the cell with enzymes that break down fats and toxic substances.',
    ],
    [
      'Peroksisom melakukan oksidasi-β asam lemak rantai sangat panjang dan menghasilkan hidrogen peroksida, yang segera diuraikan enzim katalase menjadi air dan oksigen.',
      'Peroxisomes carry out β-oxidation of very-long-chain fatty acids and produce hydrogen peroxide, which the enzyme catalase quickly breaks down into water and oxygen.',
    ],
    [
      'katalase',
    ],
    'sel'
  ),
  T(
    'sitoskeleton',
    [
      'Sitoskeleton',
      'Cytoskeleton',
    ],
    [
      'Kerangka dari serabut protein di dalam sel yang memberi bentuk dan membantu sel bergerak.',
      'A framework of protein fibres inside a cell that gives it shape and helps it move.',
    ],
    [
      'Terdiri atas mikrofilamen aktin, mikrotubulus, dan filamen intermediet. Protein motor seperti kinesin, dinein, dan miosin bergerak di sepanjang serabut ini untuk mengangkut vesikel dan menggerakkan silia, flagela, serta otot.',
      'Made of actin microfilaments, microtubules and intermediate filaments. Motor proteins such as kinesin, dynein and myosin move along these fibres to carry vesicles and to power cilia, flagella and muscle.',
    ],
    [
      'mikrotubulus',
      'sentrosom',
    ],
    'sel'
  ),
  T(
    'seleksi seksual',
    [
      'Seleksi seksual',
      'Sexual selection',
    ],
    [
      'Seleksi yang terjadi karena sebagian individu lebih berhasil mendapatkan pasangan kawin.',
      'Selection that happens because some individuals are better at getting mates.',
    ],
    [
      'Bekerja melalui persaingan dalam satu jenis kelamin (biasanya antarjantan) dan pilihan pasangan (biasanya oleh betina); menghasilkan ornamen dan dimorfisme seksual, seperti bulu cenderawasih jantan.',
      'Works through competition within one sex (usually among males) and mate choice (usually by females); it produces ornaments and sexual dimorphism, such as the plumes of male birds-of-paradise.',
    ],
    [
      'dimorfisme seksual',
    ],
    'evolusi'
  ),
  T(
    'sinonim',
    [
      'Sinonim (taksonomi)',
      'Synonym (taxonomy)',
    ],
    [
      'Nama ilmiah lain untuk spesies atau kelompok yang sama, yang tidak lagi dipakai sebagai nama utama.',
      'Another scientific name for the same species or group that is no longer used as the main name.',
    ],
    [
      'Nama yang berlaku disebut nama diterima (accepted). Sinonim muncul karena takson dipindah ke genus lain, digabung, atau dideskripsikan lebih dari sekali; aturan prioritas menentukan nama yang dipakai.',
      'The name in use is the accepted name. Synonyms arise when a taxon is moved to another genus, merged, or described more than once; the priority rule decides which name is used.',
    ],
    [
      'nama diterima',
      'status nama',
    ],
    'klasifikasi'
  ),
  T(
    'subspesies',
    [
      'Subspesies',
      'Subspecies',
    ],
    [
      'Kelompok di dalam satu spesies yang hidup di wilayah berbeda dan cirinya sedikit berbeda, tetapi masih dapat kawin dengan kelompok lain dari spesies itu.',
      'A group within one species that lives in a different area and looks slightly different, but can still breed with other groups of that species.',
    ],
    [
      'Ditulis dengan tiga kata (trinomial), misalnya Rhinoceros sondaicus sondaicus. Pembagian subspesies sering diperdebatkan dan dapat berubah dengan data genetik baru.',
      'Written with three words (a trinomial), such as Rhinoceros sondaicus sondaicus. Subspecies divisions are often debated and can change with new genetic data.',
    ],
    [
      'trinomial',
    ],
    'klasifikasi'
  ),
  T(
    'otoritas taksonomi',
    [
      'Penulis nama (otoritas taksonomi)',
      'Taxonomic authority',
    ],
    [
      'Nama ilmuwan, dan sering tahunnya, yang pertama kali menerbitkan suatu nama ilmiah; ditulis setelah nama itu.',
      'The name of the scientist, and often the year, who first published a scientific name; written after it.',
    ],
    [
      'Contoh: Panthera tigris (Linnaeus, 1758). Pada zoologi, tanda kurung berarti spesies telah dipindah dari genus aslinya; pada botani, penulis asli dalam kurung diikuti penulis kombinasi baru, misalnya Picea abies (L.) H.Karst.',
      'Example: Panthera tigris (Linnaeus, 1758). In zoology, brackets mean the species was moved from its original genus; in botany, the original author in brackets is followed by the author of the new combination, as in Picea abies (L.) H.Karst.',
    ],
    [
      'penulis nama',
      'author',
    ],
    'klasifikasi'
  ),
  T(
    'gen terpaut',
    [
      'Gen terpaut',
      'Linked genes',
    ],
    [
      'Gen-gen yang letaknya berdekatan pada kromosom yang sama sehingga cenderung diwariskan bersama.',
      'Genes that lie close together on the same chromosome and so tend to be inherited together.',
    ],
    [
      'Keterpautan dapat diputus oleh pindah silang saat meiosis; frekuensi rekombinasi antara dua gen (1% ≈ 1 centimorgan) dipakai untuk menyusun peta genetik.',
      'Linkage can be broken by crossing over in meiosis; the recombination frequency between two genes (1% ≈ 1 centimorgan) is used to build genetic maps.',
    ],
    [
      'pautan',
      'peta genetik',
      'peta gen',
    ],
    'pewarisan'
  ),
  T(
    'daya dukung',
    [
      'Daya dukung lingkungan',
      'Carrying capacity',
    ],
    [
      'Jumlah individu terbanyak suatu populasi yang dapat didukung lingkungan dalam jangka panjang.',
      'The largest population an environment can support in the long run.',
    ],
    [
      'Dilambangkan K dalam model pertumbuhan logistik dN/dt = rN(1 − N/K); pertumbuhan melambat saat N mendekati K karena faktor yang bergantung kepadatan.',
      'Written K in the logistic growth model dN/dt = rN(1 − N/K); growth slows as N approaches K because of density-dependent factors.',
    ],
    [
      'pertumbuhan logistik',
      'kurva s',
    ],
    'ekosistem'
  ),
  T(
    'relung',
    [
      'Relung (niche)',
      'Niche',
    ],
    [
      'Peran dan kebutuhan suatu spesies dalam ekosistem: apa yang dimakannya, kapan dan di mana ia aktif, serta kondisi yang dibutuhkannya.',
      'A species’ role and needs in an ecosystem: what it eats, when and where it is active, and the conditions it needs.',
    ],
    [
      'Relung fundamental adalah kisaran kondisi yang dapat ditempati suatu spesies; relung terealisasi lebih sempit karena persaingan dan pemangsaan. Prinsip eksklusi kompetitif menyatakan bahwa dua spesies dengan relung identik tidak dapat hidup berdampingan dalam jangka panjang.',
      'The fundamental niche is the range of conditions a species could occupy; the realised niche is narrower because of competition and predation. The competitive exclusion principle says two species with identical niches cannot coexist in the long term.',
    ],
    [
      'niche',
      'eksklusi kompetitif',
    ],
    'ekosistem'
  ),
  T(
    'spesies kunci',
    [
      'Spesies kunci',
      'Keystone species',
    ],
    [
      'Spesies yang pengaruhnya terhadap ekosistem sangat besar dibandingkan jumlahnya.',
      'A species whose effect on its ecosystem is very large compared with its numbers.',
    ],
    [
      'Konsep dari percobaan Robert Paine yang memindahkan bintang laut Pisaster dari zona pasang surut sehingga keanekaragaman menurun. Contoh lain: berang-berang laut yang mengendalikan bulu babi di hutan kelp.',
      'The idea comes from Robert Paine’s experiments removing Pisaster sea stars from the intertidal zone, after which diversity fell. Another example is sea otters controlling sea urchins in kelp forests.',
    ],
    [
      'keystone',
    ],
    'ekosistem'
  ),
  T(
    'protista',
    [
      'Protista',
      'Protists',
    ],
    [
      'Makhluk eukariota yang bukan hewan, tumbuhan, atau jamur; kebanyakan bersel satu, seperti Amoeba, Paramecium, dan Euglena.',
      'Eukaryotes that are not animals, plants or fungi; most are single-celled, such as Amoeba, Paramecium and Euglena.',
    ],
    [
      'Protista adalah kelompok parafiletik yang tersebar di banyak cabang pohon eukariota; kelompok modern antara lain SAR, Excavata, Amoebozoa, dan Archaeplastida.',
      'Protists are a paraphyletic group scattered across many branches of the eukaryote tree; modern groups include SAR, Excavata, Amoebozoa and Archaeplastida.',
    ],
    [
      'protozoa',
    ],
    'protista'
  ),
  T(
    'artropoda',
    [
      'Artropoda',
      'Arthropods',
    ],
    [
      'Hewan berkaki beruas dengan kerangka luar yang keras, seperti serangga, laba-laba, udang, dan lipan.',
      'Animals with jointed legs and a hard outer skeleton, such as insects, spiders, shrimps and centipedes.',
    ],
    [
      'Filum hewan dengan spesies terbanyak: tubuh beruas, kaki bersendi, dan eksoskeleton kitin yang dilepas saat ganti kulit (ekdisis). Kelompok utamanya serangga, arachnida, krustasea, dan myriapoda.',
      'The animal phylum with the most species: segmented bodies, jointed legs and a chitin exoskeleton shed during moulting (ecdysis). Its main groups are insects, arachnids, crustaceans and myriapods.',
    ],
    [
      'arthropoda',
      'hewan berkaki beruas',
    ],
    'serangga'
  ),
  T(
    'eksoskeleton',
    [
      'Eksoskeleton',
      'Exoskeleton',
    ],
    [
      'Kerangka luar yang keras dan melindungi tubuh, misalnya cangkang kepiting dan kulit keras serangga.',
      'A hard outer skeleton that protects the body, such as a crab’s shell or an insect’s tough skin.',
    ],
    [
      'Pada artropoda tersusun atas kitin dan protein. Karena tidak dapat membesar, hewan harus berganti kulit (ekdisis) agar dapat tumbuh; proses ini dipicu hormon ekdison.',
      'In arthropods it is made of chitin and protein. Because it cannot grow, the animal must moult (ecdysis) to get bigger; moulting is triggered by the hormone ecdysone.',
    ],
    [
      'kerangka luar',
      'kitin',
      'ekdisis',
      'ganti kulit',
    ],
    'serangga'
  ),
  T(
    'vektor',
    [
      'Vektor (penyakit)',
      'Vector (disease)',
    ],
    [
      'Hewan yang membawa dan menularkan bibit penyakit dari satu makhluk ke makhluk lain, misalnya nyamuk.',
      'An animal that carries a disease agent from one host to another, such as a mosquito.',
    ],
    [
      'Vektor biologis menjadi tempat berkembangnya patogen (Plasmodium di dalam nyamuk Anopheles), sedangkan vektor mekanis hanya membawa patogen di tubuhnya (misalnya lalat). Dalam bioteknologi, kata vektor juga berarti pembawa DNA seperti plasmid.',
      'A biological vector is where the pathogen develops (Plasmodium inside Anopheles mosquitoes), while a mechanical vector just carries it on its body (such as flies). In biotechnology, “vector” also means a DNA carrier such as a plasmid.',
    ],
    [
      'vektor penyakit',
    ],
    'parasit'
  ),
  T(
    'perkecambahan',
    [
      'Perkecambahan',
      'Germination',
    ],
    [
      'Tumbuhnya biji menjadi tanaman kecil (kecambah) ketika mendapat air, udara, dan suhu yang cocok.',
      'A seed growing into a small plant (a sprout) when it has water, air and a suitable temperature.',
    ],
    [
      'Dimulai dengan penyerapan air (imbibisi) yang mengaktifkan enzim dan giberelin untuk mencerna cadangan makanan. Pada tipe epigeal keping biji terangkat ke atas tanah; pada tipe hipogeal keping biji tetap di dalam tanah.',
      'It starts with water uptake (imbibition), which activates enzymes and gibberellins that digest food stores. In epigeal germination the seed leaves rise above ground; in hypogeal germination they stay below.',
    ],
    [
      'berkecambah',
      'kecambah',
      'epigeal',
      'hipogeal',
      'imbibisi',
    ],
    'pertumbuhan'
  ),
  T(
    'insting',
    [
      'Insting (perilaku bawaan)',
      'Instinct (innate behaviour)',
    ],
    [
      'Perilaku yang dilakukan dengan benar sejak pertama kali tanpa perlu belajar, misalnya laba-laba membuat jaring.',
      'Behaviour done correctly the first time without learning, such as a spider spinning a web.',
    ],
    [
      'Meliputi refleks, taksis, dan pola aksi tetap. Perilaku bawaan dikendalikan gen, tetapi sering diperhalus oleh pengalaman.',
      'Includes reflexes, taxes and fixed action patterns. Innate behaviour is gene-based but is often refined by experience.',
    ],
    [
      'naluri',
      'perilaku bawaan',
      'taksis',
      'pola aksi tetap',
    ],
    'perilaku'
  ),
  T(
    'imprinting',
    [
      'Imprinting (perilaku)',
      'Imprinting (behaviour)',
    ],
    [
      'Belajar yang terjadi pada masa singkat setelah lahir atau menetas, misalnya anak itik mengikuti benda bergerak pertama yang dilihatnya.',
      'Learning during a short period after birth or hatching, such as ducklings following the first moving thing they see.',
    ],
    [
      'Dipelajari Konrad Lorenz pada angsa. Jangan tertukar dengan pencetakan genomik (genomic imprinting) dalam genetika, yaitu ekspresi alel yang bergantung pada induk asalnya.',
      'Studied by Konrad Lorenz in geese. Not to be confused with genomic imprinting in genetics, where an allele’s expression depends on the parent it came from.',
    ],
    [
      'penjejakan',
    ],
    'perilaku'
  ),
  T(
    'bioinformatika',
    [
      'Bioinformatika',
      'Bioinformatics',
    ],
    [
      'Ilmu yang memakai komputer untuk menyimpan, mencari, dan menganalisis data biologi, seperti urutan DNA dan catatan spesies.',
      'The science of using computers to store, search and analyse biological data, such as DNA sequences and species records.',
    ],
    [
      'Meliputi penjajaran urutan (misalnya BLAST), perakitan genom, filogenetika, prediksi struktur protein, dan pengelolaan data keanekaragaman hayati.',
      'It covers sequence alignment (such as BLAST), genome assembly, phylogenetics, protein structure prediction and biodiversity data management.',
    ],
    [
      'blast',
      'barcode dna',
      'penjajaran urutan',
    ],
    'bioinformatika'
  ),
];
