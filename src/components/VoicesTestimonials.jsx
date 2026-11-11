import React, { useState } from "react";
import { voicesData } from "../data/data";

export default function VoicesTestimonials() {
  const [activeIdx, setActiveIdx] = useState(2); // default Hendra Wijaya (tengah)

  const activeVoice = voicesData[activeIdx];

  return (
    <section id="testimoni" className="pt-8 sm:pt-12 text-center relative">
      <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink max-w-xl mx-auto leading-[1.15]">
        Suara pelanggan yang telah kami bantu di jalan.
      </h2>
      <p className="text-xs sm:text-sm text-ink-muted mt-3">
        Klik salah satu kartu pelanggan untuk membaca pengalaman mereka di Toko
        Sarana Jaya
      </p>

      {/* Fanned Cards Arc */}
      <div className="relative mt-10 sm:mt-14 pb-8 flex items-center justify-center">
        <div className="absolute inset-0 voice-glow pointer-events-none"></div>

        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-5 md:gap-7 py-4 px-2 overflow-x-auto max-w-full">
          {/* Card 0 (Far Left - rotate -12deg) */}
          <button
            onClick={() => setActiveIdx(0)}
            aria-label={`Pilih testimoni: ${voicesData[0].name}`}
            className={`voice-card hidden md:block w-28 h-36 rounded-2xl overflow-hidden shadow-md -rotate-12 translate-y-6 transition-all duration-300 shrink-0 border-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] ${
              activeIdx === 0
                ? "border-[#255C7D] ring-2 ring-[#255C7D] opacity-100 scale-105"
                : "border-white opacity-75 hover:opacity-100"
            }`}
          >
            <img
              src={voicesData[0].img}
              alt={voicesData[0].name}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Card 1 (Mid Left - rotate -6deg) */}
          <button
            onClick={() => setActiveIdx(1)}
            aria-label={`Pilih testimoni: ${voicesData[1].name}`}
            className={`voice-card w-28 sm:w-36 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg -rotate-6 translate-y-2 transition-all duration-300 shrink-0 border-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] ${
              activeIdx === 1
                ? "border-[#255C7D] ring-2 ring-[#255C7D] opacity-100 scale-105"
                : "border-white opacity-85 hover:opacity-100"
            }`}
          >
            <img
              src={voicesData[1].img}
              alt={voicesData[1].name}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Center Active Card */}
          <div className="relative shrink-0 mx-1 sm:mx-3">
            <div className="w-48 sm:w-56 h-60 sm:h-72 rounded-[24px] overflow-hidden border-4 border-white shadow-portrait relative bg-ink">
              <img
                src={activeVoice.img}
                alt={activeVoice.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>
              <div className="absolute bottom-5 inset-x-0 text-center px-3 text-white">
                <div className="font-display font-semibold text-sm sm:text-base">
                  {activeVoice.name}
                </div>
                <div className="text-[11px] text-white/75">{activeVoice.role}</div>
              </div>
            </div>
            {/* Floating Quote Icon Badge */}
            <div className="w-10 h-10 rounded-full bg-white text-ink shadow-lg flex items-center justify-center font-display font-bold text-lg absolute -bottom-5 left-1/2 -translate-x-1/2 border border-slate-100">
              <i className="fa-solid fa-quote-right text-xs text-ink"></i>
            </div>
          </div>

          {/* Card 3 (Mid Right - rotate +6deg) */}
          <button
            onClick={() => setActiveIdx(3)}
            aria-label={`Pilih testimoni: ${voicesData[3].name}`}
            className={`voice-card w-28 sm:w-36 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg rotate-6 translate-y-2 transition-all duration-300 shrink-0 border-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] ${
              activeIdx === 3
                ? "border-[#255C7D] ring-2 ring-[#255C7D] opacity-100 scale-105"
                : "border-white opacity-85 hover:opacity-100"
            }`}
          >
            <img
              src={voicesData[3].img}
              alt={voicesData[3].name}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Card 4 (Far Right - rotate +12deg) */}
          <button
            onClick={() => setActiveIdx(4)}
            aria-label={`Pilih testimoni: ${voicesData[4].name}`}
            className={`voice-card hidden md:block w-28 h-36 rounded-2xl overflow-hidden shadow-md rotate-12 translate-y-6 transition-all duration-300 shrink-0 border-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] ${
              activeIdx === 4
                ? "border-[#255C7D] ring-2 ring-[#255C7D] opacity-100 scale-105"
                : "border-white opacity-75 hover:opacity-100"
            }`}
          >
            <img
              src={voicesData[4].img}
              alt={voicesData[4].name}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Teks Kutipan Pelanggan */}
      <div className="max-w-lg mx-auto px-4 pt-2">
        <h3 className="font-display font-semibold text-base sm:text-lg text-ink">
          {activeVoice.headline}
        </h3>
        <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
          {activeVoice.quote}
        </p>

        {/* Indikator Titik dengan Touch Target Memadai */}
        <div className="flex items-center justify-center gap-1 mt-5">
          {voicesData.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Lihat ulasan ${v.name}`}
              className="p-2 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D] rounded-full"
            >
              <span
                className={`transition-all duration-300 block ${
                  i === activeIdx
                    ? "w-7 h-2 rounded-full bg-ink"
                    : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
