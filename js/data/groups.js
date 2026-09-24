// Friendly names and short explanations for major groups in the GBIF Backbone.
// Keyed by scientific name. p = display priority (higher first). Content license: CC BY-SA 4.0.
// Groups not listed here are still shown; they simply appear after these, under "other groups".
const G = (icon, p, id, en, did, den) => ({ icon, p, name: [id, en], desc: [did, den] });

export const GROUPS = {
  // Kingdoms
  Animalia: G(
    '🐾',
    100,
    'Hewan',
    'Animals',
    'Makhluk bersel banyak yang mendapat makanan dengan memakan makhluk lain dan umumnya bisa bergerak.',
    'Many-celled organisms that eat other organisms and usually move.'
  ),
  Plantae: G(
    '🌿',
    95,
    'Tumbuhan',
    'Plants',
    'Makhluk hidup yang membuat makanan sendiri lewat fotosintesis.',
    'Organisms that make their own food by photosynthesis.'
  ),
  Fungi: G(
    '🍄',
    90,
    'Jamur',
    'Fungi',
    'Penyerap makanan dari lingkungannya: jamur payung, kapang, dan ragi.',
    'Organisms that absorb food from their surroundings: mushrooms, moulds and yeasts.'
  ),
  Chromista: G(
    '🟤',
    70,
    'Kromista',
    'Chromista',
    'Kelompok beragam: ganggang cokelat, diatom, dan beberapa makhluk bersel satu.',
    'A varied group: brown seaweeds, diatoms and several single-celled organisms.'
  ),
  Protozoa: G(
    '🔬',
    65,
    'Protozoa',
    'Protozoa',
    'Makhluk bersel satu berinti, seperti amoeba dan euglena.',
    'Single-celled organisms with a nucleus, such as amoebas and euglenas.'
  ),
  Bacteria: G(
    '🦠',
    80,
    'Bakteri',
    'Bacteria',
    'Makhluk bersel satu tanpa inti sel; ada di mana-mana, termasuk di tubuh kita.',
    'Single cells without a nucleus, found everywhere — including inside us.'
  ),
  Archaea: G(
    '♨️',
    75,
    'Arkea',
    'Archaea',
    'Makhluk bersel satu tanpa inti yang berbeda dari bakteri; banyak yang hidup di tempat ekstrem.',
    'Single cells without a nucleus, different from bacteria; many live in extreme places.'
  ),

  // Animal phyla
  Chordata: G(
    '🐟',
    100,
    'Hewan bertulang belakang & kerabatnya',
    'Chordates',
    'Hewan yang memiliki tali saraf di punggung: ikan, katak, reptil, burung, dan mamalia.',
    'Animals with a nerve cord along the back: fish, frogs, reptiles, birds and mammals.'
  ),
  Arthropoda: G(
    '🦋',
    95,
    'Hewan berbuku-buku',
    'Arthropods',
    'Hewan berkaki beruas dan berkerangka luar: serangga, laba-laba, udang, dan kepiting.',
    'Animals with jointed legs and an outer skeleton: insects, spiders, shrimp and crabs.'
  ),
  Mollusca: G(
    '🐚',
    90,
    'Hewan lunak (moluska)',
    'Molluscs',
    'Hewan bertubuh lunak, banyak yang bercangkang: siput, kerang, dan cumi-cumi.',
    'Soft-bodied animals, many with shells: snails, clams and squid.'
  ),
  Cnidaria: G(
    '🪸',
    85,
    'Karang, ubur-ubur & anemon',
    'Cnidarians',
    'Hewan air bertentakel penyengat, termasuk pembangun terumbu karang.',
    'Water animals with stinging tentacles, including reef-building corals.'
  ),
  Echinodermata: G(
    '⭐',
    80,
    'Hewan berkulit duri',
    'Echinoderms',
    'Hewan laut bersimetri lima: bintang laut, bulu babi, dan teripang.',
    'Sea animals with five-part symmetry: sea stars, urchins and sea cucumbers.'
  ),
  Annelida: G(
    '🪱',
    75,
    'Cacing bersegmen',
    'Segmented worms',
    'Cacing bertubuh cincin-cincin: cacing tanah, lintah, dan cacing laut.',
    'Worms made of ring segments: earthworms, leeches and marine worms.'
  ),
  Porifera: G(
    '🧽',
    70,
    'Spons',
    'Sponges',
    'Hewan sederhana berpori yang menyaring makanan dari air.',
    'Simple porous animals that filter food from water.'
  ),
  Platyhelminthes: G(
    '〰️',
    60,
    'Cacing pipih',
    'Flatworms',
    'Cacing bertubuh pipih; sebagian hidup bebas, sebagian menjadi parasit.',
    'Flat-bodied worms; some live freely, some are parasites.'
  ),
  Nematoda: G(
    '➰',
    58,
    'Cacing gilig',
    'Roundworms',
    'Cacing bulat panjang yang sangat banyak jenisnya, termasuk cacing perut.',
    'Long round worms with countless species, including gut worms.'
  ),
  Tardigrada: G(
    '🐻',
    40,
    'Beruang air',
    'Water bears',
    'Hewan mikroskopis yang sangat tangguh terhadap kekeringan dan suhu ekstrem.',
    'Microscopic animals that survive drying out and extreme temperatures.'
  ),
  Ctenophora: G(
    '💠',
    30,
    'Ubur-ubur sisir',
    'Comb jellies',
    'Hewan laut bening yang berenang dengan barisan rambut getar berkilau.',
    'Clear sea animals that swim with shimmering rows of cilia.'
  ),
  Rotifera: G(
    '🔘',
    25,
    'Hewan beroda',
    'Rotifers',
    'Hewan mikroskopis air tawar dengan “roda” rambut getar di kepalanya.',
    'Microscopic freshwater animals with a “wheel” of cilia on the head.'
  ),
  Onychophora: G(
    '🐛',
    25,
    'Cacing beludru',
    'Velvet worms',
    'Hewan berkaki banyak yang menembakkan lendir lengket untuk menangkap mangsa.',
    'Many-legged animals that shoot sticky slime to catch prey.'
  ),
  Brachiopoda: G(
    '🐚',
    15,
    'Brakiopoda',
    'Lamp shells',
    'Hewan laut bercangkang dua yang mirip kerang, tetapi bukan moluska.',
    'Two-shelled sea animals that look like clams but are not molluscs.'
  ),

  // Chordate classes (GBIF lists some reptile and fish groups directly under Chordata)
  Mammalia: G(
    '🐘',
    100,
    'Mamalia',
    'Mammals',
    'Hewan berambut yang menyusui anaknya.',
    'Hairy animals that feed their young with milk.'
  ),
  Aves: G(
    '🐦',
    96,
    'Burung',
    'Birds',
    'Hewan berbulu dan berparuh yang bertelur; kebanyakan bisa terbang.',
    'Feathered, beaked animals that lay eggs; most can fly.'
  ),
  Squamata: G(
    '🦎',
    92,
    'Kadal & ular',
    'Lizards & snakes',
    'Reptil bersisik yang berganti kulit: cicak, kadal, biawak, dan ular.',
    'Scaly reptiles that shed their skin: geckos, lizards, monitors and snakes.'
  ),
  Testudines: G(
    '🐢',
    90,
    'Kura-kura & penyu',
    'Turtles',
    'Reptil bercangkang keras di darat, air tawar, dan laut.',
    'Reptiles with a hard shell, on land, in fresh water and at sea.'
  ),
  Crocodylia: G(
    '🐊',
    89,
    'Buaya',
    'Crocodilians',
    'Reptil besar bersisik tebal yang hidup di sungai dan muara.',
    'Large armoured reptiles of rivers and estuaries.'
  ),
  Amphibia: G(
    '🐸',
    94,
    'Amfibi',
    'Amphibians',
    'Hewan yang hidup di dua alam: katak, kodok, dan salamander.',
    'Animals that live both in water and on land: frogs, toads and salamanders.'
  ),
  Elasmobranchii: G(
    '🦈',
    88,
    'Hiu & pari',
    'Sharks & rays',
    'Ikan bertulang rawan: hiu dan ikan pari.',
    'Fish with skeletons of cartilage: sharks and rays.'
  ),
  Coelacanthi: G(
    '🐟',
    70,
    'Coelacanth',
    'Coelacanths',
    'Ikan bersirip daging yang langka; salah satunya hidup di perairan Sulawesi.',
    'Rare lobe-finned fish; one species lives in Sulawesi waters.'
  ),
  Dipneusti: G(
    '🐟',
    55,
    'Ikan paru-paru',
    'Lungfish',
    'Ikan yang bisa menghirup udara dengan paru-paru.',
    'Fish that can breathe air with lungs.'
  ),
  Holocephali: G(
    '🐟',
    40,
    'Hiu hantu',
    'Chimaeras',
    'Kerabat hiu yang hidup di laut dalam.',
    'Deep-sea relatives of sharks.'
  ),
  Myxini: G(
    '🐍',
    35,
    'Ikan hag',
    'Hagfish',
    'Hewan mirip belut yang menghasilkan banyak lendir.',
    'Eel-like animals that make lots of slime.'
  ),
  Petromyzonti: G(
    '🐍',
    35,
    'Ikan lamprei',
    'Lampreys',
    'Ikan tanpa rahang bermulut penghisap.',
    'Jawless fish with sucker mouths.'
  ),
  Ascidiacea: G(
    '🫙',
    45,
    'Ascidian (squirt laut)',
    'Sea squirts',
    'Hewan laut menempel yang saat larva mirip berudu.',
    'Attached sea animals whose larvae look like tadpoles.'
  ),
  Leptocardii: G(
    '〰️',
    30,
    'Lanset',
    'Lancelets',
    'Hewan laut kecil yang membantu ilmuwan memahami leluhur vertebrata.',
    'Small sea animals that help scientists understand vertebrate ancestors.'
  ),
  Thaliacea: G(
    '🫧',
    25,
    'Salpa',
    'Salps',
    'Hewan laut bening yang mengapung dan menyaring plankton.',
    'Clear floating sea animals that filter plankton.'
  ),
  Sphenodontia: G(
    '🦎',
    40,
    'Tuatara',
    'Tuatara',
    'Reptil langka dari Selandia Baru, kerabat jauh kadal.',
    'A rare New Zealand reptile, a distant relative of lizards.'
  ),
  // Ray-finned fish orders listed directly under Chordata
  Perciformes: G(
    '🐠',
    80,
    'Ikan mirip kakap',
    'Perch-like fishes',
    'Kelompok ikan bertulang terbesar: kerapu, kakap, dan banyak ikan karang.',
    'The largest group of bony fish: groupers, snappers and many reef fish.'
  ),
  Cypriniformes: G(
    '🐟',
    78,
    'Ikan mas & kerabat',
    'Carps & minnows',
    'Ikan air tawar seperti ikan mas, tawes, dan wader.',
    'Freshwater fish such as carps and minnows.'
  ),
  Siluriformes: G(
    '🐟',
    76,
    'Ikan lele & patin',
    'Catfishes',
    'Ikan berkumis (bersungut) seperti lele dan patin.',
    'Whiskered fish such as walking catfish and pangasius.'
  ),
  Tetraodontiformes: G(
    '🐡',
    70,
    'Ikan buntal & kerabat',
    'Pufferfishes & allies',
    'Ikan yang bisa menggembung atau bertubuh unik, seperti buntal dan mola.',
    'Fish that puff up or have unusual shapes, such as puffers and sunfish.'
  ),
  Syngnathiformes: G(
    '🐴',
    68,
    'Kuda laut & tangkur',
    'Seahorses & pipefishes',
    'Ikan bermoncong pipa; jantannya mengandung anak.',
    'Tube-snouted fish; the males carry the young.'
  ),
  Anguilliformes: G(
    '🐍',
    66,
    'Belut laut & sidat',
    'Eels',
    'Ikan bertubuh panjang seperti ular, misalnya sidat dan belut moray.',
    'Snake-shaped fish such as freshwater eels and morays.'
  ),
  Osteoglossiformes: G(
    '🐟',
    60,
    'Ikan arwana & kerabat',
    'Bonytongues',
    'Ikan dari garis keturunan tua, termasuk arwana.',
    'Fish from an old lineage, including arowanas.'
  ),
  Clupeiformes: G(
    '🐟',
    64,
    'Ikan teri & sarden',
    'Herrings & anchovies',
    'Ikan kecil bergerombol yang penting sebagai makanan.',
    'Small schooling fish important as food.'
  ),
  Beloniformes: G(
    '🐟',
    50,
    'Ikan terbang & julung',
    'Flyingfishes & needlefishes',
    'Termasuk ikan terbang yang bisa melayang di atas air.',
    'Includes flying fish that glide above the water.'
  ),
  Pleuronectiformes: G(
    '🐟',
    50,
    'Ikan sebelah',
    'Flatfishes',
    'Ikan pipih yang kedua matanya berada di satu sisi.',
    'Flat fish with both eyes on one side.'
  ),

  // Mammal orders
  Primates: G(
    '🐒',
    100,
    'Primata',
    'Primates',
    'Monyet, kera, lemur, tarsius — dan manusia.',
    'Monkeys, apes, lemurs, tarsiers — and humans.'
  ),
  Carnivora: G(
    '🐯',
    98,
    'Karnivora',
    'Carnivorans',
    'Kucing, anjing, beruang, musang, dan anjing laut.',
    'Cats, dogs, bears, civets and seals.'
  ),
  Proboscidea: G('🐘', 96, 'Gajah', 'Elephants', 'Mamalia berbelalai.', 'Mammals with a trunk.'),
  Cetacea: G(
    '🐋',
    95,
    'Paus & lumba-lumba',
    'Whales & dolphins',
    'Mamalia laut yang bernapas lewat lubang di kepala.',
    'Marine mammals that breathe through a blowhole.'
  ),
  Artiodactyla: G(
    '🦌',
    94,
    'Hewan berkuku genap',
    'Even-toed hoofed mammals',
    'Rusa, sapi, kambing, babi, dan jerapah.',
    'Deer, cattle, goats, pigs and giraffes.'
  ),
  Perissodactyla: G(
    '🦏',
    92,
    'Hewan berkuku ganjil',
    'Odd-toed hoofed mammals',
    'Badak, kuda, dan tapir.',
    'Rhinos, horses and tapirs.'
  ),
  Chiroptera: G(
    '🦇',
    93,
    'Kelelawar',
    'Bats',
    'Satu-satunya mamalia yang benar-benar bisa terbang.',
    'The only mammals that can truly fly.'
  ),
  Rodentia: G(
    '🐀',
    91,
    'Hewan pengerat',
    'Rodents',
    'Tikus, tupai terbang, landak, dan bajing.',
    'Rats, flying squirrels, porcupines and squirrels.'
  ),
  Sirenia: G(
    '🧜',
    85,
    'Duyung & manatee',
    'Sea cows',
    'Mamalia laut pemakan tumbuhan.',
    'Plant-eating marine mammals.'
  ),
  Pholidota: G(
    '🦔',
    84,
    'Trenggiling',
    'Pangolins',
    'Mamalia bersisik pemakan semut.',
    'Scaly ant-eating mammals.'
  ),
  Diprotodontia: G(
    '🦘',
    80,
    'Kanguru, kuskus & kerabat',
    'Kangaroos, cuscuses & allies',
    'Hewan berkantung dari Australia dan Papua.',
    'Pouched mammals of Australia and New Guinea.'
  ),
  Monotremata: G(
    '🥚',
    78,
    'Mamalia bertelur',
    'Egg-laying mammals',
    'Platipus dan landak semut (ekidna), termasuk di Papua.',
    'The platypus and echidnas, including in New Guinea.'
  ),
  Lagomorpha: G('🐇', 70, 'Kelinci', 'Rabbits & hares', 'Kelinci dan terwelu.', 'Rabbits and hares.'),
  Scandentia: G(
    '🐿️',
    68,
    'Tupai',
    'Treeshrews',
    'Mamalia kecil lincah dari hutan Asia Tenggara.',
    'Small agile mammals of Southeast Asian forests.'
  ),
  Dermoptera: G(
    '🪂',
    66,
    'Kubung',
    'Colugos',
    'Mamalia yang melayang antarpohon dengan selaput kulit.',
    'Mammals that glide between trees on skin flaps.'
  ),
  Eulipotyphla: G(
    '🦔',
    60,
    'Cecurut & landak susu',
    'Shrews & hedgehogs',
    'Mamalia kecil pemakan serangga.',
    'Small insect-eating mammals.'
  ),
  Soricomorpha: G(
    '🐭',
    58,
    'Cecurut',
    'Shrews & moles',
    'Mamalia kecil pemakan serangga.',
    'Small insect-eating mammals.'
  ),

  // Bird orders
  Passeriformes: G(
    '🐦',
    100,
    'Burung pengicau',
    'Perching birds',
    'Lebih dari separuh jenis burung: kutilang, gereja, jalak, dan cenderawasih.',
    'More than half of all birds: bulbuls, sparrows, mynas and birds-of-paradise.'
  ),
  Accipitriformes: G(
    '🦅',
    96,
    'Elang',
    'Hawks & eagles',
    'Burung pemangsa berparuh bengkok dan bercakar tajam.',
    'Birds of prey with hooked beaks and sharp talons.'
  ),
  Psittaciformes: G(
    '🦜',
    94,
    'Burung paruh bengkok',
    'Parrots',
    'Kakatua, nuri, dan perkici.',
    'Cockatoos, lories and parrots.'
  ),
  Bucerotiformes: G(
    '🐦',
    93,
    'Rangkong',
    'Hornbills',
    'Burung berparuh besar yang menyebarkan biji di hutan.',
    'Big-billed birds that spread forest seeds.'
  ),
  Galliformes: G(
    '🐓',
    92,
    'Ayam & kerabat',
    'Fowl',
    'Ayam hutan, merak, puyuh, dan maleo.',
    'Junglefowl, peafowl, quails and maleos.'
  ),
  Columbiformes: G(
    '🕊️',
    90,
    'Merpati & perkutut',
    'Pigeons & doves',
    'Merpati, tekukur, dan perkutut.',
    'Pigeons and doves.'
  ),
  Coraciiformes: G(
    '🐦',
    88,
    'Raja-udang & kerabat',
    'Kingfishers & allies',
    'Burung berwarna cerah seperti raja-udang dan kirik-kirik.',
    'Colourful birds such as kingfishers and bee-eaters.'
  ),
  Strigiformes: G(
    '🦉',
    87,
    'Burung hantu',
    'Owls',
    'Burung pemangsa malam dengan penglihatan tajam.',
    'Night hunters with keen eyesight.'
  ),
  Casuariiformes: G(
    '🐦',
    85,
    'Kasuari & emu',
    'Cassowaries & emus',
    'Burung besar yang tidak bisa terbang.',
    'Large flightless birds.'
  ),
  Anseriformes: G(
    '🦆',
    84,
    'Bebek & angsa',
    'Ducks & geese',
    'Burung air berparuh pipih.',
    'Waterbirds with flat bills.'
  ),
  Pelecaniformes: G(
    '🦩',
    82,
    'Kuntul & pelikan',
    'Herons & pelicans',
    'Burung air berkaki dan berparuh panjang.',
    'Long-legged, long-billed waterbirds.'
  ),
  Charadriiformes: G(
    '🐦',
    80,
    'Burung pantai & camar',
    'Shorebirds & gulls',
    'Burung pantai, camar, dan dara laut.',
    'Shorebirds, gulls and terns.'
  ),
  Sphenisciformes: G(
    '🐧',
    80,
    'Penguin',
    'Penguins',
    'Burung laut yang berenang dengan sayap seperti sirip.',
    'Seabirds that swim with flipper-like wings.'
  ),
  Struthioniformes: G(
    '🐦',
    78,
    'Burung unta',
    'Ostriches',
    'Burung terbesar di dunia.',
    'The largest birds in the world.'
  ),
  Piciformes: G(
    '🐦',
    76,
    'Pelatuk & takur',
    'Woodpeckers & barbets',
    'Burung pematuk kayu dan takur.',
    'Woodpeckers and barbets.'
  ),
  Apodiformes: G(
    '🐦',
    75,
    'Walet & kolibri',
    'Swifts & hummingbirds',
    'Burung penerbang ulung; walet membuat sarang dari air liur.',
    'Expert fliers; swiftlets build nests from saliva.'
  ),
  Cuculiformes: G(
    '🐦',
    70,
    'Kangkok & bubut',
    'Cuckoos',
    'Beberapa menitipkan telurnya di sarang burung lain.',
    'Some lay their eggs in other birds’ nests.'
  ),
  Falconiformes: G(
    '🦅',
    72,
    'Alap-alap',
    'Falcons',
    'Burung pemangsa yang sangat cepat.',
    'Very fast birds of prey.'
  ),
  Suliformes: G(
    '🐦',
    70,
    'Pecuk & angsa batu',
    'Cormorants & boobies',
    'Burung laut penyelam pemakan ikan.',
    'Diving seabirds that eat fish.'
  ),

  // Arthropod classes
  Insecta: G(
    '🦋',
    100,
    'Serangga',
    'Insects',
    'Hewan berkaki enam dengan tubuh tiga bagian — kelompok hewan dengan jenis terbanyak.',
    'Six-legged animals with three body parts — the animal group with the most species.'
  ),
  Arachnida: G(
    '🕷️',
    95,
    'Laba-laba & kalajengking',
    'Arachnids',
    'Hewan berkaki delapan: laba-laba, kalajengking, tungau, dan caplak.',
    'Eight-legged animals: spiders, scorpions, mites and ticks.'
  ),
  Malacostraca: G(
    '🦀',
    93,
    'Kepiting, udang & lobster',
    'Crabs, shrimps & lobsters',
    'Krustasea besar yang kebanyakan hidup di air.',
    'Large crustaceans, mostly aquatic.'
  ),
  Chilopoda: G(
    '🐛',
    80,
    'Kelabang',
    'Centipedes',
    'Hewan beruas dengan sepasang kaki di tiap ruas; pemangsa berbisa.',
    'Segmented predators with one pair of legs per segment.'
  ),
  Diplopoda: G(
    '🐛',
    78,
    'Kaki seribu',
    'Millipedes',
    'Hewan beruas dengan dua pasang kaki di tiap ruas; pemakan daun busuk.',
    'Segmented animals with two pairs of legs per segment; eat rotting leaves.'
  ),
  Merostomata: G(
    '🦀',
    70,
    'Mimi (belangkas)',
    'Horseshoe crabs',
    'Hewan laut purba yang lebih dekat dengan laba-laba daripada kepiting.',
    'Ancient sea animals closer to spiders than to crabs.'
  ),
  Collembola: G(
    '🔹',
    50,
    'Ekor pegas',
    'Springtails',
    'Hewan kecil tanah yang melompat dengan “pegas” di bawah tubuhnya.',
    'Tiny soil animals that jump with a “spring” under the body.'
  ),
  Branchiopoda: G(
    '🦐',
    45,
    'Udang renik',
    'Water fleas & fairy shrimp',
    'Krustasea kecil air tawar seperti kutu air.',
    'Small freshwater crustaceans such as water fleas.'
  ),
  Copepoda: G(
    '🦐',
    45,
    'Kopepoda',
    'Copepods',
    'Krustasea mikroskopis, makanan penting bagi ikan.',
    'Microscopic crustaceans, an important food for fish.'
  ),
  Trilobita: G(
    '🪨',
    60,
    'Trilobit (punah)',
    'Trilobites (extinct)',
    'Artropoda laut purba yang hanya kita kenal dari fosil.',
    'Ancient sea arthropods known only from fossils.'
  ),

  // Insect orders
  Lepidoptera: G(
    '🦋',
    100,
    'Kupu-kupu & ngengat',
    'Butterflies & moths',
    'Serangga bersayap sisik yang mengalami metamorfosis sempurna.',
    'Insects with scaly wings and complete metamorphosis.'
  ),
  Coleoptera: G(
    '🪲',
    98,
    'Kumbang',
    'Beetles',
    'Serangga bersayap keras — kelompok hewan dengan jenis terbanyak di bumi.',
    'Hard-winged insects — the animal group with the most species on Earth.'
  ),
  Hymenoptera: G(
    '🐝',
    97,
    'Lebah, tawon & semut',
    'Bees, wasps & ants',
    'Banyak yang hidup berkoloni dan penting sebagai penyerbuk.',
    'Many live in colonies and are important pollinators.'
  ),
  Diptera: G(
    '🪰',
    95,
    'Lalat & nyamuk',
    'Flies & mosquitoes',
    'Serangga bersayap dua.',
    'Insects with two wings.'
  ),
  Odonata: G(
    '🪰',
    92,
    'Capung',
    'Dragonflies',
    'Pemburu serangga di udara; larvanya hidup di air.',
    'Aerial hunters of insects; their young live in water.'
  ),
  Orthoptera: G(
    '🦗',
    90,
    'Belalang & jangkrik',
    'Grasshoppers & crickets',
    'Serangga pelompat dengan kaki belakang yang kuat.',
    'Jumping insects with strong hind legs.'
  ),
  Hemiptera: G(
    '🪲',
    88,
    'Kepik & tonggeret',
    'True bugs',
    'Serangga bermulut penusuk-pengisap, seperti walang sangit dan tonggeret.',
    'Insects with piercing-sucking mouths, such as stink bugs and cicadas.'
  ),
  Mantodea: G(
    '🦗',
    85,
    'Belalang sembah',
    'Mantises',
    'Pemangsa dengan kaki depan seperti sedang berdoa.',
    'Predators with front legs held as if praying.'
  ),
  Phasmida: G(
    '🌿',
    84,
    'Serangga ranting & daun',
    'Stick & leaf insects',
    'Serangga penyamar yang mirip ranting atau daun.',
    'Masters of disguise that look like twigs or leaves.'
  ),
  Blattodea: G(
    '🪳',
    80,
    'Kecoak & rayap',
    'Cockroaches & termites',
    'Termasuk rayap yang hidup berkoloni.',
    'Includes termites, which live in colonies.'
  ),
  Ephemeroptera: G(
    '🪰',
    60,
    'Lalat sehari',
    'Mayflies',
    'Dewasanya hidup sangat singkat, kadang hanya sehari.',
    'Adults live very briefly, sometimes a single day.'
  ),
  Neuroptera: G(
    '🪰',
    55,
    'Undur-undur & kerabat',
    'Lacewings & antlions',
    'Larva undur-undur membuat jebakan lubang di pasir.',
    'Antlion larvae dig pit traps in sand.'
  ),

  // Arachnid orders
  Araneae: G(
    '🕷️',
    100,
    'Laba-laba',
    'Spiders',
    'Pemangsa berkaki delapan yang membuat benang sutra.',
    'Eight-legged predators that make silk.'
  ),
  Scorpiones: G(
    '🦂',
    95,
    'Kalajengking',
    'Scorpions',
    'Arakhnida bercapit dengan sengat di ujung ekor.',
    'Clawed arachnids with a sting at the tail tip.'
  ),
  Opiliones: G(
    '🕷️',
    70,
    'Laba-laba kaki panjang',
    'Harvestmen',
    'Arakhnida berkaki sangat panjang yang tidak membuat jaring.',
    'Long-legged arachnids that do not spin webs.'
  ),

  // Mollusc classes
  Gastropoda: G(
    '🐌',
    100,
    'Siput',
    'Snails & slugs',
    'Moluska yang merayap dengan satu kaki berotot.',
    'Molluscs that crawl on one muscular foot.'
  ),
  Bivalvia: G(
    '🦪',
    95,
    'Kerang',
    'Clams & oysters',
    'Moluska bercangkang dua yang menyaring makanan.',
    'Two-shelled molluscs that filter food.'
  ),
  Cephalopoda: G(
    '🐙',
    98,
    'Cumi, sotong & gurita',
    'Squid, cuttlefish & octopus',
    'Moluska cerdas bertentakel.',
    'Clever molluscs with tentacles.'
  ),
  Polyplacophora: G(
    '🐚',
    60,
    'Kiton',
    'Chitons',
    'Moluska dengan delapan keping cangkang.',
    'Molluscs with eight shell plates.'
  ),

  // Cnidarian and echinoderm classes
  Anthozoa: G(
    '🪸',
    100,
    'Karang & anemon',
    'Corals & anemones',
    'Pembangun terumbu karang dan anemon laut.',
    'Reef-building corals and sea anemones.'
  ),
  Scyphozoa: G(
    '🪼',
    95,
    'Ubur-ubur sejati',
    'True jellyfish',
    'Ubur-ubur yang berenang bebas di laut.',
    'Free-swimming jellyfish.'
  ),
  Cubozoa: G(
    '🪼',
    90,
    'Ubur-ubur kotak',
    'Box jellyfish',
    'Ubur-ubur bersengat sangat kuat.',
    'Jellyfish with very powerful stings.'
  ),
  Hydrozoa: G(
    '🪼',
    85,
    'Hidrozoa',
    'Hydrozoans',
    'Termasuk hydra dan ubur-ubur api (Portuguese man o’ war).',
    'Includes hydras and the Portuguese man o’ war.'
  ),
  Asteroidea: G(
    '⭐',
    100,
    'Bintang laut',
    'Sea stars',
    'Echinodermata berlengan yang bisa menumbuhkan lengan baru.',
    'Armed echinoderms that can regrow arms.'
  ),
  Echinoidea: G(
    '🟣',
    95,
    'Bulu babi',
    'Sea urchins',
    'Echinodermata bulat berduri.',
    'Round, spiny echinoderms.'
  ),
  Holothuroidea: G(
    '🥒',
    92,
    'Teripang',
    'Sea cucumbers',
    'Echinodermata lunak yang membersihkan dasar laut.',
    'Soft echinoderms that clean the sea floor.'
  ),
  Ophiuroidea: G(
    '⭐',
    85,
    'Bintang ular',
    'Brittle stars',
    'Bintang laut berlengan ramping yang lincah.',
    'Nimble sea stars with slender arms.'
  ),
  Crinoidea: G(
    '🌸',
    80,
    'Lili laut',
    'Sea lilies & feather stars',
    'Echinodermata berlengan bulu yang mirip bunga.',
    'Feathery echinoderms that look like flowers.'
  ),
  Clitellata: G(
    '🪱',
    100,
    'Cacing tanah & lintah',
    'Earthworms & leeches',
    'Cacing bersegmen dengan “sabuk” (klitelum).',
    'Segmented worms with a “saddle” (clitellum).'
  ),
  Polychaeta: G(
    '🪱',
    90,
    'Cacing laut',
    'Bristle worms',
    'Cacing bersegmen berbulu kaku, kebanyakan di laut.',
    'Bristly segmented worms, mostly marine.'
  ),

  // Plant groups
  Tracheophyta: G(
    '🌳',
    100,
    'Tumbuhan berpembuluh',
    'Vascular plants',
    'Tumbuhan dengan pembuluh angkut: paku, tumbuhan berbiji, dan berbunga.',
    'Plants with transport vessels: ferns, seed plants and flowering plants.'
  ),
  Bryophyta: G(
    '🌱',
    90,
    'Lumut daun',
    'Mosses',
    'Tumbuhan kecil tanpa pembuluh yang suka tempat lembap.',
    'Small plants without vessels that like damp places.'
  ),
  Marchantiophyta: G(
    '🌱',
    85,
    'Lumut hati',
    'Liverworts',
    'Lumut berbentuk lembaran pipih.',
    'Flat, leafy or ribbon-like mosses.'
  ),
  Anthocerotophyta: G(
    '🌱',
    70,
    'Lumut tanduk',
    'Hornworts',
    'Lumut dengan penghasil spora berbentuk tanduk.',
    'Mosses with horn-shaped spore capsules.'
  ),
  Chlorophyta: G(
    '🟢',
    80,
    'Ganggang hijau',
    'Green algae',
    'Alga hijau di air tawar dan laut.',
    'Green algae of fresh water and the sea.'
  ),
  Rhodophyta: G(
    '🔴',
    78,
    'Ganggang merah',
    'Red algae',
    'Rumput laut merah, termasuk penghasil agar-agar.',
    'Red seaweeds, including those that make agar.'
  ),
  Charophyta: G(
    '🟢',
    60,
    'Karofita',
    'Stoneworts & allies',
    'Alga hijau yang paling dekat kekerabatannya dengan tumbuhan darat.',
    'Green algae most closely related to land plants.'
  ),
  Magnoliopsida: G(
    '🌺',
    100,
    'Tumbuhan berbunga dikotil & kerabat',
    'Eudicots & allies',
    'Sebagian besar tumbuhan berbunga: mangga, cabai, mawar, dan kacang.',
    'Most flowering plants: mangoes, chillies, roses and beans.'
  ),
  Liliopsida: G(
    '🌾',
    98,
    'Tumbuhan berbunga monokotil',
    'Monocots',
    'Padi, jagung, kelapa, pisang, dan anggrek.',
    'Rice, maize, coconut, banana and orchids.'
  ),
  Polypodiopsida: G(
    '🌿',
    92,
    'Tumbuhan paku',
    'Ferns',
    'Tumbuhan berpembuluh yang berkembang biak dengan spora.',
    'Vascular plants that reproduce with spores.'
  ),
  Pinopsida: G(
    '🌲',
    90,
    'Tumbuhan runjung (konifer)',
    'Conifers',
    'Pinus, damar, dan cemara berdaun jarum.',
    'Pines, kauri and other needle-leaved trees.'
  ),
  Lycopodiopsida: G(
    '🌿',
    80,
    'Paku kawat',
    'Clubmosses',
    'Tumbuhan berpembuluh purba mirip lumut besar.',
    'Ancient vascular plants that look like large mosses.'
  ),
  Cycadopsida: G(
    '🌴',
    78,
    'Pakis haji',
    'Cycads',
    'Tumbuhan berbiji purba mirip palem.',
    'Ancient seed plants that look like palms.'
  ),
  Gnetopsida: G(
    '🌿',
    76,
    'Melinjo & kerabat',
    'Gnetophytes',
    'Tumbuhan berbiji terbuka, termasuk melinjo untuk emping.',
    'Naked-seed plants, including melinjo used for emping crackers.'
  ),
  Ginkgoopsida: G(
    '🍃',
    70,
    'Ginkgo',
    'Ginkgo',
    'Satu-satunya jenis yang tersisa dari kelompok tumbuhan purba.',
    'The only surviving species of an ancient plant group.'
  ),
  Poales: G(
    '🌾',
    100,
    'Rumput-rumputan',
    'Grasses & sedges',
    'Padi, jagung, tebu, dan bambu.',
    'Rice, maize, sugarcane and bamboo.'
  ),
  Asparagales: G(
    '🌸',
    98,
    'Anggrek & kerabat',
    'Orchids & allies',
    'Anggrek, bawang, dan lidah buaya.',
    'Orchids, onions and aloe.'
  ),
  Arecales: G(
    '🌴',
    96,
    'Palem',
    'Palms',
    'Kelapa, sawit, aren, dan rotan.',
    'Coconut, oil palm, sugar palm and rattan.'
  ),
  Zingiberales: G(
    '🍌',
    94,
    'Pisang & jahe',
    'Bananas & gingers',
    'Pisang, jahe, kunyit, dan lengkuas.',
    'Bananas, ginger, turmeric and galangal.'
  ),
  Alismatales: G(
    '🌿',
    90,
    'Talas & tumbuhan air',
    'Arums & water plants',
    'Talas, bunga bangkai, dan lamun.',
    'Taro, titan arum and seagrasses.'
  ),
  Fabales: G(
    '🫘',
    95,
    'Kacang-kacangan',
    'Legumes',
    'Kacang, kedelai, petai, dan putri malu.',
    'Beans, soybeans, petai and sensitive plants.'
  ),
  Malvales: G(
    '🌺',
    93,
    'Durian, kakao & kembang sepatu',
    'Mallows',
    'Durian, kakao, kapas, dan kembang sepatu.',
    'Durian, cacao, cotton and hibiscus.'
  ),
  Sapindales: G(
    '🥭',
    92,
    'Mangga, rambutan & jeruk',
    'Soapberries & citrus',
    'Mangga, rambutan, jeruk, dan mahoni.',
    'Mango, rambutan, citrus and mahogany.'
  ),
  Myrtales: G(
    '🍐',
    88,
    'Jambu & cengkih',
    'Myrtles',
    'Jambu air, cengkih, dan salam.',
    'Rose apples, cloves and Indonesian bay leaf.'
  ),
  Gentianales: G(
    '☕',
    88,
    'Kopi & kerabat',
    'Coffee & allies',
    'Kopi, mengkudu, dan kamboja.',
    'Coffee, noni and frangipani.'
  ),
  Solanales: G(
    '🌶️',
    87,
    'Cabai, tomat & kentang',
    'Nightshades',
    'Cabai, tomat, terong, dan kentang.',
    'Chillies, tomatoes, eggplants and potatoes.'
  ),
  Lamiales: G(
    '🌿',
    86,
    'Melati, jati & kemangi',
    'Mints & allies',
    'Melati, jati, kemangi, dan zaitun.',
    'Jasmine, teak, basil and olive.'
  ),
  Malpighiales: G(
    '🌿',
    85,
    'Bakau, karet & rafflesia',
    'Malpighiales',
    'Kelompok beragam: bakau, karet, singkong, dan rafflesia.',
    'A varied group: mangroves, rubber, cassava and rafflesia.'
  ),
  Rosales: G(
    '🌹',
    84,
    'Mawar, beringin & nangka',
    'Roses & figs',
    'Mawar, beringin, nangka, dan stroberi.',
    'Roses, figs, jackfruit and strawberries.'
  ),
  Caryophyllales: G(
    '🌵',
    80,
    'Kaktus & kantong semar',
    'Cacti & pitcher plants',
    'Kaktus, bayam, dan kantong semar.',
    'Cacti, spinach and pitcher plants.'
  ),
  Cucurbitales: G(
    '🥒',
    75,
    'Labu & mentimun',
    'Gourds',
    'Labu, mentimun, dan semangka.',
    'Gourds, cucumbers and watermelon.'
  ),
  Magnoliales: G(
    '🌼',
    74,
    'Magnolia & sirsak',
    'Magnolias & custard apples',
    'Cempaka, sirsak, dan pala.',
    'Champak, soursop and nutmeg.'
  ),
  Ericales: G(
    '🍵',
    72,
    'Teh & sawo',
    'Tea & sapodilla',
    'Teh, sawo, dan kesemek.',
    'Tea, sapodilla and persimmon.'
  ),

  // Fungi
  Basidiomycota: G(
    '🍄',
    100,
    'Jamur payung & kerabat',
    'Club fungi',
    'Jamur tiram, jamur merang, jamur kuping, dan jamur karat.',
    'Oyster, straw and wood-ear mushrooms, plus rusts.'
  ),
  Ascomycota: G(
    '🧫',
    95,
    'Jamur kantung',
    'Sac fungi',
    'Ragi, kapang Penicillium, dan morel.',
    'Yeasts, Penicillium moulds and morels.'
  ),
  Mucoromycota: G(
    '🍞',
    88,
    'Kapang roti & tempe',
    'Pin moulds',
    'Termasuk kapang Rhizopus untuk tempe.',
    'Includes the Rhizopus mould used for tempeh.'
  ),
  Zygomycota: G(
    '🍞',
    80,
    'Kapang zigot',
    'Zygomycetes',
    'Kapang yang tumbuh cepat di roti dan buah.',
    'Fast-growing moulds on bread and fruit.'
  ),
  Glomeromycota: G(
    '🌱',
    75,
    'Jamur mikoriza arbuskula',
    'Arbuscular mycorrhizal fungi',
    'Jamur yang membantu akar sebagian besar tumbuhan menyerap mineral.',
    'Fungi that help the roots of most plants take up minerals.'
  ),
  Chytridiomycota: G(
    '💧',
    65,
    'Kitrid',
    'Chytrids',
    'Jamur air dengan spora berekor; sebagian menyerang katak.',
    'Water fungi with tailed spores; some infect frogs.'
  ),
  Microsporidia: G(
    '🔬',
    40,
    'Mikrosporidia',
    'Microsporidia',
    'Parasit bersel satu yang berkerabat dengan jamur.',
    'Single-celled parasites related to fungi.'
  ),

  // Chromista & Protozoa
  Ochrophyta: G(
    '🟤',
    100,
    'Ganggang cokelat & diatom',
    'Brown algae & diatoms',
    'Rumput laut cokelat dan diatom bercangkang kaca.',
    'Brown seaweeds and glass-shelled diatoms.'
  ),
  Myzozoa: G(
    '🔬',
    95,
    'Dinoflagelata & apikompleksa',
    'Dinoflagellates & apicomplexans',
    'Termasuk Plasmodium penyebab malaria.',
    'Includes Plasmodium, which causes malaria.'
  ),
  Ciliophora: G(
    '🦠',
    92,
    'Ciliata',
    'Ciliates',
    'Makhluk bersel satu berambut getar, seperti Paramecium.',
    'Single cells with cilia, such as Paramecium.'
  ),
  Foraminifera: G(
    '🐚',
    85,
    'Foraminifera',
    'Forams',
    'Makhluk bersel satu bercangkang; fosilnya membentuk batu kapur.',
    'Shelled single cells whose fossils form limestone.'
  ),
  Oomycota: G(
    '🍂',
    70,
    'Jamur air',
    'Water moulds',
    'Mirip jamur, tetapi bukan jamur; sebagian menyerang tanaman.',
    'Fungus-like but not fungi; some attack crops.'
  ),
  Haptophyta: G(
    '🟢',
    60,
    'Haptofita',
    'Haptophytes',
    'Alga renik laut yang berperan besar dalam siklus karbon.',
    'Tiny sea algae important in the carbon cycle.'
  ),
  Amoebozoa: G(
    '🫧',
    100,
    'Amoeba & jamur lendir',
    'Amoebas & slime moulds',
    'Makhluk bersel satu yang bergerak dengan kaki semu.',
    'Single cells that move with pseudopods.'
  ),
  Euglenozoa: G(
    '🟢',
    95,
    'Euglena & tripanosoma',
    'Euglenids & trypanosomes',
    'Termasuk Euglena dan parasit penyebab penyakit tidur.',
    'Includes Euglena and the parasites behind sleeping sickness.'
  ),
  Metamonada: G(
    '🔬',
    70,
    'Metamonada',
    'Metamonads',
    'Protista tanpa mitokondria biasa, seperti Giardia.',
    'Protists without typical mitochondria, such as Giardia.'
  ),
  Mycetozoa: G(
    '🟡',
    75,
    'Jamur lendir',
    'Slime moulds',
    'Kumpulan sel yang bisa bergerak dan “memecahkan” labirin.',
    'Cell masses that can move and even “solve” mazes.'
  ),

  // Bacteria (GTDB names used by GBIF, plus older names)
  Pseudomonadota: G(
    '🦠',
    100,
    'Proteobakteri',
    'Proteobacteria',
    'Kelompok bakteri besar, termasuk E. coli dan Rhizobium.',
    'A large bacterial group including E. coli and Rhizobium.'
  ),
  Proteobacteria: G(
    '🦠',
    100,
    'Proteobakteri',
    'Proteobacteria',
    'Kelompok bakteri besar, termasuk E. coli dan Rhizobium.',
    'A large bacterial group including E. coli and Rhizobium.'
  ),
  Bacillota: G(
    '🦠',
    95,
    'Firmikutes',
    'Firmicutes',
    'Termasuk bakteri asam laktat dan Bacillus.',
    'Includes lactic acid bacteria and Bacillus.'
  ),
  Firmicutes: G(
    '🦠',
    95,
    'Firmikutes',
    'Firmicutes',
    'Termasuk bakteri asam laktat dan Bacillus.',
    'Includes lactic acid bacteria and Bacillus.'
  ),
  Cyanobacteria: G(
    '🟢',
    98,
    'Sianobakteri',
    'Cyanobacteria',
    'Bakteri berfotosintesis yang dulu menghasilkan oksigen pertama di bumi.',
    'Photosynthetic bacteria that first filled Earth’s air with oxygen.'
  ),
  Cyanobacteriota: G(
    '🟢',
    98,
    'Sianobakteri',
    'Cyanobacteria',
    'Bakteri berfotosintesis yang dulu menghasilkan oksigen pertama di bumi.',
    'Photosynthetic bacteria that first filled Earth’s air with oxygen.'
  ),
  Actinobacteriota: G(
    '🦠',
    92,
    'Aktinobakteri',
    'Actinobacteria',
    'Termasuk penghasil antibiotik dan bakteri TBC.',
    'Includes antibiotic makers and the TB bacterium.'
  ),
  Actinomycetota: G(
    '🦠',
    92,
    'Aktinobakteri',
    'Actinobacteria',
    'Termasuk penghasil antibiotik dan bakteri TBC.',
    'Includes antibiotic makers and the TB bacterium.'
  ),
  Bacteroidota: G(
    '🦠',
    85,
    'Bakteroidetes',
    'Bacteroidetes',
    'Bakteri umum di usus dan tanah.',
    'Common bacteria of the gut and soil.'
  ),
  Campylobacterota: G(
    '🦠',
    75,
    'Kampilobakter',
    'Campylobacterota',
    'Termasuk Helicobacter di lambung.',
    'Includes Helicobacter in the stomach.'
  ),
  Chlamydiota: G(
    '🦠',
    60,
    'Klamidia',
    'Chlamydiae',
    'Bakteri yang hidup di dalam sel.',
    'Bacteria that live inside cells.'
  ),
  Spirochaetota: G(
    '🌀',
    70,
    'Spiroket',
    'Spirochaetes',
    'Bakteri berbentuk spiral.',
    'Spiral-shaped bacteria.'
  ),
  Deinococcota: G(
    '💪',
    65,
    'Deinokokus',
    'Deinococci',
    'Termasuk bakteri yang sangat tahan radiasi.',
    'Includes bacteria extremely resistant to radiation.'
  ),
  Chloroflexota: G(
    '🟢',
    55,
    'Kloroflekus',
    'Chloroflexi',
    'Bakteri berfilamen, sebagian berfotosintesis.',
    'Filamentous bacteria, some photosynthetic.'
  ),

  // Archaea
  Halobacteriota: G(
    '🧂',
    95,
    'Halobakteri',
    'Haloarchaea',
    'Arkea penyuka garam dan penghasil metana.',
    'Salt-loving and methane-making archaea.'
  ),
  Methanobacteriota: G(
    '💨',
    92,
    'Arkea metanogen',
    'Methanogens',
    'Arkea penghasil gas metana, termasuk di usus manusia.',
    'Methane-making archaea, including in the human gut.'
  ),
  Thermoproteota: G(
    '♨️',
    90,
    'Arkea tahan panas',
    'Heat-loving archaea',
    'Arkea dari sumber air panas dan tanah.',
    'Archaea from hot springs and soil.'
  ),
  Thermoplasmatota: G(
    '♨️',
    80,
    'Termoplasma',
    'Thermoplasmata',
    'Arkea penyuka asam dan panas.',
    'Acid- and heat-loving archaea.'
  ),
  Asgardarchaeota: G(
    '🧬',
    85,
    'Arkea Asgard',
    'Asgard archaea',
    'Arkea yang diduga paling dekat dengan leluhur sel berinti.',
    'Archaea thought closest to the ancestor of cells with a nucleus.'
  ),
  Nanoarchaeota: G(
    '🔹',
    70,
    'Nanoarkea',
    'Nanoarchaea',
    'Arkea sangat kecil yang menumpang pada arkea lain.',
    'Tiny archaea that live on other archaea.'
  ),
};

/**
 * Popular groups the GBIF Backbone does not list as a separate rank.
 * They open the photo gallery for that group (iNaturalist taxonomy).
 */
export const SHORTCUTS = {
  Chordata: [
    {
      inat: 47178,
      icon: '🐟',
      name: ['Ikan bersirip kipas', 'Ray-finned fish'],
      note: [
        'Di GBIF, ordo-ordonya tercantum langsung di bawah Chordata.',
        'In GBIF its orders are listed directly under Chordata.',
      ],
    },
    {
      inat: 26036,
      icon: '🦎',
      name: ['Semua reptil', 'All reptiles'],
      note: [
        'Di GBIF, kadal-ular, kura-kura, dan buaya tercantum terpisah.',
        'In GBIF, lizards and snakes, turtles and crocodiles are listed separately.',
      ],
    },
  ],
};

export const groupInfo = name => GROUPS[name] || null;
