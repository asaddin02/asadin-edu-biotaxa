# Riwayat perubahan / Changelog

## Pembaruan UI/UX — 25 September 2026

- Halaman dukungan menyediakan kanal Indonesia dan internasional yang dapat dikonfigurasi terpisah, beserta bantuan transaksi. Ajakan kontribusi kode diganti dengan penggunaan BioTaxa dalam kegiatan belajar.

- Halaman dukungan sukarela `#/dukung`, tautan footer dan bagian dukungan beranda; pembayaran melalui URL HTTPS eksternal yang dikonfigurasi pengelola. Status belum tersedia ditampilkan jika tujuan donasi belum diisi.

- Aturan sticky navbar dibatasi ke `#header` agar judul halaman tidak menutupi navigasi saat scroll; diuji pada desktop, tablet, dan ponsel.

- Target mode guru kini berupa empat pilihan radio yang selalu terlihat, menggantikan dropdown agar cukup sekali klik atau tap.
- Palet antarmuka disegarkan menjadi toska, mint, lime, dan aksen warna per halaman dengan kontras teks yang diuji.

- Pembaruan PWA yang sudah menunggu tetap ditawarkan setelah halaman dimuat ulang; pemasangan cache baru mengambil aset terbaru dari jaringan.

- Identitas buku-daun hasil generate AI diterapkan ke seluruh logo, favicon, ikon instalasi, dan pratinjau tautan.
- Palet hijau hutan dan latar hangat, judul editorial, tata letak foto baru, kartu serta permukaan bacaan yang konsisten.
- Tata letak khusus halaman: panel filter jelajah, katalog materi dan kegiatan, navigasi laboratorium, formulir guru bertahap, kamus dengan indeks alfabet, jalur taksonomi, koleksi, kuis, serta navigasi bagian. Panel desktop berubah menjadi susunan vertikal atau kontrol geser pada ponsel/tablet.
- Detail spesies di ponsel mengurutkan nama, foto, lalu informasi dan tindakan; tabel perbandingan menyesuaikan layar sempit.
- Draf tugas guru tetap tersimpan dalam sesi saat mode berubah; navigasi bagian tidak memuat ulang halaman.
- Beranda memprioritaskan kegiatan belajar, menyertakan contoh pencarian dan pintasan sesuai jenjang.
- Dialog mode mempertahankan dropdown serta fokus saat target guru berubah; memilih guru dari beranda langsung membuka pengaturan target.
- Respons pencarian yang terlambat tidak lagi membuka saran setelah pengguna menghapus teks, menekan Escape, atau Tab.
- Arsip implementasi versi 1/2 yang tidak digunakan dihapus; riwayatnya tetap tersedia di Git.
- Tes regresi mencakup dropdown guru, fokus keyboard, kunjungan pertama, dan pembatalan saran pencarian.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/). Versi mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [3.0.0] — 2026-09-24

Perombakan besar agar BioTaxa bisa dipakai siswa SD sampai mahasiswa serta guru, dan siap diterbitkan sebagai proyek open source.

### Ditambahkan

