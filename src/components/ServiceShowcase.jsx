import React, { useState } from "react";
import { servicesShowcase, MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function ServiceShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const current = servicesShowcase[activeIdx];

  const stepProject = (dir) => {
    setActiveIdx(
      (prev) => (prev + dir + servicesShowcase.length) % servicesShowcase.length
    );
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      stepProject(1);
    } else if (isRightSwipe) {
      stepProject(-1);
    }
  };

  return (
    <section id="layanan" className="py-12 sm:py-20 px-2 sm:px-8">
      <div className="text-center mb-8 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft block mb-2">
          KATALOG LAYANAN & BIAYA
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink">
          Layanan & Daftar Harga
        </h2>
      </div>

      {/* Mobile Horizontal Pill Selector */}
      <div className="lg:hidden mb-5 -mx-1 px-1 overflow-x-auto no-scrollbar flex items-center gap-2">
        {servicesShowcase.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs transition shrink-0 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-ink text-white font-semibold shadow-md"
                  : "bg-white text-ink-muted hover:text-ink border border-slate-200/90"
              }`}
            >
              <span>{item.title}</span>
              {isActive && (
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono">
                  {item.price}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Kolom Kiri Desktop: Daftar Vertikal dengan Indikator Garis */}
        <div className="hidden lg:block lg:col-span-4">
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
                  <div className="font-display text-base leading-tight">
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

        {/* Kolom Kanan: Kartu Visual Besar + Floating Card + Bottom Metadata */}
        <div className="lg:col-span-8">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[440px] sm:min-h-[490px] shadow-glass bg-ink flex flex-col justify-between p-4 sm:p-8 select-none"
          >
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20"></div>

            {/* Desktop Floating White Card */}
            <div className="hidden lg:block relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-xs shadow-lg border border-white animate-in fade-in duration-300">
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

            {/* Mobile Integrated Info Card */}
            <div className="lg:hidden relative z-10 space-y-3">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-white">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#255C7D]">
                    {current.badge}
                  </span>
                  <span className="text-xs font-bold text-ink font-mono bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {current.price}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-ink leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {current.desc}
                </p>
                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin pesan layanan: ${current.title}`
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
                  >
                    <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                    <span>Pesan via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar Stats */}
            <div className="relative z-10 pt-4 sm:pt-12 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4 text-white">
              <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-12 bg-black/45 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-3 sm:p-0 rounded-2xl border border-white/10 sm:border-0 text-center sm:text-left">
                <div>
                  <span className="block text-[10px] sm:text-[11px] text-white/75">
                    Tarif
                  </span>
                  <span className="font-display font-medium text-xs sm:text-xl text-white">
                    {current.price}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] text-white/75">
                    Durasi
                  </span>
                  <span className="font-display font-medium text-xs sm:text-xl text-white">
                    {current.time}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-[11px] text-white/75">
                    Unit
                  </span>
                  <span className="font-display font-medium text-xs sm:text-xl text-white">
                    {current.unit}
                  </span>
                </div>
              </div>

              {/* Tombol Prev / Next Layanan dengan Min 40-44px Touch Target */}
              <div className="flex items-center justify-between sm:justify-end gap-2.5">
                <span className="text-xs text-white/80 font-mono sm:hidden">
                  0{activeIdx + 1} / 0{servicesShowcase.length}
                </span>
                <div className="flex items-center gap-2">
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
      </div>
    </section>
  );
}
