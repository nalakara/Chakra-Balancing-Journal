# Architecture: Chakra Balancing Journal

Dokumen ini membedah struktur arsitektural aplikasi berdasarkan inspeksi langsung terhadap berkas-berkas sumber (*source code*).

---

## Technology Stack

- **Runtime & Language**: Node.js environment, TypeScript `~5.8.2`
- **UI Framework**: React `19.2.0` (menggunakan hooks fungsional: `useState`, `useMemo`)
- **Rendering Target**: DOM (`react-dom/client`)
- **Build Tool & Bundler**: Vite `6.2.0` dengan plugin `@vitejs/plugin-react` `5.0.0`
- **CSS / Styling**: Tailwind CSS (dimuat melalui runtime CDN di `index.html`)
- **Chart Visualization**: Recharts `2.12.7`
- **GenAI Client**: `@google/genai` `1.30.0`
- **Type Definitions**: `@types/node` `22.14.0`

---

## Project Structure

```text
.
├── .env.local                     # Konfigurasi variabel lingkungan lokal (GEMINI_API_KEY)
├── .gitignore                     # Konfigurasi pengabaian Git
├── App.tsx                        # Komponen root aplikasi & pusat state
├── components/
│   ├── AnalysisInsights.tsx       # Komponen presentasi hasil analisis AI & pemicu aksi
│   ├── DailyFocusCard.tsx         # Komponen kartu fokus cakra harian & detail edukasi
│   ├── DataVisualization.tsx      # Komponen grafik Recharts (ComposedChart)
│   ├── IconComponents.tsx         # Komponen ikon SVG inline untuk ke-7 cakra
│   └── JournalForm.tsx            # Komponen formulir entri input jurnal harian
├── constants.ts                   # Data statis ke-7 cakra & generator array 21 hari
├── index.html                     # Entry HTML, pemuatan Tailwind CDN, Google Fonts, & importmap
├── index.tsx                      # Entry point React (mount root element)
├── metadata.json                  # Metadata aplikasi AI Studio
├── package.json                   # Definisi paket dan dependensi npm
├── tsconfig.json                  # Konfigurasi kompilasi TypeScript
├── types.ts                       # Definisi antarmuka data (TypeScript interfaces)
├── utils/
│   └── sentiment.ts               # Fungsi utilitas evaluasi sentimen berbasis kata kunci
└── vite.config.ts                 # Konfigurasi bundler Vite dan pendefinisian variabel lingkungan
```

---

## Application Structure

Aplikasi ini mengadopsi arsitektur **Client-Only Single Page Application (SPA)** tanpa lapisan backend kustom:
- Berkas `index.html` memuat font, Tailwind CSS CDN, importmap ke AI Studio CDN, dan memanggil skrip modul `/index.tsx`.
- `index.tsx` melakukan rendering `<App />` di dalam root DOM (`#root`) menggunakan `React.StrictMode`.
- `App.tsx` berfungsi sebagai satu-satunya *Stateful Controller Component* (Container) yang memegang seluruh *state* aplikasi, sementara komponen di dalam direktori `components/` diperlakukan murni sebagai *Controlled Presentation Components*.

---

## Main Components

1. **`App` (`App.tsx`)**:
   - Memegang state: `currentDay`, `journalEntries`, `analysisResult`, `isAnalyzing`, `analysisError`.
   - Mengelola navigasi hari (`goToPreviousDay`, `goToNextDay`).
   - Menghitung data turunan via `useMemo` (`currentJournalEntry`, `chartData`).
   - Menjalankan pemanggilan API Gemini via fungsi `handleGenerateAnalysis`.
   - Menentukan kelas gradien CSS latar belakang dinamis berdasarkan cakra aktif.

2. **`DailyFocusCard` (`components/DailyFocusCard.tsx`)**:
   - Menampilkan identitas hari, cakra, nama sanskerta, ikon, fokus, aktivitas rekomendasi, dan blok afirmasi.
   - Memiliki *internal state* mandiri (`isExpanded`) untuk animasi transisi membuka/menutup sub-bagian edukasi (Deskripsi, Tanda Ketidakseimbangan, Manfaat Keseimbangan).

3. **`JournalForm` (`components/JournalForm.tsx`)**:
   - Menampilkan formulir input untuk 6 bidang teks dan 1 slider numerik.
   - Komponen murni terkontrol (*Controlled Component*); setiap perubahan `onChange` langsung memicu `onUpdate` ke induk (`App`).

4. **`DataVisualization` (`components/DataVisualization.tsx`)**:
   - Merender `ResponsiveContainer` dengan `ComposedChart` dari pustaka Recharts.
   - Sumbu Y ganda: sumbu kiri untuk skala energi (0–10) dan sumbu kanan untuk sentimen (-1.5 hingga +1.5).
   - Menyediakan `CustomTooltip` untuk menampilkan rincian angka energi dan label sentimen (Positif, Netral, Negatif).

