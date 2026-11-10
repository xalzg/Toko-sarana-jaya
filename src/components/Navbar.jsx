import React, { useState } from "react";
import { MECHANIC_PHONE } from "../data/data";

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (id) => {
    closeMobileMenu();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-cobalt-700 border-2 border-cobalt-900 flex items-center justify-center text-butter-300 shadow-[3px_3px_0px_#06133b]">
            <i className="fa-solid fa-wrench text-lg"></i>
          </div>
          <div>
            <div className="heading-condensed font-black text-2xl sm:text-[26px] text-cobalt-900 tracking-wide">
              TOKO SARANA JAYA
            </div>
            <div className="text-[10px] font-extrabold tracking-[0.2em] text-cobalt-600 uppercase -mt-1">
              BENGKEL & TAMBAL BAN
            </div>
          </div>
        </a>

        {/* Navigasi Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold uppercase tracking-wider text-slate-600">
          <a href="#home" className="text-cobalt-700 border-b-2 border-cobalt-700 pb-1">
            Home
          </a>
          <a href="#profil" className="hover:text-cobalt-700 transition">
            Tentang Kami
          </a>
          <a href="#harga" className="hover:text-cobalt-700 transition">
            Daftar Harga
          </a>
          <a href="#layanan" className="hover:text-cobalt-700 transition">
            Layanan
          </a>
          <a href="#galeri" className="hover:text-cobalt-700 transition">
            Galeri
          </a>
          <a href="#faq" className="hover:text-cobalt-700 transition">
            FAQ
          </a>
          <a href="#artikel" className="hover:text-cobalt-700 transition">
            Artikel
          </a>
          <a href="#lokasi" className="hover:text-cobalt-700 transition">
            Kontak
          </a>
        </nav>

        {/* Tombol Aksi & Pencarian */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 bg-butter-300 hover:bg-butter-400 text-cobalt-950 font-condensed font-extrabold uppercase tracking-wider text-base px-4 py-2 rounded border-2 border-cobalt-950 shadow-[3px_3px_0px_#06133b] active:translate-y-0.5 transition cursor-pointer"
          >
            <i className="fa-solid fa-phone-volume text-xs"></i>
            <span>Panggil Mekanik</span>
          </button>

          <button
            onClick={() => scrollToSection("harga")}
            aria-label="Cari Harga Layanan"
            className="w-10 h-10 rounded border-2 border-slate-300 hover:border-cobalt-700 text-slate-700 hover:text-cobalt-700 flex items-center justify-center transition cursor-pointer"
          >
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </button>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden w-10 h-10 rounded border-2 border-slate-800 bg-white text-slate-900 flex items-center justify-center cursor-pointer"
          >
            <i
              className={`fa-solid ${
                mobileMenuOpen ? "fa-xmark" : "fa-bars"
              } text-lg`}
            ></i>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-slate-200 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded bg-cobalt-50 text-cobalt-800 font-bold text-xs uppercase tracking-wider"
          >
            Home
          </a>
          <a
            href="#profil"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Tentang Kami
          </a>
          <a
            href="#harga"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Daftar Harga
          </a>
          <a
            href="#layanan"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Layanan
          </a>
          <a
            href="#galeri"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Galeri
          </a>
          <a
            href="#faq"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            FAQ
          </a>
          <a
            href="#artikel"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Artikel
          </a>
          <a
            href="#lokasi"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider"
          >
            Lokasi & Kontak
          </a>
          <div className="pt-2">
            <a
              href={`tel:${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
              className="w-full py-2.5 rounded bg-butter-300 border-2 border-cobalt-950 text-cobalt-950 font-condensed font-black uppercase tracking-wider text-center block text-lg shadow-[2px_2px_0px_#06133b]"
            >
              Hubungi: {MECHANIC_PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
