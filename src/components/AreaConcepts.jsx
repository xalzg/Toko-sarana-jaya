import React, { useState } from "react";
import { conceptsData } from "../data/data";

export default function AreaConcepts() {
  const [activeTab, setActiveTab] = useState(0);

  const current = conceptsData[activeTab];

  return (
    <section
      id="area"
      className="rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#DBC7B8] via-[#E5D6C9] to-[#C8B09E] p-5 sm:p-10 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Kolom Kiri: Heading + Tabs Responsif */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-ink/75 block mb-2">
              AREA SIAGA & FASILITAS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink leading-[1.12]">
              Cakupan Layanan
              <br />
              Toko Sarana Jaya
            </h2>
          </div>

          {/* Mobile Horizontal Tabs */}
          <div className="lg:hidden -mx-1 px-1 overflow-x-auto no-scrollbar flex items-center gap-2" role="tablist">
            {conceptsData.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(idx)}
                  className={`whitespace-nowrap px-3.5 py-2 rounded-full text-xs transition cursor-pointer shrink-0 active:scale-95 ${
                    isActive
                      ? "bg-ink text-white font-semibold shadow-sm"
                      : "bg-white/60 text-ink/80 hover:bg-white/90"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* Desktop Vertical Tabs */}
          <div className="hidden lg:block border-l-2 border-ink/25 space-y-3.5 pl-4" role="tablist">
            {conceptsData.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(idx)}
                  className={`block text-left font-display text-sm sm:text-base transition cursor-pointer rounded-r py-1 px-2 focus-visible:ring-2 focus-visible:ring-ink ${
                    isActive
                      ? "font-semibold text-ink bg-white/30"
                      : "font-normal text-ink/75 hover:text-ink hover:bg-white/15"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="pt-1 sm:pt-2">
            <p className="text-xs sm:text-sm text-ink/90 max-w-md leading-relaxed animate-in fade-in duration-300 font-medium">
              {current.desc}
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Galeri Foto Responsif */}
        <div className="lg:col-span-6 space-y-2.5 sm:space-y-3.5">
          {/* Featured Image dengan Badge Lokasi */}
          <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/60 shadow-md relative">
            <img
              src={current.imgs[1]}
              alt="Mekanik Menambal Ban"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold text-ink shadow-sm">
              <i className="fa-solid fa-location-dot text-[#255C7D] mr-1.5"></i>
              RT.007/RW.004, Manis Jaya, Jatiuwung
            </div>
          </div>

          {/* Secondary Photos: 2-kolom pada mobile, stacked pada desktop */}
          <div className="grid grid-cols-2 gap-2.5 sm:space-y-3.5 sm:grid-cols-1">
            <div className="h-28 sm:h-36 rounded-2xl overflow-hidden border border-white/60 shadow-sm">
              <img
                src={current.imgs[0]}
                alt="Ruang Kerja Bengkel"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="h-28 sm:h-32 rounded-2xl overflow-hidden border border-white/60 shadow-sm">
              <img
                src={current.imgs[2]}
                alt="Peralatan Bengkel"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
