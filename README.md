# Chakra Balancing Journal

> Jurnal harian panduan 21 hari untuk refleksi diri, pelacakan energi, dan penyelarasan cakra dengan bantuan AI wawasan emosional.

---

## Overview

**Chakra Balancing Journal** adalah aplikasi web berbasis React yang dirancang untuk memandu pengguna menjalani program refleksi batin selama 21 hari. Program ini membagi 21 hari ke dalam 7 cakra (masing-masing cakra dieksplorasi selama 3 hari berturut-turut). Setiap hari, pengguna diberikan fokus tema, aktivitas yang disarankan, dan afirmasi harian. Pengguna dapat mencatat perasaan, kesadaran, tantangan energi, hal yang disyukuri, serta memberi nilai skala energi (1–10). Aplikasi menyediakan visualisasi grafik tren energi dan sentimen, serta fitur analisis berbasis AI (Gemini) yang merangkum pola emosi dari jurnal yang telah diisi.

---

## Problem yang Ingin Diselesaikan

1. **Kurangnya struktur dalam jurnal refleksi diri / spiritual**: Banyak orang ingin melakukan refleksi rutin atau meditasi cakra tetapi bingung apa yang harus difokuskan setiap harinya.
2. **Ketiadaan umpan balik atas catatan harian**: Jurnal manual (buku tulis) sering kali berakhir menjadi tumpukan catatan tanpa adanya analisis pola emosional atau tren energi dari waktu ke waktu.
3. **Kebutuhan akan panduan terstruktur**: Membantu pengguna menghubungkan kondisi fisik/mental harian dengan konsep keseimbangan energi secara bertahap (3 hari per cakra).

---

## Target User

- Individu yang tertarik pada praktik *mindfulness*, meditasi, *wellness*, dan eksplorasi cakra.
- Pengguna yang ingin membangun kebiasaan *journaling* harian dengan panduan prompt terstruktur.
- Praktisi pemula yang membutuhkan panduan praktis dan afirmasi positif harian.

---

## Core Features

1. **Panduan 21 Hari & 7 Cakra**:
   - Siklus terstruktur: Hari 1–3 (Muladhara / Root), Hari 4–6 (Svadhisthana / Sacral), Hari 7–9 (Manipura / Solar Plexus), Hari 10–12 (Anahata / Heart), Hari 13–15 (Vishuddha / Throat), Hari 16–18 (Ajna / Third Eye), dan Hari 19–21 (Sahasrara / Crown).
   - Setiap cakra dilengkapi fokus, aktivitas rekomendasi, afirmasi, kartu edukasi (deskripsi, tanda ketidakseimbangan, dan manfaat keseimbangan) yang dapat dibuka/tutup (*expandable*).
   - Skema warna gradien latar belakang dinamis yang berubah sesuai cakra yang aktif.

2. **Formulir Jurnal Harian**:
   - Input perasaan dominan.
   - Input aktivitas yang dilakukan.
   - Input afirmasi harian.
   - Refleksi kesadaran hari ini (*awareness*).
   - Catatan tantangan energi (*energy challenge*).
   - Tiga hal yang disyukuri (*gratitude*).
   - Slider skala energi (1–10).

3. **Visualisasi Data (Recharts)**:
   - Grafik gabungan (*Composed Chart*) yang otomatis muncul jika minimal ada 2 entri jurnal.
   - Garis (*Line Chart*) untuk tren skala energi (0–10).
   - Batang (*Bar Chart*) untuk sentimen perasaan berdasarkan pencocokan kata kunci bahasa Indonesia (positif = hijau, netral = abu-abu, negatif = merah).

4. **Analisis AI (Google Gemini 2.5 Flash)**:
   - Menganalisis seluruh entri jurnal yang telah terisi.
   - Mengidentifikasi pola emosional, tantangan energi berulang, tema rasa syukur, serta pesan penyemangat yang memberdayakan.

5. **Navigasi Hari (1–21)**:
   - Tombol navigasi "Sebelumnya" dan "Berikutnya" untuk berpindah antar hari dengan batas minimum Hari 1 dan maksimum Hari 21.

---

## Main User Workflow