5. **`AnalysisInsights` (`components/AnalysisInsights.tsx`)**:
   - Menampilkan kotak kartu wawasan AI.
   - Menangani kondisi status: tombol pemicu awal, indikator *loading* ("Menganalisis..."), pesan *error*, blok teks hasil analisis, dan tombol untuk analisis ulang.

6. **`IconComponents` (`components/IconComponents.tsx`)**:
   - Mengompilasi 7 ikon SVG vektor murni yang masing-masing merepresentasikan simbol cakra dari Root hingga Crown.

---

## Data Model

Definisi model tersentralisasi di `types.ts`:

```typescript
export interface ChakraInfo {
  dayRange: string;
  chakraName: string;
  sanskritName: string;
  focus: string;
  activities: string;
  affirmation: string;
  color: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  imbalanceSigns: string;
  balanceBenefits: string;
}

export interface JournalEntry {
  dominantFeeling: string;
  activitiesDone: string;
  affirmation: string;
  awarenessToday: string;
  energyChallenge: string;
  threeGratefulThings: string;
  energyScale: number;
}
```

State jurnal harian disimpan dalam struktur kamus (*key-value dictionary*):
`Record<number, JournalEntry>` dengan kunci angka hari (1 hingga 21).

---

## State Management

- **Mekanisme**: Menggunakan React Built-in State Hook (`useState`).
- **Lokasi State**: Terpusat pada komponen induk (`App.tsx`).
- **Tidak ada library state eksternal** (seperti Redux, Zustand, atau Context API).
- **Karakteristik State**:
  - `journalEntries`: Menyimpan draf entri harian.
  - `currentDay`: Menentukan hari aktif (1–21).
  - `analysisResult`: Menyimpan keluaran teks dari AI.
  - `isAnalyzing` & `analysisError`: Indikator pemrosesan dan galat.

---

## Data Flow

1. **Aliran Formulir (Top-Down & Bottom-Up)**:
   - `App` meneruskan `currentJournalEntry` ke `JournalForm`.
   - Pengguna mengetik atau menggeser slider di `JournalForm` → memanggil handler `handleChange` / `handleSliderChange` → mengeksekusi `onUpdate` → `handleJournalUpdate` di `App` memperbarui objek `journalEntries` untuk hari tersebut.
2. **Aliran Visualisasi**:
   - Saat `journalEntries` berubah, hook `useMemo` di `App` mentransformasikan dictionary entri menjadi array objek `{ day, energy, sentiment }`.
   - Nilai sentimen dihitung melalui fungsi `getSentimentScore()` dari nilai `dominantFeeling`.
   - Jika panjang data `chartData` >= 2, array dikirimkan ke `DataVisualization` untuk dirender.
3. **Aliran Pemanggilan AI**:
   - Pengguna menekan tombol di `AnalysisInsights` → memicu `onGenerateAnalysis` di `App`.
   - `App` merangkai teks seluruh entri `journalEntries` menjadi prompt panjang → mengirim ke `ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt })`.
   - Respons diterima → `setAnalysisResult(response.text)` → diteruskan kembali ke `AnalysisInsights` untuk ditampilkan.

---

## Storage / Persistence

- **Temuan Faktual**: **Nol (Zero Storage)**.
- Tidak terdapat kode `localStorage.setItem`, `sessionStorage`, `IndexedDB`, ataupun komunikasi ke database REST/GraphQL/Firestore.
- **Implikasi**: Data hanya bertahan selama siklus hidup komponen di memori tab peramban. Jika halaman di-refresh, seluruh entri kembali kosong.

---

## External Services

- **Google Gemini API**:
  - Endpoint diakses secara langsung oleh klien peramban melalui SDK `@google/genai`.
  - Menggunakan model `gemini-2.5-flash`.
- **Google Fonts & Tailwind CDN**:
  - Aset font Poppins diambil dari `fonts.googleapis.com`.
  - Skrip Tailwind CSS diunduh dari `cdn.tailwindcss.com`.

---

## AI Integration

- **SDK**: `@google/genai` (versi modern, bukan pustaka lama `@google/generative-ai`).
- **Inisialisasi**:
  ```typescript
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  ```
  Di mana `API_KEY` diambil dari `process.env.API_KEY` yang didefinisikan pada waktu kompilasi Vite melalui `JSON.stringify(env.GEMINI_API_KEY)`.
- **Eksekusi**:
  - Model: `gemini-2.5-flash`.
  - Mode: Panggilan tunggal non-streaming (`generateContent`).
  - Penanganan Galat: Blok `try-catch` standar dengan umpan balik pesan kesalahan teks ke UI.

---

## Important Dependencies

