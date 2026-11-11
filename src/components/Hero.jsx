import React, { useState } from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";

export default function Hero({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* HERO VISUAL CONTAINER */}
      <section
        id="home"
        className="relative rounded-[26px] sm:rounded-[32px] overflow-hidden bg-gradient-to-b from-[#255C7D] via-[#487D9C] to-[#1E242B]"
      >
        {/* Background Image dengan Blending Atmosferik */}
        <div className="relative min-h-[600px] sm:min-h-[680px] flex flex-col justify-between">
          <img
            src="https://images.pexels.com/photos/37513579/pexels-photo-37513579.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Mekanik Toko Sarana Jaya Sedang Menambal Ban Motor"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/1400x800/255C7D/ffffff?text=Toko+Sarana+Jaya+Bengkel+Tambal+Ban";
            }}
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#225877]/90 via-[#387090]/55 to-[#12161C]/90"></div>

          {/* NAVBAR DALAM HERO */}
          <header className="relative z-20 px-5 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2.5 text-white group focus-visible:ring-2 focus-visible:ring-white rounded">
              <span className="font-display font-semibold text-lg sm:text-xl tracking-tight">
                SaranaJaya.
              </span>
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-white/80 border-l border-white/25 pl-2.5">
                Bengkel & Tambal Ban
              </span>
            </a>

            {/* Pill Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/15 text-[11px] uppercase tracking-wider font-medium text-white/90">
              <a
                href="#home"
                className="px-4 py-1.5 rounded-full bg-white text-ink font-semibold shadow-sm focus-visible:ring-2 focus-visible:ring-white"
              >
                Home
              </a>
              <a
                href="#tentang"
                className="px-4 py-1.5 rounded-full hover:bg-white/15 transition focus-visible:ring-2 focus-visible:ring-white"
              >
                Bengkel
              </a>
              <a
                href="#layanan"
                className="px-4 py-1.5 rounded-full hover:bg-white/15 transition focus-visible:ring-2 focus-visible:ring-white"
              >
                Layanan & Harga
              </a>
              <a
                href="#testimoni"
                className="px-4 py-1.5 rounded-full hover:bg-white/15 transition focus-visible:ring-2 focus-visible:ring-white"
              >
                Pelanggan
              </a>
              <a
                href="#area"
                className="px-4 py-1.5 rounded-full hover:bg-white/15 transition focus-visible:ring-2 focus-visible:ring-white"
              >
                Area Jatiuwung
              </a>
              <a
                href="#tips"
                className="px-4 py-1.5 rounded-full hover:bg-white/15 transition focus-visible:ring-2 focus-visible:ring-white"
              >
                Tips
              </a>
              <button
                onClick={onOpenBooking}
                className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white hover:text-ink transition cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
              >
                {MECHANIC_PHONE}
              </button>
            </nav>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
                className="px-3.5 py-1.5 rounded-full bg-white text-ink font-semibold text-xs"
              >
                {MECHANIC_PHONE}
              </a>
              <button
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/20 cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
              >
                <i
                  className={`fa-solid ${
                    mobileMenuOpen ? "fa-xmark" : "fa-bars"
                  } text-sm`}
                ></i>
              </button>
            </div>
          </header>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="relative z-30 mx-5 mt-3 rounded-2xl bg-white/95 backdrop-blur-xl p-4 text-ink shadow-xl lg:hidden space-y-2 text-sm font-medium animate-in fade-in duration-200">
              <a
                href="#tentang"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Tentang Bengkel
              </a>
              <a
                href="#layanan"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Layanan & Daftar Harga
              </a>
              <a
                href="#testimoni"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Suara Pelanggan
              </a>
              <a
                href="#area"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Area Layanan & Lokasi
              </a>
              <a
                href="#tips"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Tips Mekanik
              </a>
              <a
                href="#lokasi"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              >
                Peta Jl. Cikoneng Girang PLN
              </a>
            </div>
          )}

          {/* HERO HEADLINE DENGAN GRAPHIC PILLS */}
          <div className="relative z-10 px-5 sm:px-12 pt-10 pb-36 sm:pb-44 max-w-4xl mx-auto text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
              <span>Toko Sarana Jaya Bengkel Tambal Ban • Manis Jaya, Jatiuwung</span>
            </div>

            <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-[66px] text-white leading-[1.12] tracking-tight">
              <span className="block">Merawat roda</span>
              <span className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 my-1 sm:my-2">
                <span className="hidden sm:inline-block w-28 md:w-40 h-10 md:h-12 rounded-full pill-concentric"></span>
                <span>yang menjaga</span>
              </span>
              <span className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span>perjalanan Anda</span>
                <span className="hidden sm:inline-block w-24 md:w-36 h-10 md:h-12 rounded-full pill-hatch"></span>
              </span>
            </h1>

            {/* Quick Info Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-white text-ink hover:bg-slate-100 font-medium text-xs sm:text-sm transition shadow-lg inline-flex items-center gap-2.5 cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Hubungi Mekanik: {MECHANIC_PHONE}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
              </button>
              <a
                href="#lokasi"
                className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm transition inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
              >
                <i className="fa-solid fa-location-dot text-xs"></i>
                <span className="truncate max-w-xs sm:max-w-md">{SHOP_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING BENTO CARD */}
      <section
        id="tentang"
        className="relative z-20 -mt-24 sm:-mt-32 mx-2 sm:mx-6 mb-2 bg-[#F3F4F6]/95 backdrop-blur-xl rounded-[26px] sm:rounded-[32px] p-5 sm:p-8 shadow-glass border border-white/80"
      >
        {/* Baris Atas Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Narasi Kiri */}
          <div className="lg:col-span-5 p-3 sm:p-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft block mb-3">
                PROFIL SARANA JAYA
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl text-ink leading-[1.15]">
                Penanganan ban yang presisi & jujur
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted mt-6 leading-relaxed">
              Berlokasi di <strong>{SHOP_ADDRESS}</strong>, kami melayani tambal
              ban tubeless, tambal press ban dalam, ganti ban, oli, dan rem dengan
              pengerjaan rapi serta ramah bagi bibir velg.
            </p>
          </div>

          {/* Kartu Putih Tengah */}
          <div className="lg:col-span-4 bg-white rounded-[22px] p-6 flex flex-col justify-between min-h-[210px] sm:min-h-[240px] shadow-sm border border-slate-100 smooth-card">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-medium text-lg sm:text-xl text-ink leading-snug">
                Tambal Tubeless & Press Pemanas
              </h3>
              <span className="w-8 h-8 rounded-full bg-surface text-ink flex items-center justify-center text-xs shrink-0 font-semibold">
                01
              </span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed pt-8">
              Menangani kebocoran ban motor dan mobil dengan karet berkualitas
              serta sistem press matang yang menyatu kuat pada ban dalam.
            </p>
          </div>

          {/* Kartu Putih Kanan */}
          <div className="lg:col-span-3 bg-white rounded-[22px] p-6 flex flex-col justify-between min-h-[210px] sm:min-h-[240px] shadow-sm border border-slate-100 smooth-card">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-medium text-lg sm:text-xl text-ink leading-snug">
                Siaga Panggilan Mekanik
              </h3>
              <span className="w-8 h-8 rounded-full bg-surface text-ink flex items-center justify-center text-xs shrink-0 font-semibold">
                02
              </span>
            </div>
            <div className="pt-8 space-y-2">
              <p className="text-xs text-ink-muted leading-relaxed">
                Bantuan darurat ban bocor di jalur Cikoneng Girang PLN & Manis
                Jaya.
              </p>
              <a
                href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
                className="inline-block font-display font-semibold text-xs text-[#255C7D] hover:underline"
              >
                <i className="fa-solid fa-phone mr-1"></i>
                {MECHANIC_PHONE}
              </a>
            </div>
          </div>
        </div>

        {/* Baris Bawah Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mt-4 sm:mt-5">
          {/* Kartu Lebar Kiri */}
          <div className="lg:col-span-8 relative rounded-[22px] overflow-hidden min-h-[220px] sm:min-h-[250px] bg-[#E3E6EC] p-6 sm:p-7 flex flex-col justify-between group smooth-card">
            <img
              src="https://images.pexels.com/photos/12164177/pexels-photo-12164177.jpeg?auto=compress&fit=crop&w=1000&q=80"
              alt="Detail Ban dan Velg Motor Matic"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x400/e3e6ec/181a1f?text=Ban+dan+Velg+Motor";
              }}
              className="absolute right-0 top-0 w-2/3 h-full object-cover object-center opacity-90 group-hover:scale-105 transition duration-700"
              style={{
                maskImage: "linear-gradient(to left, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 55%, transparent 100%)",
              }}
            />

            <div className="relative z-10 max-w-xs">
              <h3 className="font-display font-medium text-xl sm:text-2xl text-ink leading-snug">
                Bongkar Pasang Aman bagi Velg
              </h3>
            </div>

            <div className="relative z-10 max-w-xs space-y-2">
              <p className="text-xs text-ink-muted leading-relaxed">
                Pengerjaan hati-hati untuk velg motor matic, bebek, sport, hingga
                roda mobil operasional tanpa menggores bibir velg.
              </p>
              <a
                href="#layanan"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-[#255C7D] transition"
              >
                <span>Lihat Daftar Tarif</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Kartu Gelap Kanan */}
          <div className="lg:col-span-4 relative rounded-[22px] overflow-hidden min-h-[220px] sm:min-h-[250px] bg-ink p-6 sm:p-7 flex flex-col justify-between group smooth-card">
            <img
              src="https://images.pexels.com/photos/37811591/pexels-photo-37811591.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Ban Motor dan Sistem Pengereman Cakram"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/500x500/181a1f/ffffff?text=Ban+dan+Rem+Motor";
              }}
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50"></div>

            <div className="relative z-10">
              <h3 className="font-display font-medium text-xl text-white leading-snug">
                Ban Baru, Oli &<br />
                Kampas Rem
              </h3>
            </div>

            <p className="relative z-10 text-xs text-white/80 leading-relaxed">
              Sedia ban luar/dalam Ring 12, 14, 17, pentil tubeless, cairan anti
              bocor, oli mesin, dan laher roda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
