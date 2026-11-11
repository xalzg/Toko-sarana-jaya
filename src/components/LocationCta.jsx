import React from "react";
import {
  MECHANIC_PHONE,
  SHOP_ADDRESS,
  GOOGLE_MAPS_SEARCH_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "../data/data";
import { openWhatsApp, copyText } from "../utils/helpers";

export default function LocationCta({ onOpenBooking, onShowToast }) {
  const handleCopyAddress = () => {
    copyText(SHOP_ADDRESS, () => {
      onShowToast("Alamat bengkel berhasil disalin");
    });
  };

  return (
    <section id="lokasi" className="space-y-6">
      {/* Banner CTA Bersih */}
      <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white border border-white shadow-soft p-6 sm:p-14 text-center">
        <img
          src="https://images.pexels.com/photos/29409960/pexels-photo-29409960.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Suasana Bengkel Motor dan Peralatan"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/95"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="font-display font-normal text-2xl sm:text-4xl text-ink leading-snug">
            Butuh Bantuan Tambal Ban atau Servis Sekarang?
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Kunjungi langsung <strong>Toko Sarana Jaya Bengkel Tambal Ban</strong>{" "}
            di <strong>{SHOP_ADDRESS}</strong> atau hubungi mekanik kami.
          </p>
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ink hover:bg-[#255C7D] text-white text-xs font-semibold uppercase tracking-widest transition shadow-md cursor-pointer active:scale-95"
            >
              HUBUNGI {MECHANIC_PHONE}
            </button>
            <button
              onClick={handleCopyAddress}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#ECEEF2] hover:bg-slate-200 text-ink text-xs font-semibold uppercase tracking-wider transition cursor-pointer active:scale-95"
            >
              SALIN ALAMAT BENGKEL
            </button>
          </div>
        </div>
      </div>

      {/* Peta Interaktif Google Maps & Detail Kontak */}
      <div className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 shadow-soft border border-white grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 p-2 sm:p-4 space-y-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#255C7D] block">
            TITIK KOORDINAT BENGKEL
          </span>
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink">
            Toko Sarana Jaya Bengkel Tambal Ban
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {SHOP_ADDRESS}
          </p>
          <div className="pt-1 space-y-2 text-xs text-ink">
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-phone text-[#255C7D]"></i>
              <span>
                Mekanik: <strong>{MECHANIC_PHONE}</strong> (Telepon / WhatsApp)
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-circle-check text-emerald-600"></i>
              <span>Melayani Motor, Mobil Penumpang & Operasional</span>
            </div>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={GOOGLE_MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#255C7D] hover:bg-ink text-white text-xs font-medium transition inline-flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <i className="fa-solid fa-location-arrow text-[10px]"></i>
              <span>Buka Petunjuk Arah Maps</span>
            </a>
            <button
              onClick={() =>
                openWhatsApp(
                  `Halo Pak Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin menuju ke bengkel di Jl. Cikoneng Girang PLN No.21-31.`
                )
              }
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-surface hover:bg-slate-200 text-ink text-xs font-medium transition inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
            >
              <i className="fa-brands fa-whatsapp text-emerald-600"></i>
              <span>Chat WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 h-64 sm:h-80 rounded-2xl overflow-hidden bg-surface border border-slate-200/80 relative">
          <iframe
            title="Peta Lokasi Toko Sarana Jaya Bengkel Tambal Ban"
            src={GOOGLE_MAPS_EMBED_URL}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
