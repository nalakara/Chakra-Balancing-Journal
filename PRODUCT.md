# Product: Chakra Balancing Journal

Dokumen ini mendokumentasikan spesifikasi produk berdasarkan inspeksi aktual terhadap kode sumber aplikasi saat ini, dengan membedakan secara tegas status implementasi tiap aspek: **Implemented**, **Partial**, **Planned**, atau **Inferred**.

---

## Product Overview

*Chakra Balancing Journal* adalah aplikasi web pemandu refleksi diri harian berbasis perjalanan 21 hari yang memadukan konsep penyeimbangan 7 cakra tradisional dengan pencatatan jurnal emosional, evaluasi energi harian, visualisasi analitik, dan umpan balik reflektif yang dihasilkan oleh kecerdasan buatan (Gemini).

- **Implemented**: Alur jurnal interaktif 21 hari dengan kartu fokus cakra, form entri jurnal, grafik tren energi-sentimen, dan tombol pemicu analisis AI.
- **Inferred**: Visi produk ini adalah menjadi aplikasi pendamping meditasi atau *mindfulness tracker* harian berorientasi kesejahteraan mental.

---

## Problem Statement

- **Implemented (Tercermin dari Solusi)**:
  - Orang sering kesulitan mempertahankan kebiasaan mencatat jurnal karena tidak ada struktur atau arahan yang jelas apa yang harus dipikirkan setiap harinya.
  - Catatan jurnal tulisan tangan jarang memberikan umpan balik langsung mengenai korelasi antara aktivitas harian dan tingkat energi seseorang.
- **Inferred**:
  - Konsep spiritual cakra sering kali terasa abstrak bagi pemula; aplikasi ini berusaha membumikannya menjadi tindakan konkret (misal: "makan sayuran akar", "humming", "napas hati") dan pertanyaan reflektif harian.

---

## Target Users

- **Inferred (Berdasarkan Persona & Bahasa Aplikasi)**:
  - **Praktisi Meditasi / Yoga Pemula**: Individu yang baru belajar mengenai cakra dan mencari panduan praktis bertahap selama 3 pekan.
  - **Pecinta *Self-Care* & *Mindfulness***: Orang yang rutin melakukan refleksi harian dan tertarik mencatat perasaan, rasa syukur, serta tingkat energi.
  - **Pengguna Berbahasa Indonesia**: Seluruh konten panduan cakra, pertanyaan formulir, dan prompt AI ditulis dalam bahasa Indonesia.

---

## User Needs

1. **Panduan Harian yang Ringkas dan Terarah**:
   - *Status*: **Implemented**
   - Pengguna membutuhkan tema yang terdefinisi per hari agar tidak bingung saat hendak menulis.
2. **Edukasi Praktis tentang Cakra**:
   - *Status*: **Implemented**
   - Pengguna ingin memahami arti cakra, tanda ketidakseimbangan, dan manfaat keseimbangannya tanpa membaca buku tebal.
3. **Penyimpanan Catatan Refleksi yang Aman**:
   - *Status*: **Planned** (Belum diimplementasikan sama sekali; saat ini data hilang ketika browser ditutup).
4. **Wawasan & Pola Emosional Otomatis**:
   - *Status*: **Implemented**
   - Pengguna ingin tahu apakah ada kemajuan atau pola emosi yang berulang dari catatan mereka melalui grafik dan ulasan AI.

---

## Core Use Cases

### 1. Membaca Panduan Cakra Hari Ini
- **Status**: **Implemented**
- **Deskripsi**: Pengguna membuka halaman, melihat hari yang aktif, membaca afirmasi dan aktivitas, lalu membuka kartu detail jika ingin mendalami informasi cakra terkait.

### 2. Mengisi Catatan Harian
- **Status**: **Implemented**
- **Deskripsi**: Pengguna mencatat apa yang dirasakan, aktivitas yang dilakukan, kesadaran diri, tantangan yang dialami, 3 hal yang disyukuri, dan menetapkan skala energi (1–10).

### 3. Memantau Tren Energi dan Sentimen (Visualisasi)
- **Status**: **Implemented**
- **Deskripsi**: Ketika pengguna telah memiliki minimal 2 entri, sistem menampilkan grafik gabungan garis (energi) dan batang (sentimen).

### 4. Mendapatkan Wawasan Reflektif AI
- **Status**: **Implemented**
- **Deskripsi**: Pengguna menekan tombol "Dapatkan Analisis AI" untuk memperoleh sintesis hangat dari Gemini yang mengupas pola emosi, tantangan energi, dan momen syukur.

### 5. Melanjutkan Hari Berikutnya
- **Status**: **Partial**
- **Deskripsi**: Pengguna dapat mengklik tombol "Berikutnya" untuk berpindah ke hari selanjutnya. Namun, karena tidak ada sistem tanggal kalender riil atau penyimpanan data, pengguna harus menyelesaikan semua entri dalam satu sesi browser tanpa menutup tab.

---

## User Workflows

