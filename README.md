# BioTaxa · Asadin Edu

Atlas kehidupan untuk siswa SD–SMA dan pengajar. Antarmuka Indonesia/English, penelusuran taksonomi, pencarian spesies dari API, dossier dengan sumber, dan laboratorium virtual. Dibangun dengan HTML, CSS, dan JavaScript modules dengan Leaflet lokal untuk peta, tanpa bundler, font eksternal, atau database lokal spesies.

## Menjalankan

```bash
cd /home/asadin/Projects/asadin-edu-biotaxa
python3 -m http.server 8085 --bind 127.0.0.1
```

Buka **http://127.0.0.1:8085/**. Jika server sudah berjalan pada port itu, cukup muat ulang halaman. Alternatif: `npm start`. Koneksi internet diperlukan untuk API; beranda, panduan, dan simulasi tersedia dari berkas aplikasi. Ini bukan aplikasi PWA/offline.

## Yang tersedia

- Beranda edukatif: taksonomi, binomial, kekerabatan, delapan tingkat umum, dan panduan berdasarkan jenjang sekolah.
- Tiga domain sebagai lapisan pengantar. Eukarya → kingdom GBIF Animalia/Plantae/Fungi/Chromista/Protozoa; Bacteria dan Archaea → kingdom yang sesuai pada GBIF.
- Penelusuran **anak langsung** lewat API, termasuk famili dan genus. Tidak ada lagi pintasan ordo → seluruh spesies atau spesimen kurasi pada setiap tingkat.
- Galeri visual iNaturalist langsung menampilkan 24 spesies per halaman tanpa mengetik kata kunci; tersedia filter hewan, burung, serangga, tumbuhan, jamur, bakteri, dan arkea. Foto berlisensi dapat diperbesar, dengan hingga delapan foto pada dossier.
- Pagination 24 catatan pada hierarki dan indeks GBIF. Pencarian terbatas pada spesies berstatus ACCEPTED dalam GBIF Backbone. Nama umum tepat dapat diresolusikan lewat iNaturalist; hasil GBIF tetap pencarian teks dan bisa memuat kecocokan terkait.
- Detail spesies: nama ilmiah, nama Indonesia/Inggris bila tercatat, klasifikasi, foto beratribusi, ringkasan Wikipedia, deskripsi habitat/ekologi/morfologi/reproduksi/ukuran/evolusi bila tersedia, wilayah sumber, sampel koordinat temuan, konservasi, dan tautan sumber.
- Bahasa antarmuka dan materi ajar lokal dapat diganti pada semua halaman. **Teks sumber tidak otomatis diterjemahkan**; bahasa asal ditandai. Wikipedia Indonesia dicoba terlebih dahulu untuk mode ID, lalu Inggris sebagai fallback.
- Koleksi favorit lokal, lembar belajar, catatan, dan cetak melalui dialog peramban (termasuk Save as PDF).
- Laboratorium: model tuas capit dengan satuan Newton; aliran energi; osmosis. Buku eksperimen menyimpan parameter, prediksi, dan hasil selama sesi halaman. Tidak ada skor toksisitas rekaan atau adu hewan.
- Identitas visual baru: putih/mint, tinta biru tua dan aksen lime; kartu tiga domain berwarna, logo AI lokal, navigasi bawah ponsel, fokus keyboard, pengurangan animasi, status pemuatan, kegagalan sumber yang jelas, dan pencegahan hasil permintaan lama menimpa halaman baru.

## Batas data yang penting

**Ini bukan ensiklopedia lengkap setiap spesies di bumi.** Aplikasi memberikan akses ke catatan yang tersedia pada sumber, bukan menjamin bahwa semua kehidupan telah ditemukan atau didokumentasikan. Angka “2,1 juta” pada versi lama tidak dipakai sebagai janji cakupan.

Tidak semua organisme memiliki nama Indonesia/Inggris, foto, uraian makanan, umur, data kekuatan, atau catatan persebaran. Kolom yang belum tersedia ditandai. Peta interaktif menampilkan atlas negara/benua lokal dan hingga 300 titik GBIF, atau hingga 100 observasi iNaturalist sebagai sumber alternatif. Atlas tetap terlihat ketika koordinat tidak tersedia. Titik temuan bukan peta rentang spesies lengkap. Peta jalan daring serta lapisan kepadatan GBIF tersedia sebagai pilihan. Label wilayah dapat bersifat historis. Rincian distribusi menampilkan cuplikan 20 catatan distribusi dan 12 baris temuan, nama/deskripsi juga dibatasi agar ringan. Penelusuran turunan tetap mengikuti hierarki sumber: jika sumber melewati suatu tingkat, BioTaxa tidak menciptakan tingkat itu.

