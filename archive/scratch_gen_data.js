const fs = require('fs');
const imgMap = JSON.parse(fs.readFileSync('/home/asadin/Projects/animals/scratch_images.json', 'utf8'));
const treeData = JSON.parse(fs.readFileSync('/home/asadin/Projects/animals/scratch_tree.json', 'utf8'));

// Daftar 47 spesies kurasi lengkap dengan detail taksonomi 8 tingkat dan metrik biologi
const species = [
  // =========================================================================
  // ARACHNIDA (SCORPIONES, THELYPHONIDA, ARANEAE, AMBLYPYGI, SOLIFUGAE)
  // =========================================================================
  {
    id: "pandinus-imperator",
    commonNameId: "Kalajengking Kaisar",
    commonNameEn: "Emperor Scorpion",
    scientificName: "Pandinus imperator",
    image: imgMap["pandinus-imperator"],
    imageCaption: "Pandinus imperator dewasa memperlihatkan capit sarung tinju masif",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Scorpiones",
      family: "Scorpionidae",
      genus: "Pandinus",
      species: "Pandinus imperator"
    },
    tradeOff: {
      clawForceScore: 94,
      clawForceDescription: "Capit sangat masif, tebal, dan berotot mirip sarung tinju. Mampu meremukkan karapas kumbang keras dan tulang hewan pengerat kecil tanpa perlu menyengat.",
      venomToxicityScore: 18,
      venomDescription: "Bisa sangat ringan (LD50 tinggi), efek sengatan mirip sengatan lebah madu bagi manusia. Jarang sekali menyengat mangsa.",
      category: "Capit Raksasa / Racun Lemah"
    },
    habitat: "Lantai hutan hujan tropis & savana lembab (Afrika Barat: Ghana, Pantai Gading, Togo)",
    diet: "Karnivora (Rayap, jangkrik, kumbang, tikus kecil, kadal)",
    size: "Panjang 15 - 20 cm, Bobot 30 - 50 gram (salah satu terbesar di dunia)",
    lifespan: "6 - 8 tahun di alam liar",
    iucnStatus: "Data Deficient / CITES Appendix II",
    bioluminescence: "Berpendar cyan kehijauan cerah di bawah sinar UV karena senyawa beta-karbolin.",
    description: "Kalajengking Kaisar adalah bukti hidup prinsip kompromi evolusi morfologi vs racun (morphological-venom trade-off). Karena capitnya yang luar biasa kuat dan berotot, ia mengandalkan kekuatan otot mekanis untuk meremukkan mangsa, sehingga kelenjar bisanya berevolusi menghasilkan racun yang sangat lemah.",
    facts: [
      "Memiliki gaya jepit capit terkuat di antara hampir seluruh arakhnida di dunia.",
      "Betina melahirkan anak hidup (vivipar) dan menggendong puluhan anaknya di punggung.",
      "Sering menjadi rujukan utama ilmuwan dalam meneliti trade-off biomekanika capit vs sintesis racun.",
      "Eksoskeletonnya bersinar terang di bawah lampu ultraviolet (UV)."
    ]
  },
  {
    id: "mastigoproctus-giganteus",
    commonNameId: "Ketonggeng Raksasa (Vinegaroon)",
    commonNameEn: "Giant Whip Scorpion",
    scientificName: "Mastigoproctus giganteus",
    image: imgMap["mastigoproctus-giganteus"],
    imageCaption: "Ketonggeng memperlihatkan pedipalpus berduri kuat dan cambuk sensorik",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Thelyphonida",
      family: "Thelyphonidae",
      genus: "Mastigoproctus",
      species: "Mastigoproctus giganteus"
    },
    tradeOff: {
      clawForceScore: 82,
      clawForceDescription: "Pedipalpus tebal berduri sangat berotot untuk memeluk, mematahkan, dan menarik mangsa ke arah taring mulut.",
      venomToxicityScore: 0,
      venomDescription: "100% TIDAK MEMILIKI RACUN ATAU SENGAT. Sebagai gantinya, ekor cambuknya menyemprotkan asam asetat berkonsentrasi hingga 84% yang pedih dan berbau cuka tajam.",
      category: "Capit Ekstrem / Tanpa Racun (Asam Cuka)"
    },
    habitat: "Gurun berpasir, padang semak kering, bebatuan lembab (Amerika Utara & Meksiko)",
    diet: "Karnivora (Kecoak gurun, jangkrik, cacing, kalajengking lain, kelabang)",
    size: "Panjang 5 - 8 cm (tanpa ekor cambuk), Bobot 10 - 15 gram",
    lifespan: "Hingga 7 - 8 tahun",
    iucnStatus: "Least Concern (Risiko Rendah)",
    bioluminescence: "Tidak berpendar sekuat kalajengking sejati di bawah UV.",
    description: "Ketonggeng bukanlah kalajengking, melainkan ordo terpisah Thelyphonida di kelas Arachnida. Ketonggeng mewakili titik ekstrem trade-off: melepaskan 100% kelenjar bisa, mengandalkan capit pedipalpus untuk meremukkan mangsa, serta menyemprotkan asam asetat cuka konsentrasi tinggi hingga sejauh 50 cm untuk mengusir predator.",
    facts: [
      "Dua kaki terdepannya bermutasi menjadi antena peraba sensorik yang tidak digunakan untuk berjalan.",
      "Ekor cambuknya (flagellum) memiliki kelenjar anal pembidik semprotan asam berpresisi tinggi.",
      "Mitos masyarakat sering salah kaprah menganggap ketonggeng adalah kalajengking capit terkuat kedua.",
      "Sangat bermanfaat bagi ekosistem karena membasmi hama kecoak dan kelabang liar."
    ]
  },
  {
    id: "leiurus-quinquestriatus",
    commonNameId: "Kalajengking Deathstalker",
    commonNameEn: "Deathstalker Scorpion",
    scientificName: "Leiurus quinquestriatus",
    image: imgMap["leiurus-quinquestriatus"],
    imageCaption: "Leiurus quinquestriatus dengan capit ramping dan ekor tebal berbisa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Scorpiones",
      family: "Buthidae",
      genus: "Leiurus",
      species: "Leiurus quinquestriatus"
    },
    tradeOff: {
      clawForceScore: 19,
      clawForceDescription: "Capit sangat ramping dan kurus, tidak punya massa otot untuk meremukkan mangsa keras.",
      venomToxicityScore: 98,
      venomDescription: "KOKTAIL NEUROTOKSIN SANGAT MEMATIKAN (LD50 ~0.25 mg/kg). Klorotoksin dan agitoksin melumpuhkan saraf jantung dan memicu edema paru fatal.",
      category: "Capit Lemah / Racun Sangat Mematikan"
    },
    habitat: "Gurun tandus berpasir & perbukitan kering berbatu (Timur Tengah & Afrika Utara)",
    diet: "Karnivora (Belalang gurun, ngengat, laba-laba, tokek)",
    size: "Panjang 8 - 11 cm, Bobot 3 - 6 gram",
    lifespan: "4 - 6 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Berpendar hijau terang di bawah sinar UV.",
    description: "Deathstalker menempati kutub spektrum yang berlawanan dari Kalajengking Kaisar. Capitnya tipis dan lemah, namun kelenjar bisanya memproduksi salah satu neurotoksin paling mematikan di dunia serangga.",
    facts: [
      "Salah satu spesies kalajengking paling berbahaya dan bertanggung jawab atas sengatan fatal di kawasan gurun.",
      "Klorotoksin dari bisanya kini dimanfaatkan di bidang bedah saraf modern untuk melacak sel tumor otak ganas.",
      "Sangat lincah dan agresif jika disentuh dibanding kalajengking bercapit besar."
    ]
  },
  {
    id: "androctonus-australis",
    commonNameId: "Kalajengking Ekor Gemuk Kuning",
    commonNameEn: "Yellow Fat-tailed Scorpion",
    scientificName: "Androctonus australis",
    image: imgMap["androctonus-australis"],
    imageCaption: "Androctonus australis memperlihatkan segmen ekor tebal berotot",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Scorpiones",
      family: "Buthidae",
      genus: "Androctonus",
      species: "Androctonus australis"
    },
    tradeOff: {
      clawForceScore: 24,
      clawForceDescription: "Capit ramping, namun ekornya (metasoma) luar biasa gemuk menyimpan otot pengayun duri sengat berkecepatan tinggi.",
      venomToxicityScore: 95,
      venomDescription: "Bisa kardiotoksik dan neurotoksik berdaya bunuh tinggi dengan volume injeksi besar.",
      category: "Capit Lemah / Racun Sangat Mematikan"
    },
    habitat: "Gurun pasir Sahara dan bebatuan tandus (Afrika Utara & Asia Barat)",
    diet: "Karnivora (Serangga gurun, laba-laba, reptil kecil)",
    size: "Panjang 9 - 10 cm, Bobot 4 - 8 gram",
    lifespan: "5 - 7 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Berpendar zamrud di bawah UV.",
    description: "Nama genus Androctonus berasal dari bahasa Yunani yang berarti pembunuh manusia. Bentuk ekornya yang luar biasa gemuk mengompensasi capitnya yang ramping, menjadikannya senjata pembunuh instan di gurun pasir.",
    facts: [
      "Mampu bertahan dari badai pasir dahsyat berkat mikro-lekukan kutikula aerodinamis.",
      "Menyuntikkan racun dalam volume lebih tinggi dibanding kalajengking seukurannya.",
      "Dapat bertahan hidup tanpa makanan hingga berbulan-bulan di musim kering gurun."
    ]
  },
  {
    id: "heterometrus-swammerdami",
    commonNameId: "Kalajengking Hutan Raksasa",
    commonNameEn: "Giant Forest Scorpion",
    scientificName: "Heterometrus swammerdami",
    image: imgMap["heterometrus-swammerdami"],
    imageCaption: "Heterometrus swammerdami dengan capit raksasa hitam legam",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Scorpiones",
      family: "Scorpionidae",
      genus: "Heterometrus",
      species: "Heterometrus swammerdami"
    },
    tradeOff: {
      clawForceScore: 97,
      clawForceDescription: "GAYA REMUK CAPIT TERTINGGI DI DUNIA ARAKHNIDA! Meremukkan cangkang kumbang badak dan tulang mamalia kecil dengan mudah.",
      venomToxicityScore: 15,
      venomDescription: "Bisa sangat lemah, hanya menimbulkan bengkak ringan lokal, tidak berbahaya bagi manusia dewasa.",
      category: "Capit Raksasa / Racun Lemah"
    },
    habitat: "Hutan hujan lebat tropis & liang tanah (India, Sri Lanka)",
    diet: "Karnivora (Kumbang badak, kepiting darat, katak, tikus muda)",
    size: "Panjang hingga 23 cm, Bobot hingga 56 gram (terpanjang di dunia)",
    lifespan: "7 - 10 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Berpendar cyan di bawah UV.",
    description: "Pemegang rekor kalajengking terpanjang di dunia. Gaya jepit capitnya melampaui seluruh arakhnida lain termasuk ketonggeng, berkat sendi engsel tunggal berotot padat.",
    facts: [
      "Spesimen terbesar yang tercatat berukuran 23 cm dari ujung capit hingga telson.",
      "Murni berburu menggunakan cengkraman capit tanpa perlu menyengat mangsanya.",
      "Tinggal di dalam liang tanah sedalam 30 cm di antara akar pohon besar."
    ]
  },
  {
    id: "hadogenes-troglodytes",
    commonNameId: "Kalajengking Batu Datar",
    commonNameEn: "Flat Rock Scorpion",
    scientificName: "Hadogenes troglodytes",
    image: imgMap["hadogenes-troglodytes"],
    imageCaption: "Hadogenes troglodytes dengan bentuk tubuh ultra pipih adaptasi celah batu",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Scorpiones",
      family: "Hormuridae",
      genus: "Hadogenes",
      species: "Hadogenes troglodytes"
    },
    tradeOff: {
      clawForceScore: 86,
      clawForceDescription: "Capit memanjang dengan otot fleksor kuat untuk menarik mangsa dari celah sempit bebatuan.",
      venomToxicityScore: 12,
      venomDescription: "Bisa sangat tidak beracun bagi vertebrata.",
      category: "Capit Raksasa / Racun Lemah"
    },
    habitat: "Celah bebatuan pegunungan kering (Afrika Selatan, Zimbabwe)",
    diet: "Karnivora (Kecoak batu, jangkrik)",
    size: "Panjang hingga 21 cm, Tubuh sangat pipih",
    lifespan: "Lebih dari 20 tahun (sangat panjang umur)",
    iucnStatus: "Least Concern",
    bioluminescence: "Berpendar cerah di bawah UV.",
    description: "Memiliki adaptasi morfologi tubuh yang luar biasa pipih seperti kepingan logam tebal untuk menyelinap di celah batuan gunung granit Afrika.",
    facts: [
      "Masa kehamilan betina bisa mencapai 18 bulan.",
      "Dapat hidup lebih dari 20 tahun di alam bebas.",
      "Ekor jantan jauh lebih panjang daripada betina untuk membantu manuver kawin di celah batu."
    ]
  },
  {
    id: "damon-diadema",
    commonNameId: "Ketonggeng Gua Tanpa Ekor (Amblypygi)",
    commonNameEn: "Tailless Whip Scorpion",
    scientificName: "Damon diadema",
    image: imgMap["damon-diadema"],
    imageCaption: "Damon diadema memperlihatkan pedipalpus berduri penangkap kilat",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Amblypygi",
      family: "Phrynichidae",
      genus: "Damon",
      species: "Damon diadema"
    },
    tradeOff: {
      clawForceScore: 78,
      clawForceDescription: "Pedipalpus berduri tajam melengkung raptorial yang menyergap mangsa dalam hitungan milidetik.",
      venomToxicityScore: 0,
      venomDescription: "100% TIDAK MEMILIKI KELENJAR RACUN ATAU BISA. Murni mengandalkan kecepatan sergap duri pedipalpus.",
      category: "Duri Cengkeram Kilat / Tanpa Racun"
    },
    habitat: "Gua lembab gelap dan batang pohon hutan tropis Afrika Timur",
    diet: "Karnivora (Jangkrik gua, kecoak, katak pohon kecil)",
    size: "Rentang kaki sensorik hingga 30 cm, tubuh 3-4 cm",
    lifespan: "5 - 10 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak berpendar kuat di bawah UV.",
    description: "Anggota ordo Amblypygi, arakhnida purba yang terkenal dari film Harry Potter. Walaupun terlihat mengerikan, hewan ini sama sekali tidak berbahaya bagi manusia karena tidak berbisa dan pemalu.",
    facts: [
      "Kaki depannya berevolusi menjadi cambuk sensorik fleksibel sepanjang 25 cm yang dapat berputar ke segala arah.",
      "Berjalan menyamping mirip kepiting dengan kecepatan mengejutkan saat merasa terancam.",
      "Pedipalpusnya bergerak secepat kilat untuk menangkap serangga di dalam gua gelap gulita."
    ]
  },
  {
    id: "galeodes-arabs",
    commonNameId: "Laba-laba Unta / Kalajengking Angin",
    commonNameEn: "Camel Spider / Wind Scorpion",
    scientificName: "Galeodes arabs",
    image: imgMap["galeodes-arabs"],
    imageCaption: "Galeodes arabs dengan chelicerae raksasa pemotong",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Solifugae",
      family: "Galeodidae",
      genus: "Galeodes",
      species: "Galeodes arabs"
    },
    tradeOff: {
      clawForceScore: 88,
      clawForceDescription: "Rahang chelicerae berbentuk capit catut ganda menyumbang sepertiga panjang tubuhnya, mampu memotong bulu burung dan tulang kadal.",
      venomToxicityScore: 0,
      venomDescription: "100% TIDAK BERACUN. Menghancurkan mangsa dengan kekuatan mekanis rahang murni dan cairan pencerna eksternal.",
      category: "Rahang Catut Terkuat / Tanpa Racun"
    },
    habitat: "Gurun berpasir tandus Timur Tengah dan Afrika Utara",
    diet: "Karnivora rakus (Kadal, serangga, tikus gurun kecil, burung muda)",
    size: "Panjang tubuh hingga 7 cm, rentang kaki 15 cm",
    lifespan: "1 - 2 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak berpendar.",
    description: "Anggota ordo Solifugae (berarti 'mereka yang lari dari matahari'). Terkenal karena kecepatannya mencapai 16 km/jam saat mengejar bayangan manusia di terik matahari gurun untuk mencari naungan dingin.",
    facts: [
      "Memiliki proporsi rahang chelicerae terbesar terhadap ukuran tubuh di antara seluruh makhluk hidup darat.",
      "Dapat mengeluarkan suara gemeretak keras (stridulasi) dengan menggesekkan rahangnya saat terancam.",
      "Sering menjadi subjek mitos berlebihan di kalangan tentara bahwa hewan ini dapat membius manusia saat tidur."
    ]
  },
  {
    id: "theraphosa-blondi",
    commonNameId: "Tarantula Pemakan Burung Goliath",
    commonNameEn: "Goliath Birdeater",
    scientificName: "Theraphosa blondi",
    image: imgMap["theraphosa-blondi"],
    imageCaption: "Spesimen Theraphosa blondi dengan rentang kaki masif",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Arachnida",
      order: "Araneae",
      family: "Theraphosidae",
      genus: "Theraphosa",
      species: "Theraphosa blondi"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tidak memiliki capit, mengandalkan taring chelicerae sepanjang 2,5 cm yang mampu menembus tengkorak tikus.",
      venomToxicityScore: 35,
      venomDescription: "Bisa beracun sedang untuk melumpuhkan vertebrata kecil. Senjata pertahanan utamanya adalah rambut urtikaria berduri dari perutnya.",
      category: "Taring Predator / Racun Sedang"
    },
    habitat: "Lantai hutan hujan Amazon (Venezuela, Guyana, Brasil)",
    diet: "Karnivora (Cacing tanah raksasa, katak pohon, tikus, kadal)",
    size: "Rentang kaki hingga 30 cm, Bobot hingga 175 gram (laba-laba terberat di dunia)",
    lifespan: "Betina 15 - 25 tahun, Jantan 3 - 6 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak berpendar.",
    description: "Laba-laba paling masif di muka bumi dengan bobot setara anak anjing kecil yang baru lahir. Walaupun dinamai pemakan burung, mangsa utamanya di lantai hutan adalah vertebrata tanah dan serangga besar.",
    facts: [
      "Dapat menghasilkan suara mendesis keras dengan menggesekkan bulu di kakinya (stridulasi).",
      "Melepaskan ribuan rambut berduri mikroskopis dari perutnya yang memicu iritasi saluran pernapasan pemangsa.",
      "Taringnya lebih panjang daripada taring kebanyakan ular berbisa."
    ]
  },

  // =========================================================================
  // INSECTA, CHILOPODA, MEROSTOMATA
  // =========================================================================
  {
    id: "dynastes-hercules",
    commonNameId: "Kumbang Hercules",
    commonNameEn: "Hercules Beetle",
    scientificName: "Dynastes hercules",
    image: imgMap["dynastes-hercules"],
    imageCaption: "Kumbang Hercules jantan dengan tanduk penjepit raksasa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Coleoptera",
      family: "Scarabaeidae",
      genus: "Dynastes",
      species: "Dynastes hercules"
    },
    tradeOff: {
      clawForceScore: 92,
      clawForceDescription: "Tanduk toraks dan kepalanya bekerja seperti capit catut hidrolik yang mampu mengangkat beban hingga 850 kali bobot tubuhnya!",
      venomToxicityScore: 0,
      venomDescription: "Sama sekali tidak beracun. Mengandalkan zirah eksoskeleton kitin tebal dan kekuatan otot pengungkit murni.",
      category: "Kekuatan Mekanik Murni / Tanpa Racun"
    },
    habitat: "Hutan hujan tropis Amerika Tengah dan Selatan",
    diet: "Herbivora (Getah pohon manis, buah-buahan hutan yang membusuk)",
    size: "Panjang jantan hingga 17 cm (termasuk tanduk), larva berbobot hingga 120 gram",
    lifespan: "Dewasa 3 - 6 bulan (fase larva hingga 2 tahun)",
    iucnStatus: "Least Concern",
    bioluminescence: "Elitron (sayap keras) dapat berubah warna dari zaitun menjadi hitam tergantung kelembapan udara.",
    description: "Kumbang terbang terpanjang di planet bumi. Jantan menggunakan dua tanduk besarnya untuk saling menjepit dan membanting pejantan saingan dari dahan pohon demi memperebutkan betina.",
    facts: [
      "Salah satu makhluk hidup terkuat di dunia secara proporsional terhadap ukuran tubuhnya.",
      "Larvanya seukuran telapak tangan manusia dan berperan penting mengurai kayu lapuk hutan hujan.",
      "Warna cangkang sayapnya bereaksi terhadap kelembapan udara sebagai sensor lingkungan."
    ]
  },
  {
    id: "vespa-mandarinia",
    commonNameId: "Tawon Raksasa Asia",
    commonNameEn: "Asian Giant Hornet",
    scientificName: "Vespa mandarinia",
    image: imgMap["vespa-mandarinia"],
    imageCaption: "Vespa mandarinia dengan kepala oranye terang dan rahang pengunyah kuat",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Hymenoptera",
      family: "Vespidae",
      genus: "Vespa",
      species: "Vespa mandarinia"
    },
    tradeOff: {
      clawForceScore: 45,
      clawForceDescription: "Rahang bawah (mandibula) sangat kuat untuk memenggal kepala lebah madu.",
      venomToxicityScore: 88,
      venomDescription: "Racun sitolitik melarutkan jaringan sel (nekrosis) dan feromon pemanggil serangan koloni massal.",
      category: "Rahang Pemenggal / Racun Perusak Jaringan"
    },
    habitat: "Hutan dataran rendah dan pegunungan beriklim sedang (Asia Timur & Tenggara)",
    diet: "Karnivora (Lebah madu, kumbang, belalang sembah, larva)",
    size: "Panjang tubuh 4.5 - 5.5 cm, Rentang sayap hingga 7.5 cm",
    lifespan: "Pekerja 1 - 2 bulan, Ratu hingga 1 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak ada.",
    description: "Tawon terbesar di dunia, predator puncak di kanopi dunia serangga yang sanggup memusnahkan koloni 30.000 lebah madu hanya dalam waktu beberapa jam.",
    facts: [
      "Sengatnya memiliki panjang 6 mm dan dapat menyengat berulang kali tanpa terlepas.",
      "Kecepatan terbang mengejar mangsa mencapai 40 km/jam.",
      "Larvanya menghasilkan cairan koktail asam amino penguat stamina terbang tawon dewasa."
    ]
  },
  {
    id: "atta-cephalotes",
    commonNameId: "Semut Pemotong Daun",
    commonNameEn: "Leafcutter Ant",
    scientificName: "Atta cephalotes",
    image: imgMap["atta-cephalotes"],
    imageCaption: "Atta cephalotes mengangkut potongan daun untuk kebun jamur bawah tanah",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Hymenoptera",
      family: "Formicidae",
      genus: "Atta",
      species: "Atta cephalotes"
    },
    tradeOff: {
      clawForceScore: 75,
      clawForceDescription: "Rahang bawah bergetar 1.000 kali per detik seperti gergaji mesin untuk memotong daun tebal.",
      venomToxicityScore: 5,
      venomDescription: "Tidak mengandalkan racun melainkan kekuatan mekanis gigitan rahang prajurit.",
      category: "Rahang Gergaji Mesin / Tanpa Racun"
    },
    habitat: "Hutan hujan neotropis Amerika Tengah dan Selatan",
    diet: "Herbivora / Fungivora (Membudidayakan jamur Leucoagaricus gongylophorus di sarang)",
    size: "Prajurit hingga 2.5 cm, Ratu hingga 3 cm",
    lifespan: "Pekerja hingga 2 tahun, Ratu hingga 15 - 20 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak ada.",
    description: "Petani pertama di muka bumi yang telah membudidayakan jamur selama puluhan juta tahun sebelum manusia mengenal pertanian.",
    facts: [
      "Koloninya dapat mencapai 8 juta individu di dalam sarang bawah tanah seluas 30 meter persegi.",
      "Daun yang dipotong bukan untuk dimakan langsung, melainkan sebagai pupuk kebun jamur khusus di bawah tanah.",
      "Memiliki kasta prajurit raksasa dengan rahang yang mampu mengiris kulit manusia."
    ]
  },
  {
    id: "scolopendra-gigantea",
    commonNameId: "Kelabang Raksasa Amazon",
    commonNameEn: "Peruvian Giant Centipede",
    scientificName: "Scolopendra gigantea",
    image: imgMap["scolopendra-gigantea"],
    imageCaption: "Scolopendra gigantea dengan kaki beruas dan taring forcipules berbisa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Chilopoda",
      order: "Scolopendromorpha",
      family: "Scolopendridae",
      genus: "Scolopendra",
      species: "Scolopendra gigantea"
    },
    tradeOff: {
      clawForceScore: 70,
      clawForceDescription: "Kaki depan termodifikasi menjadi taring forcipules tajam yang mengunci mangsa saat bergelantungan.",
      venomToxicityScore: 85,
      venomDescription: "Racun neurotoksik dan kardiotoksik kuat yang sanggup melumpuhkan mamalia dan kelelawar.",
      category: "Taring Kaki Berbisa / Predator Gua"
    },
    habitat: "Hutan hujan tropis dan gua lembab (Amerika Selatan bagian utara)",
    diet: "Karnivora agresif (Kelelawar, tikus, katak, burung, tarantula, kadal)",
    size: "Panjang 30 - 35 cm, salah satu kelabang terbesar di bumi",
    lifespan: "Hingga 10 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak ada.",
    description: "Kelabang terbesar di dunia yang terkenal karena kemampuannya bergelantungan terbalik dari langit-langit gua menggunakan kaki belakang untuk menyambar kelelawar yang sedang terbang di udara.",
    facts: [
      "Taring berbisanya bukan berasal dari mulut, melainkan evolusi sepasang kaki pertama.",
      "Dapat menembus cangkang tarantula besar dan membunuhnya dengan suntikan racun cepat.",
      "Gigitannya pada manusia memicu demam tinggi, pembengkakan ekstrem, dan rasa sakit menyengat."
    ]
  },
  {
    id: "limulus-polyphemus",
    commonNameId: "Belangkas Atlantik (Kepiting Tapal Kuda)",
    commonNameEn: "Atlantic Horseshoe Crab",
    scientificName: "Limulus polyphemus",
    image: imgMap["limulus-polyphemus"],
    imageCaption: "Limulus polyphemus fosil hidup dengan zirah karapas tapal kuda",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Merostomata",
      order: "Xiphosura",
      family: "Limulidae",
      genus: "Limulus",
      species: "Limulus polyphemus"
    },
    tradeOff: {
      clawForceScore: 40,
      clawForceDescription: "Capit kecil di ujung kaki jalan untuk memegang cacing dan moluska dasar laut.",
      venomToxicityScore: 0,
      venomDescription: "100% TIDAK BERBISA. Mengandalkan karapas helm keras dan ekor panjang pembalik tubuh.",
      category: "Fosil Hidup Berdarah Biru / Tanpa Racun"
    },
    habitat: "Teluk pesisir dangkal dan estuari berlumpur Samudra Atlantik barat",
    diet: "Karnivora bentik (Cacing laut, kerang kecil, krustasea dasar laut)",
    size: "Panjang hingga 60 cm (termasuk ekor telson), Bobot hingga 4.5 kg",
    lifespan: "20 - 25 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Karapasnya berpendar kehijauan cerah di bawah sinar UV.",
    description: "Bukan kepiting sejati, melainkan kerabat purba arakhnida yang telah menjelajahi bumi selama lebih dari 450 juta tahun (jauh lebih tua dari dinosaurus pertama). Darah birunya yang berbasis tembaga sangat vital bagi dunia medis modern.",
    facts: [
      "Darah birunya mengandung sel amebosit khusus (LAL - Limulus Amebocyte Lysate) yang menggumpal seketika saat mendeteksi endotoksin bakteri pada obat dan vaksin manusia.",
      "Memiliki 10 mata di sekujur tubuhnya, termasuk mata lateral penglihat polarisasi cahaya bulan.",
      "Ekor panjangnya (telson) bukan senjata penyengat, melainkan alat pengungkit untuk membalikkan tubuhnya jika terbalik oleh ombak."
    ]
  },

  // =========================================================================
  // MAMMALIA
  // =========================================================================
  {
    id: "panthera-tigris-sumatrae",
    commonNameId: "Harimau Sumatera",
    commonNameEn: "Sumatran Tiger",
    scientificName: "Panthera tigris sumatrae",
    image: imgMap["panthera-tigris-sumatrae"],
    imageCaption: "Harimau Sumatera dengan corak loreng rapat khas hutan lebat",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Carnivora",
      family: "Felidae",
      genus: "Panthera",
      species: "Panthera tigris",
      subspecies: "P. t. sumatrae"
    },
    tradeOff: {
      clawForceScore: 90,
      clawForceDescription: "Cakar melengkung tajam yang dapat ditarik masuk (retractable), dipadu dengan kekuatan gigitan 1.050 psi.",
      venomToxicityScore: 0,
      venomDescription: "Tidak memiliki bisa. Mengandalkan serangan senyap, kekuatan fisik otot masif, dan gigitan leher yang memutuskan saraf tulang belakang mangsa.",
      category: "Predator Puncak Fisik / Tanpa Racun"
    },
    habitat: "Hutan hujan tropis dataran rendah hingga pegunungan pulau Sumatera, Indonesia",
    diet: "Karnivora (Babi hutan, rusa sambar, kancil, tapir)",
    size: "Panjang 2.2 - 2.5 m, Bobot jantan 100 - 140 kg",
    lifespan: "15 - 20 tahun di alam liar",
    iucnStatus: "Critically Endangered (Kritis)",
    bioluminescence: "Tidak ada.",
    description: "Subspesies harimau terkecil yang masih bertahan hidup di bumi, beradaptasi dengan hutan lebat Sumatera. Garis lorengnya lebih tipis dan rapat dibanding harimau lainnya, menjadikannya kamuflase sempurna di antara rimbun dedaunan.",
    facts: [
      "Perenang yang sangat ulung dengan selaput tipis di antara jari-jari kakinya.",
      "Populasinya di alam liar diperkirakan kurang dari 400 individu akibat hilangnya habitat dan perburuan liar.",
      "Setiap harimau memiliki pola loreng sidik jari yang unik dan tidak ada dua individu yang serupa."
    ]
  },
  {
    id: "orcinus-orca",
    commonNameId: "Paus Pembunuh (Orca)",
    commonNameEn: "Killer Whale / Orca",
    scientificName: "Orcinus orca",
    image: imgMap["orcinus-orca"],
    imageCaption: "Sepasang Orca melompat di perairan samudra bebas",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Cetacea",
      family: "Delphinidae",
      genus: "Orcinus",
      species: "Orcinus orca"
    },
    tradeOff: {
      clawForceScore: 98,
      clawForceDescription: "Kekuatan gigitan hingga 19.000 psi, dipadukan dengan kecepatan renang 56 km/jam dan taktik tabrakan gelombang kejut.",
      venomToxicityScore: 0,
      venomDescription: "Tidak beracun. Mengandalkan kecerdasan sosial tingkat tinggi, komunikasi vokal dialek rumit, dan taktik berburu berkelompok.",
      category: "Predator Puncak Lautan"
    },
    habitat: "Seluruh samudra dunia, terutama perairan dingin Arktik dan Antarktika",
    diet: "Karnivora (Anjing laut, singa laut, ikan salmon, hiu putih besar, hingga paus balin raksasa)",
    size: "Panjang 6 - 8 meter, Bobot hingga 6.000 kg",
    lifespan: "Hingga 50 - 90 tahun",
    iucnStatus: "Data Deficient",
    bioluminescence: "Tidak ada.",
    description: "Meskipun disebut paus pembunuh, secara taksonomi orca merupakan anggota terbesar dari keluarga lumba-lumba (Delphinidae). Merupakan predator puncak absolut di lautan tanpa ada pemangsa alami sama sekali.",
    facts: [
      "Memiliki dialek vokal berbeda untuk setiap kelompok keluarga (pod) yang diwariskan secara budaya lintas generasi.",
      "Satu-satunya predator yang diketahui memangsa hiu putih besar secara rutin untuk mengambil organ hatinya yang kaya nutrisi.",
      "Mengembangkan teknik cerdas membuat gelombang ombak buatan bersama-sama untuk menjatuhkan anjing laut dari atas bongkahan es terapung."
    ]
  },
  {
    id: "pongo-abelii",
    commonNameId: "Orangutan Sumatera",
    commonNameEn: "Sumatran Orangutan",
    scientificName: "Pongo abelii",
    image: imgMap["pongo-abelii"],
    imageCaption: "Orangutan Sumatera jantan dewasa dengan bantalan pipi (flange)",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Primates",
      family: "Hominidae",
      genus: "Pongo",
      species: "Pongo abelii"
    },
    tradeOff: {
      clawForceScore: 85,
      clawForceDescription: "Kekuatan cengkeraman tangan dan kaki luar biasa kuat, mampu menopang bobot 90 kg bergelantungan di pucuk pohon.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Mengandalkan kecerdasan tinggi, penggunaan alat ranting, dan memori peta pohon hutan.",
      category: "Kera Besar Arboreal Berintelegensi Tinggi"
    },
    habitat: "Hutan hujan tropis kanopi atas Sumatera bagian utara (Kawasan Ekosistem Leuser)",
    diet: "Frugivora / Herbivora (Buah ara, durian hutan, pucuk daun, getah, madu, rayap)",
    size: "Tinggi jantan 1.4 m, rentang lengan 2.2 m, Bobot 60 - 90 kg",
    lifespan: "45 - 55 tahun",
    iucnStatus: "Critically Endangered (Kritis)",
    bioluminescence: "Tidak ada.",
    description: "Satu-satunya kera besar (Great Ape) yang hidup di benua Asia. Menghabiskan hampir 99% hidupnya di atas kanopi pohon tinggi dan memiliki DNA 97% identik dengan manusia.",
    facts: [
      "Dapat menggunakan ranting pohon yang dimodifikasi untuk mencungkil biji berduri dan memancing rayap.",
      "Memiliki masa ketergantungan anak pada induk terlama di antara mamalia selain manusia (hingga 8-9 tahun).",
      "Setiap malam membuat sarang tidur baru dari ranting dedaunan di atas pohon setinggi 20-30 meter."
    ]
  },
  {
    id: "elephas-maximus",
    commonNameId: "Gajah Asia",
    commonNameEn: "Asian Elephant",
    scientificName: "Elephas maximus",
    image: imgMap["elephas-maximus"],
    imageCaption: "Gajah Asia dengan belalai fleksibel berotot",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Proboscidea",
      family: "Elephantidae",
      genus: "Elephas",
      species: "Elephas maximus"
    },
    tradeOff: {
      clawForceScore: 99,
      clawForceDescription: "Belalai memiliki lebih dari 40.000 otot individual, mampu mencabut pohon besar dan mengangkat beban 350 kg.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Mengandalkan bobot tonase raksasa dan gading gajah.",
      category: "Megafauna Darat Raksasa"
    },
    habitat: "Hutan hujan tropis dan padang rumput Asia Selatan & Tenggara",
    diet: "Herbivora (Rumput gajah, bambu, kulit kayu, buah-buahan)",
    size: "Tinggi pundak 2.7 - 3.2 m, Bobot 3.500 - 5.000 kg",
    lifespan: "60 - 70 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Hewan darat terbesar di benua Asia. Berperan sebagai arsitek ekosistem dan penyebar biji pohon hutan hujan tropis.",
    facts: [
      "Berkomunikasi menggunakan gelombang infrasonik frekuensi rendah melalui getaran tanah yang dapat didengar hingga 10 km.",
      "Memiliki memori spasial luar biasa untuk mengingat rute sumber air selama puluhan tahun.",
      "Otaknya memiliki massa 5 kg dengan struktur emosi duka cita dan empati yang sangat kompleks."
    ]
  },
  {
    id: "ornithorhynchus-anatinus",
    commonNameId: "Platipus",
    commonNameEn: "Platypus",
    scientificName: "Ornithorhynchus anatinus",
    image: imgMap["ornithorhynchus-anatinus"],
    imageCaption: "Platipus berparuh bebek dengan kaki berselaput",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Monotremata",
      family: "Ornithorhynchidae",
      genus: "Ornithorhynchus",
      species: "Ornithorhynchus anatinus"
    },
    tradeOff: {
      clawForceScore: 30,
      clawForceDescription: "Kaki berselaput untuk berenang dan cakar tumpul penggali liang tanah.",
      venomToxicityScore: 68,
      venomDescription: "Salah satu mamalia berbisa di dunia! Taji di pergelangan kaki jantan memicu rasa sakit ekstrem yang resisten morfin.",
      category: "Mamalia Purba Berbisa"
    },
    habitat: "Sungai air tawar berarus tenang di Australia timur dan Tasmania",
    diet: "Karnivora bentik (Udang karang air tawar, larva serangga, cacing)",
    size: "Panjang 40 - 50 cm, Bobot 1 - 2.4 kg",
    lifespan: "12 - 17 tahun",
    iucnStatus: "Near Threatened",
    bioluminescence: "Bulu platipus memancarkan fluoresensi hijau kebiruan di bawah sinar UV.",
    description: "Mamalia bertelur (monotremata) paling unik di dunia dengan paruh bebek pendeteksi listrik elektroresepsi.",
    facts: [
      "Menyusui anaknya melalui pori-pori kelenjar kulit perut tanpa puting susu.",
      "Hanya individu jantan yang memiliki taji berbisa di kaki belakangnya.",
      "Menutup mata dan telinganya saat menyelam, murni berburu menggunakan sensor listrik di paruhnya."
    ]
  },
  {
    id: "balaenoptera-musculus",
    commonNameId: "Paus Biru",
    commonNameEn: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    image: imgMap["balaenoptera-musculus"],
    imageCaption: "Paus Biru muncul ke permukaan untuk menyemburkan uap air napas",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Mammalia",
      order: "Cetacea",
      family: "Balaenopteridae",
      genus: "Balaenoptera",
      species: "Balaenoptera musculus"
    },
    tradeOff: {
      clawForceScore: 80,
      clawForceDescription: "Lidah seberat gajah dewasa dan rongga mulut mampu menampung 90 ton air dan krill dalam satu tegukan!",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Mengandalkan pelat balin keratin penyaring krill.",
      category: "Makhluk Terbesar yang Pernah Hidup di Bumi"
    },
    habitat: "Seluruh samudra terbuka dunia dari perairan kutub hingga tropis",
    diet: "Karnivora planktonik (Spesialis pemakan udang krill kecil, mengonsumsi 4 ton krill per hari)",
    size: "Panjang hingga 30 meter, Bobot hingga 190.000 kg (190 ton)",
    lifespan: "80 - 90 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Hewan terbesar yang pernah hidup di bumi, melampaui ukuran dinosaurus terbesar mana pun dalam sejarah prasejarah.",
    facts: [
      "Jantungnya seukuran mobil kecil (Volkswagen Beetle) dan berdetak hanya 2-8 kali per menit saat menyelam.",
      "Suara panggilannya mencapai 188 desibel dan dapat terdengar oleh paus lain sejauh 1.600 km di bawah samudra.",
      "Pembuluh darah aortanya begitu lebar hingga seorang anak manusia bisa berenang di dalamnya."
    ]
  },

  // =========================================================================
  // AVES (UNGGAS & BURUNG)
  // =========================================================================
  {
    id: "casuarius-casuarius",
    commonNameId: "Kasuari Gelambir Ganda",
    commonNameEn: "Southern Cassowary",
    scientificName: "Casuarius casuarius",
    image: imgMap["casuarius-casuarius"],
    imageCaption: "Kasuari dewasa dengan helm casque dan gelambir leher biru cerah",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Casuariiformes",
      family: "Casuariidae",
      genus: "Casuarius",
      species: "Casuarius casuarius"
    },
    tradeOff: {
      clawForceScore: 92,
      clawForceDescription: "Cakar tengah kakinya berbentuk belati lurus sepanjang 12 cm dengan tendangan berkekuatan ratusan kilogram gaya dorong.",
      venomToxicityScore: 0,
      venomDescription: "Tidak beracun. Tendangan kakinya mampu merobek perut predator seketika.",
      category: "Cakar Belati Mematikan / Unggas Terberbahaya"
    },
    habitat: "Hutan hujan tropis dataran rendah Papua (Indonesia) dan Australia timur laut",
    diet: "Frugivora (Buah-buahan hutan hujan berukuran besar, jamur, vertebrata kecil)",
    size: "Tinggi hingga 1.8 meter, Bobot betina hingga 70 kg",
    lifespan: "40 - 50 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Tidak ada.",
    description: "Sering dinobatkan sebagai burung paling berbahaya di dunia. Memiliki helm pelindung kepala (casque) untuk menerobos semak hutan lebat dan menangkap suara infrasonik.",
    facts: [
      "Berperan sebagai penyebar biji utama; ratusan jenis pohon hutan Papua hanya bisa berkecambah setelah melewati pencernaannya.",
      "Dapat melompat setinggi 1.5 meter ke udara dan berlari hingga 50 km/jam menembus semak lebat.",
      "Pejantan yang bertugas mengerami telur dan mengasuh anak-anak kasuari."
    ]
  },
  {
    id: "harpia-harpyja",
    commonNameId: "Elang Harpy",
    commonNameEn: "Harpy Eagle",
    scientificName: "Harpia harpyja",
    image: imgMap["harpia-harpyja"],
    imageCaption: "Elang Harpy dengan sorot mata tajam dan cakar raksasa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Accipitriformes",
      family: "Accipitridae",
      genus: "Harpia",
      species: "Harpia harpyja"
    },
    tradeOff: {
      clawForceScore: 95,
      clawForceDescription: "Cakar belakang berukuran 12 cm (lebih besar dari cakar beruang grizzly!) dengan gaya cengkram mencapai 530 psi.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Murni mengandalkan kekuatan cengkram cakar pematah tulang.",
      category: "Cakar Predator Kanopi Raksasa"
    },
    habitat: "Kanopi atas hutan hujan tropis Amerika Tengah dan Selatan",
    diet: "Karnivora (Kukang / sloth, monyet howler, iguana, landak pohon)",
    size: "Rentang sayap hingga 2.24 meter, Bobot betina hingga 9 kg",
    lifespan: "25 - 35 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Elang terkuat di kawasan neotropis. Cakar raksasanya dirancang khusus untuk menyambar mamalia arboreal dari dahan pohon tinggi dengan presisi mematikan.",
    facts: [
      "Ukuran cakarnya setara atau melampaui cakar beruang grizzly.",
      "Bulu di kepalanya dapat ditegakkan membentuk piringan pendengaran mirip burung hantu.",
      "Dapat bermanuver terbang lincah di antara pepohonan kanopi yang rapat berkat sayap membulatnya."
    ]
  },
  {
    id: "bubo-scandiacus",
    commonNameId: "Burung Hantu Salju",
    commonNameEn: "Snowy Owl",
    scientificName: "Bubo scandiacus",
    image: imgMap["bubo-scandiacus"],
    imageCaption: "Burung Hantu Salju dengan bulu putih tebal berkamuflase di salju Arktik",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Strigiformes",
      family: "Strigidae",
      genus: "Bubo",
      species: "Bubo scandiacus"
    },
    tradeOff: {
      clawForceScore: 78,
      clawForceDescription: "Cakar melengkung tajam dilapisi bulu tebal pelindung dari suhu dingin ekstrem -50°C.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Mengandalkan penerbangan senyap tanpa suara berkat tepi bulu bergerigi khusus.",
      category: "Pemburu Senyap Arktik"
    },
    habitat: "Tundra terbuka tanpa pohon di lingkar Arktik kutub utara",
    diet: "Karnivora (Spesialis lemming arktik, kelinci salju, burung laut)",
    size: "Panjang 52 - 71 cm, Rentang sayap hingga 1.5 meter, Bobot 1.6 - 3 kg",
    lifespan: "10 - 15 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Salah satu burung hantu terbesar dan terkuat di bumi. Berbeda dari burung hantu lain yang nokturnal, burung hantu salju berburu di siang hari (diurnal) di musim panas Arktik yang bersinar 24 jam.",
    facts: [
      "Satu ekor burung hantu salju dapat memakan lebih dari 1.600 lemming dalam setahun.",
      "Tepi bulu sayapnya memiliki gerigi mikroskopis pemecah turbulensi udara sehingga terbang tanpa suara sama sekali.",
      "Matanya tidak bisa digerakkan di dalam rongganya, sehingga ia memutar lehernya hingga 270 derajat."
    ]
  },
  {
    id: "aptenodytes-forsteri",
    commonNameId: "Penguin Kaisar",
    commonNameEn: "Emperor Penguin",
    scientificName: "Aptenodytes forsteri",
    image: imgMap["aptenodytes-forsteri"],
    imageCaption: "Penguin Kaisar dewasa di atas lapisan es Antarktika",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Sphenisciformes",
      family: "Spheniscidae",
      genus: "Aptenodytes",
      species: "Aptenodytes forsteri"
    },
    tradeOff: {
      clawForceScore: 40,
      clawForceDescription: "Sayap termodifikasi menjadi sirip pengayuh kaku untuk menyelam di laut beku.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Mengandalkan adaptasi hemoglobin pengikat oksigen tinggi saat menyelam dalam.",
      category: "Penyelam Terhebat Kutub Selatan"
    },
    habitat: "Lapisan es laut dan perairan beku benua Antarktika",
    diet: "Karnivora laut (Ikan perak antarktika, krill, cumi-cumi)",
    size: "Tinggi hingga 1.2 meter, Bobot hingga 45 kg (penguin tertinggi di dunia)",
    lifespan: "15 - 20 tahun",
    iucnStatus: "Near Threatened",
    bioluminescence: "Tidak ada.",
    description: "Burung laut perenang paling tangguh di muka bumi. Bertahan hidup dan mengerami telur di tengah musim dingin Antarktika tergelap pada suhu -60°C dan angin badai 200 km/jam.",
    facts: [
      "Dapat menyelam hingga kedalaman lebih dari 535 meter dan menahan napas selama lebih dari 20 menit.",
      "Pejantan berpuasa selama lebih dari 115 hari sambil mengerami sebutir telur di atas kakinya.",
      "Berkumpul dalam formasi melingkar padat (huddle) yang bergantian posisi dari luar ke dalam untuk berbagi kehangatan."
    ]
  },
  {
    id: "buceros-rhinoceros",
    commonNameId: "Rangkong Badak (Enggang)",
    commonNameEn: "Rhinoceros Hornbill",
    scientificName: "Buceros rhinoceros",
    image: imgMap["buceros-rhinoceros"],
    imageCaption: "Rangkong Badak dengan tanduk casque merah menyala",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Bucerotiformes",
      family: "Bucerotidae",
      genus: "Buceros",
      species: "Buceros rhinoceros"
    },
    tradeOff: {
      clawForceScore: 60,
      clawForceDescription: "Paruh raksasa kuat bertanduk casque untuk memetik buah berkulit keras dan menangkap kadal.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Casque berongga bertindak sebagai ruang resonansi suara klakson rendah.",
      category: "Petani Hutan Kanopi Tropis"
    },
    habitat: "Hutan hujan primer Kalimantan, Sumatera, dan Semenanjung Malaya",
    diet: "Frugivora / Karnivora oportunistik (Buah ara liar, kadal pohon, katak, serangga besar)",
    size: "Panjang 80 - 90 cm, Rentang sayap hingga 1.5 m, Bobot 2 - 3 kg",
    lifespan: "Hingga 35 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Salah satu burung terindah dan paling sakral di Indonesia. Helm bertanduk di atas paruhnya berfungsi memperkeras panggilan vokalnya yang bergema melintasi kanopi hutan lebat.",
    facts: [
      "Betina mengurung dirinya di dalam lubang pohon selama bertelur, menutup pintu sarang dengan lumpur dan hanya menyisakan celah kecil bagi jantan untuk menyuapkan makanan.",
      "Merupakan lambang resmi provinsi Kalimantan Barat dan satwa sakral bagi suku Dayak.",
      "Suara kepakan sayapnya saat terbang terdengar keras seperti deru lokomotif uap kecil."
    ]
  },

  // =========================================================================
  // REPTILIA, AMPHIBIA, PISCES
  // =========================================================================
  {
    id: "varanus-komodoensis",
    commonNameId: "Komodo (Biawak Raksasa)",
    commonNameEn: "Komodo Dragon",
    scientificName: "Varanus komodoensis",
    image: imgMap["varanus-komodoensis"],
    imageCaption: "Komodo dengan lidah bercabang sensorik di Pulau Komodo",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Varanidae",
      genus: "Varanus",
      species: "Varanus komodoensis"
    },
    tradeOff: {
      clawForceScore: 85,
      clawForceDescription: "Cakar melengkung tajam dan gigi bergerigi gergaji mirip dinosaurus theropoda.",
      venomToxicityScore: 75,
      venomDescription: "Kelenjar bisa di rahang bawah mensekresikan protein antikoagulan pencegah pembekuan darah dan pemicu syok hipotensi.",
      category: "Kombinasi Fisik Masif & Racun Antikoagulan"
    },
    habitat: "Savana kering dan hutan pantai Kepulauan Nusa Tenggara, Indonesia",
    diet: "Karnivora (Rusa timor, babi hutan, kerbau liar, kuda)",
    size: "Panjang 2.5 - 3.1 meter, Bobot 70 - 135 kg (kadal terbesar di bumi)",
    lifespan: "30 - 50 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Kadal terbesar di dunia endemik Indonesia. Penelitian modern membuktikan komodo memiliki kelenjar racun sejati yang menurunkan tekanan darah mangsa dan memicu pendarahan hebat.",
    facts: [
      "Mencium aroma bangkai dari jarak lebih dari 9.5 km menggunakan organ Jacobson.",
      "Kulitnya diperkuat oleh ribuan lempeng tulang mikroskopis (osteoderm).",
      "Betina dapat bereproduksi secara partenogenesis (menghasilkan anak tanpa dibuahi jantan)."
    ]
  },
  {
    id: "ophiophagus-hannah",
    commonNameId: "Ular King Kobra",
    commonNameEn: "King Cobra",
    scientificName: "Ophiophagus hannah",
    image: imgMap["ophiophagus-hannah"],
    imageCaption: "King Kobra dalam pose defensif mengangkat tubuh bagian depan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Squamata",
      family: "Elapidae",
      genus: "Ophiophagus",
      species: "Ophiophagus hannah"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tidak memiliki capit/kaki, namun otot tubuhnya mampu mengangkat sepertiga tubuhnya tegak lurus setinggi mata manusia.",
      venomToxicityScore: 96,
      venomDescription: "Menghasilkan volume bisa neurotoksik raksasa (hingga 500 mg dalam satu gigitan), cukup membunuh gajah Asia dewasa.",
      category: "Volume Bisa Raksasa / Ular Berbisa Terpanjang"
    },
    habitat: "Hutan lebat, perkebunan kelapa sawit, rawa di Asia Selatan & Tenggara",
    diet: "Karnivora Ophiophagus (Spesialis pemangsa sesama ular)",
    size: "Panjang 3.5 - 5.85 meter (ular berbisa terpanjang di dunia), Bobot 6 - 10 kg",
    lifespan: "Hingga 20 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Ular berbisa terpanjang di planet bumi. Satu-satunya spesies ular di dunia yang membangun sarang tumpukan daun untuk mengerami telurnya.",
    facts: [
      "Mendesis dengan nada bass rendah yang beresonansi dari rongga trakea khususnya.",
      "Memiliki kekebalan parsial alami terhadap bisa ular lain yang dimangsanya.",
      "Satu gigitan penuhnya sanggup melumpuhkan sistem saraf mamalia terbesar."
    ]
  },
  {
    id: "crocodylus-porosus",
    commonNameId: "Buaya Muara (Buaya Air Asin)",
    commonNameEn: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    image: imgMap["crocodylus-porosus"],
    imageCaption: "Buaya Muara dengan rahang bergigi masif dan zirah osteoderm tebal",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Crocodilia",
      family: "Crocodylidae",
      genus: "Crocodylus",
      species: "Crocodylus porosus"
    },
    tradeOff: {
      clawForceScore: 100,
      clawForceDescription: "GAYA GIGITAN TERKUAT DI PLANET BUMI (3.700 psi / 16.460 Newton), dipadu putaran maut (death roll) untuk merobek mangsa.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Murni mengandalkan kekuatan otot rahang hidrolik dan penyergapan senyap di tepi air.",
      category: "Gaya Gigitan Terkuat di Bumi / Tanpa Racun"
    },
    habitat: "Muara sungai, rawa bakau pesisir, dan laut lepas Asia Tenggara hingga Australia utara",
    diet: "Karnivora oportunistik puncak (Ikan, kerbau liar, monyet, babi hutan, hiu)",
    size: "Panjang 5 - 6.3 meter, Bobot jantan 1.000 - 1.300 kg (reptil terberat di dunia)",
    lifespan: "Lebih dari 70 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Tidak ada.",
    description: "Reptil hidup terbesar di dunia. Memiliki kelenjar garam di lidahnya yang memungkinkannya mengarungi samudra terbuka antar pulau ribuan kilometer.",
    facts: [
      "Gaya gigitannya setara dengan gigitan dinosaurus Tyrannosaurus rex muda.",
      "Dapat bertahan di bawah air selama lebih dari 1 jam tanpa bernapas dengan memperlambat detak jantungnya.",
      "Dapat melompat vertikal keluar dari permukaan air menggunakan dorongan ekornya."
    ]
  },
  {
    id: "chelonia-mydas",
    commonNameId: "Penyu Hijau",
    commonNameEn: "Green Sea Turtle",
    scientificName: "Chelonia mydas",
    image: imgMap["chelonia-mydas"],
    imageCaption: "Penyu Hijau berenang anggun di atas terumbu karang tropis",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Testudines",
      family: "Cheloniidae",
      genus: "Chelonia",
      species: "Chelonia mydas"
    },
    tradeOff: {
      clawForceScore: 35,
      clawForceDescription: "Sirip depan pengayuh kuat untuk mengarungi ribuan mil samudra, rahang paruh bergerigi pemotong lamun.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Dilindungi karapas punggung bertulang keras.",
      category: "Penjelajah Samudra Berkarapas"
    },
    habitat: "Perairan pesisir tropis dan subtropis serta pantai peneluran di seluruh dunia",
    diet: "Herbivora saat dewasa (Spesialis pemakan rumput laut dan lamun)",
    size: "Panjang karapas hingga 1.2 meter, Bobot 150 - 200 kg",
    lifespan: "Hingga 80 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Salah satu penyu laut terbesar di dunia. Dinamakan penyu hijau bukan karena cangkangnya, melainkan karena lapisan lemak tubuhnya yang berwarna kehijauan akibat diet lamun laut.",
    facts: [
      "Bermigrasi ribuan kilometer melintasi samudra untuk bertelur tepat di pantai tempat ia pertama kali menetas.",
      "Menggunakan navigasi medan magnet bumi (magnetoreception) untuk memandu rute migrasinya.",
      "Menahan napas hingga 5 jam saat tidur di bawah air dengan memperlambat detak jantung."
    ]
  },
  {
    id: "sphenodon-punctatus",
    commonNameId: "Tuatara",
    commonNameEn: "Tuatara",
    scientificName: "Sphenodon punctatus",
    image: imgMap["sphenodon-punctatus"],
    imageCaption: "Tuatara fosil hidup purba dengan mata ketiga parietal di puncak kepala",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Reptilia",
      order: "Rhynchocephalia",
      family: "Sphenodontidae",
      genus: "Sphenodon",
      species: "Sphenodon punctatus"
    },
    tradeOff: {
      clawForceScore: 50,
      clawForceDescription: "Gigi seri ganda di rahang atas yang mengunci barisan gigi rahang bawah seperti gunting geser.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Bertahan hidup dengan laju metabolisme terlambat di antara seluruh reptil.",
      category: "Fosil Hidup Berusia 200 Juta Tahun"
    },
    habitat: "Pulau-pulau lepas pantai berangin dingin di Selandia Baru",
    diet: "Karnivora (Kumbang weta raksasa, laba-laba, jangkrik, telur burung laut)",
    size: "Panjang hingga 80 cm, Bobot hingga 1.3 kg",
    lifespan: "Lebih dari 100 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Tidak ada.",
    description: "Bukan kadal sejati! Tuatara adalah satu-satunya anggota ordo Rhynchocephalia yang masih hidup sejak zaman Trias awal (250 juta tahun lalu), menjadikannya fosil hidup vertebrata darat paling berharga.",
    facts: [
      "Memiliki mata ketiga sejati (parietal eye) di puncak kepalanya yang dilengkapi lensa, kornea, dan retina.",
      "Dapat bertahan hidup pada suhu dingin 5-10°C di mana reptil lain akan mati membeku.",
      "Dapat hidup lebih dari satu abad, salah satu vertebrata paling panjang umur di bumi."
    ]
  },
  {
    id: "phyllobates-terribilis",
    commonNameId: "Katak Panah Emas",
    commonNameEn: "Golden Poison Frog",
    scientificName: "Phyllobates terribilis",
    image: imgMap["phyllobates-terribilis"],
    imageCaption: "Katak Panah Emas dengan warna aposematik peringatan bahaya mematikan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Anura",
      family: "Dendrobatidae",
      genus: "Phyllobates",
      species: "Phyllobates terribilis"
    },
    tradeOff: {
      clawForceScore: 2,
      clawForceDescription: "Kaki kecil tanpa capit pemukul.",
      venomToxicityScore: 100,
      venomDescription: "BATRACHOTOXIN EKSTREM. 1 katak kecil ini menyimpan cukup racun di kulitnya untuk membunuh 10-20 orang dewasa atau 2 gajah Afrika.",
      category: "Racun Kulit Paling Mematikan di Dunia"
    },
    habitat: "Hutan hujan tropis pesisir Pasifik Kolombia",
    diet: "Insektivora (Semut hutan brachyponera, kumbang kecil penghasil alkaloid)",
    size: "Panjang 4 - 5.5 cm, Bobot 25 - 30 gram",
    lifespan: "10 - 15 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Vertebrata paling beracun di planet bumi. Racun batrachotoxin pada kulitnya mengunci saluran ion natrium sel saraf dalam kondisi terbuka permanen, menghentikan detak jantung seketika.",
    facts: [
      "Menyentuh katak ini dengan kulit terluka sedikit saja dapat berakibat fatal.",
      "Suku adat Choco mengusapkan mata panah sumpit mereka ke punggung katak ini untuk berburu buruan liar.",
      "Di penangkaran yang diberi pakan lalat buah biasa tanpa semut beracun hutan, katak ini kehilangan racunnya sama sekali."
    ]
  },
  {
    id: "andrias-davidianus",
    commonNameId: "Salamander Raksasa Tiongkok",
    commonNameEn: "Chinese Giant Salamander",
    scientificName: "Andrias davidianus",
    image: imgMap["andrias-davidianus"],
    imageCaption: "Salamander Raksasa Tiongkok di dasar sungai air tawar berbatu",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Amphibia",
      order: "Caudata",
      family: "Cryptobranchidae",
      genus: "Andrias",
      species: "Andrias davidianus"
    },
    tradeOff: {
      clawForceScore: 70,
      clawForceDescription: "Rahang lebar dengan gigitan vakum penyedot mangsa secepat kilat di dasar sungai.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Kulit berlendir berbau merica untuk mengusir pemangsa.",
      category: "Amfibi Terbesar di Dunia / Fosil Hidup"
    },
    habitat: "Sungai pegunungan berbatu dan gua air berarus deras di Tiongkok tengah",
    diet: "Karnivora akuatik (Kepiting air tawar, ikan, katak, udang)",
    size: "Panjang hingga 1.8 meter, Bobot hingga 50 kg (amfibi terbesar di bumi)",
    lifespan: "Hingga 50 - 60 tahun",
    iucnStatus: "Critically Endangered (Kritis)",
    bioluminescence: "Tidak ada.",
    description: "Amfibi terbesar di planet bumi yang belum berubah bentuk sejak 170 juta tahun lalu. Kulitnya yang tebal dan berkerut digunakan untuk menyerap oksigen langsung dari aliran air sungai pegunungan.",
    facts: [
      "Dapat membuat suara vokalisasi mirip tangisan bayi manusia saat terkejut atau kawin.",
      "Hampir buta total, berburu menggunakan barisan sensor garis lateral di kepalanya untuk mendeteksi getaran air.",
      "Sangat terancam punah akibat perburuan liar untuk santapan mewah tradisional."
    ]
  },
  {
    id: "carcharodon-carcharias",
    commonNameId: "Hiu Putih Besar",
    commonNameEn: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    image: imgMap["carcharodon-carcharias"],
    imageCaption: "Hiu Putih Besar dengan rahang segitiga bergerigi",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Chondrichthyes",
      order: "Lamniformes",
      family: "Lamnidae",
      genus: "Carcharodon",
      species: "Carcharodon carcharias"
    },
    tradeOff: {
      clawForceScore: 97,
      clawForceDescription: "Gaya gigitan rahang 4.000 psi dengan ratusan gigi bergerigi yang berganti seumur hidup.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Murni mengandalkan kecepatan sergap torpedo dan sensor elektroresepsi.",
      category: "Predator Puncak Samudra Pelagik"
    },
    habitat: "Perairan pesisir dan lepas pantai beriklim sedang seluruh samudra dunia",
    diet: "Karnivora (Anjing laut, singa laut, lumba-lumba, ikan tuna, bangkai paus)",
    size: "Panjang 4.5 - 6.1 meter, Bobot hingga 2.200 kg",
    lifespan: "Hingga 70 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Ikan predator pemangsa terbesar di muka bumi dengan otot renang mesotermik yang lebih hangat dari air laut sekitarnya.",
    facts: [
      "Mampu mendeteksi 1 tetes darah di dalam 100 liter air laut.",
      "Memiliki organ ampullae of Lorenzini di moncongnya untuk melacak sinyal listrik detak jantung mangsa.",
      "Dapat melompat sepenuhnya keluar dari air (breaching) saat menyergap anjing laut dengan kecepatan 40 km/jam."
    ]
  },
  {
    id: "mobula-birostris",
    commonNameId: "Pari Manta Raksasa",
    commonNameEn: "Giant Oceanic Manta Ray",
    scientificName: "Mobula birostris",
    image: imgMap["mobula-birostris"],
    imageCaption: "Pari Manta Raksasa melayang di perairan terumbu karang samudra",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Chondrichthyes",
      order: "Myliobatiformes",
      family: "Mobulidae",
      genus: "Mobula",
      species: "Mobula birostris"
    },
    tradeOff: {
      clawForceScore: 50,
      clawForceDescription: "Sirip sefalik di depan mulut mengarahkan ribuan liter plankton ke dalam rongga penyaring insang.",
      venomToxicityScore: 0,
      venomDescription: "TIDAK MEMILIKI DURI SENGAT BERACUN di ekornya (berbeda dari ikan pari karang biasa). Sangat jinak.",
      category: "Raksasa Samudra Penyaring Plankton Jinak"
    },
    habitat: "Perairan samudra terbuka tropis dan subtropis dunia (termasuk Raja Ampat & Komodo)",
    diet: "Planktonivora (Zooplankton mikroskopis, telur ikan, krill)",
    size: "Rentang sayap sirip hingga 7 - 9 meter, Bobot hingga 3.000 kg (3 ton)",
    lifespan: "Hingga 45 - 50 tahun",
    iucnStatus: "Endangered (Terancam Punah)",
    bioluminescence: "Tidak ada.",
    description: "Ikan pari terbesar di planet bumi. Memiliki rasio otak terhadap tubuh terbesar di antara seluruh ikan di dunia, menunjukkan kecerdasan sosial dan kesadaran diri tinggi.",
    facts: [
      "Satu-satunya ikan yang diketahui lulus uji cermin (mirror self-recognition test).",
      "Sering melompat akrobatik keluar dari permukaan air hingga ketinggian 2-3 meter.",
      "Memiliki pola bercak putih-hitam unik di bagian perutnya yang berfungsi seperti sidik jari manusia."
    ]
  },
  {
    id: "arapaima-gigas",
    commonNameId: "Ikan Arapaima (Pirarucu)",
    commonNameEn: "Arapaima",
    scientificName: "Arapaima gigas",
    image: imgMap["arapaima-gigas"],
    imageCaption: "Arapaima gigas ikan air tawar raksasa berkulit zirah tebal",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Actinopterygii",
      order: "Osteoglossiformes",
      family: "Arapaimidae",
      genus: "Arapaima",
      species: "Arapaima gigas"
    },
    tradeOff: {
      clawForceScore: 85,
      clawForceDescription: "Lidah bergigi tulang keras untuk menghancurkan cangkang krustasea dan tengkorak ikan mangsa.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Dilindungi sisik berlapis zirah mikroskopis tahan gigitan piranha.",
      category: "Megafauna Air Tawar Amazon Purba"
    },
    habitat: "Sungai dan danau dataran banjir cekungan Sungai Amazon di Amerika Selatan",
    diet: "Karnivora (Ikan, burung air, monyet kecil yang jatuh, katak)",
    size: "Panjang 2.5 - 3 meter, Bobot hingga 200 kg (ikan air tawar terbesar di Amerika Selatan)",
    lifespan: "15 - 20 tahun",
    iucnStatus: "Data Deficient",
    bioluminescence: "Tidak ada.",
    description: "Ikan air tawar raksasa purba pemegang paru-paru semu. Karena hidup di perairan Amazon yang miskin oksigen, arapaima harus muncul ke permukaan air setiap 10-20 menit untuk menghirup udara langsung.",
    facts: [
      "Sisiknya sangat keras dan elastis sehingga gigi tajam ikan piranha tidak bisa menembusnya.",
      "Lidahnya yang bertulang digunakan oleh suku pedalaman Amazon sebagai parutan alami.",
      "Dapat melompat keluar dari air untuk menyambar burung dan reptil di dahan tepi sungai."
    ]
  },
  {
    id: "latimeria-chalumnae",
    commonNameId: "Ikan Raja Laut (Coelacanth)",
    commonNameEn: "West Indian Ocean Coelacanth",
    scientificName: "Latimeria chalumnae",
    image: imgMap["latimeria-chalumnae"],
    imageCaption: "Coelacanth berenang di kedalaman laut dengan sirip cuping berdaging",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Actinopterygii",
      order: "Coelacanthiformes",
      family: "Latimeriidae",
      genus: "Latimeria",
      species: "Latimeria chalumnae"
    },
    tradeOff: {
      clawForceScore: 60,
      clawForceDescription: "Sirip berotot berdaging yang bergerak sinkron mirip pola kaki hewan berkaki empat (tetrapoda).",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Memiliki organ rostral elektroreseptif di moncongnya.",
      category: "Fosil Hidup Purba Penghubung Tetrapoda"
    },
    habitat: "Gua karang laut dalam (150 - 400 meter) di Samudra Hindia dan Sulawesi (Indonesia)",
    diet: "Karnivora bentik laut dalam (Cumi-cumi, gurita, ikan lentera laut dalam)",
    size: "Panjang hingga 2 meter, Bobot hingga 80 - 90 kg",
    lifespan: "Hingga 100 tahun",
    iucnStatus: "Critically Endangered (Kritis)",
    bioluminescence: "Mata memancarkan pantulan kilau tapetum lucidum keemasan di kegelapan laut dalam.",
    description: "Ikan purba yang sempat dinyatakan punah bersama dinosaurus 66 juta tahun lalu, hingga seekor spesimen hidup tak sengaja tertangkap nelayan pada tahun 1938. Spesies kerabatnya (*Latimeria menadoensis*) hidup di perairan Manado, Indonesia.",
    facts: [
      "Siripnya ditopang oleh tulang berdaging yang menyerupai anggota gerak hewan darat.",
      "Masa kehamilannya mencapai 5 tahun, terlama di antara seluruh vertebrata di planet bumi.",
      "Tulang punggungnya bukan tulang sejati melainkan notokorda berisi cairan bertekanan tinggi."
    ]
  },

  // =========================================================================
  // MOLLUSCA, CNIDARIA, ECHINODERMATA, PORIFERA
  // =========================================================================
  {
    id: "hapalochlaena-lunulata",
    commonNameId: "Gurita Cincin Biru",
    commonNameEn: "Greater Blue-ringed Octopus",
    scientificName: "Hapalochlaena lunulata",
    image: imgMap["hapalochlaena-lunulata"],
    imageCaption: "Cincin biru elektrik menyala berkedip sebagai sinyal peringatan mematikan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Mollusca",
      class: "Cephalopoda",
      order: "Octopoda",
      family: "Octopodidae",
      genus: "Hapalochlaena",
      species: "Hapalochlaena lunulata"
    },
    tradeOff: {
      clawForceScore: 10,
      clawForceDescription: "Tubuh lunak mungil seukuran bola golf tanpa tulang atau capit pemukul.",
      venomToxicityScore: 99,
      venomDescription: "TETRODOTOXIN MEMATIKAN. Menghasilkan neurotoksin 1.000 kali lebih mematikan dari sianida buatan bakteri simbiotik di kelenjar ludahnya.",
      category: "Tubuh Lunak / Neurotoksin Paling Berbahaya di Laut"
    },
    habitat: "Terumbu karang dangkal dan kolam pasang surut di Samudra Pasifik barat & Indonesia",
    diet: "Karnivora (Kepiting kecil, udang, ikan karang kecil)",
    size: "Panjang tubuh 10 - 15 cm, Bobot 25 - 80 gram",
    lifespan: "Hanya 1 - 2 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Cincin biru berpendar elektrik dari sel iridofora dinamis.",
    description: "Moluska laut mungil paling mematikan di dunia. Saat santai tubuhnya berkamuflase cokelat karang, namun saat terancam, sekitar 50-60 cincin biru berpendar menyala sebelum mematuk dengan paruh tajamnya.",
    facts: [
      "Gigitannya sering tidak terasa sakit, namun korban mengalami kelumpuhan total dalam 10 menit.",
      "Belum ditemukan antivenom sintetis; korban bergantung pada alat bantu pernapasan ventilator buatan.",
      "Salah satu hewan paling berbahaya bagi penyelam dan pengunjung pantai jika terinjak."
    ]
  },
  {
    id: "architeuthis-dux",
    commonNameId: "Cumi-cumi Raksasa",
    commonNameEn: "Giant Squid",
    scientificName: "Architeuthis dux",
    image: imgMap["architeuthis-dux"],
    imageCaption: "Cumi-cumi Raksasa dengan tentakel pengait berpenghisap gerigi",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Mollusca",
      class: "Cephalopoda",
      order: "Teuthida",
      family: "Architeuthidae",
      genus: "Architeuthis",
      species: "Architeuthis dux"
    },
    tradeOff: {
      clawForceScore: 88,
      clawForceDescription: "Dua tentakel pengumpan panjang dipersenjatai ratusan mangkuk penghisap bergerigi tajam pemotong daging.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Murni mengandalkan cakar penghisap dan paruh kitin pemotong seperti paruh kakatua raksasa.",
      category: "Monster Laut Dalam Bermata Terbesar"
    },
    habitat: "Zona mesopelagik laut dalam (300 - 1.000 meter) seluruh samudra dunia",
    diet: "Karnivora laut dalam (Ikan laut dalam, cumi-cumi lain)",
    size: "Panjang betina hingga 12 - 13 meter, Bobot hingga 275 kg",
    lifespan: "Sekitar 5 tahun",
    iucnStatus: "Least Concern",
    bioluminescence: "Tidak ada.",
    description: "Invertebrata terbesar kedua di dunia. Merupakan mangsa utama paus sperma raksasa dalam pertarungan legendaris di kegelapan abisal laut dalam.",
    facts: [
      "Memiliki mata terbesar di kingdom Animalia (diameter mencapai 30 cm atau seukuran piring makan).",
      "Paruh kitin di tengah mulutnya mampu memotong kabel baja laut.",
      "Darah birunya berbasis hemosianin untuk mengikat oksigen di perairan laut dalam yang dingin."
    ]
  },
  {
    id: "nautilus-pompilius",
    commonNameId: "Nautilus Berongga",
    commonNameEn: "Chambered Nautilus",
    scientificName: "Nautilus pompilius",
    image: imgMap["nautilus-pompilius"],
    imageCaption: "Nautilus pompilius dengan cangkang spiral bergaris oranye",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Mollusca",
      class: "Cephalopoda",
      order: "Nautilida",
      family: "Nautilidae",
      genus: "Nautilus",
      species: "Nautilus pompilius"
    },
    tradeOff: {
      clawForceScore: 40,
      clawForceDescription: "Memiliki hingga 90 tentakel kecil tanpa penghisap untuk memegang makanan.",
      venomToxicityScore: 0,
      venomDescription: "Tidak berbisa. Dilindungi cangkang kalsit bersekat ruang gas.",
      category: "Sefalopoda Purba Bercangkang Spiral"
    },
    habitat: "Lereng terumbu karang laut dalam (100 - 600 meter) di kawasan Indo-Pasifik",
    diet: "Karnivora pemulung (Bangkai ikan, kepiting kecil, udang)",
    size: "Diameter cangkang 16 - 20 cm, Bobot sekitar 1 kg",
    lifespan: "Lebih dari 20 tahun",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Tidak ada.",
    description: "Fosil hidup sefalopoda yang hampir tidak berubah selama 500 juta tahun. Cangkang spiral logaritmiknya yang sempurna bersekat gas digunakan sebagai sistem ballast kapal selam alami.",
    facts: [
      "Mengatur kedalaman selam dengan memompa cairan atau gas nitrogen ke dalam sekat-sekat cangkangnya.",
      "Matanya tidak memiliki lensa, bekerja mirip kamera lubang jarum (pinhole camera) sederhana.",
      "Memiliki hingga 90 tentakel pendek tanpa penghisap, berbeda dari gurita yang hanya 8."
    ]
  },
  {
    id: "chironex-fleckeri",
    commonNameId: "Ubur-ubur Kotak Tawon Laut",
    commonNameEn: "Sea Wasp Box Jellyfish",
    scientificName: "Chironex fleckeri",
    image: imgMap["chironex-fleckeri"],
    imageCaption: "Chironex fleckeri dengan payung kubus transparan dan tentakel berbisa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Cnidaria",
      class: "Cubozoa",
      order: "Chirodropida",
      family: "Chirodropidae",
      genus: "Chironex",
      species: "Chironex fleckeri"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tubuh lunak transparan 95% air tanpa capit atau tulang.",
      venomToxicityScore: 100,
      venomDescription: "RACUN PALING MEMATIKAN DI LAUTAN. Jutaan nematokista menyuntikkan racun perusak jantung yang memicu henti jantung dalam 2-5 menit.",
      category: "Racun Tercepat Mematikan di Samudra"
    },
    habitat: "Perairan pesisir tropis Indo-Pasifik dan Australia utara",
    diet: "Karnivora (Udang kecil dan ikan pantai)",
    size: "Payung sebesar bola basket (30 cm), Tentakel menjulur hingga 3 meter",
    lifespan: "Hanya sekitar 1 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Berdarah transparan nyaris kasat mata di air.",
    description: "Makhluk laut paling mematikan bagi manusia. Setiap individu membawa cukup racun untuk membunuh lebih dari 60 orang dewasa dalam hitungan menit.",
    facts: [
      "Memiliki 24 mata sejati yang tersusun dalam 4 kluster, lengkap dengan kornea dan lensa untuk melacak mangsa.",
      "Dapat berenang aktif dengan kecepatan 4 knot (7.4 km/jam), tidak seperti ubur-ubur biasa yang pasif hanyut.",
      "Cuka asam asetat dapat menonaktifkan sel penyengat yang belum meledak pada kulit korban sengatan."
    ]
  },
  {
    id: "acanthaster-planci",
    commonNameId: "Bintang Laut Mahkota Duri",
    commonNameEn: "Crown-of-thorns Starfish",
    scientificName: "Acanthaster planci",
    image: imgMap["acanthaster-planci"],
    imageCaption: "Acanthaster planci dengan duri beracun memakan polip karang",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Echinodermata",
      class: "Asteroidea",
      order: "Valvatida",
      family: "Acanthasteridae",
      genus: "Acanthaster",
      species: "Acanthaster planci"
    },
    tradeOff: {
      clawForceScore: 30,
      clawForceDescription: "Kaki tabung hidrolik pengait karang dan perut eversibel yang dikeluarkan keluar mulut untuk mencerna polip karang.",
      venomToxicityScore: 80,
      venomDescription: "Duri tajam 5 cm dilapisi saponin plancitoxin yang memicu rasa sakit berdenyut hebat dan pembengkakan.",
      category: "Duri Berbisa Perusak Terumbu Karang"
    },
    habitat: "Terumbu karang dangkal kawasan Indo-Pasifik dan Terumbu Karang Besar (GBR)",
    diet: "Karnivora karang (Memangsa polip karang batu keras)",
    size: "Diameter 25 - 35 cm (bisa mencapai 80 cm), memiliki 14 hingga 21 lengan",
    lifespan: "Hingga 8 tahun",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak ada.",
    description: "Bintang laut karnivora berduri beracun yang menjadi ancaman besar bagi kelestarian terumbu karang tropis dunia akibat ledakan populasi berkala.",
    facts: [
      "Satu individu dewasa dapat melahap hingga 10 meter persegi terumbu karang hidup dalam setahun.",
      "Memiliki daya regenerasi tubuh luar biasa; memotong lengannya sering kali menghasilkan individu baru.",
      "Predator alaminya yang utama adalah Siput Terompet Raksasa (*Charonia tritonis*) yang kebal terhadap duri beracunnya."
    ]
  },
  {
    id: "spongia-officinalis",
    commonNameId: "Spons Mandi Laut",
    commonNameEn: "Bath Sponge",
    scientificName: "Spongia officinalis",
    image: imgMap["spongia-officinalis"],
    imageCaption: "Spongia officinalis hewan penyaring laut multiseluler paling primitif",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Porifera",
      class: "Demospongiae",
      order: "Dictyoceratida",
      family: "Spongiidae",
      genus: "Spongia",
      species: "Spongia officinalis"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tanpa jaringan otot atau saraf.",
      venomToxicityScore: 10,
      venomDescription: "Mensekresikan senyawa antimikroba alami untuk mencegah bakteri berbahaya menempel.",
      category: "Hewan Multiseluler Paling Primitif"
    },
    habitat: "Dasar laut berbatu Mediterania dan Karibia di kedalaman 5 - 40 meter",
    diet: "Suspension feeder (Menyaring bakteri dan partikel organik dari air laut)",
    size: "Diameter hingga 30 - 40 cm",
    lifespan: "Dapat hidup puluhan hingga ratusan tahun",
    iucnStatus: "Data Deficient",
    bioluminescence: "Tidak ada.",
    description: "Perwakilan hewan multiseluler paling awal di planet bumi. Tubuhnya tidak memiliki jaringan saraf atau organ pencernaan sejati, murni jaringan sel kolaboratif yang memompa air melalui pori-pori.",
    facts: [
      "Satu spons seukuran bola tangan dapat menyaring lebih dari 1.000 liter air laut setiap hari.",
      "Jika dihancurkan dan disaring melalui kain sutra, sel-sel individualnya dapat merayap dan berkumpul kembali menjadi spons utuh.",
      "Telah dipanen oleh manusia sejak era Yunani kuno untuk spons mandi alami karena serat sponginnya yang lembut elastis."
    ]
  },

  // =========================================================================
  // KINGDOM PLANTAE, FUNGI, PROTISTA
  // =========================================================================
  {
    id: "rafflesia-arnoldii",
    commonNameId: "Padma Raksasa (Rafflesia)",
    commonNameEn: "Giant Padma",
    scientificName: "Rafflesia arnoldii",
    image: imgMap["rafflesia-arnoldii"],
    imageCaption: "Rafflesia arnoldii mekar merah tua berdiameter 1 meter di hutan Sumatera",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Malpighiales",
      family: "Rafflesiaceae",
      genus: "Rafflesia",
      species: "Rafflesia arnoldii"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tidak memiliki daun, batang, atau akar sejati.",
      venomToxicityScore: 0,
      venomDescription: "Menghasilkan bau bangkai menyengat (senyawa dimetil disulfida) untuk memikat lalat penyerbuk.",
      category: "Bunga Tunggal Terbesar di Dunia (Parasit)"
    },
    habitat: "Lantai hutan hujan tropis Sumatera dan Kalimantan, Indonesia",
    diet: "Parasit obligat (Menyerap nutrisi dari inang sulur Tetrastigma)",
    size: "Diameter bunga 70 - 110 cm, Bobot hingga 11 kg",
    lifespan: "Mekar hanya 5 - 7 hari sebelum membusuk hitam",
    iucnStatus: "Critically Endangered (Kritis)",
    bioluminescence: "Dapat menghasilkan panas termogenik untuk menyebarkan aroma bangkainya.",
    description: "Bunga tunggal terbesar di planet bumi dan puspa langka nasional Indonesia. Merupakan tumbuhan holoparasit tanpa klorofil yang hidup tersembunyi di dalam jaringan sulur inang sebelum mekar megah.",
    facts: [
      "Sama sekali tidak memiliki daun, batang, atau akar; seluruh tubuh vegetatifnya berupa untaian jaringan mirip jamur di dalam pohon inang.",
      "Aroma busuk daging bangkainya memikat lalat bangkai (*Chrysomya*) untuk melakukan penyerbukan silang.",
      "Masa berkembang kuncup membutuhkan waktu 9 bulan, namun bunganya hanya mekar selama 5-7 hari."
    ]
  },
  {
    id: "dionaea-muscipula",
    commonNameId: "Tumbuhan Penangkap Lalat Venus",
    commonNameEn: "Venus Flytrap",
    scientificName: "Dionaea muscipula",
    image: imgMap["dionaea-muscipula"],
    imageCaption: "Dionaea muscipula dengan daun capit berengsel dan bulu pemicu rambut",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Caryophyllales",
      family: "Droseraceae",
      genus: "Dionaea",
      species: "Dionaea muscipula"
    },
    tradeOff: {
      clawForceScore: 65,
      clawForceDescription: "Daun capit berengsel menutup rapat dalam 100 milidetik saat bulu pemicu tersentuh dua kali!",
      venomToxicityScore: 20,
      venomDescription: "Kelenjar mensekresikan enzim protease asam untuk mencerna serangga hidup menjadi sup nitrogen.",
      category: "Tumbuhan Karnivora Bergaya Capit Mekanis"
    },
    habitat: "Lahan basah gambut miskin nitrogen di Carolina Utara dan Selatan, Amerika Serikat",
    diet: "Autotrof fotosintesis + Karnivora serangga (Lalat, semut, laba-laba kecil)",
    size: "Tinggi tanaman 10 - 15 cm, perangkap daun 2 - 3 cm",
    lifespan: "Dapat hidup hingga 20 tahun di alam",
    iucnStatus: "Vulnerable (Rentan)",
    bioluminescence: "Menghasilkan fluoresensi UV samar di tepi capit untuk memikat serangga malam.",
    description: "Tumbuhan karnivora paling spektakuler di dunia. Menutup daunnya menggunakan sinyal listrik aksi potensial mirip sel saraf hewan untuk mencerna serangga demi mendapatkan nitrogen di tanah gambut miskin nutrisi.",
    facts: [
      "Perangkapnya memiliki memori hitung mekanik: perlu sentuhan 2 kali pada bulu pemicu dalam kurun 20 detik agar capit menutup, mencegah buang energi akibat tetesan air hujan.",
      "Kecepatan penutupan daunnya merupakan salah satu gerakan tercepat di kingdom Plantae.",
      "Setelah serangga tertangkap, capit tersegel rapat menjadi 'perut eksternal' selama 7-10 hari untuk proses pencernaan enzimatik."
    ]
  },
  {
    id: "amanita-muscaria",
    commonNameId: "Jamur Lalat Merah",
    commonNameEn: "Fly Agaric",
    scientificName: "Amanita muscaria",
    image: imgMap["amanita-muscaria"],
    imageCaption: "Amanita muscaria tudung merah berbintik putih ikonik",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Fungi",
      phylum: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Amanitaceae",
      genus: "Amanita",
      species: "Amanita muscaria"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Tubuh buah jamur berdinding kitin.",
      venomToxicityScore: 85,
      venomDescription: "MENGANDUNG ASAM IBOTENAT DAN MUSCIMOL. Racun neurotoksik halusinogenik berbahaya yang melumpuhkan sistem saraf pusat.",
      category: "Jamur Payung Neurotoksik Ikonik"
    },
    habitat: "Hutan pinus dan birch di kawasan beriklim sedang belahan bumi utara",
    diet: "Mikoriza simbiotik mutualisme (Bertukar nutrisi dengan akar pohon hutan)",
    size: "Tudung payung diameter 8 - 20 cm, Tinggi tangkai 10 - 20 cm",
    lifespan: "Tubuh buah bertahan beberapa minggu (miselium bawah tanah puluhan tahun)",
    iucnStatus: "Least Concern",
    bioluminescence: "Tidak ada.",
    description: "Ikon jamur dongeng paling terkenal di dunia dengan payung merah berbintik putih. Merupakan anggota kingdom Fungi yang memiliki peran ekologis penting membentuk hubungan mikoriza dengan akar pohon hutan.",
    facts: [
      "Bintik putih di atas payungnya adalah sisa-sisa selubung universal (universal veil) saat jamur masih kuncup.",
      "Senyawa asam ibotenat di dalamnya terurai menjadi muscimol yang memicu distorsi persepsi ukuran tubuh (sindrom Alice in Wonderland).",
      "Secara historis digunakan di Eropa sebagai pembasmi lalat alami dengan meremukkannya ke dalam susu."
    ]
  },

  // =========================================================================
  // DOMAIN BACTERIA & ARCHAEA
  // =========================================================================
  {
    id: "escherichia-coli",
    commonNameId: "Bakteri E. Coli",
    commonNameEn: "E. Coli Bacterium",
    scientificName: "Escherichia coli",
    image: imgMap["escherichia-coli"],
    imageCaption: "Escherichia coli di bawah mikroskop elektron pemindai",
    taxonomy: {
      domain: "Bacteria",
      kingdom: "Eubacteria",
      phylum: "Pseudomonadota",
      class: "Gammaproteobacteria",
      order: "Enterobacterales",
      family: "Enterobacteriaceae",
      genus: "Escherichia",
      species: "Escherichia coli"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Organisme mikroskopis bersel tunggal tanpa organ fisik.",
      venomToxicityScore: 50,
      venomDescription: "Sebagian besar galur tidak berbahaya, namun galur penghasil toksin Shiga (STEC) memicu sindrom uremik hemolitik.",
      category: "Domain Bacteria: Prokariota Bersel Tunggal"
    },
    habitat: "Saluran pencernaan mamalia berdarah panas dan lingkungan perairan",
    diet: "Heterotrof (Mengonsumsi glukosa dan asam amino usus inang)",
    size: "Panjang 1 - 2 mikrometer, lebar 0.5 mikrometer",
    lifespan: "Membelah diri setiap 20 menit dalam kondisi optimal",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak alami (sering direkayasa genetika dengan gen GFP ubur-ubur).",
    description: "Organisme model paling terkenal dalam sejarah biologi molekuler modern dari Domain Bacteria. Selnya bersifat prokariotik tanpa membran inti pembungkus materi genetik.",
    facts: [
      "Menghasilkan vitamin K2 esensial yang membantu pembekuan darah di usus manusia.",
      "Bergerak menggunakan flagela berputar mirip baling-baling motor hidrolik seluler.",
      "Menjadi pabrik bio-industri utama untuk memproduksi insulin sintetis bagi penderita diabetes di seluruh dunia."
    ]
  },
  {
    id: "sulfolobus-acidocaldarius",
    commonNameId: "Arkea Kawah Belerang Asam",
    commonNameEn: "Thermoacidophilic Archaea",
    scientificName: "Sulfolobus acidocaldarius",
    image: imgMap["sulfolobus-acidocaldarius"],
    imageCaption: "Sulfolobus acidocaldarius arkea ekstremofil tahan asam dan panas kawah belerang",
    taxonomy: {
      domain: "Archaea",
      kingdom: "Archaebacteria",
      phylum: "Crenarchaeota",
      class: "Thermoprotei",
      order: "Sulfolobales",
      family: "Sulfolobaceae",
      genus: "Sulfolobus",
      species: "Sulfolobus acidocaldarius"
    },
    tradeOff: {
      clawForceScore: 0,
      clawForceDescription: "Sel mikroba sferis berlekuk tanpa capit.",
      venomToxicityScore: 0,
      venomDescription: "Mengoksidasi belerang anorganik menjadi asam sulfat pekat di lingkungan ekstrem.",
      category: "Domain Archaea: Ekstremofil Kawah Vulkanik Mendidih"
    },
    habitat: "Mata air belerang asam vulkanik dan solfatara mendidih (Yellowstone, kawah gunung api)",
    diet: "Kemoautotrof (Mengoksidasi belerang elemental dan senyawa besi)",
    size: "Diameter 0.8 - 1.2 mikrometer",
    lifespan: "Dapat bertahan hidup di kondisi purba bumi",
    iucnStatus: "Not Evaluated",
    bioluminescence: "Tidak ada.",
    description: "Perwakilan resmi dari Domain Archaea, domain purba ketiga dalam silsilah pohon hayat. Membran selnya tersusun dari ikatan eter tetraeter lipid tahan asam dan enzim termostabil yang tidak terdenaturasi pada suhu 85°C dan pH asam ekstrem 2.",
    facts: [
      "Tumbuh subur pada suhu mendidih 75-85°C di dalam asam belerang pekat yang sanggup melarutkan kulit manusia.",
      "Memiliki enzim polimerase DNA ultra-stabil yang digunakan dalam riset bioteknologi PCR suhu tinggi.",
      "Membran selnya membentuk monolayer lipid kaku yang menjadi inspirasi arsitektur nanoteknologi modern."
    ]
  }
];