### Alur Kerja Aktual:
1. **Langkah 1**: Pengguna membuka web → Default pada **Hari ke-1 (Root Chakra)**.
2. **Langkah 2**: Membaca afirmasi dan rekomendasi aktivitas. Opsional: Klik "Pelajari Lebih Lanjut" untuk membaca penjelasan mendalam.
3. **Langkah 3**: Mengetik respons pada formulir di bawah kartu fokus:
   - Perasaan dominan
   - Aktivitas dilakukan
   - Afirmasi hari ini
   - Kesadaran hari ini
   - Tantangan energi
   - Tiga hal yang disyukuri
   - Skala energi (slider 1–10, default 5)
4. **Langkah 4**: Mengklik tombol "Berikutnya" (di bagian bawah) untuk beralih ke Hari ke-2.
5. **Langkah 5**: Setelah minimal 2 hari terisi, grafik tren di tengah halaman otomatis muncul.
6. **Langkah 6**: Mengklik tombol "Dapatkan Analisis AI" pada kartu Analisis AI untuk mengirim seluruh entri ke Gemini dan membaca hasilnya.

---

## Functional Requirements

| Kebutuhan Fungsional | Status | Catatan Temuan Aktual |
| :--- | :--- | :--- |
| Tampilan Kartu Fokus Harian | **Implemented** | Menampilkan hari (1–21), rentang cakra (Hari 1–3, dst), nama cakra, ikon, fokus, aktivitas, dan afirmasi. |
| Detail Cakra Expandable | **Implemented** | Dropdown/akordion untuk Deskripsi, Tanda Ketidakseimbangan, dan Manfaat Keseimbangan. |
| Formulir Entri Jurnal | **Implemented** | 3 input teks, 3 textarea, 1 slider numerik (1–10). |
| Navigasi Antar Hari | **Implemented** | Tombol Sebelumnya/Berikutnya dengan validasi batas 1 dan 21. |
| Perhitungan Skor Sentimen | **Implemented (Partial/Naïve)** | Berbasis pencarian kata kunci lokal sederhana di `utils/sentiment.ts`. |
| Grafik Tren Visual | **Implemented** | Recharts ComposedChart (Line + Bar). Bersyarat minimal 2 hari entri. |
| Permintaan Analisis AI | **Implemented** | Tombol pemicu yang mengumpulkan semua data terisi dan memanggil Gemini 2.5 Flash. |
| Tombol Analisis Ulang | **Implemented** | Tombol "Buat Analisis Baru" tersedia setelah hasil pertama keluar. |
| Penyimpanan Lokal / Cloud | **Planned / Belum Ada** | Tidak ada kode LocalStorage, IndexedDB, atau database. Data murni in-memory. |
| Penanda Riwayat Selesai | **Planned / Belum Ada** | Tidak ada checklist/status "Sudah Diisi" per hari di tampilan navigasi. |

---

## Business Rules

1. **Struktur Pembagian Program 21 Hari**:
   - *Status*: **Implemented**
   - Total program adalah 21 hari tetap.
   - Setiap 3 hari didedikasikan untuk 1 cakra secara berurutan:
     - Hari 1–3: Root Chakra (Muladhara)
     - Hari 4–6: Sacral Chakra (Svadhisthana)
     - Hari 7–9: Solar Plexus Chakra (Manipura)
     - Hari 10–12: Heart Chakra (Anahata)
     - Hari 13–15: Throat Chakra (Vishuddha)
     - Hari 16–18: Third Eye (Ajna)
     - Hari 19–21: Crown (Sahasrara)
2. **Ketentuan Tampilan Grafik**:
   - *Status*: **Implemented**
   - Grafik hanya ditampilkan jika `chartData.length >= 2`. Jika baru 1 hari atau belum ada yang diisi, grafik disembunyikan.
3. **Ketentuan Tombol Analisis AI**:
   - *Status*: **Implemented**
   - Tombol dinonaktifkan (*disabled*) jika belum ada satu pun entri jurnal (`Object.keys(journalEntries).length === 0`) atau saat proses analisis sedang berlangsung.
4. **Rentang Nilai Skala Energi**:
   - *Status*: **Implemented**
   - Skala energi bernilai integer antara 1 sampai 10 (default 5).

---

## Data / Entities

Berdasarkan definisi di `types.ts`:

### 1. `ChakraInfo` (Entitas Statis)
- `chakraName` (string): Nama cakra (misal: "Root Chakra")
- `sanskritName` (string): Nama sanskerta (misal: "Muladhara")
- `dayRange` (string): Rentang hari (misal: "Hari 1–3")
- `focus` (string): Aspek fokus energi
- `activities` (string): Aktivitas fisik/meditatif yang direkomendasikan
- `affirmation` (string): Kalimat afirmasi positif
- `color` (string): Kelas Tailwind untuk warna teks (misal: `text-red-500`)
- `gradient` (string): Kelas Tailwind gradien latar (misal: `from-red-50 to-red-200`)
- `icon` (React.ComponentType): Komponen ikon SVG
- `description` (string): Penjelasan fungsi cakra
- `imbalanceSigns` (string): Ciri fisik/psikologis saat cakra tersumbat
- `balanceBenefits` (string): Manfaat yang dirasakan saat cakra seimbang

