import React, { useState } from "react";
import { conceptsData } from "../data/data";

export default function AreaConcepts() {
  const [activeTab, setActiveTab] = useState(0);

  const current = conceptsData[activeTab];

  return (
    <section
      id="area"
      className="rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#DBC7B8] via-[#E5D6C9] to-[#C8B09E] p-6 sm:p-10 lg:p-12 shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Kolom Kiri: Heading Besar + Daftar Tab Vertikal */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60 block mb-2">
              AREA SIAGA & FASILITAS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-ink leading-[1.12]">
              Cakupan Layanan
              <br />
              Toko Sarana Jaya
            </h2>
          </div>

          {/* Vertical Tabs */}
          <div className="border-l border-ink/20 space-y-3 pl-4">
            {conceptsData.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`block text-left font-display text-sm sm:text-base transition cursor-pointer ${
                    isActive
                      ? "font-semibold text-ink"
                      : "font-normal text-ink/55 hover:text-ink"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <p className="text-xs sm:text-sm text-ink/80 max-w-md leading-relaxed animate-in fade-in duration-300">
              {current.desc}
            </p>
          </div>
        </div>

        {/* Kolom Kanan: 3 Tumpukan Foto Vertikal */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="h-32 sm:h-36 rounded-2xl overflow-hidden border border-white/50 shadow-sm">
            <img
              src={current.imgs[0]}
              alt="Ruang Kerja Bengkel"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/50 shadow-md relative">
            <img
              src={current.imgs[1]}
              alt="Mekanik Menambal Ban"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-medium text-ink shadow-sm">
              <i className="fa-solid fa-location-dot text-[#255C7D] mr-1.5"></i>
              RT.007/RW.004, Manis Jaya, Jatiuwung
            </div>
          </div>
          <div className="h-28 sm:h-32 rounded-2xl overflow-hidden border border-white/50 shadow-sm">
            <img
              src={current.imgs[2]}
              alt="Peralatan Bengkel"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
