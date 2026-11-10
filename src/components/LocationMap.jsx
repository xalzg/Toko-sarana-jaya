import React from "react";
import {
  MECHANIC_PHONE,
  SHOP_ADDRESS,
  GOOGLE_MAPS_SEARCH_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "../data/data";
import { openWhatsApp, copyText } from "../utils/helpers";

export default function LocationMap({ onShowToast }) {
  const handleCopyAddress = () => {
    copyText(SHOP_ADDRESS, () => {
      onShowToast("Alamat bengkel berhasil disalin!");
    });
  };

  const handleCopyPhone = () => {
    copyText(MECHANIC_PHONE, () => {
      onShowToast(`Nomor mekanik ${MECHANIC_PHONE} berhasil disalin!`);
    });
  };

  return (
    <section id="lokasi" className="py-14 bg-[#EEF4FF] border-t-2 border-cobalt-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border-2 border-cobalt-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          {/* Kolom Kiri */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-cobalt-50 border border-cobalt-200 text-cobalt-800 font-mono font-bold text-[11px] uppercase tracking-wider">
                TITIK LOKASI & KONTAK
              </span>
              <h3 className="heading-condensed font-black text-3xl sm:text-4xl text-slate-900">
                TOKO SARANA JAYA BENGKEL TAMBAL BAN
              </h3>

              <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-cobalt-800 uppercase tracking-wider">
                  Alamat Lengkap:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {SHOP_ADDRESS}
                </p>
                <button
                  onClick={handleCopyAddress}
                  className="text-[11px] font-bold text-cobalt-700 hover:underline inline-flex items-center gap-1.5 pt-1 cursor-pointer"
                >
                  <i className="fa-regular fa-copy"></i> Salin Alamat Lengkap
                </button>
              </div>

              <div className="p-4 rounded bg-butter-100 border border-butter-300 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase text-espresso-800">
                    Telepon / WA Mekanik:
                  </div>
                  <div className="font-mono font-bold text-lg text-cobalt-950">
                    {MECHANIC_PHONE}
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded bg-white text-cobalt-950 hover:bg-cobalt-900 hover:text-white text-xs font-bold border border-cobalt-950 transition cursor-pointer"
                >
                  Salin Nomor
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-base text-center transition flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-location-arrow text-xs"></i> Buka Google Maps
              </a>
              <button
                onClick={() =>
                  openWhatsApp(
                    `Halo Pak Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), mohon petunjuk arah ke bengkel di Jl. Cikoneng Girang PLN No.21-31.`
                  )
                }
                className="py-3 px-4 rounded bg-butter-300 hover:bg-butter-400 text-cobalt-950 border border-cobalt-950 font-condensed font-black uppercase tracking-wider text-base transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat Mekanik
              </button>
            </div>
          </div>

          {/* Kolom Kanan (Peta) */}
          <div className="lg:col-span-7 min-h-[320px] sm:min-h-[380px] bg-slate-200">
            <iframe
              title="Peta Lokasi Toko Sarana Jaya Bengkel Tambal Ban"
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-full min-h-[320px] sm:min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
