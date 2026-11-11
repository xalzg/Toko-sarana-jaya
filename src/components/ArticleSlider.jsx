import React, { useState } from "react";
import { articlesDeck } from "../data/data";

export default function ArticleSlider({ onOpenArticle }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const current = articlesDeck[activeIdx];
  const next = articlesDeck[(activeIdx + 1) % articlesDeck.length];

  const stepArticle = (dir) => {
    setActiveIdx(
      (prev) => (prev + dir + articlesDeck.length) % articlesDeck.length
    );
  };

  const handleKeyDownCard = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpenArticle(current);
    }
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
      stepArticle(1);
    } else if (isRightSwipe) {
      stepArticle(-1);
    }
  };

  return (
    <section id="tips" className="py-6 sm:py-10 px-1 sm:px-6 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
        {/* Kolom Kiri: Judul Besar + Tombol Bulat < > */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft block">
            EDUKASI & CATATAN MEKANIK
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink leading-[1.12]">
            Lebih dari
            <br />
            Sekadar Tambal
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-sm leading-relaxed">
            Tips praktis merawat keawetan ban luar, ban dalam, tekanan angin,
            hingga jadwal pergantian oli dan kampas rem kendaraan Anda.
          </p>

          {/* Tombol Navigasi Bulat Putih */}
          <div className="pt-2 sm:pt-3 flex items-center justify-between sm:justify-start gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => stepArticle(-1)}
                aria-label="Artikel Sebelumnya"
                className="w-11 h-11 rounded-full bg-white hover:bg-ink text-ink hover:text-white shadow-soft flex items-center justify-center transition active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                onClick={() => stepArticle(1)}
                aria-label="Artikel Berikutnya"
                className="w-11 h-11 rounded-full bg-white hover:bg-ink text-ink hover:text-white shadow-soft flex items-center justify-center transition active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
            <span className="text-xs text-ink-soft font-mono font-medium">
              0{activeIdx + 1} / 0{articlesDeck.length}
            </span>
          </div>
        </div>

        {/* Kolom Kanan: Stacked Card Deck dengan Touch Swipe */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="lg:col-span-7 relative flex items-center justify-center lg:justify-end pr-0 sm:pr-8"
        >
          {/* Kartu Belakang (Peek Card) */}
          <div className="hidden sm:block w-[320px] sm:w-[360px] h-[410px] rounded-[28px] overflow-hidden border-4 border-white/70 shadow-lg absolute right-0 translate-x-3 scale-[0.93] opacity-70 pointer-events-none">
            <img
              src={next.img}
              alt="Artikel Selanjutnya"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/40"></div>
          </div>

          {/* Kartu Depan Aktif */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onOpenArticle(current)}
            onKeyDown={handleKeyDownCard}
            aria-label={`Buka artikel: ${current.title}`}
            className="relative z-10 w-full max-w-[400px] h-[390px] sm:h-[460px] rounded-[24px] sm:rounded-[28px] overflow-hidden border-4 sm:border-[5px] border-white shadow-portrait cursor-pointer group bg-ink flex flex-col justify-end p-5 sm:p-8 transition-transform duration-300 hover:scale-[1.01] focus-visible:ring-4 focus-visible:ring-[#255C7D] outline-none"
          >
            <img
              src={current.img}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162836]/95 via-[#162836]/40 to-transparent"></div>

            <div className="relative z-10 space-y-2.5 sm:space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white text-ink text-[10px] sm:text-[11px] font-semibold">
                  {current.tag1}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-ink text-[10px] sm:text-[11px] font-medium">
                  {current.tag2}
                </span>
              </div>

              <h3 className="font-display font-medium text-lg sm:text-2xl text-white leading-snug">
                {current.title}
              </h3>

              <p className="text-xs text-white/80 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {current.excerpt}
              </p>

              <div className="pt-1 sm:pt-2 inline-flex items-center gap-2 text-xs font-medium text-white/90 group-hover:underline">
                <span>Baca Penjelasan Mekanik</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