- `react` & `react-dom` (`^19.2.0`): Menggunakan versi terbaru React 19.
- `@google/genai` (`^1.30.0`): SDK resmi Gemini.
- `recharts` (`^2.12.7`): Visualisasi SVG deklaratif.
- `prop-types` (`^15.8.1`): Dependensi pendukung Recharts.

---

## Architectural Patterns

1. **Container / Presentational Pattern**:
   - `App.tsx` bertindak sebagai container cerdas (*smart container*).
   - Sub-komponen lainnya bertindak sebagai *dumb / presentational components* yang hanya menerima *props* dan memancarkan *events*.
2. **Single Responsibility per Component**:
   - Pemisahan yang bersih antara kartu edukasi (`DailyFocusCard`), form data (`JournalForm`), grafik analitik (`DataVisualization`), dan kartu AI (`AnalysisInsights`).
3. **Data-Driven Program**:
   - Program 21 hari digenerasi secara dinamis dari array dasar 7 cakra (`CHAKRA_DATA`) menggunakan fungsi pemetaan modular di `constants.ts`.

---

## Security Considerations

1. **Eksposur API Key (Kelemahan Kritis)**:
   - Dalam berkas `vite.config.ts`, terdapat konfigurasi:
     `'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY)`
   - Karena aplikasi ini adalah SPA murni di sisi klien, nilai `GEMINI_API_KEY` dikompilasi langsung ke dalam bundel JavaScript publik. Siapa pun dapat mengekstrak kunci API ini melalui tab *Network* atau *Sources* di browser DevTools.
   - **Rekomendasi Arsitektur**: Harus dialihkan ke server-side proxy (misalnya endpoint `/api/analyze` di server Node/Express atau serverless function) sehingga API Key tidak pernah dikirim ke browser.
2. **Ketiadaan Validasi / Sanitasi Input**:
   - Teks masukan pengguna langsung disisipkan ke dalam prompt string literal template. Meskipun Gemini modern memiliki perlindungan bawaan terhadap *jailbreak*, secara arsitektur belum ada pembatasan jumlah karakter atau penyaringan karakter khusus.

---

## Current Technical Debt

1. **Ketiadaan Penyimpanan Persisten**: Arsitektur saat ini belum memiliki lapisan *persistence layer* sama sekali.
2. **Pemuatan CSS via CDN Runtime**: Menggunakan `<script src="https://cdn.tailwindcss.com">` tidak direkomendasikan untuk produksi karena menambah latensi pemuatan awal dan menghasilkan peringatan di konsol peramban.
3. **Pencocokan Sentimen yang Terlalu Primitif**: Modul `utils/sentiment.ts` hanya memeriksa daftar kata terbatas tanpa pemahaman konteks tata bahasa atau negasi.
4. **Importmap ganda / redundan**: Berkas `index.html` memiliki deklarasi `<script type="importmap">` menuju URL CDN eksternal (`aistudiocdn.com`), padahal proyek sudah dikompilasi menggunakan Vite bundler lokal.

---

## Scalability Considerations

- **Frontend Scalability**: Sangat ringan dan responsif karena data hanya 21 entri dan dikelola langsung dalam memori klien.
- **Backend Scalability**: Saat ini belum ada backend. Jika nanti ditambahkan autentikasi multi-pengguna dan database, struktur data `Record<number, JournalEntry>` sangat mudah dipetakan ke dalam dokumen NoSQL (seperti Cloud Firestore) atau tabel relasional.

---

## Maintainability Considerations

- Kode sangat rapi, bersih, dan mudah dibaca.
- Kode ditulis dalam TypeScript dengan pemisahan berkas antarmuka (`types.ts`) dan data konstan (`constants.ts`).
- Komponen didekomposisi secara proporsional (rata-rata 60–90 baris kode per komponen), sehingga memudahkan pengembang baru untuk memahami logika dalam waktu singkat.

---

## Architecture Assessment

- **Temuan Faktual (*What Was Found*)**:
  Aplikasi ini adalah prototipe SPA murni berskala kecil (kurang dari 10 berkas kode), tanpa backend, tanpa database, dengan satu container stateful (`App.tsx`) dan panggilan langsung ke Gemini SDK dari klien.
- **Interpretasi (*Interpretation*)**:
  Arsitektur ini sengaja dirancang seringkas mungkin untuk membuktikan konsep (*Proof of Concept*) perjalanan jurnal cakra dan integrasi AI dalam lingkungan prototipe interaktif Google AI Studio.
- **Asumsi (*Assumptions*)**:
  Pengembang awal berfokus pada pengalaman pengguna visual dan penyelarasan tema warna cakra terlebih dahulu, sehingga fitur infrastruktur dasar seperti persistensi data dan keamanan API key ditunda untuk iterasi berikutnya.
