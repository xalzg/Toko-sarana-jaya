import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Footer() {
  return (
    <footer className="pt-8 pb-4 px-2 sm:px-6 border-t border-slate-300/80 text-xs text-ink-muted">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
        {/* Brand & Nomor Telepon */}
        <div className="md:col-span-4 space-y-2.5">
          <div className="font-display font-bold text-lg text-ink">
            Toko Sarana Jaya
          </div>
          <div className="font-medium text-ink font-mono">{MECHANIC_PHONE}</div>
          <p className="text-xs text-ink-muted max-w-xs leading-relaxed">
            {SHOP_ADDRESS}
          </p>
        </div>

        {/* Kolom Info Bengkel */}
        <div className="md:col-span-4 space-y-3">
          <div className="font-display font-semibold text-ink">Info Bengkel</div>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="#tentang"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Tentang Kami
            </a>
            <a
              href="#area"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Cakupan Area
            </a>
            <a
              href="#layanan"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Daftar Harga
            </a>
            <a
              href="#lokasi"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Peta & Kontak
            </a>
          </div>
        </div>

        {/* Kolom Layanan */}
        <div className="md:col-span-4 space-y-3">
          <div className="font-display font-semibold text-ink">Layanan Utama</div>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="#layanan"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Tambal Ban Tubeless
            </a>
            <a
              href="#layanan"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Press Ban Dalam
            </a>
            <a
              href="#layanan"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Ganti Ban & Pentil
            </a>
            <a
              href="#layanan"
              className="hover:text-ink transition focus-visible:ring-2 focus-visible:ring-ink rounded"
            >
              Oli & Kampas Rem
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-300/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Tombol Akses Cepat dengan Min 40-44px Touch Target */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              openWhatsApp(`Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE})`)
            }
            aria-label="Chat WhatsApp Mekanik"
            className="w-10 h-10 rounded-full bg-white hover:bg-ink text-ink hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-ink"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
          </button>
          <a
            href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
            aria-label={`Telepon Mekanik ${MECHANIC_PHONE}`}
            className="w-10 h-10 rounded-full bg-white hover:bg-ink text-ink hover:text-white flex items-center justify-center transition shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-ink"
          >
            <i className="fa-solid fa-phone text-xs"></i>
          </a>
          <a
            href="#lokasi"
            aria-label="Lihat Peta Lokasi Bengkel"
            className="w-10 h-10 rounded-full bg-white hover:bg-ink text-ink hover:text-white flex items-center justify-center transition shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-ink"
          >
            <i className="fa-solid fa-location-dot text-xs"></i>
          </a>
        </div>
        <div className="text-[11px] text-ink-muted">
          © 2026 Toko Sarana Jaya Bengkel Tambal Ban. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
