# Product Review: Chakra Balancing Journal

Dokumen ini menyajikan evaluasi kritis dan objektif terhadap kondisi aplikasi saat ini untuk membantu pengambilan keputusan strategis mengenai kelanjutan produk.

---

## Current Maturity

### Status: **Functional Prototype**

**Alasan**:
Aplikasi ini sudah melampaui tahap wireframe statis atau sekadar mockup konsep. Pengguna dapat berinteraksi dengan seluruh komponen antarmuka: mengganti hari, membaca panduan cakra dengan animasi akordion, mengisi formulir dengan slider skala energi, melihat grafik yang dihitung secara dinamis, dan mendapatkan analisis reflektif nyata dari Gemini 2.5 Flash.

Namun, aplikasi **belum dapat dikategorikan sebagai MVP (Minimum Viable Product)** karena ketiadaan fitur fundamental: **penyimpanan data (persistency)**. Sebuah produk jurnal 21 hari tidak mungkin dapat dipakai dalam skenario dunia nyata jika setiap kali pengguna menutup atau merefresh peramban, seluruh catatan dan progresnya langsung musnah.

---

## What Works Well

1. **Konsep Kurasi Program yang Sangat Kohesif**:
   - Pembagian 21 hari menjadi 7 cakra (3 hari per cakra) sangat masuk akal, bertahap, dan terstruktur dengan baik.
2. **Kesesuaian Desain Visual dengan Domain Tema**:
   - Transisi warna gradien latar belakang yang berubah halus mengikuti spektrum warna cakra (merah, oranye, kuning, hijau, biru, indigo, ungu) memberikan sentuhan emosional yang menenangkan.
3. **Pemberian Prompt Refleksi yang Relevan**:
   - Kolom jurnal (perasaan dominan, aktivitas, kesadaran diri, tantangan energi, 3 hal yang disyukuri, dan skala energi) sangat cocok dengan kebutuhan jurnal *mindfulness*.
4. **Respon Analisis AI yang Hangat dan Relevan**:
   - Peran persona prompt Gemini sebagai pemandu spiritual yang empatik bekerja dengan sangat baik dalam merangkum pola dan memberikan dorongan moral.
5. **Kerapian Kode (*Code Quality*)**:
   - Kode sumber bersih, terstruktur modular, menggunakan TypeScript dengan pengetikan rapi, dan mudah dipahami.

---

## What Is Valuable

- **Konten Edukasi dan Kurasi Cakra**: Data statis di `constants.ts` (deskripsi, tanda ketidakseimbangan, manfaat, aktivitas, dan afirmasi dalam bahasa Indonesia) adalah aset intelektual produk yang sangat matang dan siap pakai.
- **Rancangan Persona & Prompting AI**: Format instruksi pemandu reflektif 4 poin (Pola Emosional, Tantangan Energi, Momen Syukur, Kesimpulan) menghasilkan keluaran analisis teks yang bernilai tinggi bagi pengguna.
- **Visualisasi Dua Sumbu (Energi vs Sentimen)**: Ide menggabungkan metrik subjektif perasaan (sentimen) dengan tingkat energi fisik (skala 1–10) memberikan nilai tambah analitik yang jarang ada di aplikasi jurnal biasa.

---

## UX Issues

1. **Navigasi Sekuensial yang Kaku**:
   - Pengguna hanya bisa menekan "Sebelumnya" atau "Berikutnya" satu per satu. Tidak ada navigasi kalender, linimasa horizontal, atau pemilih hari langsung (*day picker*) untuk melompat dari Hari 1 ke Hari 10.
2. **Ketiadaan Indikator Progres (*Completion Badge*)**:
   - Pengguna tidak dapat melihat ringkasan hari mana saja yang sudah selesai diisi dan hari mana yang masih kosong tanpa mengklik tombol berikutnya satu per satu.
3. **Tampilan Teks Analisis AI Murni Teks Polos**:
   - Hasil teks dari Gemini ditampilkan di dalam kotak `style={{ whiteSpace: 'pre-wrap' }}` tanpa pemformatan Markdown (seperti judul, tebal, atau daftar peluru yang rapi).
4. **Formulir Terlalu Panjang dalam Satu Halaman Gulir**:
   - Pada layar ponsel, susunan vertikal (Kartu Fokus + Formulir 7 kolom + Grafik + Analisis AI + Tombol Navigasi) membutuhkan *scrolling* yang cukup panjang.

---

## Product Issues

1. **Kontradiksi Siklus Penggunaan 21 Hari vs Sesi Browser**:
   - Konsep produk dirancang untuk dinikmati selama 21 hari (3 minggu), namun ketiadaan penyimpanan memaksa pengguna menggunakannya hanya dalam satu sesi browser tunggal.
2. **Ketidaksesuaian Bahasa Visual**:
   - Judul di `index.html` dan nama di metadata menggunakan bahasa Inggris (*Chakra Balancing Journal*), namun seluruh konten materi cakra, label formulir, dan tombol navigasi menggunakan bahasa Indonesia. Perlu ada standardisasi bahasa yang konsisten.
3. **Ketiadaan Ekspor Data**:
   - Setelah pengguna menyelesaikan refleksi atau mendapatkan analisis AI, tidak ada tombol untuk mengunduh, mencetak, atau menyalin hasil refleksi tersebut ke catatan pribadi.

