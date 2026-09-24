const fs = require('fs');

// Read existing data
const existingDataCode = fs.readFileSync('/home/asadin/Projects/animals/js/data.js', 'utf8');
const fn = new Function(existingDataCode + "; return { TAXONOMY_LEVELS, CURATED_SPECIES };");
const { TAXONOMY_LEVELS, CURATED_SPECIES } = fn();

// Full, rich taxonomy tree
const TAXONOMY_TREE = {
  root: {
    name: "Biota (Seluruh Kehidupan di Bumi)",
    indonesianName: "Pohon Hayat Universal (Tree of Life)",
    description: "Seluruh organisme hidup di planet bumi yang berevolusi dari leluhur bersama universal pertama (LUCA - Last Universal Common Ancestor) sekitar 3,8 miliar tahun lalu. Berdasarkan struktur sel dan materi genetik (sistem 3 Domain Carl Woese), kehidupan terbagi menjadi 3 Domain utama.",
    estimatedSpecies: "8,7 Juta+ Spesies Eukariota & Miliaran Mikroba"
  },
  domains: [
    {
      id: "eukarya",
      name: "Eukarya",
      indonesianName: "Domain Eukariota (Organisme Berinti Sel)",
      description: "Domain kehidupan yang sel-selnya memiliki membran inti sejati (nukleus) pembungkus DNA dan organel kompleks bermembran (seperti mitokondria, kloroplas, dan retikulum endoplasma). Menaungi seluruh hewan, tumbuhan, jamur, dan protista di bumi.",
      cellType: "Eukariotik (Memiliki membran inti sejati & organel bermembran)",
      isPrimary: true,
      kingdoms: [
        {
          id: "animalia",
          name: "Animalia",
          indonesianName: "Kingdom Animalia (Dunia Hewan / Metazoa)",
          description: "Organisme multiseluler heterotrof yang memperoleh nutrisi dengan mengonsumsi makhluk hidup lain, bergerak aktif (motil) pada setidaknya satu tahap siklus hidupnya, dan selnya tidak memiliki dinding sel kitin/selulosa kaku.",
          characteristics: "Heterotrof, Motil, Diferensiasi Jaringan Kompleks",
          isPrimary: true,
          phyla: [
            {
              id: "arthropoda",
              name: "Arthropoda",
              indonesianName: "Filum Hewan Berbuku-buku / Beruas",
              description: "Filum terbesar di bumi (lebih dari 80% seluruh spesies hewan). Tubuh bersegmen, kaki bersendi, dan eksoskeleton dari kitin yang mengalami pergantian kulit (ekdisis).",
              classes: [
                {
                  id: "arachnida",
                  name: "Arachnida",
                  indonesianName: "Kelas Arakhnida (Berkaki 8)",
                  description: "Hewan berbuku-buku berkaki delapan, tubuh terbagi menjadi sefalotoraks dan abdomen, tanpa sayap dan antena. Memiliki pedipalpus dan taring chelicerae.",
                  orders: [
                    { id: "scorpiones", name: "Scorpiones", indonesianName: "Kalajengking Sejati", description: "Pedipalpus bercapit tebal/tipis, ekor fleksibel berujung alat penyengat berbisa (telson)." },
                    { id: "thelyphonida", name: "Thelyphonida", indonesianName: "Ketonggeng (Vinegaroon)", description: "Bukan kalajengking sejati! 100% tanpa bisa, capit berduri sangat kuat, ekor cambuk penyemprot asam asetat 84%." },
                    { id: "araneae", name: "Araneae", indonesianName: "Laba-laba", description: "Taring chelicerae berbisa, organ pemintal sutra di ujung perut, tanpa capit sejati." },
                    { id: "amblypygi", name: "Amblypygi", indonesianName: "Ketonggeng Gua (Tailless Whip Scorpion)", description: "Arakhnida purba tanpa ekor dengan pedipalpus duri panjang dan kaki sensorik cambuk." },
                    { id: "solifugae", name: "Solifugae", indonesianName: "Laba-laba Unta / Kalajengking Angin", description: "Chelicerae capit raksasa terkuat relatif ukuran tubuh, bergerak sangat cepat di gurun pasir." },
                    { id: "acari", name: "Acari", indonesianName: "Tungau dan Caplak", description: "Arakhnida mikroskopis hingga kecil dengan segmen tubuh menyatu utuh." }
                  ]
                },
                {
                  id: "insecta",
                  name: "Insecta",
                  indonesianName: "Kelas Serangga (Berkaki 6)",
                  description: "Tubuh 3 bagian (kepala, dada/toraks, perut), 3 pasang kaki, 1 pasang antena, dan sebagian besar bersayap.",
                  orders: [
                    { id: "coleoptera", name: "Coleoptera", indonesianName: "Kumbang", description: "Sayap depan mengeras menjadi perisai elitron pelindung sayap terbang." },
                    { id: "hymenoptera", name: "Hymenoptera", indonesianName: "Tawon, Lebah & Semut", description: "Sayap selaput transparan dan struktur sosial kasta tinggi." },
                    { id: "lepidoptera", name: "Lepidoptera", indonesianName: "Kupu-kupu & Ngengat", description: "Sayap dilapisi ribuan sisik mikroskopis berpola warna memukau." },
                    { id: "mantodea", name: "Mantodea", indonesianName: "Belalang Sembah", description: "Kaki depan tipe raptorial mencengkeram mangsa secepat kilat." },
                    { id: "odonata", name: "Odonata", indonesianName: "Capung", description: "Penerbang akrobatik tercepat dengan mata majemuk 30.000 ommatidia." }
                  ]
                },
                {
                  id: "chilopoda",
                  name: "Chilopoda",
                  indonesianName: "Kelas Lipan / Kelabang",
                  description: "Tubuh memanjang pipih dorsoventral, satu pasang kaki per segmen, dan sepasang forcipula (kaki beracun pencengkeram) di kepala.",
                  orders: [
                    { id: "scopendromorpha", name: "Scolopendromorpha", indonesianName: "Kelabang Raksasa Tropis", description: "Predator nokturnal agresif dengan bisa sitotoksik dan neurotoksik." }
                  ]
                },
                {
                  id: "merostomata",
                  name: "Merostomata",
                  indonesianName: "Kelas Mimi & Belangkas (Tapal Kuda)",
                  description: "Hewan purba berdarah biru (berbasis hemosianin tembaga) yang tidak berubah bentuk selama 450 juta tahun (fosil hidup).",
                  orders: [
                    { id: "xiphosura", name: "Xiphosura", indonesianName: "Belangkas Sejati", description: "Karapas berbentuk tapal kuda dengan ekor telson kaku runcing." }
                  ]
                },
                {
                  id: "malacostraca",
                  name: "Malacostraca",
                  indonesianName: "Kelas Krustasea Tingkat Tinggi (Kepiting, Udang, Lobster)",
                  description: "Eksoskeleton keras berkapur, memiliki capit chela kuat, 5 pasang kaki dada (dekapoda).",
                  orders: [
                    { id: "decapoda", name: "Decapoda", indonesianName: "Kepiting & Udang Dekapoda", description: "Sepuluh kaki fungsional dengan capit depan pembelah cangkang yang sangat bertenaga." },
                    { id: "stomatopoda", name: "Stomatopoda", indonesianName: "Udang Mantis", description: "Pukulan capit pemukul berkecepatan 80 km/jam pemecah kaca akuarium." }
                  ]
                }
              ]
            },
            {
              id: "chordata",
              name: "Chordata",
              indonesianName: "Filum Hewan Bertulang Belakang (Vertebrata)",
              description: "Hewan yang memiliki notokorda, tali saraf punggung berongga, celah faring, dan ekor pasca-anus pada fase perkembangannya.",
              classes: [
                {
                  id: "mammalia",
                  name: "Mammalia",
                  indonesianName: "Kelas Mamalia (Menyusui)",
                  description: "Berdarah panas (endoterm), memiliki rambut/bulu, menghasilkan susu dari kelenjar mamae, dan neokorteks otak besar.",
                  orders: [
                    { id: "carnivora", name: "Carnivora", indonesianName: "Karnivora Pemangsa", description: "Gigi taring dan geraham karnassial tajam untuk memangsa daging." },
                    { id: "cetacea", name: "Cetacea", indonesianName: "Paus & Lumba-lumba", description: "Mamalia laut penuh dengan tubuh hidrodinamis dan lubang sembur pernapasan." },
                    { id: "primates", name: "Primates", indonesianName: "Primata (Orangutan, Gorila, Manusia)", description: "Ibu jari berlawanan (opposable thumb) dan kapasitas kognitif tinggi." },
                    { id: "proboscidea", name: "Proboscidea", indonesianName: "Gajah & Leluhur Berbelalai", description: "Belalai muskular fleksibel dan sepasang gading modifikasi gigi seri." },
                    { id: "monotremata", name: "Monotremata", indonesianName: "Monotrema Bertelur", description: "Mamalia purba bertelur dengan paruh sensorik dan taji berbisa (platipus)." }
                  ]
                },
                {
                  id: "aves",
                  name: "Aves",
                  indonesianName: "Kelas Burung & Unggas",
                  description: "Berdarah panas, tubuh diselimuti bulu terbang, rahang berparuh tanpa gigi, tulang berongga ringan.",
                  orders: [
                    { id: "casuariiformes", name: "Casuariiformes", indonesianName: "Kasuari", description: "Burung terberat dan paling berbahaya di dunia dengan cakar belati 12 cm." },
                    { id: "accipitriformes", name: "Accipitriformes", indonesianName: "Burung Pemangsa (Elang & Rajawali)", description: "Penglihatan binokular tajam dan cakar cengkeram pembunuh." },
                    { id: "strigiformes", name: "Strigiformes", indonesianName: "Burung Hantu", description: "Predator nokturnal dengan bulu peredam suara senyap mutlak." },
                    { id: "sphenisciformes", name: "Sphenisciformes", indonesianName: "Penguin", description: "Penyelam laut es Antartika dengan sayap termodifikasi menjadi sirip dayung." },
                    { id: "bucerotiformes", name: "Bucerotiformes", indonesianName: "Rangkong / Enggang", description: "Paruh tanduk kurva besar bermahkota balung (casque) di atas paruh." }
                  ]
                },
                {
                  id: "reptilia",
                  name: "Reptilia",
                  indonesianName: "Kelas Reptil (Hewan Melata)",
                  description: "Berdarah dingin (ektoterm), kulit bersisik kering kedap air dari zat tanduk keratin, bertelur amniotik bercangkang.",
                  orders: [
                    { id: "squamata", name: "Squamata", indonesianName: "Kadal & Ular", description: "Rahang kuadrat fleksibel mampu menelan mangsa lebih besar dari kepala." },
                    { id: "crocodilia", name: "Crocodilia", indonesianName: "Buaya & Aligator", description: "Predator purba semi-akuatik dengan kekuatan gigitan terkuat di bumi (hingga 3.700 psi)." },
                    { id: "testudines", name: "Testudines", indonesianName: "Kura-kura & Penyu", description: "Tubuh terlindung dalam tempurung karapas keras tulang dan plastron." },
                    { id: "rhynchocephalia", name: "Rhynchocephalia", indonesianName: "Tuatara Selandia Baru", description: "Garis keturunan reptil purba era Dinosaurus dengan mata ketiga (parietal eye)." }
                  ]
                },
                {
                  id: "amphibia",
                  name: "Amphibia",
                  indonesianName: "Kelas Amfibi (Dua Alam)",
                  description: "Ektoterm dengan kulit permeabel lembap sebagai organ respirasi kulit, siklus hidup metamorfosis dari larva air ke dewasa.",
                  orders: [
                    { id: "anura", name: "Anura", indonesianName: "Katak & Kodok", description: "Tanpa ekor di fase dewasa, kaki belakang panjang untuk melompat jauh dan kelenjar sekresi racun kulit." },
                    { id: "urodela", name: "Urodela", indonesianName: "Salamander", description: "Mempertahankan ekor sepanjang hidup, mampu meregenerasi organ tubuh yang putus secara utuh." }
                  ]
                },
                {
                  id: "chondrichthyes",
                  name: "Chondrichthyes",
                  indonesianName: "Kelas Ikan Bertulang Rawan (Hiu & Pari)",
                  description: "Kerangka tubuh tersusun dari tulang rawan elastis fleksibel, celah insang terbuka tanpa operkulum, sisik plakoid kasar mirip gigi kecil.",
                  orders: [
                    { id: "lamniformes", name: "Lamniformes", indonesianName: "Hiu Predator Makarel (Hiu Putih)", description: "Puncak rantai makanan samudra dengan sensor ampullae of Lorenzini pendeteksi listrik denyut mangsa." },
                    { id: "myliobatiformes", name: "Myliobatiformes", indonesianName: "Ikan Pari Duri & Pari Manta", description: "Tubuh pipih melebar bersayap dada dengan duri penyengat berbisa di pangkal ekor." }
                  ]
                },
                {
                  id: "actinopterygii",
                  name: "Actinopterygii",
                  indonesianName: "Kelas Ikan Bersirip Duri (Osteichthyes)",
                  description: "Kerangka bertulang sejati (keras), sirip disokong duri tulang halus radier, memiliki gelembung renang (swim bladder) pengatur daya apung.",
                  orders: [
                    { id: "osteoglossiformes", name: "Osteoglossiformes", indonesianName: "Ikan Lidah Bertulang (Arapaima & Arwana)", description: "Ikan air tawar purba raksasa dengan organ pernapasan labirin dan sisik baja berlapis kolagen." },
                    { id: "coelacanthiformes", name: "Coelacanthiformes", indonesianName: "Coelacanth (Ikan Fosil Hidup)", description: "Sirip berdaging mirip tungkai darat yang membuktikan transisi evolusi ikan ke tetrapoda berkaki." }
                  ]
                }
              ]
            },
            {
              id: "mollusca",
              name: "Mollusca",
              indonesianName: "Filum Hewan Bertubuh Lunak",
              description: "Tubuh lunak berotot tanpa segmen sejati, umumnya memiliki mantel pelindung yang mensekresikan cangkang kalsium karbonat, dan organ radula pemarut makanan.",
              classes: [
                {
                  id: "cephalopoda",
                  name: "Cephalopoda",
                  indonesianName: "Kelas Sefalopoda (Kaki di Kepala)",
                  description: "Invertebrata tercerdas di bumi dengan mata bertipe lensa kamera canggih, lengan/tentakel pengisap, dan kantung tinta pertahanan.",
                  orders: [
                    { id: "octopoda", name: "Octopoda", indonesianName: "Gurita", description: "Delapan lengan tanpa cangkang luar, kemampuan kamuflase tekstur & warna kulit instan." },
                    { id: "teuthida", name: "Teuthida", indonesianName: "Cumi-cumi", description: "Sepuluh anggota gerak (8 lengan + 2 tentakel penangkap) dan sirip kemudi berkecepatan jet hidrolik." },
                    { id: "nautilida", name: "Nautilida", indonesianName: "Nautilus", description: "Sefalopoda purba dengan cangkang berbilik spiral penampung gas daya apung." }
                  ]
                },
                {
                  id: "gastropoda",
                  name: "Gastropoda",
                  indonesianName: "Kelas Siput & Keong (Kaki di Perut)",
                  description: "Bergerak menggunakan kaki perut berotot tebal berlapis lendir, sebagian besar memiliki cangkang berputar melingkar tunggal.",
                  orders: [
                    { id: "neogastropoda", name: "Neogastropoda", indonesianName: "Siput Laut Kerucut Beracun (Conus)", description: "Siput predator laut bersenjatakan harpun bergigi radula dengan koktail neurotoksin terkuat." }
                  ]
                }
              ]
            },
            {
              id: "cnidaria",
              name: "Cnidaria",
              indonesianName: "Filum Ubur-ubur, Karang & Anemon",
              description: "Hewan simetri radial bertubuh gelatin dengan sel penyengat khusus (knidosit) berisi kapsul beracun (nematokis) untuk melumpuhkan mangsa.",
              classes: [
                {
                  id: "cubozoa",
                  name: "Cubozoa",
                  indonesianName: "Kelas Ubur-ubur Kotak",
                  description: "Payung berbentuk kotak kubus dengan 24 mata sejati berretina dan tentakel pembawa bisa kardiotoksik paling fatal di lautan.",
                  orders: [
                    { id: "chirodropida", name: "Chirodropida", indonesianName: "Tawon Laut Raksasa (Sea Wasp)", description: "Mampu melumpuhkan dan menghentikan jantung manusia dewasa dalam kurun waktu kurang dari 3 menit." }
                  ]
                },
                {
                  id: "anthozoa",
                  name: "Anthozoa",
                  indonesianName: "Kelas Karang & Anemon Laut",
                  description: "Fase polip menetap di dasar laut membentuk terumbu karang penghasil keanekaragaman hayati terbesar lautan.",
                  orders: [
                    { id: "actiniaria", name: "Actiniaria", indonesianName: "Anemon Laut Simbiosis", description: "Tentakel menyengat yang bersimbiosis mutualisme dengan ikan badut." }
                  ]
                }
              ]
            },
            {
              id: "echinodermata",
              name: "Echinodermata",
              indonesianName: "Filum Hewan Berkulit Duri",
              description: "Simetri tubuh radial pentamerik (berkelipatan 5) pada fase dewasa, endoskeleton berkapur, dan sistem pembuluh air (sistem ambulakral).",
              classes: [
                {
                  id: "asteroidea",
                  name: "Asteroidea",
                  indonesianName: "Kelas Bintang Laut",
                  description: "Piringan tubuh pusat dengan 5 atau lebih lengan fleksibel penjulur lambung untuk mencerna mangsa di luar tubuh.",
                  orders: [
                    { id: "valvatida", name: "Valvatida", indonesianName: "Bintang Laut Berduri Beracun", description: "Duri tajam beracun pemangsa polip karang hidup (seperti Acanthaster planci)." }
                  ]
                }
              ]
            },
            {
              id: "porifera",
              name: "Porifera",
              indonesianName: "Filum Spons / Hewan Berpori",
              description: "Hewan multiseluler paling primitif di dunia tanpa jaringan atau organ sejati, menyaring nutrisi air laut lewat pori-pori mikroskopis (ostia).",
              classes: [
                {
                  id: "demospongiae",
                  name: "Demospongiae",
                  indonesianName: "Kelas Spons Tanduk",
                  description: "Kerangka tersusun atas serabut protein spongin lentur dan spikula silika, menjadi tempat bernaung jutaan mikroorganisme laut.",
                  orders: [
                    { id: "dictyoceratida", name: "Dictyoceratida", indonesianName: "Spons Mandi Alami", description: "Spons lunak tanpa spikula kaca tajam, digunakan manusia sejak zaman Yunani Kuno." }
                  ]
                },
                {
                  id: "hexactinellida",
                  name: "Hexactinellida",
                  indonesianName: "Kelas Spons Kaca Laut Dalam",
                  description: "Kerangka tersusun atas spikula silika murni membentuk anyaman serat kaca optik alami di kedalaman samudra.",
                  orders: [
                    { id: "amphidiscosida", name: "Amphidiscosida", indonesianName: "Keranjang Bunga Venus", description: "Spons kaca laut dalam tempat sepasang udang bersimbiosis seumur hidup di dalamnya." }
                  ]
                }
              ]
            },
            {
              id: "annelida",
              name: "Annelida",
              indonesianName: "Filum Cacing Gelang Bersegmen",
              description: "Tubuh bersegmen metamerik nyata dengan selom sejati dan sistem peredaran darah tertutup.",
              classes: [
                {
                  id: "clitellata",
                  name: "Clitellata",
                  indonesianName: "Kelas Cacing Tanah & Lintah",
                  description: "Memiliki klitelum untuk reproduksi kokon telur, menguraikan bahan organik dan menyuburkan tanah bumi.",
                  orders: [
                    { id: "crassiclitellata", name: "Crassiclitellata", indonesianName: "Cacing Tanah Pengurai", description: "Perekayasa tanah esensial penunjang seluruh kehidupan tumbuhan darat di bumi." }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "plantae",
          name: "Plantae",
          indonesianName: "Kingdom Plantae (Dunia Tumbuhan / Viridiplantae)",
          description: "Organisme eukariotik multiseluler autotrof yang menghasilkan makanan dan oksigen sendiri melalui proses fotosintesis menggunakan pigmen klorofil di dalam kloroplas. Sel tumbuhan dilindungi dinding sel kaku berbahan selulosa.",
          characteristics: "Autotrof, Fotosintesis Oksigenik, Dinding Sel Selulosa",
          isPrimary: true,
          phyla: [
            {
              id: "magnoliophyta",
              name: "Magnoliophyta (Angiospermae)",
              indonesianName: "Filum Tumbuhan Berbunga & Berbiji Tertutup",
              description: "Filum tumbuhan terbesar dan paling dominan di daratan bumi, biji terlindung di dalam bakal buah (ovarium) dan memiliki bunga sebagai organ reproduksi.",
              classes: [
                {
                  id: "magnoliopsida",
                  name: "Magnoliopsida",
                  indonesianName: "Kelas Tumbuhan Berkeping Dua (Dikotil)",
                  description: "Biji memiliki dua kotiledon, berkas pengangkut teratur melingkar, daun bertulang menyirip/menjari, bunga kelipatan 4 atau 5.",
                  orders: [
                    { id: "malpighiales", name: "Malpighiales", indonesianName: "Bangsa Padma Raksasa", description: "Bunga parasitik terbesar di dunia (Rafflesia arnoldii)." },
                    { id: "caryophyllales", name: "Caryophyllales", indonesianName: "Bangsa Karnivora Perangkap Jepit", description: "Tumbuhan beradaptasi di tanah miskin hara dengan daun perangkap kinetik (Venus flytrap & Kantong Semar)." },
                    { id: "nymphaeales", name: "Nymphaeales", indonesianName: "Bangsa Teratai Purba", description: "Tumbuhan air mengapung berdaun raksasa tahan beban puluhan kilogram (Victoria amazonica)." }
                  ]
                },
                {
                  id: "liliopsida",
                  name: "Liliopsida",
                  indonesianName: "Kelas Tumbuhan Berkeping Tunggal (Monokotil)",
                  description: "Biji satu kotiledon, berkas pengangkut tersebar, daun bertulang sejajar/melengkung, bunga kelipatan 3.",
                  orders: [
                    { id: "alismatales", name: "Alismatales", indonesianName: "Bangsa Talas-talasan & Bunga Bangkai", description: "Menghasilkan perbungaan raksasa dengan bau bangkai pemikat kumbang bangkai (Amorphophallus titanum)." },
                    { id: "arecales", name: "Arecales", indonesianName: "Bangsa Palem-paleman", description: "Pohon tunggal berdaun kipas atau menyirip raksasa penyangga ekosistem tropis." }
                  ]
                }
              ]
            },
            {
              id: "pinophyta",
              name: "Pinophyta (Gymnospermae)",
              indonesianName: "Filum Tumbuhan Berbiji Terbuka / Konifer",
              description: "Tumbuhan berkayu dengan biji telanjang yang melekat pada sisik runjung (strobilus), daun jarum hijau abadi (evergreen) yang tahan cuaca ekstrem dingin.",
              classes: [
                {
                  id: "pinopsida",
                  name: "Pinopsida",
                  indonesianName: "Kelas Pohon Jarum & Sequoia",
                  description: "Pohon berkayu raksasa yang menjadi organisme berbobot terbesar dan tertua di dunia.",
                  orders: [
                    { id: "cupressales", name: "Cupressales", indonesianName: "Bangsa Pohon Cemara Raksasa", description: "Pohon Sequoia raksasa penyimpan karbon masif di pegunungan Sierra Nevada." }
                  ]
                }
              ]
            },
            {
              id: "ginkgophyta",
              name: "Ginkgophyta",
              indonesianName: "Filum Pohon Ginkgo (Fosil Hidup)",
              description: "Garis keturunan tumbuhan purba terisolasi yang hidup berdampingan dengan dinosaurus lebih dari 270 juta tahun lalu tanpa kerabat dekat yang tersisa.",
              classes: [
                {
                  id: "ginkgoopsida",
                  name: "Ginkgoopsida",
                  indonesianName: "Kelas Ginkgo Tunggal",
                  description: "Daun berbentuk kipas unik berbelah tengah, resisten terhadap polusi dan radiasi nuklir.",
                  orders: [
                    { id: "ginkgoales", name: "Ginkgoales", indonesianName: "Ordo Ginkgo", description: "Ginkgo biloba, pohon keramat Asia Timur dengan senyawa flavonoid antioksidan tinggi." }
                  ]
                }
              ]
            },
            {
              id: "gnetophyta",
              name: "Gnetophyta",
              indonesianName: "Filum Tumbuhan Gurun Ekstrem Namib",
              description: "Kelompok tumbuhan unik penghubung antara runjung dan tumbuhan berbunga dengan pembuluh kayu sejati.",
              classes: [
                {
                  id: "welwitschiopsida",
                  name: "Welwitschiopsida",
                  indonesianName: "Kelas Welwitschia Gurun",
                  description: "Hanya menghasilkan dua helai daun seumur hidup yang terus tumbuh terbelah selama ribuan tahun.",
                  orders: [
                    { id: "welwitschiales", name: "Welwitschiales", indonesianName: "Welwitschia Namib", description: "Welwitschia mirabilis yang menyerap kelembapan kabut gurun Namibia." }
                  ]
                }
              ]
            },
            {
              id: "pteridophyta",
              name: "Pteridophyta",
              indonesianName: "Filum Tumbuhan Paku-pakuan (Vaskular Spora)",
              description: "Tumbuhan berpembuluh sejati (xilem & floem) yang bereproduksi menggunakan spora tanpa bunga atau biji, daun muda menggulung (sirkina).",
              classes: [
                {
                  id: "polypodiopsida",
                  name: "Polypodiopsida",
                  indonesianName: "Kelas Paku Sejati & Paku Pohon",
                  description: "Paku purba pembentuk hutan batu bara zaman Karbonifero, memiliki sorus sporangia di bawah daun.",
                  orders: [
                    { id: "cyatheales", name: "Cyatheales", indonesianName: "Paku Pohon Purba", description: "Paku pohon raksasa yang batangnya menjulang mirip pohon palem di hutan hujan sejuk." }
                  ]
                }
              ]
            },
            {
              id: "bryophyta",
              name: "Bryophyta",
              indonesianName: "Filum Lumut Daun (Non-Vaskular)",
              description: "Tumbuhan perintis darat paling awal tanpa pembuluh pengangkut sejati, menyerap air secara kapilaritas langsung lewat seluruh sel tubuh.",
              classes: [
                {
                  id: "bryopsida",
                  name: "Bryopsida",
                  indonesianName: "Kelas Lumut Gambut & Daun",
                  description: "Membentuk hamparan karpet hijau penahan erosi dan pengatur siklus air bumi.",
                  orders: [
                    { id: "sphagnales", name: "Sphagnales", indonesianName: "Lumut Gambut Sphagnum", description: "Pengikat karbon global di lahan gambut basah kutub dan tropis." }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "fungi",
          name: "Fungi",
          indonesianName: "Kingdom Fungi (Dunia Jamur / Mycota)",
          description: "Organisme eukariotik heterotrof pengurai (saprofit) atau parasit yang menyerap nutrisi dari bahan organik luar dengan mensekresikan enzim hidrolitik ekstraseluler. Dinding selnya tersusun dari kitin kokoh mirip cangkang serangga.",
          characteristics: "Heterotrof Absorptif, Dinding Sel Kitin, Pengurai Esensial",
          isPrimary: true,
          phyla: [
            {
              id: "basidiomycota",
              name: "Basidiomycota",
              indonesianName: "Filum Jamur Basidio / Jamur Payung",
              description: "Menghasilkan spora seksual di luar sel mikroskopis berbentuk gada (basidium), memiliki tubuh buah makroskopis berpayung dan bilah.",
              classes: [
                {
                  id: "agaricomycetes",
                  name: "Agaricomycetes",
                  indonesianName: "Kelas Jamur Payung, Kayu & Bercahaya",
                  description: "Kelompok jamur terbesar pembusuk lignin kayu, sebagian menghasilkan racun mematikan, obat bernilai tinggi, atau cahaya bioluminesensi.",
                  orders: [
                    { id: "agaricales", name: "Agaricales", indonesianName: "Bangsa Jamur Payung Beracun & Bioluminesen", description: "Mencakup Amanita muscaria bertotol merah dan Mycena chlorophos yang berpendar hijau di malam gelap." },
                    { id: "polyporales", name: "Polyporales", indonesianName: "Bangsa Jamur Kayu Reishi / Lingzhi", description: "Ganoderma lucidum, jamur obat tradisional penyokong kekebalan tubuh ribuan tahun." }
                  ]
                }
              ]
            },
            {
              id: "ascomycota",
              name: "Ascomycota",
              indonesianName: "Filum Jamur Kantung / Asko",
              description: "Menghasilkan spora di dalam kantung mikroskopis khusus bernama askus (ascus), mencakup jamur ragi roti, penisilin, dan jamur ulat cordyceps.",
              classes: [
                {
                  id: "sordariomycetes",
                  name: "Sordariomycetes",
                  indonesianName: "Kelas Jamur Parasit Serangga (Cordyceps)",
                  description: "Jamur entomopatogen yang menginfeksi tubuh serangga inang, memanipulasi perilaku serangga, lalu menumbuhkan tubuh buah dari kepala inang.",
                  orders: [
                    { id: "hypocreales", name: "Hypocreales", indonesianName: "Bangsa Cordyceps Zombi", description: "Ophiocordyceps sinensis (emas Himalaya) bernilai ribuan dolar per kilogram." }
                  ]
                },
                {
                  id: "pezizomycetes",
                  name: "Pezizomycetes",
                  indonesianName: "Kelas Jamur Mangkok & Morel",
                  description: "Menghasilkan tubuh buah berbentuk mangkok atau berlekuk spons seperti sarang lebah yang sangat lezat.",
                  orders: [
                    { id: "pezizales", name: "Pezizales", indonesianName: "Bangsa Jamur Morel", description: "Morchella esculenta, jamur liar termahal buruan kuliner dunia." }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "protista",
          name: "Protista",
          indonesianName: "Kingdom Protista (Organisme Eukariotik Sederhana)",
          description: "Kelompok eukariota uniseluler atau multiseluler sederhana yang tidak dapat diklasifikasikan sebagai hewan, tumbuhan, atau jamur sejati. Mencakup alga bersel tunggal, protozoa predator, dan alga laut raksasa pembentuk hutan kelp bawah laut.",
          characteristics: "Sangat Beragam, Uniseluler/Koloni, Basis Rantai Makanan Air",
          isPrimary: true,
          phyla: [
            {
              id: "amoebozoa",
              name: "Amoebozoa",
              indonesianName: "Filum Amoeba & Jamur Lendir",
              description: "Bergerak dan memangsa bakteri/mikroba menggunakan tonjolan sitoplasma lentur seperti kaki semu (pseudopodia).",
              classes: [
                {
                  id: "tubulinea",
                  name: "Tubulinea",
                  indonesianName: "Kelas Amoeba Sejati",
                  description: "Bentuk sel fleksibel dinamis tanpa dinding sel kaku, memangsa mangsa lewat proses fagositosis.",
                  orders: [
                    { id: "euamoebida", name: "Euamoebida", indonesianName: "Amoeba Air Tawar", description: "Amoeba proteus, organisme model klasik dalam biologi seluler." }
                  ]
                }
              ]
            },
            {
              id: "ochrophyta",
              name: "Ochrophyta (Phaeophyceae)",
              indonesianName: "Filum Alga Cokelat & Kelp Raksasa",
              description: "Protista multiseluler laut berukuran raksasa yang memiliki pigmen fukoxantin cokelat keemasan, membentuk ekosistem hutan bawah laut terkaya.",
              classes: [
                {
                  id: "phaeophyceae",
                  name: "Phaeophyceae",
                  indonesianName: "Kelas Ganggang Pirang / Kelp",
                  description: "Organisme alga terbesar yang dapat tumbuh hingga 50 meter panjangnya dengan kantung udara pneumatokis pengapung.",
                  orders: [
                    { id: "laminariales", name: "Laminariales", indonesianName: "Bangsa Kelp Raksasa Pasifik", description: "Macrocystis pyrifera, kelp raksasa pemecah gelombang dan penyerap karbon samudra masif." }
                  ]
                }
              ]
            },
            {
              id: "dinoflagellata",
              name: "Dinoflagellata",
              indonesianName: "Filum Alga Api & Plankton Bercahaya",
              description: "Plankton laut berkulit lapis selulosa dengan dua flagela penggerak spiral, terkenal karena memicu fenomena bioluminesensi laut malam bercahaya biru magis.",
              classes: [
                {
                  id: "dinophyceae",
                  name: "Dinophyceae",
                  indonesianName: "Kelas Alga Kilau Laut (Sea Sparkle)",
                  description: "Menghasilkan kilatan cahaya biru saat terpicu riak ombak menggunakan reaksi enzim luciferin-luciferase.",
                  orders: [
                    { id: "noctilucales", name: "Noctilucales", indonesianName: "Bangsa Noctiluca", description: "Noctiluca scintillans, pencipta pemandangan laut bercahaya biru safir di malam hari." }
                  ]
                }
              ]
            },
            {
              id: "euglenozoa",
              name: "Euglenozoa",
              indonesianName: "Filum Euglena (Protista Hijau Campuran)",
              description: "Organisme mikroskopis unik yang memiliki kloroplas untuk fotosintesis layaknya tumbuhan, namun mampu berenang aktif memburu makanan layaknya hewan.",
              classes: [
                {
                  id: "euglenoidea",
                  name: "Euglenoidea",
                  indonesianName: "Kelas Euglena Berbintik Mata",
                  description: "Memiliki stigma (bintik mata merah fotoreseptor) untuk mendeteksi arah sumber sinar matahari.",
                  orders: [
                    { id: "euglenales", name: "Euglenales", indonesianName: "Bangsa Euglena", description: "Euglena gracilis penghasil nutrisi paramilon kaya protein." }
                  ]
                }
              ]
            },
            {
              id: "ciliophora",
              name: "Ciliophora",
              indonesianName: "Filum Protozoa Bersilia (Paramecium)",
              description: "Sel eukariotik kompleks yang seluruh permukaannya ditutupi ribuan rambut getar mikroskopis (silia) untuk berenang cepat dan menangkap bakteri.",
              classes: [
                {
                  id: "oligohymenophorea",
                  name: "Oligohymenophorea",
                  indonesianName: "Kelas Paramecium / Hewan Sandal",
                  description: "Memiliki vakuola kontraktil pemompa air dan dua inti sel (makronukleus somatik & mikronukleus generatif).",
                  orders: [
                    { id: "peniculida", name: "Peniculida", indonesianName: "Bangsa Paramecium", description: "Paramecium caudatum, organisme pengatur populasi bakteri air tawar alami." }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "bacteria",
      name: "Bacteria",
      indonesianName: "Domain Bacteria (Eubakteri / Bakteri Sejati)",
      description: "Domain mikroorganisme prokariotik uniseluler tanpa membran inti sel (materi genetik DNA melingkar bebas di sitoplasma nukleoid). Dinding sel bakteri mengandung peptidoglikan khusus yang membedakannya secara mendasar dari arkea dan eukariota.",
      cellType: "Prokariotik (Tanpa membran inti, dinding sel berpeptidoglikan)",
      isPrimary: false,
      kingdoms: [
        {
          id: "eubacteria",
          name: "Eubacteria",
          indonesianName: "Kingdom Bakteri Sejati",
          description: "Mencakup triliunan mikroba di tanah, air, udara, hingga di dalam saluran pencernaan manusia sebagai mikrobioma simbiosis maupun patogen.",
          characteristics: "Dinding Peptidoglikan, Reproduksi Pembelahan Biner Cepat",
          phyla: [
            {
              id: "pseudomonadota",
              name: "Pseudomonadota (Proteobacteria)",
              indonesianName: "Filum Proteobakteri (Gram Negatif)",
              description: "Filum bakteri terbesar dan sangat beragam secara metabolik, mencakup bakteri fiksasi nitrogen tanah hingga bakteri usus pencernaan.",
              classes: [
                {
                  id: "gammaproteobacteria",
                  name: "Gammaproteobacteria",
                  indonesianName: "Kelas Enterobakteri Usus & Model Sains",
                  description: "Bakteri batang anaerob fakultatif penghuni usus mamalia yang paling banyak dipelajari dalam sejarah genetika dan bioteknologi modern.",
                  orders: [
                    { id: "enterobacterales", name: "Enterobacterales", indonesianName: "Bangsa Escherichia", description: "Escherichia coli strain K-12, fondasi rekayasa genetika dan produksi insulin dunia." }
                  ]
                }
              ]
            },
            {
              id: "cyanobacteria",
              name: "Cyanobacteria",
              indonesianName: "Filum Bakteri Biru-Hijau Fotosintetik",
              description: "Pahlawan evolusi bumi yang 2,4 miliar tahun lalu memulai peristiwa Oksigenasi Besar (Great Oxidation Event) pengubah atmosfer bumi menjadi kaya oksigen.",
              classes: [
                {
                  id: "cyanophyceae",
                  name: "Cyanophyceae",
                  indonesianName: "Kelas Spirulina & Sianobakteri",
                  description: "Bakteri fotosintesis berklorofil-a dan fikosianin biru pembentuk superfood bernutrisi tinggi.",
                  orders: [
                    { id: "spirulinales", name: "Spirulinales", indonesianName: "Bangsa Spirulina", description: "Arthrospira platensis (Spirulina) kaya protein dan asam amino esensial." }
                  ]
                }
              ]
            },
            {
              id: "deinococcota",
              name: "Deinococcota",
              indonesianName: "Filum Bakteri Tahan Radiasi Ekstrem",
              description: "Organisme paling tangguh terhadap radiasi di alam semesta, mampu memperbaiki ratusan patahan untai ganda DNA dalam hitungan jam.",
              classes: [
                {
                  id: "deinococci",
                  name: "Deinococci",
                  indonesianName: "Kelas Conan the Bacterium",
                  description: "Mampu bertahan hidup dalam dosis radiasi nuklir 10.000 Gray yang dapat membunuh manusia ribuan kali lipat.",
                  orders: [
                    { id: "deinococcales", name: "Deinococcales", indonesianName: "Bangsa Deinococcus", description: "Deinococcus radiodurans, kandidat mikroba eksplorasi luar angkasa dan bioremediasi limbah nuklir." }
                  ]
                }
              ]
            },
            {
              id: "actinomycetota",
              name: "Actinomycetota",
              indonesianName: "Filum Bakteri Filamen Penghasil Antibiotik",
              description: "Bakteri tanah mirip miselium jamur yang bertanggung jawab atas aroma khas tanah basah sehabis hujan (geosmin) dan penghasil mayoritas antibiotik medis.",
              classes: [
                {
                  id: "actinomycetes",
                  name: "Actinomycetes",
                  indonesianName: "Kelas Streptomyces Farmasi Alami",
                  description: "Menghasilkan lebih dari 70% antibiotik alami dunia termasuk streptomisin, tetrasiklin, dan eritromisin.",
                  orders: [
                    { id: "streptomycetales", name: "Streptomycetales", indonesianName: "Bangsa Streptomyces", description: "Streptomyces coelicolor penghasil pigmen biru aktinorhodin dan senyawa antimikroba." }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "archaea",
      name: "Archaea",
      indonesianName: "Domain Archaea (Mikroba Purba Ekstremofil)",
      description: "Domain mikroorganisme prokariotik uniseluler tertua yang membran selnya tersusun dari ikatan eter lipid bercabang (isoprenoid) tahan suhu dan asam ekstrem. Garis keturunan molekuler transkripsinya lebih dekat ke Eukariota daripada ke Bakteri sejati.",
      cellType: "Prokariotik Khusus (Membran lipid ikatan eter isoprenoid, tanpa peptidoglikan)",
      isPrimary: false,
      kingdoms: [
        {
          id: "archaebacteria",
          name: "Archaebacteria",
          indonesianName: "Kingdom Arkea Purba",
          description: "Mendiami habitat paling ekstrem di muka bumi yang mematikan bagi makhluk hidup lain: kawah vulkanik mendidih, lubang hidrotermal asam, danau garam jenuh, dan kawah belerang.",
          characteristics: "Ekstremofil (Termofil, Asidofil, Halofil, Metanogen)",
          phyla: [
            {
              id: "thermoproteota",
              name: "Thermoproteota (Crenarchaeota)",
              indonesianName: "Filum Arkea Kawah & Ventil Panas Laut",
              description: "Hipertermofil yang hidup dan berkembang biak optimal pada suhu air di atas 100°C di sekitar mata air belerang kawah gunung berapi dan ventil hidrotermal laut dalam.",
              classes: [
                {
                  id: "thermoprotei",
                  name: "Thermoprotei",
                  indonesianName: "Kelas Pyrolobus & Sulfolobus",
                  description: "Enzim-enzim selulernya tahan denaturasi panas luar biasa dan mengoksidasi senyawa sulfur anorganik.",
                  orders: [
                    { id: "sulfolobales", name: "Sulfolobales", indonesianName: "Bangsa Sulfolobus Asam Mendidih", description: "Sulfolobus acidocaldarius, hidup di lumpur belerang mendidih pH 2 dan suhu 80°C." },
                    { id: "desulfurococcales", name: "Desulfurococcales", indonesianName: "Bangsa Pyrolobus Ventil Laut Dalam", description: "Pyrolobus fumarii yang mampu membelah diri pada suhu 113°C di dasar samudra tanpa oksigen." }
                  ]
                }
              ]
            },
            {
              id: "halobacteriota",
              name: "Halobacteriota",
              indonesianName: "Filum Arkea Danau Garam Jenuh Merah Muda",
              description: "Halofil ekstrem yang membutuhkan konsentrasi garam NaCl hingga 30% (hampir jenuh) untuk mempertahankan struktur dinding selnya.",
              classes: [
                {
                  id: "halobacteria",
                  name: "Halobacteria",
                  indonesianName: "Kelas Arkea Garam Bakteriorhodopsin",
                  description: "Memiliki pigmen membran ungu-merah bakteriorhodopsin yang menangkap energi cahaya matahari langsung untuk memompa proton tanpa klorofil.",
                  orders: [
                    { id: "halobacteriales", name: "Halobacteriales", indonesianName: "Bangsa Halobacterium", description: "Halobacterium salinarum pembuat warna merah jambu di danau air asin Great Salt Lake dan Laut Mati." }
                  ]
                }
              ]
            },
            {
              id: "euryarchaeota",
              name: "Euryarchaeota (Methanobacteria)",
              indonesianName: "Filum Arkea Penghasil Gas Metana",
              description: "Mikroorganisme anaerob obligat yang mereduksi karbon dioksida menjadi gas metana (CH4), penting dalam siklus biogeokimia global dan rumen hewan ruminansia.",
              classes: [
                {
                  id: "methanobacteria",
                  name: "Methanobacteria",
                  indonesianName: "Kelas Metanogen Anaerob",
                  description: "Produsen gas alam biogas di rawa-rawa lumpur dan saluran pencernaan hewan.",
                  orders: [
                    { id: "methanobacteriales", name: "Methanobacteriales", indonesianName: "Bangsa Methanobacterium", description: "Methanobrevibacter smithii pengurai serat dalam mikrobioma usus mamalia." }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// New iconic species across all kingdoms
const newSpecies = [
  // Plantae
  {
    id: "rafflesia-arnoldii",
    commonNameId: "Padma Raksasa",
    commonNameEn: "Corpse Flower / Giant Padman",
    scientificName: "Rafflesia arnoldii",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Rafflesia_arnoldii_at_Bukit_Palupuh_Agam.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Mekarnya bunga tunggal terbesar di dunia di hutan hujan Sumatra",
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
      clawForceScore: 5,
      clawForceDescription: "Tumbuhan holoparasit tanpa daun, batang sejati, ataupun akar; menyusupkan jaringan haustorium ke dalam sulur inang Tetrastigma.",
      venomToxicityScore: 40,
      venomDescription: "Mengeluarkan aroma busuk bangkai pekat dari senyawa sulfur dimetil disulfida untuk memikat ribuan lalat bangkai penyerbuk.",
      category: "Pertahanan Kimiawi / Bau Bangkai Pemikat"
    },
    habitat: "Lantai hutan hujan dataran rendah Sumatra dan Kalimantan (endemik Indonesia)",
    diet: "Autotrof Parasitik (Menyerap seluruh nutrisi air & gula dari inang Tetrastigma)",
    size: "Diameter bunga mencapai 100 - 110 cm, Bobot hingga 11 kg",
    lifespan: "Kuncup berkembang 9 - 12 bulan, mekar penuh hanya 5 - 7 hari",
    iucnStatus: "Kritis (Critically Endangered / Lindungan Penuh)",
    bioluminescence: "Tidak bercahaya, menghasilkan panas termogenik untuk menyebarkan bau bangkai.",
    description: "Rafflesia arnoldii memegang rekor botani dunia sebagai bunga tunggal terbesar di planet bumi. Tumbuhan luar biasa ini tidak memiliki klorofil dan sepenuhnya bergantung pada tanaman sulur liar genus Tetrastigma. Mekarnya bunga ini menyebarkan bau bangkai busuk yang dapat tercium hingga puluhan meter untuk mengundang lalat penyerbuk.",
    facts: [
      "Dinobatkan secara resmi sebagai Puspa Langka Nasional Republik Indonesia.",
      "Tidak memiliki daun sama sekali untuk fotosintesis, seluruh nutrisi diperoleh secara parasitik.",
      "Kuncupnya membutuhkan waktu hampir satu tahun untuk membesar seperti kol sebelum mekar hanya selama satu pekan.",
      "Kelopaknya tebal berdaging mirip daging sapi dengan bintik-bintik putih khas."
    ]
  },
  {
    id: "amorphophallus-titanum",
    commonNameId: "Bunga Bangkai Raksasa",
    commonNameEn: "Titan Arum",
    scientificName: "Amorphophallus titanum",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Amorphophallus_titanum_botbg_02.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Perbungaan tunggal tak bercabang menjulang setinggi lebih dari 3 meter",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Liliopsida",
      order: "Alismatales",
      family: "Araceae",
      genus: "Amorphophallus",
      species: "Amorphophallus titanum"
    },
    tradeOff: {
      clawForceScore: 10,
      clawForceDescription: "Umbi bawah tanah raksasa seberat hingga 117 kg yang menyimpan cadangan energi untuk menembakkan bunga vertikal.",
      venomToxicityScore: 45,
      venomDescription: "Kaya kristal kalsium oksalat tajam di seluruh jaringannya yang menyebabkan sensasi terbakar parah jika termakan herbivora.",
      category: "Senjata Kimia / Oksalat & Bau Bangkai"
    },
    habitat: "Lereng bukit hutan hujan tropis Sumatra Barat (endemik Indonesia)",
    diet: "Autotrof (Fotosintesis melalui sebatang daun tunggal raksasa mirip pohon setinggi 6 meter)",
    size: "Tinggi perbungaan spadiks 2,5 - 3,2 meter, Lingkar seludang spata 1,5 meter",
    lifespan: "Dapat hidup 30 - 40 tahun di habitat alami",
    iucnStatus: "Terancam (Endangered)",
    bioluminescence: "Menghasilkan panas internal (termogenesis) hingga 37°C di puncak spadiks.",
    description: "Bunga Bangkai Raksasa (Titan Arum) adalah pemilik perbungaan tak bercabang tertinggi di dunia. Berbeda dengan Rafflesia yang berupa bunga tunggal, struktur bunga bangkai terdiri atas ribuan bunga kecil di pangkal tongkol tengah (spadiks) yang dikelilingi seludang ungu keemasan (spata). Saat mekar, tongkolnya memanas hingga 37°C untuk menguapkan aroma bangkai dan bangkai ikan busuk.",
    facts: [
      "Hanya mekar sekali setiap 3 hingga 7 tahun sekali, dan mekarnya hanya berlangsung 24-48 jam.",
      "Menghasilkan umbi (corm) bawah tanah terbesar di dunia nabati seberat lebih dari 100 kg.",
      "Daun tunggalnya dapat tumbuh setinggi 6 meter dengan bentang kanopi 5 meter sehingga kerap dikira pohon berkayu.",
      "Aroma busuknya berasal dari senyawa dimetil trisulfida dan asam isovalerat pemikat kumbang bangkai."
    ]
  },
  {
    id: "nepenthes-rajah",
    commonNameId: "Kantong Semar Raksasa Kalimantan",
    commonNameEn: "Rajah Pitcher Plant",
    scientificName: "Nepenthes rajah",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nepenthes_rajah_pitcher.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Kantong perangkap raksasa mampu menampung hingga 3,5 liter cairan enzim pencerna",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Caryophyllales",
      family: "Nepenthaceae",
      genus: "Nepenthes",
      species: "Nepenthes rajah"
    },
    tradeOff: {
      clawForceScore: 35,
      clawForceDescription: "Peristom bergerigi licin tebal berpelumas cair yang membuat mangsa tergelincir masuk ke dalam jebakan tanpa bisa memanjat keluar.",
      venomToxicityScore: 50,
      venomDescription: "Cairan pencerna kaya enzim protease, fosfatase, dan asam klorida kental yang melarutkan daging vertebrata dalam hitungan hari.",
      category: "Perangkap Hidrolik & Enzimatis"
    },
    habitat: "Lantai puncak pegunungan ultramafik dingin Gunung Kinabalu, Kalimantan (1.500 - 2.650 mdpl)",
    diet: "Karnivora Nabati (Serangga, katak, tokek, hingga tikus tanah kecil dan kotoran mamalia pohon)",
    size: "Kantong mencapai tinggi 41 cm dan lebar 20 cm, volume cairan 3,5 liter",
    lifespan: "Dapat hidup puluhan tahun di lereng pegunungan tinggi",
    iucnStatus: "Terancam (Endangered / CITES Appendix I)",
    bioluminescence: "Bibir peristom berpendar biru muda di bawah spektrum sinar UV untuk menarik serangga malam.",
    description: "Nepenthes rajah adalah tanaman karnivora terbesar di bumi. Kantongnya yang berwarna merah marun pekat mampu menampung hingga 3,5 liter cairan pencerna asam. Tanaman ini begitu besar sehingga kerap ditemukan bangkai katak, kadal, dan tikus tanah gunung tenggelam dan tercerna di dalam kantongnya.",
    facts: [
      "Spesimen kantong semar terbesar yang pernah dicatat ilmuwan di Gunung Kinabalu.",
      "Peristom bergerigi di bibir kantong memproduksi nektar manis yang sangat disukai tupai tanah.",
      "Memiliki status perlindungan internasional tertinggi CITES Appendix I karena perburuan liar.",
      "Dinding dalam kantong dilapisi lilin mikroskopis anti-cengkeram yang menggagalkan cakar hewan pemanjat."
    ]
  },
  {
    id: "dionaea-muscipula",
    commonNameId: "Venus Perangkap Lalat",
    commonNameEn: "Venus Flytrap",
    scientificName: "Dionaea muscipula",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Venus_Flytrap_showing_trigger_hairs.jpg/640px-Venus_Flytrap_showing_trigger_hairs.jpg",
    imageCaption: "Daun perangkap berengsel dengan bulu pemicu mekanik yang menutup dalam 100 milidetik",
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
      clawForceScore: 68,
      clawForceDescription: "Kecepatan katup jepit mencapai 100 milidetik berkat perubahan tekanan turgor seluler dan pelepasan energi elastisitas daun.",
      venomToxicityScore: 42,
      venomDescription: "Kelenjar merah mensekresikan koktail enzim amilase, esterase, dan asam fosfatase untuk melumatkan tubuh kitin serangga.",
      category: "Jepitan Mekanik Cepat & Enzim Pencerna"
    },
    habitat: "Rawa gambut basah berpasir miskin nitrogen (Carolina Utara & Selatan, Amerika Serikat)",
    diet: "Karnivora Nabati (Lalat, semut, laba-laba, kumbang kecil)",
    size: "Rumpun daun 10 - 15 cm, diameter cuping jepit 2 - 3 cm",
    lifespan: "Dapat bertahan hidup hingga 20 tahun di alam liar",
    iucnStatus: "Rentan (Vulnerable)",
    bioluminescence: "Menghasilkan sinyal aksi potensial listrik saat bulu sensorik tersentuh.",
    description: "Venus Flytrap adalah tanaman karnivora ikonik yang mampu melakukan gerakan motorik secepat kilat. Ketika serangga menyentuh dua bulu pemicu dalam rentang 20 detik, jebakan akan membanting menutup dalam 100 milidetik, mengurung mangsa di dalam kisi duri selayaknya jeruji penjara.",
    facts: [
      "Tanaman ini memiliki kemampuan 'berhitung': membutuhkan 2 sentuhan untuk menutup, dan 5 rangsangan untuk mulai memproduksi enzim pencerna.",
      "Gerakannya didorong oleh pergeseran instan air antar-sel dinding daun.",
      "Membutuhkan waktu 7 - 10 hari untuk mencerna satu mangsa sebelum daun membuka kembali.",
      "Karnivori berevolusi sebagai adaptasi terhadap tanah rawa gambut yang sangat miskin nitrogen."
    ]
  },
  {
    id: "sequoiadendron-giganteum",
    commonNameId: "Pohon Sequoia Raksasa",
    commonNameEn: "Giant Sequoia",
    scientificName: "Sequoiadendron giganteum",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/General_Sherman_Tree_July_2013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Pohon 'General Sherman' adalah makhluk hidup tunggal terbesar di bumi berdasarkan volume batang",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Pinophyta",
      class: "Pinopsida",
      order: "Cupressales",
      family: "Cupressaceae",
      genus: "Sequoiadendron",
      species: "Sequoiadendron giganteum"
    },
    tradeOff: {
      clawForceScore: 92,
      clawForceDescription: "Batang kayu terpadat dan terbesar di dunia, kulit kayu setebal 60 cm tahan api kebakaran hutan dan kebal serangan jamur pelapuk.",
      venomToxicityScore: 15,
      venomDescription: "Kaya asam tanat pekat di seluruh kulit dan serat kayunya yang membuat kayu tidak dapat dimakan rayap.",
      category: "Struktur Fisik Masif & Pertahanan Tanin"
    },
    habitat: "Lereng barat Pegunungan Sierra Nevada, California, Amerika Serikat (1.400 - 2.150 mdpl)",
    diet: "Autotrof (Menyerap ratusan liter air tanah dan mengolah CO2 di kanopi setinggi pencakar langit)",
    size: "Tinggi 75 - 85 meter, Diameter pangkal batang hingga 11 meter, Volume kayu 1.487 m³",
    lifespan: "3.000 - 3.400 tahun (salah satu makhluk tertua di bumi)",
    iucnStatus: "Terancam (Endangered)",
    bioluminescence: "Tidak bercahaya; runjung membutuhkan api hutan alami untuk memicu pelepasan biji secara pirofilik.",
    description: "Pohon Sequoia Raksasa adalah organisme hidup tunggal terbesar di muka bumi menurut volume batang. Spesimen General Sherman memiliki volume kayu mendekati 1.500 meter kubik dan bobot diperkirakan melebihi 1.900 ton. Kulit kayunya tebal tahan api melindunginya dari kebakaran hutan selama ribuan tahun.",
    facts: [
      "Biji sequoia hanya berukuran sebesar serpihan gandum kecil, namun tumbuh menjadi pohon berbobot ribuan ton.",
      "Siklus reproduksinya membutuhkan api kebakaran hutan berkala untuk membuka runjung.",
      "Kulit kayunya mengandung sedikit getah resin mudah terbakar dan kaya tanin tahan api.",
      "Akar pohon ini relatif dangkal (hanya 1-2 meter ke dalam tanah) namun menjalar sejauh 30 meter."
    ]
  },
  {
    id: "ginkgo-biloba",
    commonNameId: "Pohon Ginkgo (Fosil Hidup)",
    commonNameEn: "Maidenhair Tree / Ginkgo",
    scientificName: "Ginkgo biloba",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ginkgo_biloba_in_the_grounds_of_Nanshan_Temple%2C_China.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Pohon ginkgo emas di Tiongkok yang bertahan ribuan tahun sejak zaman purba",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Ginkgophyta",
      class: "Ginkgoopsida",
      order: "Ginkgoales",
      family: "Ginkgoaceae",
      genus: "Ginkgo",
      species: "Ginkgo biloba"
    },
    tradeOff: {
      clawForceScore: 70,
      clawForceDescription: "Kayu sangat elastis dan tahan badai angin kencang, mampu menghasilkan tunas udara (chichi) untuk memperbarui diri.",
      venomToxicityScore: 35,
      venomDescription: "Biji betina mengeluarkan aroma asam butirat menyengat dan ginkgotoksin.",
      category: "Daya Tahan Purba & Fitokimia Flavonoid"
    },
    habitat: "Lembah pegunungan Zhejiang, Tiongkok (kini dibudidayakan di seluruh dunia)",
    diet: "Autotrof (Fotosintesis melalui daun kipas bercabang dua khas)",
    size: "Tinggi 20 - 35 meter, diameter kanopi lebar",
    lifespan: "Dapat melampaui 1.500 - 2.500 tahun",
    iucnStatus: "Terancam di alam liar (Endangered in wild)",
    bioluminescence: "Daun berubah menjadi warna kuning emas berkilau spektakuler di musim gugur.",
    description: "Ginkgo biloba adalah fosil hidup termasyhur yang telah menghuni bumi sejak 270 juta tahun lalu sebelum dinosaurus. Pohon ini memiliki ketahanan luar biasa terhadap polusi, penyakit jamur, radiasi nuklir, dan bahkan bertahan hidup di Hiroshima pasca ledakan 1945.",
    facts: [
      "Enam pohon ginkgo di Hiroshima yang berjarak hanya 1-2 km dari pusat ledakan bom atom selamat dan terus tumbuh.",
      "Daunnya berbentuk kipas dengan pertulangan dikotomis unik.",
      "Ekstrak daun ginkgo kaya ginkgolida dan bilobalida untuk sirkulasi darah dan otak.",
      "Bersifat berumah dua (dioecious) dengan pohon jantan dan betina terpisah."
    ]
  },
  {
    id: "welwitschia-mirabilis",
    commonNameId: "Welwitschia Ajaib Gurun Namib",
    commonNameEn: "Welwitschia",
    scientificName: "Welwitschia mirabilis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Welwitschia_mirabilis%281%29.jpg/640px-Welwitschia_mirabilis%281%29.jpg",
    imageCaption: "Dua helai daun purba yang terus tumbuh memanjang dan terbelah selama ribuan tahun",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Gnetophyta",
      class: "Welwitschiopsida",
      order: "Welwitschiales",
      family: "Welwitschiaceae",
      genus: "Welwitschia",
      species: "Welwitschia mirabilis"
    },
    tradeOff: {
      clawForceScore: 60,
      clawForceDescription: "Batang berkayu tebal tenggelam di pasir mirip cakram kayu perisai dengan akar tunggang menembus air tanah sedalam puluhan meter.",
      venomToxicityScore: 20,
      venomDescription: "Mengakumulasi kristal getah pahit dan lignin padat di daunnya.",
      category: "Adaptasi Xerofitik Ekstrem Gurun"
    },
    habitat: "Gurun Namib (Namibia & Angola), salah satu gurun pasir tertua dan terkering di bumi",
    diet: "Autotrof (Menyerap embun kabut laut Atlantik melalui stomata khusus)",
    size: "Daun dapat memanjang hingga 4 meter dan terbelah menjadi pita kusut",
    lifespan: "1.000 hingga 2.000 tahun di padang pasir tandus",
    iucnStatus: "Risiko Rendah / Lindungan Ketat Nasional",
    bioluminescence: "Tidak bercahaya, daun memantulkan radiasi sinar matahari gurun.",
    description: "Welwitschia mirabilis seumur hidupnya HANYA memproduksi dua helai daun sejati dari batangnya. Terpaan angin pasir gurun membelah kedua daun menjadi pita-pita kusut selama berabad-abad. Tumbuhan ini bertahan hidup dari kabut laut dingin Atlantik.",
    facts: [
      "Hanya memiliki dua helai daun asli seumur hidupnya yang tidak pernah gugur.",
      "Banyak spesimen hidup dipastikan telah berusia lebih dari 1.500 tahun melalui penanggalan karbon radioaktif.",
      "Dianggap jembatan filogenetik antara konifer berbiji terbuka dan tumbuhan berbunga.",
      "Sering disebut masyarakat lokal sebagai bawang gurun purba."
    ]
  },
  {
    id: "victoria-amazonica",
    commonNameId: "Teratai Raksasa Amazon",
    commonNameEn: "Giant Water Lily",
    scientificName: "Victoria amazonica",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Victoria_amazonica_%28giant_amazon_water_lily%29_in_Jardin_Botanique_de_Montreal%2C_Canada.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Daun melingkar mengapung berdiameter 3 meter dengan tepian melengkung ke atas",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Nymphaeales",
      family: "Nymphaeaceae",
      genus: "Victoria",
      species: "Victoria amazonica"
    },
    tradeOff: {
      clawForceScore: 78,
      clawForceDescription: "Anyaman rusuk berongga di bawah daun memiliki daya apung luar biasa yang mampu menopang beban hingga 40-50 kg tanpa tenggelam.",
      venomToxicityScore: 30,
      venomDescription: "Bagian bawah daun dan tangkai dipersenjatai duri tajam beracun ringan untuk mencegah ikan herbivora memakannya.",
      category: "Arsitektur Apung Struktural & Duri Pelindung"
    },
    habitat: "Danau oxbow, rawa tenang, dan laguna cekungan Sungai Amazon & Orinoco",
    diet: "Autotrof (Fotosintesis permukaan daun raksasa penyerap sinar matahari tropis)",
    size: "Diameter daun mencapai 3 meter, panjang tangkai bawah air 7 - 8 meter",
    lifespan: "Tumbuhan tahunan (perennial) di iklim tropis basah",
    iucnStatus: "Data Deficient / Perhatian Konservasi Rawa Tropis",
    bioluminescence: "Bunganya mekar malam hari menghasilkan panas dan berganti warna dari putih ke merah muda.",
    description: "Victoria amazonica memiliki daun apung terbesar di bumi hingga diameter 3 meter. Di bawah daun terdapat rusuk arsitektural berongga udara yang menopang daun sehingga anak manusia dapat duduk di atasnya tanpa tenggelam.",
    facts: [
      "Struktur rusuk daun menginspirasi pembangunan Crystal Palace di London pada tahun 1851.",
      "Bunga hari pertama berwarna putih harum mekar malam hari, lalu berubah merah muda di malam kedua.",
      "Tepi daun memiliki celah pembuangan air alami agar air hujan tidak menggenang.",
      "Duri tajam di balik daun melindungi teratai dari gigitan manatee dan ikan pemakan tumbuhan."
    ]
  },

  // Fungi
  {
    id: "amanita-muscaria",
    commonNameId: "Jamur Lalat Merah Berbintik",
    commonNameEn: "Fly Agaric",
    scientificName: "Amanita muscaria",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vmsp.jpg/640px-Amanita_muscaria_3_vmsp.jpg",
    imageCaption: "Tudung merah cerah bertotol putih yang menjadi ikon klasik jamur dongeng dunia",
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
      clawForceScore: 5,
      clawForceDescription: "Tubuh buah berdaging lunak berpori tanpa kekuatan mekanik fisik.",
      venomToxicityScore: 84,
      venomDescription: "Kaya neurotoksin asam ibotenat dan muscimol yang memicu disorientasi, halusinasi, dan kejang.",
      category: "Neurotoksin Kimiawi Alami Jamur"
    },
    habitat: "Lantai hutan pinus dan betula di belahan bumi utara beriklim sedang hingga dingin",
    diet: "Mikoriza Simbiotik (Menukar mineral tanah dengan gula glukosa dari akar pohon inang)",
    size: "Diameter tudung 8 - 20 cm, Tinggi tangkai 10 - 25 cm",
    lifespan: "Tubuh buah bertahan 1 - 2 minggu, jaringan miselium tanah bertahan ratusan tahun",
    iucnStatus: "Risiko Rendah (Least Concern)",
    bioluminescence: "Warna merah cerah bertindak sebagai sinyal aposematik peringatan racun.",
    description: "Amanita muscaria adalah jamur paling terkenal di dunia dengan tudung merah bintik putih. Mengandung neurotoksin asam ibotenat dan muscimol yang digunakan dalam ritual perdukunan kuno Siberia dan Skandinavia.",
    facts: [
      "Menginspirasi jamur 'Super Mushroom' dalam game legendaris Super Mario Bros.",
      "Nama 'Fly Agaric' berasal dari tradisi kuno merendam jamur ke susu untuk meracuni lalat rumah.",
      "Bersimbiosis mikoriza wajib dengan akar pohon pinus dan birch.",
      "Bintik putih adalah sisa selubung universal yang robek saat tudung mekar."
    ]
  },
  {
    id: "ophiocordyceps-sinensis",
    commonNameId: "Jamur Ulat Cordyceps (Emas Himalaya)",
    commonNameEn: "Caterpillar Fungus / Yartsa Gunbu",
    scientificName: "Ophiocordyceps sinensis",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ophiocordyceps_sinensis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Miselium jamur menumbuhkan stroma buah keluar dari kepala mumi ulat ngengat hantu",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Fungi",
      phylum: "Ascomycota",
      class: "Sordariomycetes",
      order: "Hypocreales",
      family: "Ophiocordycipitaceae",
      genus: "Ophiocordyceps",
      species: "Ophiocordyceps sinensis"
    },
    tradeOff: {
      clawForceScore: 25,
      clawForceDescription: "Hifa jamur menembus karapas ulat dan menggantikan seluruh organ dalam ulat menjadi miselium padat.",
      venomToxicityScore: 65,
      venomDescription: "Memproduksi senyawa cordycepin dan polisakarida bioaktif.",
      category: "Parasitoid Entomopatogen Khusus"
    },
    habitat: "Padang rumput alpen Plato Tibet dan pegunungan Himalaya (3.000 - 5.000 mdpl)",
    diet: "Parasitoid Entomopatogen (Memangsa larva ulat ngengat hantu Thitarodes di bawah tanah)",
    size: "Panjang tubuh ulat 3 - 5 cm, panjang tangkai stroma jamur 4 - 10 cm",
    lifespan: "Siklus hidup parasitik berkembang selama musim dingin dan bertunas di awal musim panas",
    iucnStatus: "Rentan (Vulnerable / Overexploited)",
    bioluminescence: "Tidak bercahaya, tumbuh tersembunyi di padang rumput berselimut salju.",
    description: "Ophiocordyceps sinensis menginfeksi ulat ngengat hantu di bawah tanah pegunungan Himalaya, memakan jaringan ulat dari dalam, dan menumbuhkan tangkai buah jamur keluar dari kepala inang.",
    facts: [
      "Salah satu komoditas biologis termahal di bumi berharga puluhan ribu dolar per kg.",
      "Menginspirasi konsep infeksi jamur pengubah zombi dalam fiksi 'The Last of Us'.",
      "Digunakan dalam pengobatan tradisional Tiongkok dan Tibet selama ribuan tahun.",
      "Menjadi tumpuan ekonomi utama ribuan keluarga penggembala di Himalaya."
    ]
  },
  {
    id: "mycena-chlorophos",
    commonNameId: "Jamur Menyala Hijau Neon",
    commonNameEn: "Luminescent Ghost Mushroom",
    scientificName: "Mycena chlorophos",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mycena_chlorophos.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Pendaran hijau terang bioluminesensi terpancar dari bilah tudung jamur di kegelapan malam",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Fungi",
      phylum: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Mycenaceae",
      genus: "Mycena",
      species: "Mycena chlorophos"
    },
    tradeOff: {
      clawForceScore: 5,
      clawForceDescription: "Tubuh buah halus berlendir dan rapuh berdiameter 1-3 cm pada ranting kayu membusuk.",
      venomToxicityScore: 25,
      venomDescription: "Kandungan kimiawi ringan tidak beracun fatal, namun tidak lazim dikonsumsi.",
      category: "Bioluminesensi Enzimatis Oksigenik"
    },
    habitat: "Lantai hutan hujan subtropis dan tropis lembap di pulau-pulau Pasifik (Kepulauan Hachijo Jepang, Polinesia, Sri Lanka)",
    diet: "Saprofit Pengurai (Menguraikan serasah dahan kayu lapuk dan kulit kayu basah)",
    size: "Diameter tudung 15 - 30 mm, tinggi tangkai 10 - 30 mm",
    lifespan: "Tubuh buah bersinar paling terang selama 24 - 72 jam setelah muncul",
    iucnStatus: "Data Deficient / Jarang",
    bioluminescence: "Bioluminesensi hijau terang pekat (panjang gelombang 522-530 nm) terlihat jelas dengan mata telanjang.",
    description: "Mycena chlorophos memancarkan cahaya hijau neon menyala di tengah kegelapan hutan hujan malam. Pendaran cahaya ini dihasilkan oleh reaksi enzimatik antara senyawa lusiferin jamur dengan enzim lusiferase.",
    facts: [
      "Pendaran cahayanya cukup terang untuk membaca tulisan buku di dalam hutan gelap.",
      "Cahaya hijau berfungsi menarik serangga malam untuk membantu menyebarkan spora.",
      "Intensitas pancaran cahaya paling optimal pada suhu 27°C.",
      "Fenomena cahaya hijau alami pada kayu lapuk dikenal dalam cerita rakyat sebagai 'Foxfire'."
    ]
  },
  {
    id: "ganoderma-lucidum",
    commonNameId: "Jamur Lingzhi / Reishi",
    commonNameEn: "Reishi Mushroom / Lingzhi",
    scientificName: "Ganoderma lucidum",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Ganoderma_lucidum_in_Oita.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Tudung jamur berbentuk kipas dengan lapisan pernis mengkilap alami berwarna merah kecokelatan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Fungi",
      phylum: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Polyporales",
      family: "Ganodermataceae",
      genus: "Ganoderma",
      species: "Ganoderma lucidum"
    },
    tradeOff: {
      clawForceScore: 85,
      clawForceDescription: "Tubuh buah sangat keras berkayu mirip gabus kokoh, dilapisi zat tanduk lilin pernis pelindung.",
      venomToxicityScore: 5,
      venomDescription: "100% tidak beracun; kaya beta-glukan, triterpenoid asam ganoderat, dan antioksidan penunjang imun tubuh.",
      category: "Struktur Kayu Keras & Polisakarida Medis"
    },
    habitat: "Batang dan tunggul pohon kayu keras lapuk di hutan beriklim sedang hingga tropis",
    diet: "Saprofit Pengurai Kayu (Menghancurkan lignin dan selulosa batang pohon lapuk)",
    size: "Lebar tudung kipas 10 - 25 cm, tebal 2 - 5 cm",
    lifespan: "Tubuh buah keras dapat bertahan bertahun-tahun di alam terbuka",
    iucnStatus: "Risiko Rendah (Banyak Dibudidayakan)",
    bioluminescence: "Permukaan atas mengkilap licin seperti baru saja divernis kayu.",
    description: "Ganoderma lucidum dikenal sebagai 'Jamur Keabadian' dalam pengobatan tradisional selama ribuan tahun. Berbentuk kipas kemerahan mengkilat keras berkayu dan kaya senyawa polisakarida peningkat daya tahan tubuh.",
    facts: [
      "Di Tiongkok kuno hanya kaisar dan bangsawan yang diperbolehkan memilikinya.",
      "Kandungan triterpenoid dan beta-glukannya diteliti secara klinis modern untuk modulasi imun.",
      "Lapisan mengkilap diproduksi oleh sel kelenjar resin khusus pada kutikula jamur.",
      "Spora disemburkan dari pori-pori mikroskopis di bagian bawah tudung."
    ]
  },

  // Protista
  {
    id: "macrocystis-pyrifera",
    commonNameId: "Kelp Raksasa Samudra Pasifik",
    commonNameEn: "Giant Bladder Kelp",
    scientificName: "Macrocystis pyrifera",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Giant_kelp_forest%2C_Anacapa_Island.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Hutan kelp bawah air spektakuler di lepas pantai Pulau Anacapa, Samudra Pasifik",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Protista",
      phylum: "Ochrophyta",
      class: "Phaeophyceae",
      order: "Laminariales",
      family: "Laminariaceae",
      genus: "Macrocystis",
      species: "Macrocystis pyrifera"
    },
    tradeOff: {
      clawForceScore: 55,
      clawForceDescription: "Pegang jangkar (holdfast) berakar cengkeram batu karang laut sangat kuat yang mampu menahan hantaman ombak samudra lepas.",
      venomToxicityScore: 5,
      venomDescription: "Kaya asam alginat berlendir yang melindungi dinding sel alga dari kekeringan saat pasang surut.",
      category: "Pertumbuhan Tercepat & Jangkar Apung Pneumatokis"
    },
    habitat: "Perairan laut dingin berbatu lepas pantai barat Amerika Utara, Amerika Selatan, Australia",
    diet: "Autotrof Fotosintetik (Menyerap nutrisi air laut dingin yang kaya nitrat dan fosfor serta sinar matahari)",
    size: "Panjang thallus mencapai 45 - 65 meter (alga terpanjang di dunia)",
    lifespan: "Thallus individu bertahan 4 - 8 tahun, terus menerus membelah bertunas",
    iucnStatus: "Risiko Rendah / Penjaga Ekosistem Kunci",
    bioluminescence: "Memiliki kantung gas bulat (pneumatokis) yang mengangkat tanaman tegak ke permukaan.",
    description: "Macrocystis pyrifera adalah organisme protista terbesar di planet bumi, mampu bertumbuh hingga 60 cm per hari membentuk hutan bawah laut pelindung ribuan kehidupan pesisir laut dingin.",
    facts: [
      "Salah satu organisme dengan laju pertumbuhan tercepat di bumi (mencapai setengah meter per hari).",
      "Kantung gas pneumatokis berisi oksigen alami untuk mengapungkan helai daun ke permukaan laut.",
      "Asam alginat yang diekstraksi dari kelp digunakan di seluruh dunia sebagai pengental es krim dan obat.",
      "Hutan kelp bertindak sebagai penyerap karbon biru (blue carbon) masif penstabil iklim bumi."
    ]
  },
  {
    id: "noctiluca-scintillans",
    commonNameId: "Alga Api Kilau Laut (Sea Sparkle)",
    commonNameEn: "Sea Sparkle",
    scientificName: "Noctiluca scintillans",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Bioluminescence_in_Noctiluca_scintillans.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Kilatan biru safir magis terpancar saat deburan ombak menyentuh miliaran sel Noctiluca",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Protista",
      phylum: "Dinoflagellata",
      class: "Dinophyceae",
      order: "Noctilucales",
      family: "Noctilucaceae",
      genus: "Noctiluca",
      species: "Noctiluca scintillans"
    },
    tradeOff: {
      clawForceScore: 2,
      clawForceDescription: "Sel bulat uniseluler berbentuk balon balon air berdiameter 0,2 - 2 mm.",
      venomToxicityScore: 30,
      venomDescription: "Akumulasi amonia tinggi di dalam vakuola sel yang dapat mengusir ikan saat mekar massal.",
      category: "Bioluminesensi Sentakan Mekanosensitif"
    },
    habitat: "Perairan pantai pesisir tropis hingga subtropis di seluruh dunia",
    diet: "Heterotrof Fagotropik (Memangsa diatom, fitoplankton lain, dan telur ikan kecil)",
    size: "Sel uniseluler berdiameter 200 hingga 2.000 mikrometer",
    lifespan: "Membelah diri secara aseksual setiap 24-48 jam dalam kondisi mekar",
    iucnStatus: "Melimpah (Abundant / Indikator Eutrofikasi)",
    bioluminescence: "Menghasilkan kilatan cahaya biru terang (470 nm) saat sel mengalami guncangan ombak.",
    description: "Noctiluca scintillans memancarkan kilau biru safir spektakuler setiap kali terkena guncangan ombak malam pantai, mengejutkan predator kecil yang hendak memangsanya.",
    facts: [
      "Salah satu sel uniseluler yang cukup besar untuk dilihat langsung dengan mata telanjang.",
      "Cahaya dihasilkan oleh organel mikroskopis ribuan 'scintillons' di dalam sel.",
      "Berfungsi sebagai alarm pencuri untuk menerangi pemangsa plankton agar terlihat ikan besar.",
      "Di siang hari koloni padatnya tampak kemerahan jingga yang dikenal sebagai pasang merah."
    ]
  },
  {
    id: "amoeba-proteus",
    commonNameId: "Amoeba Raksasa Air Tawar",
    commonNameEn: "Giant Amoeba",
    scientificName: "Amoeba proteus",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Amoeba_%28PSF%29.png",
    imageCaption: "Amoeba menjulurkan kaki semu (pseudopodia) untuk bergerak dan melingkari mangsa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Protista",
      phylum: "Amoebozoa",
      class: "Tubulinea",
      order: "Euamoebida",
      family: "Amoebidae",
      genus: "Amoeba",
      species: "Amoeba proteus"
    },
    tradeOff: {
      clawForceScore: 12,
      clawForceDescription: "Menjulurkan aliran sitoplasma endoplasma-ektoplasma (pseudopodia) untuk menelan mangsa secara fagositosis.",
      venomToxicityScore: 10,
      venomDescription: "Mensekresikan enzim lisosom intraseluler ke dalam vakuola makanan untuk mencerna mangsa hidup.",
      category: "Motilitas Amuboid & Fagositosis"
    },
    habitat: "Dasar kolam air tawar tenang, rawa gambut, dan serasah daun air tawar bersih",
    diet: "Heterotrof Predator Mikroskopis (Memangsa protozoa bersilia, alga uniseluler, rotifera, dan bakteri)",
    size: "Panjang sel 250 - 750 mikrometer (0,25 - 0,75 mm)",
    lifespan: "Tidak mengalami penuaan seluler alami; membelah biner tanpa batas",
    iucnStatus: "Melimpah (Bukan Subjek Konservasi)",
    bioluminescence: "Tidak bercahaya; memiliki vakuola kontraktil transparan pengatur tekanan osmosis.",
    description: "Amoeba proteus adalah protista bersel tunggal legendaris yang mengalirkan sitoplasma fleksibel membentuk pseudopodia untuk bergerak dan menelan mikroba hidup secara fagositosis.",
    facts: [
      "Memiliki genom raksasa dengan lebih dari 290 miliar pasang basa DNA (hampir 100 kali lipat DNA manusia!).",
      "Mampu meregenerasi diri asalkan nukleusnya tetap utuh.",
      "Vakuola kontraktil memompa kelebihan air agar sel tidak pecah akibat osmosis.",
      "Organisme model klasik dalam studi biologi seluler di seluruh dunia."
    ]
  },

  // Bacteria
  {
    id: "deinococcus-radiodurans",
    commonNameId: "Bakteri Kebal Radiasi (Conan the Bacterium)",
    commonNameEn: "Radiation Resistant Bacterium",
    scientificName: "Deinococcus radiodurans",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Deinococcus_radiodurans.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Koloni tetrad Deinococcus radiodurans yang mampu bertahan dari radiasi nuklir ekstrem",
    taxonomy: {
      domain: "Bacteria",
      kingdom: "Eubacteria",
      phylum: "Deinococcota",
      class: "Deinococci",
      order: "Deinococcales",
      family: "Deinococcaceae",
      genus: "Deinococcus",
      species: "Deinococcus radiodurans"
    },
    tradeOff: {
      clawForceScore: 88,
      clawForceDescription: "Dinding sel multilapis sangat kokoh dengan amplop peptidoglikan khusus dan protein S-layer.",
      venomToxicityScore: 0,
      venomDescription: "Bukan patogen manusia (100% aman). Kekuatannya terletak pada sistem perbaikan DNA instan menggunakan ion mangan.",
      category: "Daya Tahan DNA & Anti-Radiasi Mutlak"
    },
    habitat: "Ditemukan pada kaleng daging steril; hidup di tanah kering, kotoran hewan, dan debu atmosfer",
    diet: "Organoheterotrof (Mengonsumsi sisa-sisa bahan organik lingkungan)",
    size: "Bakteri kokus bulat berdiameter 1,5 - 3,5 mikrometer dalam kelompok tetrad",
    lifespan: "Dapat bertahan dalam keadaan dorman tanpa air selama puluhan tahun",
    iucnStatus: "Melimpah (Ekstremofil Global)",
    bioluminescence: "Koloni berwarna merah muda cerah berkat pigmen karotenoid deinoxanthin pemusnah radikal bebas.",
    description: "Deinococcus radiodurans tercatat dalam Guinness Book of World Records sebagai 'Bakteri Paling Tangguh di Dunia'. Bertahan dari radiasi hingga 15.000 Gray dengan merakit kembali untai DNA-nya yang hancur dalam hitungan jam.",
    facts: [
      "Bertahan hidup di luar stasiun antariksa ISS selama 3 tahun terpapar ruang hampa dan sinar kosmik.",
      "Kaya kompleks antioksidan mangan-peptida pelindung enzim perbaikan DNA.",
      "Dijuluki ilmuwan sebagai 'Conan the Bacterium'.",
      "Diteliti untuk bioremediasi limbah radioaktif nuklir berbahaya."
    ]
  },
  {
    id: "arthrospira-platensis",
    commonNameId: "Spirulina (Sianobakteri Hijau-Biru)",
    commonNameEn: "Spirulina Algae",
    scientificName: "Arthrospira platensis",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Spirulina_powder.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Bubuk spirulina murni kaya protein dan filamen mikroskopis berbentuk spiral heliks",
    taxonomy: {
      domain: "Bacteria",
      kingdom: "Eubacteria",
      phylum: "Cyanobacteria",
      class: "Cyanophyceae",
      order: "Spirulinales",
      family: "Microcoleaceae",
      genus: "Arthrospira",
      species: "Arthrospira platensis"
    },
    tradeOff: {
      clawForceScore: 10,
      clawForceDescription: "Filamen mikroskopis berbentuk spiral heliks lentur yang mengapung di permukaan air danau alkali.",
      venomToxicityScore: 0,
      venomDescription: "Bebas racun mikrosistin; mengandung 60-70% protein lengkap, pigmen fikosianin biru, dan zat besi tinggi.",
      category: "Fotosintesis Oksigenik & Superfood Dunia"
    },
    habitat: "Danau soda beralkali tinggi (pH 9-11) dan berkadar garam sedang di wilayah tropis dan subtropis",
    diet: "Fotoautotrof (Fotosintesis oksigenik memanfaatkan sinar matahari terik)",
    size: "Filamen spiral sepanjang 50 - 500 mikrometer",
    lifespan: "Membelah diri secara aseksual sangat cepat dalam kondisi hangat",
    iucnStatus: "Melimpah (Banyak Dibudidayakan)",
    bioluminescence: "Pigmen fikosianin memancarkan fluoresensi merah tua di bawah sinar ultraviolet.",
    description: "Arthrospira platensis (Spirulina) adalah sianobakteri purba penghuni danau soda alkali kaya nutrisi yang dipanen sejak peradaban Aztek kuno sebagai sumber protein dan mikronutrien superfood.",
    facts: [
      "Mengandung protein nabati hingga 70% dari bobot keringnya.",
      "Dipilih oleh NASA dan ESA sebagai makanan utama astronot misi antariksa jarak jauh.",
      "Menghasilkan pigmen fikosianin biru alami sebagai antioksidan kuat.",
      "Makanan utama burung flamingo pembuat warna bulu merah mudanya."
    ]
  },

  // Archaea
  {
    id: "pyrolobus-fumarii",
    commonNameId: "Arkea Ventil Hidrotermal 113°C",
    commonNameEn: "Hyperthermophilic Deep-Sea Archaea",
    scientificName: "Pyrolobus fumarii",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Hydrothermal_vent_chimney_black_smoker.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Cerobong ventil hidrotermal laut dalam (Black Smoker) habitat mendidih Pyrolobus fumarii",
    taxonomy: {
      domain: "Archaea",
      kingdom: "Archaebacteria",
      phylum: "Thermoproteota",
      class: "Thermoprotei",
      order: "Desulfurococcales",
      family: "Pyrodictiaceae",
      genus: "Pyrolobus",
      species: "Pyrolobus fumarii"
    },
    tradeOff: {
      clawForceScore: 95,
      clawForceDescription: "Membran sel lapisan tunggal dengan ikatan eter isoprenoid ultra-stabil yang tidak mencair pada air mendidih 250 atmosfer.",
      venomToxicityScore: 0,
      venomDescription: "Kemosintesis murni tanpa racun; mengoksidasi hidrogen dan mereduksi nitrat di dasar samudra abadi.",
      category: "Hipertermofilik Ekstrem 113°C & Kemosintesis"
    },
    habitat: "Dinding cerobong ventil hidrotermal laut dalam di Punggung Atlantik Tengah (kedalaman 3.650 meter)",
    diet: "Kemoautotrof Litotrof (Menggunakan gas H2 dan nitrat anorganik)",
    size: "Sel kokoid polimorfik berdiameter 0,7 - 2,5 mikrometer",
    lifespan: "Tumbuh optimal pada suhu 106°C dan berhenti membelah di bawah 90°C",
    iucnStatus: "Melimpah di Ventil Hidrotermal Laut Dalam",
    bioluminescence: "Hidup di kegelapan abadi samudra tanpa sinar matahari.",
    description: "Pyrolobus fumarii memegang rekor dunia toleransi panas ekstrem, tumbuh dan membelah diri optimal pada suhu 113°C di dasar samudra tanpa oksigen dan tanpa sinar matahari.",
    facts: [
      "Bertahan hidup setelah disterilkan di dalam autoklaf laboratorium bersuhu 121°C selama satu jam.",
      "Membran selnya berupa tetraeter lipid rantai panjang tahan panas mendidih.",
      "Membuktikan kehidupan dapat berkembang biak subur di bumi tanpa energi matahari.",
      "Model utama astrobiologi dalam mencari kehidupan di samudra bulan Europa dan Enceladus."
    ]
  },
  {
    id: "halobacterium-salinarum",
    commonNameId: "Arkea Danau Garam Merah Muda",
    commonNameEn: "Extreme Halophilic Archaea",
    scientificName: "Halobacterium salinarum",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Salt_pans_at_Gozo%2C_Malta.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Tambak garam kristal merah muda keunguan pekat akibat miliaran koloni Halobacterium",
    taxonomy: {
      domain: "Archaea",
      kingdom: "Archaebacteria",
      phylum: "Halobacteriota",
      class: "Halobacteria",
      order: "Halobacteriales",
      family: "Halobacteriaceae",
      genus: "Halobacterium",
      species: "Halobacterium salinarum"
    },
    tradeOff: {
      clawForceScore: 75,
      clawForceDescription: "Menjaga keseimbangan osmotik dengan menimbun ion kalium klorida (KCl) hingga 4-5 Molar agar sel tidak mengerut.",
      venomToxicityScore: 0,
      venomDescription: "Memanfaatkan pompa proton ungu bakteriorhodopsin untuk memanen foton cahaya langsung menjadi ATP tanpa klorofil.",
      category: "Halofilik Ekstrem & Pompa Proton Bakteriorhodopsin"
    },
    habitat: "Danau air asin hipersalin alami (Great Salt Lake, Laut Mati) dan kolam penguapan kristalisasi garam",
    diet: "Fotofosforilasi Non-Klorofil & Kemoheterotrof (Memanen sinar matahari lewat pigmen bakteriorhodopsin)",
    size: "Sel batang memanjang berukuran 1 - 4 mikrometer",
    lifespan: "Dapat bertahan terperangkap di dalam kristal garam halit selama ratusan ribu tahun",
    iucnStatus: "Melimpah (Ekstremofil Danau Garam Global)",
    bioluminescence: "Pigmen bakteriorhodopsin ungu dan karotenoid merah memberi rona merah jambu pada air asin.",
    description: "Halobacterium salinarum membutuhkan konsentrasi garam 20% hingga 32% untuk bertahan hidup. Arkea ini mewarnai danau air asin menjadi merah muda keunguan memanfaatkan pigmen bakteriorhodopsin untuk mengubah cahaya menjadi energi ATP tanpa klorofil.",
    facts: [
      "Protein bakteriorhodopsin sangat mirip dengan rhodopsin pada retina mata manusia.",
      "Dapat terperangkap hidup di dalam kantung cairan kristal batu garam selama ratusan ribu tahun.",
      "Bertanggung jawab atas warna merah jambu di Danau Hillier dan Laguna Colorada.",
      "Diteliti dalam teknologi bio-elektronik untuk media penyimpanan data biner optik ultra-cepat."
    ]
  },

  // Additional Animals
  {
    id: "enteroctopus-dofleini",
    commonNameId: "Gurita Pasifik Raksasa",
    commonNameEn: "Giant Pacific Octopus",
    scientificName: "Enteroctopus dofleini",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Giant_Pacific_Octopus_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Gurita raksasa memperlihatkan delapan lengan berotot kuat dan mata bertipe kamera",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Mollusca",
      class: "Cephalopoda",
      order: "Octopoda",
      family: "Enteroctopodidae",
      genus: "Enteroctopus",
      species: "Enteroctopus dofleini"
    },
    tradeOff: {
      clawForceScore: 86,
      clawForceDescription: "Ratusan mangkuk pengisap di delapan lengan mampu mengangkat puluhan kilogram dan meremukkan cangkang kepiting.",
      venomToxicityScore: 52,
      venomDescription: "Kelenjar ludah memproduksi cephalotoxin untuk melumpuhkan kepiting dan melunakkan daging sebelum dicungkil dengan paruh.",
      category: "Cengkeraman Muskular & Cephalotoxin"
    },
    habitat: "Gua karang berbatu laut dingin Pasifik Utara (pantai California hingga Alaska, Jepang)",
    diet: "Karnivora (Kepiting dungeness, kerang remis raksasa, lobster, ikan bertulang, hiu anjing kecil)",
    size: "Bentang lengan 4,5 - 6 meter, Bobot 30 - 50 kg",
    lifespan: "3 - 5 tahun di alam liar",
    iucnStatus: "Belum Dievaluasi / Populasi Stabil",
    bioluminescence: "Mengubah warna dan tekstur kulit dalam 200 milidetik berkat jutaan kromatofor dan otot papila.",
    description: "Gurita Pasifik Raksasa adalah invertebrata paling cerdas di dunia dengan sembilan otak dan tiga jantung berdarah biru hemosianin, mampu memecahkan labirin dan menyamar instan meniru batuan laut.",
    facts: [
      "Memiliki sekitar 2.240 mangkuk pengisap di lengannya yang dilengkapi sensor perasa kimiawi.",
      "Tiga jantung memompa darah biru kaya tembaga hemosianin.",
      "Mampu menyusup melewati celah sekecil paruhnya karena 100% tanpa tulang rangka.",
      "Betina menjaga telurnya selama 6 bulan tanpa makan sedikit pun hingga mati demi anaknya."
    ]
  },
  {
    id: "lumbricus-terrestris",
    commonNameId: "Cacing Tanah Eropa",
    commonNameEn: "Common Earthworm",
    scientificName: "Lumbricus terrestris",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Regenwurm1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Cacing tanah bersegmen metamerik memperlihatkan sabuk klitelum reproduktif",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Annelida",
      class: "Clitellata",
      order: "Crassiclitellata",
      family: "Lumbricidae",
      genus: "Lumbricus",
      species: "Lumbricus terrestris"
    },
    tradeOff: {
      clawForceScore: 30,
      clawForceDescription: "Otot sirkular dan longitudinal berkontraksi peristaltik bersama rambut setae untuk menggali tanah keras.",
      venomToxicityScore: 0,
      venomDescription: "100% tanpa bisa; memproduksi lendir pelindung kaya kalsium karbonat penstabil pH tanah.",
      category: "Peristalsis Muskular Tanah & Tanpa Racun"
    },
    habitat: "Tanah subur berhumus lembap di padang rumput, kebun, dan lantai hutan seluruh dunia",
    diet: "Detritivora Pengurai (Memakan serasah daun mati, tanah, dan mikroba pengurai)",
    size: "Panjang 12 - 25 cm, Diameter 6 - 9 mm",
    lifespan: "4 - 8 tahun di alam bebas",
    iucnStatus: "Risiko Rendah (Least Concern)",
    bioluminescence: "Tidak bercahaya.",
    description: "Cacing tanah adalah perekayasa ekosistem terpenting di muka bumi, menggali terowongan vertikal sedalam 2 meter untuk sirkulasi udara dan resapan air akar serta menyuburkan tanah dengan casting kaya hara.",
    facts: [
      "Charles Darwin mendedikasikan 40 tahun meneliti peran cacing tanah dalam pembentukan humus bumi.",
      "Memiliki 5 pasang lengkung aorta pemompa darah berhemoglobin merah.",
      "Bernapas langsung melalui kulit lembapnya.",
      "Hermafrodit yang bertukar sperma saat kawin dan membentuk kokon di klitelum."
    ]
  },
  {
    id: "danaus-plexippus",
    commonNameId: "Kupu-kupu Raja (Monarch)",
    commonNameEn: "Monarch Butterfly",
    scientificName: "Danaus plexippus",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Monarch_In_May.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Sayap jingga berurat hitam menyala sebagai peringatan racun kardenolida bagi burung pemangsa",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Lepidoptera",
      family: "Nymphalidae",
      genus: "Danaus",
      species: "Danaus plexippus"
    },
    tradeOff: {
      clawForceScore: 5,
      clawForceDescription: "Tubuh seringan 0,5 gram dengan sayap bersisik mikro aerodinamis penakluk badai lintas benua.",
      venomToxicityScore: 68,
      venomDescription: "Mengakumulasi glikosida jantung (kardenolida) beracun dari tanaman inang milkweed yang membuat burung muntah.",
      category: "Pertahanan Kimiawi Bioakumulatif Aposematik"
    },
    habitat: "Padang rumput mekar, kebun, dan hutan cemara oyamel pegunungan Michoacán, Meksiko",
    diet: "Herbivora / Nektarivora (Ulat memakan daun milkweed beracun, dewasa mengisap nektar bunga)",
    size: "Rentang sayap 9 - 10,5 cm, Bobot 0,5 gram",
    lifespan: "Generasi biasa 2-6 minggu, generasi super migrasi mencapai 8 - 9 bulan",
    iucnStatus: "Rentan (Vulnerable)",
    bioluminescence: "Warna jingga menyala bertindak sebagai sinyal aposematik penolak predator.",
    description: "Kupu-kupu Raja terbang menempuh jarak lebih dari 4.000 kilometer dari Kanada ke hutan pegunungan Meksiko dalam migrasi multi-generasi tahunan terhebat di dunia serangga.",
    facts: [
      "Satu-satunya kupu-kupu yang melakukan migrasi dua arah lintas benua mirip burung.",
      "Generasi super musim gugur mampu hidup 8 bulan lebih lama untuk bermigrasi.",
      "Menavigasi arah menggunakan jam sirkadian di antena dan kompas matahari di mata majemuk.",
      "Pola warna sayapnya merupakan contoh klasik peringatan racun aposematisme."
    ]
  },
  {
    id: "hymenopus-coronatus",
    commonNameId: "Belalang Sembah Anggrek",
    commonNameEn: "Orchid Mantis",
    scientificName: "Hymenopus coronatus",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Hymenopus_coronatus_femelle.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Kamuflase mimikri agresif sempurna menyerupai kelopak bunga anggrek mekar",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Arthropoda",
      class: "Insecta",
      order: "Mantodea",
      family: "Hymenopodidae",
      genus: "Hymenopus",
      species: "Hymenopus coronatus"
    },
    tradeOff: {
      clawForceScore: 78,
      clawForceDescription: "Kaki depan tipe raptorial berduri tajam mencengkeram mangsa dalam waktu kurang dari 20 milidetik.",
      venomToxicityScore: 0,
      venomDescription: "100% tanpa racun; mengandalkan mimikri bunga anggrek merah muda untuk menipu serangga penyerbuk.",
      category: "Mimikri Bunga & Cengkeraman Kaki Raptorial Cepat"
    },
    habitat: "Ranting pohon dan semak berbunga hutan hujan tropis Asia Tenggara (Indonesia, Malaysia, Thailand)",
    diet: "Karnivora Insektivora (Lebah madu, lalat bunga, kupu-kupu, kumbang, jangkrik, kadal kecil)",
    size: "Betina 6 - 7 cm (dua kali lebih besar dari jantan yang hanya 2,5 - 3 cm)",
    lifespan: "8 - 12 bulan di habitat hutan tropis",
    iucnStatus: "Belum Dievaluasi / Terancam Perburuan Koleksi",
    bioluminescence: "Kaki melebar memantulkan sinar UV lebih kuat dari bunga anggrek asli.",
    description: "Belalang Sembah Anggrek memiliki kaki belakang yang melebar menyerupai kelopak bunga anggrek hutan merah muda. Serangga penyerbuk mendekatinya sebelum disergap kaki raptorial dalam sekejap mata.",
    facts: [
      "Hewan pertama yang terbukti lebih memikat penyerbuk daripada bunga asli di sekitarnya.",
      "Betina berukuran dua kali lebih besar dan hidup lebih lama dari jantan.",
      "Dapat berganti rona warna dari merah muda ke kecokelatan tergantung kelembapan.",
      "Bayi belalang yang baru menetas berwarna hitam-merah menyerupai semut berbisa."
    ]
  },
  {
    id: "pitohui-dichrous",
    commonNameId: "Burung Pitohui Berbisa Papua",
    commonNameEn: "Hooded Pitohui",
    scientificName: "Pitohui dichrous",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Hooded_Pitohui.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Burung berkicau hitam-oranye berpola kontras pembawa neurotoksin batrachotoxin",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Animalia",
      phylum: "Chordata",
      class: "Aves",
      order: "Passeriformes",
      family: "Oriolidae",
      genus: "Pitohui",
      species: "Pitohui dichrous"
    },
    tradeOff: {
      clawForceScore: 22,
      clawForceDescription: "Paruh dan cakar burung pengicau biasa pemburu serangga dahan pohon.",
      venomToxicityScore: 82,
      venomDescription: "Kulit dan bulunya mengandung neurotoksin batrachotoxin (racun yang sama pada katak panah beracun) yang memicu mati rasa dan kelumpuhan.",
      category: "Bisa Homobatrachotoxin di Bulu & Kulit"
    },
    habitat: "Kanopi hutan hujan primer dan sekunder pulau Papua (Indonesia & Papua Nugini)",
    diet: "Omnivora (Kumbang Choresine beracun, buah beri hutan, serangga pohon, laba-laba)",
    size: "Panjang tubuh 22 - 24 cm, Bobot 60 - 70 gram",
    lifespan: "Dapat mencapai 10 - 15 tahun",
    iucnStatus: "Risiko Rendah (Least Concern)",
    bioluminescence: "Bulu oranye menyala dan tudung hitam bertindak sebagai peringatan aposematisme racun.",
    description: "Pitohui dichrous adalah burung berbisa pertama yang diverifikasi secara ilmiah. Kulit dan bulunya mengandung homobatrachotoxin dari kumbang Choresine beracun yang dimakannya.",
    facts: [
      "Masyarakat Papua menyebutnya 'burung sampah' karena rasa dagingnya membakar lidah.",
      "Bulu burung menggosokkan racun ke cangkang telur untuk mencegah pemangsa memakannya.",
      "Salah satu dari sedikit burung di dunia yang memiliki senjata kimiawi neurotoksin.",
      "Pola warna hitam dan oranye terang merupakan sinyal aposematik penolak predator."
    ]
  },

  {
    id: "nelumbo-nucifera",
    commonNameId: "Teratai Seroja Suci",
    commonNameEn: "Sacred Lotus",
    scientificName: "Nelumbo nucifera",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Bunga seroja mekar di atas permukaan air dengan daun hidrofobik antiair",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Proteales",
      family: "Nelumbonaceae",
      genus: "Nelumbo",
      species: "Nelumbo nucifera"
    },
    tradeOff: {
      clawForceScore: 40,
      clawForceDescription: "Lapisan lilin kristal mikroskopis dan papila nano pada permukaan daun menciptakan efek hidrofobik antiair mutlak (Lotus Effect).",
      venomToxicityScore: 10,
      venomDescription: "Kaya alkaloid nuciferine yang memiliki efek relaksasi sedatif alami.",
      category: "Nanoteknologi Alami / Efek Lotus"
    },
    habitat: "Rawa berair tenang, danau dangkal, dan kolam berlumpur di Asia tropis dan Australia",
    diet: "Autotrof (Fotosintesis daun apung di atas air)",
    size: "Bunga berdiameter 20 cm, daun bundar berdiameter hingga 60 - 80 cm",
    lifespan: "Rimpang hidup bertahun-tahun, biji dapat dorman selama lebih dari 1.300 tahun",
    iucnStatus: "Risiko Rendah (Least Concern)",
    bioluminescence: "Bunga mampu meregulasi suhu termogenik internal antara 30-35°C selama penyerbukan.",
    description: "Nelumbo nucifera adalah tanaman air suci dalam berbagai peradaban kuno Asia. Daunnya yang mengapung di atas air memiliki struktur nano permukaan yang membuat tetesan air tidak dapat membasahi daun (superhidrofobisitas). Butiran air akan bergulir membawa seluruh debu dan kotoran, membuat daun teratai selalu bersih sempurna.",
    facts: [
      "Biji teratai tertua yang ditemukan di danau kering Tiongkok berhasil dikecambahkan setelah tertidur selama 1.300 tahun!",
      "Menginspirasi ilmuwan modern dalam menciptakan kaca antipeluru, cat dinding antinoda, dan kain antiair.",
      "Bunganya menghasilkan panas mandiri (termogenik) agar kumbang penyerbuk tetap hangat di malam dingin.",
      "Seluruh bagian tanaman (akar rimpang, biji, batang, dan kelopak) dapat dimakan dan kaya nutrisi."
    ]
  },
  {
    id: "adansonia-grandidieri",
    commonNameId: "Pohon Baobab Raksasa Madagaskar",
    commonNameEn: "Grandidier Baobab",
    scientificName: "Adansonia grandidieri",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/All%C3%A9e_des_Baobabs_near_Morondava%2C_Madagascar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Batang silinder raksasa pohon baobab di Allée des Baobabs, Madagaskar",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Plantae",
      phylum: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Malvales",
      family: "Malvaceae",
      genus: "Adansonia",
      species: "Adansonia grandidieri"
    },
    tradeOff: {
      clawForceScore: 90,
      clawForceDescription: "Batang kolumnar masif mirip tangki air berdiameter hingga 3 meter yang mampu menyimpan hingga 120.000 liter air tawar untuk menghadapi kemarau panjang.",
      venomToxicityScore: 5,
      venomDescription: "100% aman; buahnya yang berbulu beludru dijuluki roti monyet kaya vitamin C enam kali lipat dari jeruk.",
      category: "Penyimpan Air Masif & Pohon Kehidupan"
    },
    habitat: "Hutan gugur kering dataran rendah barat daya Madagaskar (endemik pulau Madagaskar)",
    diet: "Autotrof (Fotosintesis di mahkota kanopi rata mirip akar yang mencuat ke langit)",
    size: "Tinggi 25 - 30 meter, Lingkar batang hingga 10 meter",
    lifespan: "Dapat mencapai usia 1.000 hingga 2.000 tahun",
    iucnStatus: "Terancam Punah (Endangered)",
    bioluminescence: "Bunga putih besar mekar malam hari dan mengeluarkan nektar pemikat kelelawar pemakan nektar.",
    description: "Pohon Baobab Grandidier adalah spesies baobab terbesar dan paling terkenal dari Madagaskar. Batangnya yang silinder tegak lurus mirip pilar istana raksasa dapat menyimpan puluhan ribu liter air. Bentuk mahkotanya yang datar dan bercabang mirip akar terbalik melahirkan legenda Afrika bahwa pohon baobab dicabut oleh dewa lalu ditancapkan kembali secara terbalik.",
    facts: [
      "Batangnya yang berongga kerap digunakan penduduk asli sebagai penampungan air dan tempat berteduh alami.",
      "Kulit kayunya memiliki kemampuan meregenerasi diri jika terluka atau dikupas oleh hewan liar.",
      "Buahnya kaya antioksidan, kalsium, dan vitamin C dan menjadi komoditas pangan bernilai tinggi.",
      "Penyerbukan bunga baobab dilakukan hampir seluruhnya oleh spesies lemur nokturnal dan kelelawar buah."
    ]
  },
  {
    id: "morchella-esculenta",
    commonNameId: "Jamur Morel Sarang Lebah",
    commonNameEn: "Yellow Morel",
    scientificName: "Morchella esculenta",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Morchella_esculenta_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Tudung berlekuk-lekuk mirip spons sarang lebah berwarna cokelat keemasan",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Fungi",
      phylum: "Ascomycota",
      class: "Pezizomycetes",
      order: "Pezizales",
      family: "Morchellaceae",
      genus: "Morchella",
      species: "Morchella esculenta"
    },
    tradeOff: {
      clawForceScore: 15,
      clawForceDescription: "Tubuh buah berongga di bagian dalam dari pangkai tangkai hingga pucuk tudung spons.",
      venomToxicityScore: 35,
      venomDescription: "Mengandung racun toksin hemolitik ringan jika dikonsumsi mentah; racun ini terurai sempurna saat dimasak matang.",
      category: "Ascomycota Makroskopis & Jamur Kuliner Elit"
    },
    habitat: "Lantai hutan gugur daun berkapur di bawah pohon abu, elm, dan kebun apel tua di Eropa, Asia, dan Amerika Utara",
    diet: "Saprofit / Mikoriza Fakultatif (Menguraikan serasah daun dan membentuk ikatan akar pohon)",
    size: "Tinggi 5 - 15 cm, diameter tudung 3 - 6 cm",
    lifespan: "Tubuh buah muncul di musim semi selama 2-3 pekan",
    iucnStatus: "Risiko Rendah / Buruan Jamur Liar Bernilai Tinggi",
    bioluminescence: "Tidak bercahaya.",
    description: "Morchella esculenta adalah salah satu jamur liar paling dicari dan dihargai di dunia kuliner karena aroma tanahnya yang kaya rasa umami gurih. Berbeda dengan jamur payung biasa yang melepaskan spora dari bilah bawah, jamur kantung ascomycota ini melepaskan jutaan spora dari ceruk-ceruk lubang mikroskopis pada tudung berlekuk sarang lebahnya.",
    facts: [
      "Hampir mustahil dibudidayakan secara komersial dalam skala besar, menjadikannya komoditas perburuan hutan liar bernilai tinggi.",
      "Seluruh bagian tubuh buahnya berongga total dari dasar batang hingga puncak tudung.",
      "Kerap muncul melimpah di area lantai hutan yang setahun sebelumnya mengalami kebakaran ringan (jamur pasca-api).",
      "Wajib dimasak matang sebelum dimakan untuk menetralkan senyawa toksin hemolitik alami."
    ]
  },
  {
    id: "euglena-gracilis",
    commonNameId: "Euglena Hijau (Protista Campuran)",
    commonNameEn: "Green Euglena",
    scientificName: "Euglena gracilis",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Euglena_gracilis.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Sel mikro berenang aktif dengan flagela dan kloroplas hijau untuk fotosintesis",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Protista",
      phylum: "Euglenozoa",
      class: "Euglenoidea",
      order: "Euglenales",
      family: "Euglenaceae",
      genus: "Euglena",
      species: "Euglena gracilis"
    },
    tradeOff: {
      clawForceScore: 18,
      clawForceDescription: "Pelikula protein fleksibel bergaris-garis spiral di bawah membran sel yang memungkinkannya berganti bentuk elastis (gerakan euglenoid/metaboli).",
      venomToxicityScore: 0,
      venomDescription: "Kaya nutrisi paramilon (beta-1,3-glukan cadangan makanan) dan 59 jenis vitamin, asam amino, dan mineral lengkap.",
      category: "Miksotrof (Hewan & Tumbuhan Bersatu)"
    },
    habitat: "Kolam air tawar kaya bahan organik, parit sawah tenang, dan danau dangkal seluruh dunia",
    diet: "Miksotrof (Berfotosintesis saat ada cahaya matahari, dan beralih memburu bahan organik saat gelap)",
    size: "Panjang sel 35 - 65 mikrometer, lebar 8 - 15 mikrometer",
    lifespan: "Membelah biner longitudinal setiap 12 - 24 jam",
    iucnStatus: "Melimpah (Model Sains Global)",
    bioluminescence: "Memiliki stigma (bintik mata merah) berpigmen karotenoid yang memandu sel berenang ke arah cahaya (fototaksis positif).",
    description: "Euglena gracilis adalah organisme uniseluler revolusioner yang memadukan sifat tumbuhan dan hewan sekaligus. Di bawah sinar matahari, kloroplasnya menghasilkan makanan sendiri melalui fotosintesis. Namun jika disimpan di tempat gelap gulita, kloroplasnya menyusut dan Euglena beralih memburu nutrisi terlarut layaknya hewan pemangsa.",
    facts: [
      "Bintik mata merahnya (stigma) bertindak sebagai lensa pelindung fotoreseptor dasar flagela untuk mendeteksi arah sinar matahari.",
      "Menyimpan cadangan energi dalam bentuk paramilon karbohidrat unik yang diteliti untuk memperkuat sistem imun manusia.",
      "Kini dibudidayakan secara massal di Jepang sebagai bahan pangan masa depan dan sumber bahan bakar bio-avtur pesawat.",
      "Tidak memiliki dinding sel kaku sehingga dapat meliuk-liuk fleksibel meremas tubuhnya melalui celah sempit."
    ]
  },
  {
    id: "paramecium-caudatum",
    commonNameId: "Paramecium (Protozoa Sandal)",
    commonNameEn: "Slipper Animalcule",
    scientificName: "Paramecium caudatum",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Paramecium_caudatum.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Ribuan silia mikroskopis menyelimuti seluruh permukaan sel Paramecium caudatum",
    taxonomy: {
      domain: "Eukarya",
      kingdom: "Protista",
      phylum: "Ciliophora",
      class: "Oligohymenophorea",
      order: "Peniculida",
      family: "Parameciidae",
      genus: "Paramecium",
      species: "Paramecium caudatum"
    },
    tradeOff: {
      clawForceScore: 28,
      clawForceDescription: "Ribuan rambut getar silia berdenyut metakronal terkoordinasi memungkinkannya berenang mundur-maju dan berputar secepat 2 mm per detik (kecepatan luar biasa untuk skala mikro).",
      venomToxicityScore: 12,
      venomDescription: "Memiliki organel pertahanan trikokista (trichocyst) yang dapat menembakkan filamen duri halus pelindung saat diserang predator.",
      category: "Silia Lokomotif Cepat & Trikokista Pertahanan"
    },
    habitat: "Air tawar tergenang, rendaman jerami padi, kolam dan selokan air bersih",
    diet: "Heterotrof Bakterivora (Menyapu ribuan bakteri per jam ke dalam celah mulut seluler sitostoma)",
    size: "Panjang 170 - 330 mikrometer (dapat terlihat samar sebagai bintik putih lincah)",
    lifespan: "Membelah biner aseksual secara berulang dan melakukan konjugasi seksual bertukar mikronukleus",
    iucnStatus: "Melimpah (Organisme Model Klasik)",
    bioluminescence: "Tidak bercahaya; memiliki dua vakuola kontraktil berbentuk bintang pemompa air.",
    description: "Paramecium caudatum berbentuk lonjong pipih menyerupai telapak sandal manusia. Seluruh permukaan tubuhnya diselimuti ribuan silia yang mendayung air secara harmonis. Paramecium memiliki dua inti sel yang unik: makronukleus besar yang mengontrol aktivitas metabolisme sehari-hari, dan mikronukleus kecil penyimpan materi genetik reproduksi.",
    facts: [
      "Pertama kali diamati oleh penemu mikroskop Antonie van Leeuwenhoek pada tahun 1674.",
      "Jika menabrak rintangan, silianya seketika membalik kayuhan sehingga Paramecium berenang mundur lalu berbelok (reaksi menghindar).",
      "Mampu melahap hingga 5.000 bakteri setiap harinya, menjaga kebersihan air kolam alami.",
      "Dua vakuola kontraktil di ujung depan dan belakang berdenyut bergantian memompa air keluar dari sel."
    ]
  },
  {
    id: "streptomyces-coelicolor",
    commonNameId: "Bakteri Tanah Penghasil Antibiotik",
    commonNameEn: "Soil Antibiotic Bacterium",
    scientificName: "Streptomyces coelicolor",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Streptomyces_coelicolor.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    imageCaption: "Koloni miselium Streptomyces coelicolor memproduksi pigmen antibiotik biru aktinorhodin",
    taxonomy: {
      domain: "Bacteria",
      kingdom: "Eubacteria",
      phylum: "Actinomycetota",
      class: "Actinomycetes",
      order: "Streptomycetales",
      family: "Streptomycetaceae",
      genus: "Streptomyces",
      species: "Streptomyces coelicolor"
    },
    tradeOff: {
      clawForceScore: 35,
      clawForceDescription: "Membentuk hifa miselium berfilamen cabang kokoh menembus partikel tanah mirip jamur sejati.",
      venomToxicityScore: 78,
      venomDescription: "Pabrik kimiawi alami: menghasilkan beragam antibiotik (aktinorhodin, prodigiosin, metilenomisin) yang membunuh bakteri pesaing di tanah.",
      category: "Sintesis Senjata Kimiawi Antibiotik Alami"
    },
    habitat: "Lapisan tanah humus subur dan kompos tanaman di seluruh dunia",
    diet: "Saprotrof Pengurai (Mensekresikan enzim perombak kitin serangga, selulosa daun, dan protein kompleks)",
    size: "Hifa filamen berdiameter 0,5 - 1 mikrometer membentuk koloni berbedak spora",
    lifespan: "Spora dorman dapat bertahan hidup dalam tanah kering selama puluhan tahun",
    iucnStatus: "Melimpah (Fondasi Farmasi Medis Global)",
    bioluminescence: "Memproduksi pigmen biru cemerlang aktinorhodin yang peka terhadap derajat keasaman pH lingkungan.",
    description: "Streptomyces coelicolor adalah bakteri tanah yang menjadi pahlawan tak terlihat dunia kedokteran modern. Lebih dari dua pertiga antibiotik medis yang menyelamatkan jutaan nyawa manusia di bumi berasal dari genus Streptomyces. Selain itu, senyawa geosmin yang disekresikan bakteri ini adalah pencipta aroma wangi tanah basah yang menyegarkan sehabis hujan (petrichor).",
    facts: [
      "Genus Streptomyces menyumbang lebih dari 70% antibiotik alami dunia termasuk streptomisin, tetrasiklin, kloramfenikol, dan eritromisin.",
      "Aroma khas tanah sehabis hujan yang dicintai manusia (petrichor) berasal dari molekul geosmin yang dibuat bakteri ini.",
      "Memiliki salah satu kromosom linear terbesar di dunia bakteri dengan lebih dari 8,7 juta pasang basa DNA.",
      "Meskipun merupakan bakteri prokariotik, cara tumbuhnya membentuk miselium filamen bercabang persis seperti jamur sejati."
    ]
  }

];

// Merge existing species with new species
const existingIds = new Set(CURATED_SPECIES.map(s => s.id));
const mergedSpecies = [...CURATED_SPECIES];

for (const sp of newSpecies) {
  if (existingIds.has(sp.id)) {
    const idx = mergedSpecies.findIndex(s => s.id === sp.id);
    if (idx !== -1) {
      mergedSpecies[idx] = sp;
    }
  } else {
    mergedSpecies.push(sp);
    existingIds.add(sp.id);
  }
}

console.log("Merged species count:", mergedSpecies.length);

const output = `/**
 * BioTaxa - Database Lengkap Pohon Hayat (Tree of Life) & Taksonomi Global
 * Silsilah Kehidupan di Bumi:
 * Biota (LUCA) -> 3 Domain -> Seluruh Kingdom (Animalia, Plantae, Fungi, Protista, Bacteria, Archaea) -> Filum -> Kelas -> Ordo -> Spesies
 * Diperkaya dengan 8-level taksonomi, foto valid, metrik adaptasi & biomekanika, serta fakta mendalam.
 */

const TAXONOMY_LEVELS = ${JSON.stringify(TAXONOMY_LEVELS, null, 2)};

const TAXONOMY_TREE = ${JSON.stringify(TAXONOMY_TREE, null, 2)};

const CURATED_SPECIES = ${JSON.stringify(mergedSpecies, null, 2)};

// Helper Pencarian Spesimen Cepat
function searchCuratedSpecies(query) {
  if (!query) return CURATED_SPECIES;
  const q = query.toLowerCase().trim();
  return CURATED_SPECIES.filter(s => 
    s.commonNameId.toLowerCase().includes(q) ||
    s.commonNameEn.toLowerCase().includes(q) ||
    s.scientificName.toLowerCase().includes(q) ||
    (s.taxonomy && s.taxonomy.class && s.taxonomy.class.toLowerCase().includes(q)) ||
    (s.taxonomy && s.taxonomy.order && s.taxonomy.order.toLowerCase().includes(q)) ||
    (s.taxonomy && s.taxonomy.family && s.taxonomy.family.toLowerCase().includes(q)) ||
    (s.habitat && s.habitat.toLowerCase().includes(q)) ||
    (s.diet && s.diet.toLowerCase().includes(q))
  );
}

// Ekspor untuk lingkungan Node.js jika diperlukan
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TAXONOMY_LEVELS, TAXONOMY_TREE, CURATED_SPECIES, searchCuratedSpecies };
}
`;

fs.writeFileSync('/home/asadin/Projects/animals/js/data.js', output, 'utf8');
console.log("Successfully generated js/data.js!");