API pencarian GBIF membatasi offset jauh; gunakan kata kunci atau kelompok yang lebih spesifik untuk pencarian sangat luas. Jumlah hasil bukan estimasi jumlah seluruh spesies bumi. Klasifikasi antarkatalog dapat berbeda. Model tiga domain adalah pengantar pendidikan dan disertai penjelasan tentang penelitian dua domain.

GBIF menjadi sumber hierarki dan indeks luas; galeri memakai identitas asli iNaturalist. Penggabungan data kedua sumber mensyaratkan **nama ilmiah yang sama** untuk mengurangi risiko foto spesies keliru. Nama umum tetap mengikuti pencatatan sumber, yang dapat memiliki variasi dan kesalahan. Foto hanya ditampilkan bila memiliki lisensi yang diizinkan aplikasi; atribusi dan tautan lisensi/catatan dipertahankan. Lisensi konten eksternal mengikuti penyedianya, bukan otomatis lisensi kode proyek.

## Struktur

```text
asadin-edu-biotaxa/
├── index.html
├── css/style.css
├── js/app.js              # router, halaman, laboratorium, interaksi
├── js/api.js              # GBIF, iNaturalist, Wikipedia; timeout dan cache
├── js/map.js              # atlas lokal, titik temuan, pilihan lapisan daring
├── js/media.js            # lisensi, atribusi, fallback gambar
├── assets/                # foto beranda, atlas, Leaflet beserta lisensi
├── js/content.js          # materi ajar dan antarmuka ID/EN
├── tests/                 # pengujian deterministik + smoke layanan nyata
├── docs/                  # screenshot, laporan live, contoh cetak
├── archive/               # generator/data lama; tidak dipakai aplikasi
├── implementation_plan.md
└── walkthrough.md
```

Cache respons hanya di memori, maksimal 100 URL dengan TTL 5 menit. `localStorage` memuat pilihan bahasa dan maksimum 200 penanda spesies. Catatan belajar tidak dikirim ke server; cetak untuk menyimpannya. Pencarian/nama spesies dan permintaan data dikirim ke layanan sumber. Tidak ada analytics atau login.

## Menguji

```bash
npm ci
npm test
# Dengan server aplikasi aktif:
npm run smoke
```

Pengujian memakai Chrome pada `/usr/bin/google-chrome`; ubah dengan `CHROME_PATH=/jalur/chrome`. `BIOTAXA_URL` dapat mengubah alamat smoke test. Playwright hanya dependensi pengembangan. Lima belas uji deterministik memakai respons fixture untuk alur dan kegagalan; smoke terpisah memeriksa API nyata. Lihat [walkthrough](walkthrough.md) untuk bukti serta keterbatasan pengujian.

## Identitas visual

Perombakan 24 September 2026 menggunakan logo AI transparan yang diterapkan pada header, footer, favicon, halaman, status pemuatan, dan lembar belajar. Logo produksi berukuran sekitar 38 KB; tidak membutuhkan layanan gambar saat website dibuka. Lihat [identitas dan prompt logo](assets/brand/README.md) serta [laporan desain](docs/redesign.md).

## English

BioTaxa is a lightweight, bilingual biodiversity learning application. Serve this folder using `python3 -m http.server 8085 --bind 127.0.0.1` and visit http://127.0.0.1:8085/. No build or runtime package installation is needed.

Explore three educational domains, then follow GBIF parent/child relationships through families and genera to species. Search accepted species records, inspect sourced dossiers, bookmark discoveries, print worksheets, and experiment with lever mechanics, energy transfer, and osmosis.

The interface and local teaching material are available in Indonesian and English. External text retains its source language when a translation is unavailable. Missing names, traits, measurements, photos, and distribution data are explicitly marked. This is an interface to available knowledge, **not a claim of complete knowledge about every species**. Simulations do not predict real venom toxicity or animal danger. Source data and images retain their original licenses and attribution.

Run `npm ci && npm test` for deterministic browser tests; run `npm run smoke` with the local server running to check live services. Source failures, incomplete taxonomic ranks, API search-depth limits, and data quality differences are expected limitations rather than invented facts.
