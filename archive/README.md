# Arsip implementasi sebelumnya

Berkas di folder ini dipertahankan agar pekerjaan sebelumnya tidak hilang. **Tidak ada yang dimuat oleh aplikasi BioTaxa 3.** ESLint dan Prettier mengabaikan folder ini.

| Berkas | Asal |
|---|---|
| `app-v2.js`, `content-v2.js` | Aplikasi BioTaxa 2.0 sebelum dipecah menjadi modul di `js/` |
| `docs-v2/` | Rencana implementasi dan catatan verifikasi BioTaxa 2.0 |
| `data.js`, `taxonomy.js`, `taxonomy.css`, `tradeOff.js`, `scratch_*` | Generator dan data versi 1 |

Data kurasi, skor capit/racun, dan narasi evolusi di berkas lama belum diaudit secara ilmiah. Jangan jadikan sumber pelajaran. Generator lama menulis ke struktur proyek lama, jadi jangan jalankan pada proyek aktif sebelum meninjau jalur keluarannya.

Konten yang berlaku ada di `js/data/`. Konten itu divalidasi dengan `npm run data:check`.