1. **Melihat Fokus Hari Ini**: Pengguna membuka aplikasi, melihat hari aktif (misal: Hari ke-1), membaca fokus cakra, rekomendasi aktivitas, dan afirmasi.
2. **Membaca Edukasi Cakra (Opsional)**: Pengguna dapat menekan tombol "Pelajari Lebih Lanjut" untuk membaca deskripsi mendalam tentang cakra yang bersangkutan.
3. **Mengisi Jurnal Harian**: Pengguna melengkapi kolom refleksi dan menggeser slider skala energi (1–10).
4. **Melihat Tren (Visualisasi)**: Setelah mengisi minimal 2 hari, grafik komparasi energi dan sentimen otomatis tampil.
5. **Meminta Analisis AI**: Pengguna menekan tombol "Dapatkan Analisis AI" di bagian bawah untuk menerima sintesis reflektif dari Gemini.
6. **Berpindah Hari**: Pengguna menekan tombol "Berikutnya" untuk mencatat hari berikutnya.

---

## How the Application Works

Aplikasi dibangun sebagai Single Page Application (SPA) berbasis React 19 dan TypeScript yang dikompilasi menggunakan Vite.
- Seluruh data jurnal disimpan di dalam memori lokal komponen React (`useState`).
- Analisis sentimen sederhana dihitung secara *rule-based* di sisi klien (`utils/sentiment.ts`) dengan mencocokkan kata kunci bahasa Indonesia (seperti *bahagia, tenang, cemas, lelah*).
- Panggilan AI dilakukan langsung dari peramban (*client-side SDK*) menggunakan paket `@google/genai` menuju model `gemini-2.5-flash`.

---

## Technology Stack

- **Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`~5.8.2`)
- **Build Tool**: Vite (`^6.2.0`)
- **Styling**: Tailwind CSS (dimuat via CDN runtime `cdn.tailwindcss.com`)
- **Typography**: Google Fonts (Poppins)
- **Charts**: Recharts (`^2.12.7`)
- **AI SDK**: `@google/genai` (`^1.30.0`)
- **Icons**: Custom inline SVG components (`components/IconComponents.tsx`)

---

## Current Status

- **Tingkat Kematangan**: **Functional Prototype** (Prototipe Berfungsi).
- Seluruh alur antarmuka dasar dapat dijalankan (input form, visualisasi chart, pemanggilan AI).
- Namun, aplikasi **belum memiliki sistem penyimpanan permanen** (tidak ada LocalStorage maupun Database). Semua data akan hilang jika halaman dimuat ulang (*refresh*).

---

## Known Limitations

1. **Tidak Ada Persistensi Data**: Data jurnal hanya tersimpan di React State (`journalEntries`). Begitu browser ditutup atau di-*reload*, data langsung terhapus.
2. **Kunci API di Sisi Klien**: Panggilan Gemini dilakukan langsung di sisi klien melalui `process.env.API_KEY` yang diinjeksikan via Vite config `define`. Ini tidak aman untuk lingkungan produksi publik karena kunci API dapat diinspeksi di browser.
3. **Analisis Sentimen Naïve**: Modul `sentiment.ts` hanya memeriksa kecocokan substring sederhana (*case-insensitive*) dari segelintir kata kunci Indonesia. Kata seperti "tidak cemas" akan tetap dideteksi sebagai negatif karena ada kata "cemas".
4. **Tailwind via CDN**: Menggunakan `<script src="https://cdn.tailwindcss.com">` di `index.html`, bukan Tailwind compiler resmi/build step, yang menghasilkan peringatan produksi di console.
5. **Tampilan Tunggal Tanpa Kalender**: Pengguna harus menekan "Berikutnya" secara sekuensial; tidak ada kalender atau daftar ringkas untuk melompat langsung ke hari tertentu (misal langsung ke Hari 15).

---

## Important Notes for Future Developers

- **Prioritas Pertama**: Tambahkan penyimpanan persisten, minimal browser `localStorage` atau backend database (seperti Firebase Firestore) agar input jurnal pengguna tidak hilang.
- **Amankan API Key**: Pindahkan pemanggilan `@google/genai` ke backend API proxy (Express / Cloud Run / Serverless Function) agar API Key Gemini tidak terekspos ke klien.
- **Perbaiki Build Tailwind**: Ganti script CDN Tailwind dengan integrasi `@tailwindcss/vite` atau Tailwind CLI standar agar performa lebih cepat dan bebas dependensi runtime pihak ketiga.
