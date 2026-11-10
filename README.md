# Toko Sarana Jaya — Bengkel Tambal Ban Landing Page

Landing page modern dan responsif untuk **Toko Sarana Jaya Bengkel Tambal Ban** (Jatiuwung, Kota Tangerang), dibangun menggunakan **React + Vite + Tailwind CSS** dan siap langsung dideploy ke **Vercel**.

---

## 🚀 Fitur & Komponen Utama

- **Top Utility Bar**: Nomor kontak darurat, lokasi cepat, dan shortcut WhatsApp/Telepon/Peta.
- **Navbar Industrial**: Logo bengkel tegas, menu navigasi mulus (smooth scroll), tombol pencarian harga, dan drawer menu mobile.
- **Hero Section**: Tipografi kapital tegas (*Barlow Condensed*), overlay diagonal industrial, diamond & triangle cutout foto, tombol call/WA, serta 6 pill shortcut filter harga.
- **Statistik 4 Kolom**: 10+ Tahun Pengalaman, 4.800+ Ban & Unit, 8+ Layanan Inti, 4.9/5 Kepuasan.
- **Infinite Running Marquee**: Ticker berjalan tanpa jeda berisi layanan inti dan nomor mekanik.
- **Daftar Harga & Katalog Layanan**: Filter kategori (Semua, Ban & Pentil, Oli & Rem, Panggilan), carousel swipe horizontal dengan tombol kontrol navigasi, serta tombol tanya harga via WhatsApp.
- **Profil Bengkel**: Kolase 2 foto bertumpuk berbingkai putih dengan lencana biru, titik lokasi detail, dan 3 poin keunggulan pengerjaan.
- **Dark Banner & Fitur Unggulan**: 3 kartu overlap (Mekanik Ahli, Presisi & Kuat, Part Lengkap) serta kotak standar uji rendam air ban.
- **6 Spesialisasi Layanan**: Kartu pengerjaan lengkap dengan estimasi durasi, tag kesiapan part, dan tombol order.
- **Galeri Pengerjaan**: Dokumentasi bengkel dengan slider horizontal dan fitur **Preview Modal interaktif**.
- **FAQ Accordion**: 5 pertanyaan umum seputar lokasi, sistem press, ban tubeless, panggilan darurat, dan stok part.
- **Our Blog & Catatan Mekanik**: Panduan ban tubeless, tips ban kempis di jalan raya industri, dan jadwal ganti oli dengan popup baca selengkapnya.
- **Titik Lokasi & Peta Interaktif**: Google Maps interaktif terintegrasi, fitur **Salin Alamat** dan **Salin Nomor** dengan **Toast Notification**, serta direct link ke aplikasi Google Maps.
- **Floating WhatsApp CTA**: Tombol WhatsApp mengambang di pojok kiri bawah.
- **Modal Booking / Panggil Mekanik**: Form interaktif dengan nama, jenis kendaraan, pilihan servis, dan catatan lokasi yang otomatis memformat chat WhatsApp langsung ke nomor `+62 898 7617 591`.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Fonts**: Barlow Condensed, Plus Jakarta Sans, JetBrains Mono
- **Icons**: Font Awesome 6.5.1
- **Deployment Target**: Vercel

---

## 💻 Menjalankan di Komputer Lokal

1. Pastikan Node.js (>= 18) sudah terinstal.
2. Jalankan perintah instalasi (jika belum):
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka tautan lokal yang muncul (biasanya `http://localhost:5173`) di browser.

Untuk mengecek build produksi:
```bash
npm run build
npm run preview
```

---

## 🌐 Panduan Deploy ke Vercel

Proyek ini sudah dilengkapi dengan file `vercel.json` dan konfigurasi Vite yang optimal untuk Vercel.

### Cara 1: Menggunakan Vercel Dashboard (Rekomendasi)
1. Push repositori ini ke akun **GitHub** / **GitLab** / **Bitbucket** Anda:
   ```bash
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New..."** -> **"Project"**.
4. Import repositori GitHub Anda.
5. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **Deploy**! Landing page akan aktif dalam beberapa detik.

### Cara 2: Menggunakan Vercel CLI
1. Pasang Vercel CLI jika belum ada:
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah deploy di folder proyek:
   ```bash
   vercel
   ```
3. Ikuti prompt di terminal untuk menghubungkan proyek.
4. Untuk rilis produksi langsung:
   ```bash
   vercel --prod
   ```

---

## 📁 Struktur Direktori

```
Toko-Sarana-Jaya/
├── dist/                      # Hasil build produksi Vite
├── public/                    # Aset statis & favicon
├── src/
│   ├── assets/                # Gambar & ikon
│   ├── components/            # Komponen modular React
│   │   ├── TopBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Marquee.jsx
│   │   ├── PricingCatalog.jsx
│   │   ├── AboutProfile.jsx
│   │   ├── DarkBannerFeatures.jsx
│   │   ├── Services.jsx
│   │   ├── CalloutBanner.jsx
│   │   ├── Gallery.jsx
│   │   ├── Faq.jsx
│   │   ├── MidBanner.jsx
│   │   ├── Blog.jsx
│   │   ├── LocationMap.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── BookingModal.jsx
│   │   ├── PreviewModal.jsx
│   │   └── Toast.jsx
│   ├── data/
│   │   └── data.js            # Pusat data katalog, layanan, blog, FAQ
│   ├── utils/
│   │   └── helpers.js         # Helper WhatsApp & salin clipboard
│   ├── App.jsx                # Komponen utama
│   ├── index.css              # Setup Tailwind CSS v4 & custom animations
│   └── main.jsx               # Entry point React
├── index.html                 # HTML template + fonts & icons
├── package.json
├── vercel.json                # Konfigurasi routing rewrite Vercel
└── vite.config.js
```