---

## Technical Issues

1. **Kerentanan Keamanan Kunci API (Kritis)**:
   - Kunci API Gemini disuntikkan langsung ke bundel JavaScript klien melalui konfigurasi Vite `define`. Ini sangat berbahaya jika dihosting secara publik karena kunci dapat dicuri dan disalahgunakan.
2. **Ketiadaan Lapisan Penyimpanan Data**:
   - Data entri jurnal murni berada di `useState` lokal.
3. **Ketergantungan CDN Runtime Tailwind**:
   - Menggunakan skrip CDN eksternal alih-alih paket kompilasi lokal Tailwind CSS resmi.
4. **Analisis Sentimen Terlalu Sederhana (*Fragile Rule-Based*)**:
   - Pencocokan string kata tunggal di `sentiment.ts` mudah tertipu oleh konteks kalimat (misalnya: kalimat "Saya tidak merasa tenang hari ini" akan diberi skor +1 positif karena mengandung kata "tenang").

---

## Technical Debt

- Ketiadaan unit test atau integration test.
- Importmap CDN di `index.html` yang redundan dengan Vite bundler.
- Ketiadaan sanitasi input dan validasi batas panjang karakter formulir sebelum dikirim ke API Gemini.

---

## Missing Functionality

1. **Penyimpanan Lokal / Sinkronisasi Cloud**: `localStorage` (minimal) atau Firestore (ideal).
2. **Komponen Kalender / Pemilih Hari (Day Picker)**: Tampilan matriks 21 hari untuk navigasi cepat.
3. **Renderer Markdown untuk Analisis AI**: Menggunakan `react-markdown` agar hasil ulasan tampil cantik dengan tipografi terstruktur.
4. **Fitur Ekspor**: Ekspor entri ke JSON, Markdown, atau cetak PDF.

---

## Risks

- **Kehilangan Data Pengguna**: Risiko terbesar saat ini; pengguna yang tidak sengaja menutup tab akan kehilangan seluruh curahan hatinya.
- **Biaya / Kuota API**: Jika API key bocor dari bundle klien publik, kuota Gemini pengguna dapat terkuras.

---

## What Should Be Preserved

- **Data Kurasi 7 Cakra di `constants.ts`**: Seluruh data teks, fokus, aktivitas, dan afirmasi sangat berkualitas dan harus dipertahankan 100%.
- **Ikon SVG Cakra di `IconComponents.tsx`**: Simbol vektor cakra yang rapi dan elegan.
- **Persona Prompt Gemini di `App.tsx`**: Karakter dan instruksi 4 poin untuk sintesis reflektif sudah sangat tepat sasaran.
- **Gradien Dinamis Berbasis Cakra**: Pengalaman estetika visual saat berpindah cakra.

---

## What Should Be Changed

- **Pindahkan Panggilan AI ke Backend**: Buat rute API server sederhana (misal Express atau Next.js / Serverless) untuk menyembunyikan API key.
- **Ganti State In-Memory dengan Persistensi**: Simpan otomatis ke `localStorage` setiap kali form diperbarui (*auto-save*).
- **Format Hasil Analisis**: Gunakan renderer Markdown untuk menampilkan hasil analisis Gemini.

---

## What Should NOT Be Over-Engineered

- **Jangan Buat Sistem Sosial / Komunitas**: Aplikasi ini adalah ruang intim untuk refleksi diri personal, tidak membutuhkan feed publik, tombol share sosial, atau fitur pertemanan.
- **Jangan Buat Gamifikasi Berlebihan**: Hindari lencana (*badges*), papan skor (*leaderboard*), atau koin virtual yang merusak suasana tenang dan meditatif aplikasi.
- **Jangan Buat Model Database yang Rumit**: Dokumen sederhana per pengguna (atau bahkan hanya local storage) sudah lebih dari cukup untuk menampung 21 catatan harian.

---

## Recommended Direction

### **Rekomendasi Utama: POLISH**

**Justifikasi Objektif**:
Mengapa **POLISH** dan bukan *REBUILD* atau *ARCHIVE*?
1. **Fondasi Produk Sangat Kuat**: Ide produk, kurasi konten (7 cakra @ 3 hari), desain visual gradien, dan persona AI-nya sudah berhasil diuji coba dan terbukti menarik secara fungsional.
2. **Jarak Menuju MVP Sangat Dekat**: Aplikasi ini hanya berjarak 2–3 perbaikan teknis sederhana untuk menjadi produk yang layak digunakan pengguna sungguhan, yaitu:
   - Menambahkan auto-save ke `localStorage` (butuh waktu kurang dari 30 menit).
   - Menambahkan proxy server mini (Express/Node) untuk mengamankan API key Gemini.
   - Menambahkan navigasi pemilih hari sederhana.
3. **Membangun Ulang dari Nol (Rebuild) Terlalu Berlebihan**: Tidak perlu menulis ulang arsitektur dari awal karena struktur komponen React dan kode TypeScript yang ada saat ini sudah sangat bersih, modular, dan terorganisir.
4. **Layak Masuk GitHub**: Setelah dipoles dengan persistensi data dan pengamanan API key, proyek ini adalah contoh portofolio aplikasi *mindfulness* berbasis AI yang sangat representatif.