### 2. `JournalEntry` (Entitas Dinamis)
- `dominantFeeling` (string): Perasaan dominan hari ini
- `activitiesDone` (string): Aktivitas yang telah dikerjakan
- `affirmation` (string): Afirmasi yang diucapkan/diingat
- `awarenessToday` (string): Refleksi kesadaran diri
- `energyChallenge` (string): Hambatan atau penguras energi
- `threeGratefulThings` (string): Tiga poin rasa syukur
- `energyScale` (number): Nilai energi (1–10)

---

## AI Capabilities

- **Model**: `gemini-2.5-flash`
- **Peran Persona AI**: "Pemandu spiritual yang bijaksana dan penuh empati".
- **Struktur Prompt Analisis**:
  - Mengompilasi entri jurnal yang ada menjadi format teks berstruktur per hari.
  - Meminta AI mengevaluasi 4 poin:
    1. Pola Emosional (korelasi aktivitas dengan perasaan positif).
    2. Tantangan Energi (isu yang berulang).
    3. Momen Syukur (tema umum rasa syukur).
    4. Kesimpulan pemberdayaan yang memotivasi pengguna melanjutkan perjalanan.
- **Status Implementasi**: **Implemented** (secara fungsional), namun **Partial** dari segi ketahanan arsitektural karena dipanggil langsung dari peramban klien tanpa sanitasi token atau streaming respons.

---

## Integrations

- **Google GenAI API (`@google/genai`)**: **Implemented**. Menggunakan SDK resmi untuk memanggil model `gemini-2.5-flash`.
- **Integrasi Pihak Ketiga Lainnya**: **None**. Tidak ada integrasi OAuth, integrasi Google Workspace, atau database eksternal.

---

## UX Principles

- **Suasana Warna yang Selaras (*Chakra-Themed Palette*)**:
  - Latar belakang halaman berubah gradien secara dinamis mengikuti warna cakra yang sedang aktif (merah untuk Root, oranye untuk Sacral, kuning untuk Solar Plexus, hijau untuk Heart, biru untuk Throat, indigo untuk Third Eye, ungu untuk Crown).
- **Pendekatan Kartu Mengambang (*Glassmorphism Card*)**:
  - Elemen UI dibungkus dalam kartu putih semi-transparan dengan efek blur (`bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl`).
- **Informasi Bertingkat (*Progressive Disclosure*)**:
  - Detail materi cakra tidak langsung membanjiri layar, melainkan disembunyikan di balik tombol "Pelajari Lebih Lanjut".
- **Bahasa yang Santun dan Empatik**:
  - Seluruh teks antarmuka menggunakan bahasa Indonesia yang ramah, santun, dan menenangkan.

---

## Current Scope

- Menampilkan panduan tetap 21 hari (7 cakra @ 3 hari).
- Menginput catatan jurnal per hari secara in-memory.
- Visualisasi grafik energi & sentimen untuk minimal 2 hari catatan.
- Menghasilkan ringkasan analisis AI via Gemini.
- Navigasi bolak-balik hari 1 sampai 21.

---

## Out of Scope (Tidak Ditemukan dalam Kode Saat Ini)

- Autentikasi pengguna (Login/Signup).
- Penyimpanan persisten (database cloud maupun penyimpanan lokal browser).
- Fleksibilitas mengubah jumlah hari atau mengubah materi cakra.
- Fitur ekspor jurnal (PDF, teks, cetak).
- Notifikasi pengingat harian (Push Notification / Email).
- Pilihan multibahasa (aplikasi hanya berbahasa Indonesia).

---

## Known Limitations

1. **Hilangnya Data saat Refresh**: Ini adalah kelemahan produk paling fatal saat ini. Pengguna tidak dapat menggunakan aplikasi ini secara riil selama 21 hari tanpa kehilangan data begitu tab browser tertutup.
2. **Keterbatasan Analisis Sentimen Lokal**: Menggunakan pencocokan kata kunci statis (`['bahagia', 'tenang', ...]` vs `['cemas', 'sedih', ...]`), bukan pemrosesan bahasa alami (NLP) yang sesungguhnya.
3. **Ketergantungan API Key pada Waktu Build**: Jika environment variable `GEMINI_API_KEY` kosong saat build, fitur AI langsung gagal dengan pesan error.

---

## Future Opportunities

1. **Penyimpanan Lokal & Cloud Sync**: Menyimpan jurnal di IndexedDB/LocalStorage secara instan, dengan opsi sinkronisasi akun (Firebase Auth + Firestore).
2. **Kalender Perjalanan Interaktif**: Tampilan grid 21 hari atau linimasa cakra yang menunjukkan hari mana saja yang sudah terisi dan belum terisi, sehingga pengguna dapat melompat langsung ke hari yang diinginkan.
3. **Analisis Sentimen Berbasis AI yang Mendalam**: Mengganti deteksi kata kunci naïf dengan penilaian sentimen otomatis menggunakan embedding atau model NLP mini.
4. **Fitur Ekspor & Kenang-kenangan Perjalanan**: Kemampuan mengunduh bundel "Buku Perjalanan 21 Hari" dalam format PDF lengkap dengan afirmasi dan analisis spiritual AI.
