import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Footer() {
  return (
    <footer className="bg-[#113CA6] text-white pt-14 pb-10 border-t-4 border-butter-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/20">
          {/* Kolom 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-butter-300 text-cobalt-950 flex items-center justify-center font-extrabold text-lg">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <div>
                <div className="heading-condensed font-black text-white text-2xl tracking-wide">
                  TOKO SARANA JAYA
                </div>
                <div className="text-[10px] font-bold text-butter-300 tracking-widest uppercase -mt-1">
                  BENGKEL TAMBAL BAN
                </div>
              </div>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed">
              Jasa tambal ban tubeless, tambal ban dalam press, ganti ban
              luar/dalam, ganti oli, kampas rem, dan panggilan darurat di wilayah
              Manis Jaya, Jatiuwung, Kota Tangerang.
            </p>
          </div>

          {/* Kolom 2: Kontak */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="heading-condensed font-bold text-xl text-butter-300">
              Kontak
            </h4>
            <ul className="space-y-2 text-xs text-blue-100 font-mono">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-butter-300 w-4"></i>
                <a
                  href={`tel:${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
                  className="hover:text-white font-bold"
                >
                  {MECHANIC_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-butter-300 w-4"></i>
                <button
                  onClick={() =>
                    openWhatsApp("Halo Toko Sarana Jaya Bengkel Tambal Ban")
                  }
                  className="hover:text-white font-bold text-left cursor-pointer"
                >
                  {MECHANIC_PHONE} (WA)
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                Akses Cepat
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openWhatsApp("Halo Toko Sarana Jaya")}
                  aria-label="WhatsApp"
                  className="w-7 h-7 rounded bg-white/15 hover:bg-butter-300 hover:text-cobalt-950 flex items-center justify-center text-xs transition cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </button>
                <a
                  href={`tel:${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
                  aria-label="Telepon"
                  className="w-7 h-7 rounded bg-white/15 hover:bg-butter-300 hover:text-cobalt-950 flex items-center justify-center text-xs transition"
                >
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a
                  href="#lokasi"
                  aria-label="Lokasi Bengkel"
                  className="w-7 h-7 rounded bg-white/15 hover:bg-butter-300 hover:text-cobalt-950 flex items-center justify-center text-xs transition"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 3: Alamat */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="heading-condensed font-bold text-xl text-butter-300">
              Alamat
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed">{SHOP_ADDRESS}</p>
            <a
              href="#lokasi"
              className="inline-block px-5 py-1.5 rounded bg-butter-300 hover:bg-butter-400 text-cobalt-950 font-condensed font-black uppercase tracking-wider text-sm transition"
            >
              Lihat Lokasi
            </a>
          </div>

          {/* Kolom 4: Pintasan */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="heading-condensed font-bold text-xl text-butter-300">
              Pintasan
            </h4>
            <ul className="space-y-1.5 text-xs text-blue-100 font-medium">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-white transition">
                  Daftar Harga
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#artikel" className="hover:text-white transition">
                  Artikel
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white transition">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center font-mono text-[11px] text-blue-200 uppercase">
          COPYRIGHT © 2026 TOKO SARANA JAYA BENGKEL TAMBAL BAN • JATIUWUNG, KOTA
          TANGERANG
        </div>
      </div>
    </footer>
  );
}
