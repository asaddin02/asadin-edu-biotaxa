# BioTaxa — Living Atlas

Perombakan UI/UX pada 24 September 2026, di folder proyek yang sama.

## Arah visual

Putih terang dan mint menggantikan dominasi krem/olive. Warna tinta biru tua memperjelas teks, hijau emerald menjadi warna aksi, lime menjadi aksen. Tiga domain mendapat identitas mint, lilac, dan apricot. Tipografi sistem menggunakan ukuran judul tegas, informasi ilmiah tetap memakai italic serif pada nama spesies. Tidak ada font eksternal atau framework UI tambahan.

Beranda memakai susunan foto lebar dan dua foto pendamping, pencarian langsung dan pintasan jelajah. Kartu foto, pohon, galeri, dossier, peta, lab, koleksi, sumber, status kosong/gagal dan cetak menggunakan satu stylesheet baru. Navigasi bawah pada ponsel menempatkan lima tujuan utama dekat jangkauan ibu jari; ada ruang aman di footer dan indikator halaman aktif. Pengurangan gerakan dan fokus keyboard tetap didukung.

## Logo

Logo baru dibuat dengan **built-in imagegen**, lalu dioptimalkan menjadi PNG transparan 256 × 256, sekitar 38 KB. Bentuk bercabang dan spiral pakis membentuk huruf b. Logo ini adalah identitas merek; foto organisme tetap berasal dari sumber beratribusi, bukan gambar AI.

- [Logo produksi](../assets/brand/biotaxa-mark.png)
- [Prompt lengkap dan pedoman identitas](../assets/brand/README.md)

Logo hadir di header, footer, favicon/Apple touch icon, stempel beranda dan pencarian, kepala halaman, status pemuatan/kosong, laboratorium dan lembar belajar cetak. Teks BioTaxa tetap dirender sebagai HTML untuk keterbacaan dan aksesibilitas.

## Verifikasi

- `npm test`: 15 tes lulus. Hierarki, pencarian, pagination, kedua bahasa, koleksi, kegagalan sumber, keyboard, foto, peta dan simulasi tercakup.
- `npm run smoke`: delapan galeri dan lima dossier dari API nyata berhasil; tidak ada galat JavaScript. Detail tersedia di [live-report.json](live-report.json).
- Pemeriksaan akhir lintas ukuran dan mode bahasa tersedia di [redesign-report.json](redesign-report.json).
- Konflik CSS ikon dengan SVG peta ditemukan saat pengujian dan diperbaiki; klik titik peta kembali lolos tes.
- Foto dan data organisme tetap mengikuti ketersediaan sumber. Tidak ada penambahan klaim cakupan atau kelengkapan ilmiah.

## Tampilan akhir

- [Beranda desktop](screenshots/redesign/home-1440.png)
- [Beranda ponsel](screenshots/redesign/home-390.png)
- [Beranda English](screenshots/redesign/home-en-1440.png)
- [Pohon kehidupan](screenshots/redesign/tree-1440.png)
- [Galeri](screenshots/redesign/gallery-1440.png)
- [Dossier](screenshots/redesign/species-1440.png)
- [Peta desktop](screenshots/redesign/map-1440.png)
- [Peta ponsel](screenshots/redesign/map-390.png)
- [Laboratorium](screenshots/redesign/lab-1440.png)
- [Lembar eksperimen PDF](laboratory-sample.pdf)

Aplikasi: http://127.0.0.1:8085/. Jalankan `npm start` dari folder proyek jika server telah berhenti.
