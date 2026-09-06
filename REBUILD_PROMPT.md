# Rebuild Prompt: Chakra Balancing Journal

Dokumen ini berisi instruksi master (*Master Build Prompt*) yang dapat diserahkan langsung ke AI coding agent (seperti Google AI Studio, Antigravity, atau Claude Code) untuk merekonstruksi atau membangun ulang aplikasi ini dari nol hingga berstatus produksi yang aman dan fungsional.

---

```markdown
Anda adalah seorang Principal Full-Stack Engineer dan UI/UX Designer ahli. Tugas Anda adalah membangun sebuah aplikasi web bernama "Chakra Balancing Journal" (Jurnal Penyeimbang Cakra 21 Hari).

Baca seluruh spesifikasi produk dan teknis di bawah ini dengan saksama sebelum mulai menulis kode.

---

### 1. Product Purpose & Problem
- **Tujuan Produk**: Menyediakan ruang refleksi diri harian yang tenang, terpandu, dan berdaya guna selama 21 hari dengan menyelaraskan 7 cakra utama, mencatat jurnal reflektif, memantau tingkat energi, dan memperoleh wawasan pola emosi yang hangat dari AI.
- **Masalah yang Diatasi**:
  - Banyak orang ingin membangun kebiasaan refleksi diri dan meditasi tetapi kehilangan motivasi karena tidak ada tema panduan yang jelas.
  - Catatan jurnal manual tidak memberikan sintesis atau umpan balik berkala mengenai pola emosi dan fluktuasi energi pengguna.

---

### 2. Target Users & Tone of Voice
- **Target Pengguna**: Peminat mindfulness, praktisi meditasi pemula, dan individu yang mencari sarana *self-care* terstruktur dalam bahasa Indonesia.
- **Gaya Bahasa**: Hangat, empatik, tenang, meditatif, dan memberdayakan. Seluruh antarmuka, label, dan konten edukasi menggunakan Bahasa Indonesia baku yang santun.

---

### 3. Core Concept & 21-Day Curriculum
Program 21 hari dibagi secara ketat menjadi 7 cakra (masing-masing 3 hari):
1. **Hari 1–3: Root Chakra (Muladhara)**
   - Fokus: Stabilitas, keamanan, dasar
   - Aktivitas: Jalan tanpa alas kaki, makan sayuran akar, peregangan pinggul
   - Afirmasi: "Aku aman; Aku terhubung dengan bumi; Aku kuat."
   - Warna tema: Merah (Gradien: merah muda lembut ke merah hangat)
2. **Hari 4–6: Sacral Chakra (Svadhisthana)**
   - Fokus: Kreativitas, emosi, kesenangan
   - Aktivitas: Menari, melukis, minum banyak air
   - Afirmasi: "Aku kreatif; Aku merasa dengan bebas; Aku menikmati hidup."
   - Warna tema: Oranye
3. **Hari 7–9: Solar Plexus Chakra (Manipura)**
   - Fokus: Kekuatan pribadi, kepercayaan diri
   - Aktivitas: Latihan inti, tertawa, menetapkan niat
   - Afirmasi: "Aku kuat; Aku percaya diri; Aku bertindak dari kekuatan batinku."
   - Warna tema: Kuning
4. **Hari 10–12: Heart Chakra (Anahata)**
   - Fokus: Cinta, penyembuhan
   - Aktivitas: Napas hati, surat maaf, tindakan kebaikan
   - Afirmasi: "Aku layak dicintai; Aku membuka hati; Aku mengalirkan cinta."
   - Warna tema: Hijau
5. **Hari 13–15: Throat Chakra (Vishuddha)**
   - Fokus: Komunikasi, ekspresi diri
   - Aktivitas: Humming, menulis hal yang ingin diucapkan, postur terbuka
   - Afirmasi: "Aku berbicara jelas; Suaraku membawa kebenaran; Aku bebas mengekspresikan diri."
   - Warna tema: Biru
6. **Hari 16–18: Third Eye Chakra (Ajna)**
   - Fokus: Intuisi, kejernihan
   - Aktivitas: Meditasi hening, fokus alis, kurangi stimulasi
   - Afirmasi: "Aku melihat jelas; Intuisiku membimbing; Pikiranku jernih."
   - Warna tema: Indigo
7. **Hari 19–21: Crown Chakra (Sahasrara)**
   - Fokus: Kesadaran, koneksi spiritual
   - Aktivitas: Meditasi keheningan, cahaya putih keemasan, rasa syukur
   - Afirmasi: "Aku terhubung; Aku damai; Aku satu dengan kehidupan."
   - Warna tema: Ungu

Setiap cakra harus memiliki teks edukasi mendalam: **Deskripsi**, **Tanda Ketidakseimbangan**, dan **Manfaat Keseimbangan**.

---

### 4. Core Features & User Workflows
1. **Navigasi Hari yang Fleksibel**:
   - Pengguna dapat berpindah hari menggunakan tombol "Sebelumnya" / "Berikutnya", ATAU memilih hari langsung melalui modal / selector linimasa 21 hari.
   - Hari yang sudah memiliki catatan ditandai dengan indikator visual (misal: titik hijau / ikon centang).
2. **Kartu Fokus Harian**:
   - Menampilkan nomor hari, rentang cakra, nama cakra & sanskerta, ikon simbol cakra, fokus, aktivitas, dan afirmasi yang dicetak tebal/miring.
   - Bagian akordion yang dapat dibuka/tutup untuk membaca edukasi cakra secara detail.
3. **Formulir Jurnal Reflektif (Auto-Saving)**:
   - Perasaan dominan (input teks)
   - Aktivitas dilakukan (input teks)
   - Afirmasi hari ini (input teks)
   - Kesadaran hari ini (textarea)
   - Tantangan energi (textarea)
   - Tiga hal yang disyukuri (textarea)
   - Skala energi 1–10 (slider interaktif dengan indikator angka)
   - **Wajib Auto-Save**: Setiap ketukan tersimpan secara otomatis ke `localStorage` (dengan opsi sinkronisasi Firestore jika backend terkonfigurasi).
4. **Visualisasi Data Dinamis (Recharts)**:
   - Tampil jika pengguna telah mengisi minimal 2 hari.
   - Grafik gabungan (*Composed Chart*): Sumbu kiri menampilkan garis tren skala energi (1–10); sumbu kanan menampilkan batang sentimen emosional (Positif = Hijau, Netral = Abu-abu, Negatif = Merah).
5. **Wawasan Reflektif Berbasis AI (Server-Side)**:
   - Tombol pemicu "Dapatkan Analisis AI".
   - Menganalisis seluruh entri jurnal yang telah terkumpul.
   - Menghasilkan ringkasan berbobot dalam 4 bagian: Pola Emosional, Tantangan Energi, Momen Syukur, dan Pesan Penutup yang Memberdayakan.
   - Tampilan hasil ulasan AI harus diformat rapi menggunakan parser Markdown (`react-markdown`).
6. **Fitur Ekspor / Reset**:
   - Kemampuan menyalin (*Copy to Clipboard*) hasil analisis AI.
   - Opsi reset data dengan konfirmasi dialog yang jelas.

---

### 5. Technical & Architectural Expectations
- **Stack**: React 18/19, TypeScript, Tailwind CSS, Recharts, Lucide-React untuk ikon umum (pertahankan ikon cakra kustom SVG jika diperlukan), `react-markdown`.
- **Backend & Keamanan API (MANDATORI)**:
  - Gunakan arsitektur Full-Stack (Vite + Express).
  - Panggilan ke Google GenAI (`@google/genai`) **HARUS** berada di server-side (`server.ts` atau endpoint `/api/analyze`).
  - **Dilarang keras** memaparkan `GEMINI_API_KEY` di browser client bundle atau `define` Vite.
  - Sediakan endpoint:
    `POST /api/analyze` menerima `{ entries: Record<number, JournalEntry> }` dan mengembalikan `{ analysis: string }`.
- **Persistensi Data**:
  - Implementasikan lapisan penyimpanan lokal terpercaya (`localStorage`) dengan fallback state, sehingga saat halaman di-refresh, pengguna tidak pernah kehilangan data jurnal mereka.

---

### 6. AI Behavior & Prompting Persona
- **Model**: `gemini-2.5-flash`
- **System Instruction / Persona**:
  "Anda adalah seorang pemandu spiritual dan refleksi batin yang bijaksana, hangat, dan penuh empati. Tugas Anda adalah menganalisis entri jurnal dari perjalanan penyeimbangan cakra selama 21 hari. Berikan wawasan yang lembut, apresiatif, dan membangun semangat. Hindari nada menghakimi. Format jawaban dalam Markdown yang terstruktur rapi dengan subjudul: Pola Emosional, Tantangan Energi, Momen Syukur, dan Kata Penutup."

---

### 7. UX & Visual Direction
- **Estetika**: Bersih, meditatif, modern dengan sentuhan *glassmorphism* lembut (`backdrop-blur-md`, kartu semi-transparan `bg-white/80`, bayangan lembut `shadow-lg`).
- **Warna Latar Dinamis**: Transisi warna latar belakang (`transition-colors duration-700`) yang mengikuti gradien warna cakra dari hari yang aktif.
- **Tipografi**: Menggunakan font sans-serif modern yang nyaman dibaca (Poppins atau Plus Jakarta Sans) dengan hirarki heading yang jelas.
- **Responsivitas**: Desain *mobile-first* yang mulus, dengan padding proporsional dan ukuran area sentuh minimal 44px untuk perangkat genggam.

---

### 8. What NOT to Build (Batasan Ketat)
- JANGAN membuat sistem jejaring sosial, obrolan multi-pengguna, atau feed komunitas.
- JANGAN menambahkan gamifikasi berlebihan (hindari skor game, koin, atau elemen yang berisik).
- JANGAN menambahkan gateway pembayaran atau fitur langganan berbayar.
- JANGAN menambahkan pustaka audio/synthesizer yang berputar otomatis tanpa izin pengguna.

---

### 9. Definition of Done
1. Seluruh 21 hari dapat diakses dengan konten cakra bahasa Indonesia yang lengkap.
2. Pengguna dapat mengisi formulir dan data tersimpan otomatis di penyimpanan lokal (tahan terhadap *refresh* browser).
3. Grafik Recharts menampilkan tren skala energi dan sentimen secara akurat ketika minimal ada 2 entri.
4. Fitur Analisis AI bekerja melalui endpoint server `/api/analyze` dan menampilkan format Markdown yang rapi tanpa membocorkan API key ke sisi klien.
5. Aplikasi lulus uji kompilasi TypeScript dan produksi build (`npm run build`).
```