- **Lima mode**: Penjelajah Cilik (SD), Peneliti Muda (SMP), Ilmuwan (SMA), Akademik (Kuliah), dan Guru. Pilihan mode tersimpan, dan mode mengubah ukuran huruf, bahasa, materi, tab, serta kegiatan.
- 111 kartu spesies kurasi berbahasa sederhana dalam bahasa Indonesia dan Inggris.
- 12 topik materi sesuai Kurikulum Merdeka dengan teks per jenjang, 76 soal kuis, kegiatan, catatan guru, dan bacaan lanjutan.
- Kamus 103 istilah. Istilah bisa diklik langsung dari materi dan kartu spesies.
- Halaman baru: Kuis (tebak foto dan kuis materi), Bandingkan, Di sekitarku, Kehidupan purba (garis waktu dan PBDB), Kamus, Guru (tugas lewat tautan dan modul ajar cetak), serta Paspor Penjelajah dengan 12 lencana.
- Empat simulasi baru: fotosintesis, persilangan Mendel, seleksi alam, dan skala kehidupan.
- Tombol **Bacakan** memakai suara bawaan peramban.
- Mode Akademik: sinonim, author, sitasi BibTeX, unduh data temuan (CSV), serta tautan ke NCBI, GenBank, BOLD, IUCN, dan Open Tree of Life.
- PWA: bisa dipasang dan dipakai offline.
- Siap terbit di **Cloudflare Pages**. Workflow Deploy berjalan setelah CI lulus. Snapshot API untuk halaman populer diperbarui setiap malam, edge cache (Pages Function) melayani permintaan lain, dan `_headers` memasang header keamanan. Pratinjau tautan memakai URL lengkap (`og:url`, `og:image`).
- Aplikasi otomatis beralih ke API langsung selama 60 detik bila proxy atau edge cache sibuk, gagal, atau kuotanya habis.
- `server/server.mjs`: server produksi tanpa dependensi dengan proxy cache untuk GBIF dan iNaturalist, pengatur jeda permintaan, batas per klien, header keamanan, dan kompresi.
- Dockerfile, GitHub Actions CI, Dependabot, templat issue dan pull request.
- `npm run data:check` untuk memvalidasi konten, dan `--resolve` untuk mengisi ID serta foto spesies baru secara otomatis.
- 56 tes Playwright deterministik (termasuk aksesibilitas axe, tampilan 320–1440 px, CSP, dan offline), serta smoke test terhadap API sungguhan.
- LICENSE (MIT), LICENSE-CONTENT (CC BY-SA 4.0), panduan lisensi dan monetisasi, panduan skala, CONTRIBUTING, CODE_OF_CONDUCT, dan SECURITY.

### Diubah

- Pencarian memakai autocomplete iNaturalist, sehingga hasilnya relevan dengan kata yang diketik ("hiu" → hiu, bukan kucing hutan). Kelompok seperti famili juga bisa ditemukan ("nyamuk" → Culicidae).
- Galeri menampilkan makhluk hidup yang tercatat di Indonesia lebih dulu.
- Pohon kehidupan mendahulukan kelompok yang dikenal anak, dengan nama dan penjelasan ramah anak.
- Status konservasi dijelaskan dengan kata-kata, misalnya "Kritis, hampir punah".
- Ukuran huruf minimum dinaikkan. Navigasi bawah juga dipakai di tablet.
- Koleksi, catatan, progres, dan buku eksperimen tersimpan di perangkat dan tidak hilang saat halaman dimuat ulang.
- Kode dipecah menjadi modul per halaman yang dimuat saat dibutuhkan, dan dirapikan dengan Prettier dan ESLint.
- Foto beranda diganti dengan foto berlisensi CC0, CC BY, dan CC BY-SA. Foto berlisensi NC bisa dimatikan dengan satu pengaturan sebelum monetisasi.

### Diperbaiki

- Bagian "Bentuk & adaptasi" dan "Ukuran & usia" di halaman spesies menampilkan teks yang sama.
- Potongan teks sumber seperti "(Fig. 151)" muncul di deskripsi.
- Foto utama halaman spesies meminta alamat `…/undefined` sebelum jatuh ke ukuran sedang. Sekarang foto langsung memakai ukuran besar.
- `robots.txt` kini melarang crawler mengakses `/api/` dan `/data/`, yang bisa menghabiskan kuota.
- Tautan "Lewati ke konten" untuk pengguna keyboard dan pembaca layar membuka halaman "tidak ditemukan", karena `#main` dibaca sebagai rute. Sekarang tautan itu hanya memindahkan fokus ke konten.
- Batas permintaan per klien di server bisa dilewati dengan header `X-Forwarded-For` palsu. Header itu kini hanya dipercaya bila `TRUST_PROXY` diatur.

### Dihapus

- Screenshot, laporan, dan dokumen versi 2 di `docs/`. Kode dan dokumen versi 2 dipindahkan ke `archive/`.

## [2.0.0] — 2026-09-23

Versi sebelumnya: penelusuran taksonomi GBIF, galeri iNaturalist, dossier spesies dengan peta, antarmuka dua bahasa, dan tiga simulasi laboratorium. Implementasi lama tersedia dalam riwayat Git.
