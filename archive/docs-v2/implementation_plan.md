# Rencana implementasi BioTaxa 2.0 — hasil pelaksanaan

Tanggal: 23 September 2026.

## Audit awal

Dokumen `implementation_plan.md` dan `walkthrough.md` yang dikutip dalam klaim tidak ditemukan dalam folder awal. Kode awal memiliki beranda, pencarian iNaturalist, pohon kurasi hingga ordo, dossier, dan komparasi. Namun tidak membuktikan cakupan lengkap 2,1 juta spesies, terjemahan semua halaman, penelusuran famili/genus, atau validitas skor capit/racun. Materi evolusi generik tidak dapat dianggap analisis khusus setiap spesies.

## Implementasi yang diselesaikan

1. Bangun ulang shell dan desain ringan, terang, responsif dengan ilustrasi SVG, gradien, animasi kecil, dan navigasi keyboard.
2. Pusatkan antarmuka serta materi ajar dalam kamus ID/EN. Pilihan bahasa bertahan setelah reload.
3. Jadikan GBIF Backbone sebagai sumber hierarki dan pencarian. Lapisan domain menghubungkan kingdom GBIF tanpa membuat domain palsu di API.
4. Ambil turunan langsung per halaman, pertahankan famili/genus, breadcrumb, serta URL yang mendukung back/forward dan tautan langsung.
5. Terapkan pencarian ilmiah/nama umum terindeks, resolusi nama umum tepat via iNaturalist, filter kingdom, pagination, serta kondisi kosong/gagal yang berbeda.
6. Bangun dossier dengan nama dua bahasa jika tersedia, taksonomi, sumber deskripsi, foto berlisensi, Wikipedia, distribusi, sampel temuan, konservasi, lembar belajar, dan cetak.
7. Ganti peringkat kekuatan/racun buatan dengan tiga model edukasi, penjelasan asumsi, rujukan penelitian, dan buku eksperimen.
8. Tambahkan cache terbatas, timeout, sanitasi tampilan API, dan penjagaan respons asinkron agar tidak merusak navigasi.
9. Verifikasi dengan tes otomatis, layanan nyata, screenshot desktop/mobile, serta contoh PDF.
10. Arsipkan generator/data lama dan ganti nama proyek menjadi `asadin-edu-biotaxa`.

## Batas yang tidak boleh disamarkan sebagai fitur lengkap

- Tidak ada API tunggal yang memberikan seluruh fakta setiap organisme. Aplikasi menampilkan data yang didapat, menandai kekurangan, dan merujuk sumber.
- Terjemahan antarmuka lengkap tidak sama dengan ketersediaan terjemahan setiap teks ilmiah sumber.
- Sampel temuan bukan peta rentang spesies atau penetapan status konservasi baru.
- Simulasi capit/energi/osmosis bukan pengukuran hewan, tumbuhan, atau mikroba nyata.
- Tidak ada unduhan massal jutaan spesies atau penyimpanan database lokal.

Untuk memperluas cakupan di masa depan: dataset sifat organisme yang berlisensi dan dapat dipetakan ke identitas takson, sumber mikrobiologi khusus, penerjemahan tervalidasi pengajar, dan kurasi hubungan makanan berbasis publikasi. Ini bukan fitur yang sudah diimplementasikan.

## Penyelesaian perombakan visual — 24 September 2026

- Beranda fotografis dengan aset lokal beratribusi; galeri API 24 spesies per halaman dan delapan filter kelompok.
- Dossier bertab, pemuatan bertahap, hingga delapan foto berlisensi, pembesaran foto, dan fallback gambar.
- Atlas interaktif Leaflet/Natural Earth lokal, titik GBIF atau iNaturalist, popup sumber, serta pilihan lapisan daring.
- Pisahkan lapisan daratan di bawah titik agar pemuatan atlas yang terlambat tidak menutupi penanda; hentikan animasi ketika peta dilepas.
- Lima belas tes deterministik, smoke API nyata, screenshot desktop/mobile, dokumentasi dan PDF diperbarui. Hasil nyata dicatat di docs/live-report.json.
