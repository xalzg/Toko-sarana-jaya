import React, { useState } from "react";
import { servicesShowcase, MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function ServiceShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = servicesShowcase[activeIdx];

  const stepProject = (dir) => {
    setActiveIdx(
      (prev) => (prev + dir + servicesShowcase.length) % servicesShowcase.length
    );
  };

  return (
    <section id="layanan" className="py-14 sm:py-20 px-3 sm:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft block mb-2">
          KATALOG LAYANAN & BIAYA
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink">
          Layanan & Daftar Harga
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Kolom Kiri: Daftar Vertikal dengan Indikator Garis */}
        <div className="lg:col-span-4">
          <div className="border-l border-slate-300 space-y-1">
            {servicesShowcase.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Lihat detail layanan ${item.title}`}
                  className={`w-full text-left pl-4 py-3 transition border-l-2 -ml-[1.5px] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] rounded-r-lg ${
                    isActive
                      ? "border-ink text-ink font-semibold bg-white/40"
                      : "border-transparent text-ink-muted hover:text-ink"
                  }`}
                >
                  <div className="font-display text-sm sm:text-base leading-tight">
                    {item.title}
                  </div>
                  <div
                    className={`text-[11px] ${
                      isActive ? "text-ink-muted" : "text-ink-soft"
                    } mt-0.5`}
                  >
                    {item.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Kolom Kanan: Kartu Visual Besar + Floating White Card + Bottom Metadata */}
        <div className="lg:col-span-8">
          <div className="relative rounded-[28px] overflow-hidden min-h-[430px] sm:min-h-[490px] shadow-glass bg-ink flex flex-col justify-between p-5 sm:p-8">
            {/* Foto Layanan Aktif */}
            <img
              src={current.img}
              alt={current.title}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/900x600/255C7D/ffffff?text=Layanan+Sarana+Jaya";
              }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/15"></div>

            {/* Floating White Card di Kiri Atas */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 max-w-xs shadow-lg border border-white animate-in fade-in duration-300">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#255C7D] mb-1">
                {current.badge}
              </span>
              <h3 className="font-display font-semibold text-xl text-ink leading-snug">
                {current.title}
              </h3>
              <p className="text-xs text-ink-muted mt-2.5 leading-relaxed">
                {current.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin tanya layanan: ${current.title}`
                    )
                  }
                  className="text-[11px] font-semibold uppercase tracking-wider text-ink hover:text-[#255C7D] inline-flex items-center gap-1.5 transition cursor-pointer py-1.5 focus-visible:ring-2 focus-visible:ring-[#255C7D] rounded"
                >
                  <span>PESAN VIA WA</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
                <span className="text-[11px] text-ink-soft font-mono">
                  {MECHANIC_PHONE}
                </span>
              </div>
            </div>

            {/* Bottom Bar Stats */}
            <div className="relative z-10 pt-12 flex flex-wrap items-end justify-between gap-6 text-white">
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                <div>
                  <span className="block text-[11px] text-white/80">
                    Estimasi Tarif
                  </span>
                  <span className="font-display font-medium text-lg sm:text-xl text-white">
                    {current.price}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-white/80">
                    Durasi Kerja
                  </span>
                  <span className="font-display font-medium text-lg sm:text-xl text-white">
                    {current.time}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-white/80">
                    Cakupan Unit
                  </span>
                  <span className="font-display font-medium text-lg sm:text-xl text-white">
                    {current.unit}
                  </span>
                </div>
              </div>

              {/* Tombol Prev / Next Layanan dengan Min 40-44px Touch Target */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => stepProject(-1)}
                  aria-label="Layanan Sebelumnya"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-ink backdrop-blur-md flex items-center justify-center transition cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  onClick={() => stepProject(1)}
                  aria-label="Layanan Berikutnya"
                  className="w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-ink backdrop-blur-md flex items-center justify-center transition cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
