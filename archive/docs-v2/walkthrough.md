# BioTaxa 2.0 — verifikasi implementasi

Tanggal pengujian akhir: 24 September 2026. Folder akhir: `/home/asadin/Projects/asadin-edu-biotaxa`.

## Jawaban audit klaim lama

Klaim lama **sebagian benar, tetapi terlalu luas**. Ada aplikasi vanilla JS, beranda, pencarian, integrasi iNaturalist/Wikipedia, dan lab. Namun hierarki lama melewati famili/genus; data kurasi bercampur dengan hasil API; tidak ada antarmuka dua bahasa menyeluruh; serta skor kekuatan/racun dan uraian evolusi generik belum memiliki dasar pengukuran per spesies. Dokumen implementasi dan walkthrough yang dikutip tidak ada pada folder awal.

Versi ini mengganti bagian aktif tersebut, mempertahankan berkas lama di `archive/`, dan tidak lagi menjanjikan seluruh data lengkap 2,1 juta spesies.

## Pemeriksaan otomatis

`npm test`: **15 tes lulus**, Chrome headless; ringkasan tersimpan di [docs/test-results.txt](docs/test-results.txt). Tes menggunakan fixture API agar gangguan layanan tidak memengaruhi pemeriksaan logika:

1. Domain → kingdom → filum → kelas → ordo → famili → genus → spesies; nama ID/EN; simpan koleksi; reload dan ganti bahasa.
2. Pencarian, pagination maju/mundur, input berisi HTML ditampilkan sebagai teks.
3. API gagal → pesan kegagalan dan tombol coba lagi, bukan “spesies tidak ada”.
4. Hasil API lambat tidak mengganti halaman yang sudah ditinggalkan.
5. Cabang Bacteria/Archaea, turunan kosong, navigasi back/forward.
6. Gaya tuas dalam Newton, pengaruh panjang lengan, model energi/osmosis, pencatatan eksperimen.
7. Halaman pada lebar 390 px tanpa overflow halaman, dua bahasa, reduced motion, dan interaksi keyboard dasar.
8. Catatan dan parameter eksperimen tetap ada ketika bahasa diganti.

9. Galeri tanpa kueri, pagination, dan parameter filter kelompok.
10. Hasil galeri kosong menawarkan indeks lebih luas; kegagalan API dibedakan.
11. Identitas iNaturalist tetap dapat dibuka tanpa kecocokan GBIF; foto, lightbox, popup titik dan bahasa peta berfungsi.
12. Spesies tanpa koordinat tetap memiliki atlas lokal.
13. Foto gagal memiliki fallback; tab dossier mendukung keyboard.
14. Galeri dan peta mobile tanpa overflow horizontal.
15. Pergantian bahasa, ukuran viewport, dan meninggalkan halaman peta tidak menghasilkan galat JavaScript.

Pemeriksaan awal menemukan penanda tertutup oleh atlas yang dimuat belakangan dan galat `_leaflet_pos` dari siklus peta. Lapisan daratan kini berada di bawah penanda; animasi dinonaktifkan dan dihentikan sebelum pelepasan peta.

Ini bukan audit aksesibilitas lengkap atau pengujian semua perangkat. Tes pertama memakai rantai fixture, bukan mengklaim setiap jalur taksonomi dunia memiliki delapan tingkat tanpa celah.

## Pemeriksaan API nyata

`npm run smoke` dijalankan terpisah dengan server pada port 8085. Uji akhir selesai dengan exit code 0 dan **tanpa galat JavaScript**. Lima dossier memuat foto dan atlas: masing-masing 300 titik untuk harimau, tumbuhan, jamur, dan bakteri; 159 titik untuk arkea. Hasil terstruktur dan waktu pemeriksaan tersedia di [docs/live-report.json](docs/live-report.json). Alur yang diperiksa:

- Galeri semua organisme, hewan, burung, serangga, tumbuhan, jamur, bakteri, dan arkea; masing-masing 24 catatan pada halaman pertama.
- Halaman kedua galeri dan indeks GBIF untuk kueri “Panthera”.
- Dossier Panthera tigris, Achillea millefolium, Trametes versicolor, Nostoc commune, dan Sulfolobus solfataricus: foto serta atlas dengan titik temuan nyata.
- Bahasa Inggris pada dossier, tampilan desktop/mobile, dan keluaran cetak lab.

