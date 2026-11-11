import React, { useState } from "react";
import { articlesDeck } from "../data/data";

export default function ArticleSlider({ onOpenArticle }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = articlesDeck[activeIdx];
  const next = articlesDeck[(activeIdx + 1) % articlesDeck.length];

  const stepArticle = (dir) => {
    setActiveIdx(
      (prev) => (prev + dir + articlesDeck.length) % articlesDeck.length
    );
  };

  return (
    <section id="tips" className="py-6 sm:py-10 px-2 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Kolom Kiri: Judul Besar + Tombol Bulat < > */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft block">
            EDUKASI & CATATAN MEKANIK
          </span>
          <h2 className="font-display font-normal text-4xl sm:text-5xl text-ink leading-[1.12]">
            Lebih dari
            <br />
            Sekadar Tambal
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted max-w-sm leading-relaxed">
            Tips praktis merawat keawetan ban luar, ban dalam, tekanan angin,
            hingga jadwal pergantian oli dan kampas rem kendaraan Anda.
          </p>

          {/* Tombol Navigasi Bulat Putih */}
          <div className="pt-3 flex items-center gap-3">
            <button
              onClick={() => stepArticle(-1)}
              aria-label="Artikel Sebelumnya"
              className="w-11 h-11 rounded-full bg-white hover:bg-ink text-ink hover:text-white shadow-soft flex items-center justify-center transition active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => stepArticle(1)}
              aria-label="Artikel Berikutnya"
              className="w-11 h-11 rounded-full bg-white hover:bg-ink text-ink hover:text-white shadow-soft flex items-center justify-center transition active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
            <span className="text-xs text-ink-soft ml-2 font-medium">
              0{activeIdx + 1} / 0{articlesDeck.length}
            </span>
          </div>
        </div>

        {/* Kolom Kanan: Stacked Card Deck */}
        <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end pr-0 sm:pr-8">
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
            onClick={() => onOpenArticle(current)}
            className="relative z-10 w-full max-w-[400px] h-[430px] sm:h-[460px] rounded-[28px] overflow-hidden border-[5px] border-white shadow-portrait cursor-pointer group bg-ink flex flex-col justify-end p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.01]"
          >
            <img
              src={current.img}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162836]/95 via-[#162836]/40 to-transparent"></div>

            <div className="relative z-10 space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white text-ink text-[11px] font-semibold">
                  {current.tag1}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-ink text-[11px] font-medium">
                  {current.tag2}
                </span>
              </div>

              <h3 className="font-display font-medium text-xl sm:text-2xl text-white leading-snug">
                {current.title}
              </h3>

              <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                {current.excerpt}
              </p>

              <div className="pt-2 inline-flex items-center gap-2 text-xs font-medium text-white/90 group-hover:underline">
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
