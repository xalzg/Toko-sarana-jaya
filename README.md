# Toko Sarana Jaya — Bengkel Tambal Ban Landing Page

Landing page modern berkonsep **Editorial & Clean Architectural Design** untuk **Toko Sarana Jaya Bengkel Tambal Ban** (Jatiuwung, Kota Tangerang). Dibangun menggunakan **React 19 + Vite 8 + Tailwind CSS v4** dan siap langsung dideploy ke **Vercel**.

---

## 🎨 Desain UI/UX & Fitur Utama

- **Hero & Integrated Navigation**:
  - Background atmosferik foto mekanik dengan gradient teal gelap (`#255C7D` ke `#1E242B`).
  - Brand header `SaranaJaya.` dan pill navigation bergaya modern.
  - Tipografi display bersih (*Plus Jakarta Sans* & *Inter*) dilengkapi graphic decorative pills (`pill-concentric` & `pill-hatch`).
  - Shortcut langsung ke pemesanan mekanik dan koordinat lokasi.
- **Overlapping Bento Grid Profile (`#tentang`)**:
  - Narasi profil penanganan ban presisi & jujur.
  - Kartu fitur: Tambal Tubeless & Press Pemanas, Siaga Panggilan Mekanik (`+62 898 7617 591`).
  - Kartu visual lebar: Teknik bongkar pasang ramah bibir velg.
  - Kartu gelap kontras: Ketersediaan ban baru, oli mesin, dan kampas rem.
- **Selected Projects Style: Layanan & Daftar Harga Interaktif (`#layanan`)**:
  - Kolom daftar vertikal dengan active indicator line.
  - Kartu display besar dengan foto dinamis, floating white card (badge, judul, deskripsi, dan tombol Pesan via WhatsApp).
  - Bottom metadata: Estimasi Tarif, Durasi Kerja, Cakupan Unit, serta tombol prev/next.
- **Fanned 5-Card Customer Testimonials (`#testimoni`)**:
  - Tampilan busur 5 kartu testimoni bertumpuk dengan efek radial glow (`.voice-glow`).
  - Kartu tengah aktif berbingkai putih dengan quote icon badge.
  - Interaktif: Mengklik kartu manapun otomatis memuat kutipan, nama, dan profesi pelanggan.
- **Area & Concept Sand Split Section (`#area`)**:
  - Desain gradasi taupe/sand (`#DBC7B8` - `#C8B09E`).
  - 4 tab vertikal interaktif yang otomatis mengubah deskripsi dan 3 tumpukan foto fasilitas bengkel.
- **Beyond the Blueprint: Tips & Edukasi Mekanik (`#tips`)**:
  - Stacked card deck (kartu utama aktif dengan kartu bayangan di belakangnya).
  - Navigasi tombol bulat putih `<` dan `>` serta counter `01 / 04`.
  - Klik kartu untuk membuka modal baca penjelasan lengkap mekanik.
- **CTA Banner & Interactive Google Maps (`#lokasi`)**:
  - Banner putih bersih dengan tombol panggil dan tombol salin alamat.
  - Kartu Google Maps responsif + kontak langsung.
- **Minimalist Architectural Footer**:
  - Desain rapi terbagi kolom info bengkel, layanan utama, tombol sosial media, dan hak cipta 2026.
- **Floating WhatsApp CTA**:
  - Tombol melayang di pojok kanan bawah dengan link langsung ke WhatsApp mekanik `+62 898 7617 591`.
- **Modal Booking & Modal Artikel**:
  - Formulir panggil mekanik dengan nama, jenis kendaraan, layanan, dan catatan lokasi.
  - Modal baca artikel tips mekanik.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Fonts**: Plus Jakarta Sans, Inter
- **Icons**: Font Awesome 6.5.1
- **Deployment**: Vercel

---

## 💻 Menjalankan di Komputer Lokal

1. Pastikan Node.js (>= 18) sudah terinstal.
2. Jalankan instalasi jika belum:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Buka URL `http://localhost:5173` di browser.

Untuk verifikasi build produksi:
```bash
npm run build
npm run preview
```

---

## 🌐 Deploy ke Vercel

Repositori ini telah dikonfigurasi dengan `vercel.json` dan siap dideploy ke Vercel:

1. Push commit terbaru ke GitHub:
   ```bash
   git push origin main
   ```
2. Di dashboard [Vercel](https://vercel.com), import repositori `xalzg/Toko-sarana-jaya`.
3. Vercel akan otomatis mengenali framework `Vite` dan output directory `dist`.
4. Klik **Deploy**!

---

## 📁 Struktur Direktori

```
Toko-Sarana-Jaya/
├── dist/                      # Bundle produksi Vite
├── public/                    # Favicon, robots.txt, webmanifest
├── src/
│   ├── components/            # Komponen modular UI/UX baru
│   │   ├── Hero.jsx           # Hero visual + Overlapping bento grid
│   │   ├── ServiceShowcase.jsx # Katalog layanan interaktif ("Selected Projects")
│   │   ├── VoicesTestimonials.jsx # Busur 5 kartu testimoni fanned arc
│   │   ├── AreaConcepts.jsx   # Sand split card cakupan area & fasilitas
│   │   ├── ArticleSlider.jsx  # Stacked deck slider artikel & tips
│   │   ├── LocationCta.jsx    # Banner CTA & Google Maps interaktif
│   │   ├── Footer.jsx         # Minimalist architectural footer
│   │   ├── FloatingWhatsApp.jsx # Tombol WA mengambang kanan bawah
│   │   ├── BookingModal.jsx   # Modal panggil mekanik ke WhatsApp
│   │   ├── ArticleModal.jsx   # Modal baca artikel
│   │   └── Toast.jsx          # Notifikasi salin teks
│   ├── data/
│   │   └── data.js            # Pusat data teks, kontak, layanan & testimoni
│   ├── utils/
│   │   └── helpers.js         # Helper WA & copy to clipboard
│   ├── App.jsx                # Layout utama container
│   ├── index.css              # Theme Tailwind v4 & custom pill styles
│   └── main.jsx               # Entry point React
├── index.html                 # HTML template + fonts & OpenGraph
├── package.json
├── vercel.json                # SPA rewrite routing
└── vite.config.js
```