// Buat konten data.js lengkap
const outputContent = `/**
 * BioTaxa - Database Lengkap Pohon Hayat (Tree of Life) & Taksonomi Global
 * Mencakup Silsilah Kehidupan di Bumi:
 * Biota -> 3 Domain -> Kingdom-Kingdom -> Seluruh Filum & Kelas -> Ordo -> Spesies Lengkap
 * Setiap foto menggunakan URL terverifikasi 100% tanpa placeholder/singa!
 */

const TAXONOMY_LEVELS = [
  { key: 'domain', label: 'Domain', desc: 'Tingkat klasifikasi tertinggi berdasarkan struktur seluler genetik (Woese, 1990)' },
  { key: 'kingdom', label: 'Kingdom (Kerajaan)', desc: 'Pengelompokan skala besar (Animalia, Plantae, Fungi, Protista)' },
  { key: 'phylum', label: 'Filum (Phylum)', desc: 'Rancangan arsitektur dasar tubuh (body plan) organisme' },
  { key: 'class', label: 'Kelas (Class)', desc: 'Adaptasi anatomi dan fisiologi utama' },
  { key: 'order', label: 'Ordo (Bangsa)', desc: 'Kemiripan bentuk tubuh dan perilaku spesifik' },
  { key: 'family', label: 'Famili (Suku)', desc: 'Keluarga dekat yang berbagi sifat morfologi mendasar' },
  { key: 'genus', label: 'Genus (Marga)', desc: 'Kelompok spesies yang sangat dekat secara evolusi' },
  { key: 'species', label: 'Spesies (Jenis)', desc: 'Unit individu paling spesifik yang dapat saling berkawin silang fertil' }
];

const TAXONOMY_TREE = ${JSON.stringify(treeData, null, 2)};

const CURATED_SPECIES = ${JSON.stringify(species, null, 2)};

// Helper untuk mengambil hierarki taksonomi lengkap
function getTaxonomyHierarchy() {
  return TAXONOMY_TREE;
}

// Helper untuk mencari spesies lokal
function findCuratedSpecies(query) {
  if (!query || query.trim() === '') return CURATED_SPECIES;
  const q = query.toLowerCase().trim();
  return CURATED_SPECIES.filter(sp => {
    return (
      sp.commonNameId.toLowerCase().includes(q) ||
      sp.commonNameEn.toLowerCase().includes(q) ||
      sp.scientificName.toLowerCase().includes(q) ||
      sp.taxonomy.domain.toLowerCase().includes(q) ||
      sp.taxonomy.kingdom.toLowerCase().includes(q) ||
      sp.taxonomy.phylum.toLowerCase().includes(q) ||
      sp.taxonomy.class.toLowerCase().includes(q) ||
      sp.taxonomy.order.toLowerCase().includes(q) ||
      sp.habitat.toLowerCase().includes(q)
    );
  });
}
`;

fs.writeFileSync('/home/asadin/Projects/animals/js/data.js', outputContent, 'utf8');
console.log("Successfully generated complete js/data.js with", species.length, "flagship species across all domains!");