Jumlah indeks bersifat dinamis, bukan jumlah individu atau jaminan jumlah seluruh spesies bumi. Smoke test memeriksa hasil halaman, foto yang termuat, dan titik peta pada contoh tersebut. Jumlah gambar galeri yang termuat dapat lebih kecil dari 24 karena lazy loading dan ketersediaan foto; arkea memiliki lebih sedikit foto berlisensi.

Temuan kualitas data: catatan 11286021 yang muncul pada pencarian Escherichia coli memiliki nama sumber **Escherichia coli_E**, `nameType: INFORMAL`, dan canonicalName “Escherichia spec.”. Aplikasi mempertahankan nama sumber serta menandainya informal; catatan itu tidak boleh dijadikan bukti bahwa dossier E. coli baku sudah lengkap.

Permintaan Wikipedia lewat Python pada lingkungan ini mendapat HTTP 403. Namun akses melalui peramban berhasil untuk ringkasan Indonesia pada beberapa dossier. Aplikasi tetap mengantisipasi kegagalan layanan dan menampilkan tautan sumber. Data pelengkap tidak tersedia secara seragam pada setiap organisme.

## Bukti visual

- [Beranda desktop](docs/screenshots/home-desktop.png)
- [Beranda mobile](docs/screenshots/home-mobile.png)
- [Galeri spesies](docs/screenshots/gallery-desktop.png)
- [Galeri bakteri](docs/screenshots/bacteria-gallery.png)
- [Peta desktop](docs/screenshots/map-desktop.png)
- [Peta mobile](docs/screenshots/map-mobile.png)
- [Dossier dari API nyata](docs/screenshots/species-live.png)
- [Dossier mode English](docs/screenshots/species-english.png)
- [Laboratorium](docs/screenshots/lab-desktop.png)
- [Contoh PDF laboratorium](docs/laboratory-sample.pdf)

Screenshot adalah hasil implementasi aktual, bukan rancangan. Gambar spesies berasal dari iNaturalist dan memiliki atribusi di antarmuka; ketersediaannya tergantung layanan.

## Performa dan penyimpanan

Sekitar 134 KB untuk HTML, CSS, dan JavaScript aplikasi sebelum kompresi; foto beranda lokal sekitar 780 KB, atlas GeoJSON 206 KB, dan Leaflet sekitar 164 KB ditambah ikon. Peta baru dimuat ketika tab peta dibuka. Foto spesies lain berasal dari API dan dimuat bertahap. Ukuran ini bukan skor Lighthouse atau jaminan latensi jaringan. Font memakai font sistem. Hasil dipaginasi 24 catatan, cache maksimal 100 URL / 5 menit, dan koleksi menyimpan maksimum 200 penanda.

## Menjalankan kembali

Buka http://127.0.0.1:8085/. Jika komputer atau server telah berhenti, jalankan `npm start` dari folder proyek. Server lokal harus tetap hidup selama aplikasi digunakan. Folder `animals` tidak dibuat ulang dan tidak ada salinan proyek baru.

## Batas kelengkapan

Antarmuka dan materi ajar lokal tersedia dalam dua bahasa. Nama umum serta terjemahan teks sumber tersedia hanya bila penyedia mencatatnya. Tidak semua spesies memiliki informasi rantai makanan, gaya mekanik, toksisitas, umur, atau adaptasi spesifik. Data yang hilang tidak direkayasa. Model laboratorium adalah ilustrasi konsep, bukan alat menilai bahaya spesies. Rujukan sumber dan asumsi dicantumkan di aplikasi.

## Perombakan identitas visual

Desain terbaru, logo AI, navigasi ponsel, serta bukti desktop/tablet/mobile didokumentasikan pada [docs/redesign.md](docs/redesign.md). Logo menambah sekitar 38 KB aset lokal; hasil test fungsional setelah perubahan tetap 15 lulus.
