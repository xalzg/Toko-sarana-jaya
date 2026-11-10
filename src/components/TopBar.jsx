import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function TopBar() {
  return (
    <div className="bg-white border-b border-slate-200 text-xs text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 font-mono font-bold text-cobalt-700 hover:text-cobalt-900 transition"
          >
            <i className="fa-solid fa-phone text-[11px]"></i>
            <span>{MECHANIC_PHONE}</span>
          </a>
          <span className="hidden md:inline-block text-slate-300">|</span>
          <a
            href="#lokasi"
            className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-cobalt-700 transition font-medium"
          >
            <i className="fa-solid fa-location-dot text-cobalt-600 text-[11px]"></i>
            <span className="truncate max-w-md">{SHOP_ADDRESS}</span>
          </a>
        </div>
        <div className="flex items-center gap-2.5 ml-auto sm:ml-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Kontak Langsung :
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() =>
                openWhatsApp(
                  "Halo Pak Mekanik Toko Sarana Jaya, saya mau tanya layanan tambal ban / bengkel."
                )
              }
              title="WhatsApp Mekanik"
              className="w-6 h-6 rounded bg-cobalt-600 text-white flex items-center justify-center text-[11px] hover:bg-cobalt-800 transition cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            <a
              href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
              title="Telepon Mekanik"
              className="w-6 h-6 rounded bg-cobalt-600 text-white flex items-center justify-center text-[11px] hover:bg-cobalt-800 transition"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="#lokasi"
              title="Titik Peta Bengkel"
              className="w-6 h-6 rounded bg-cobalt-600 text-white flex items-center justify-center text-[11px] hover:bg-cobalt-800 transition"
            >
              <i className="fa-solid fa-map-pin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

