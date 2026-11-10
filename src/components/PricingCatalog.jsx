import React, { useRef } from "react";
import { catalogData, MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function PricingCatalog({
  activeFilter = "all",
  onFilterChange,
}) {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredItems =
    activeFilter === "all"
      ? catalogData
      : catalogData.filter((item) => item.category === activeFilter);

  const filterTabs = [
    { key: "all", label: `Semua (${catalogData.length})` },
    { key: "ban", label: "Ban & Pentil" },
    { key: "servis", label: "Oli & Rem" },
    { key: "darurat", label: "Panggilan" },
  ];

  return (
    <section id="harga" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Kontrol Navigasi Slide */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cobalt-50 border border-cobalt-200 text-cobalt-800 font-mono font-bold text-[11px] uppercase tracking-widest mb-2.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-cobalt-600"></span>
              <span>KATALOG TARIF & ESTIMASI PENGERJAAN</span>
            </div>
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl text-slate-900">
              DAFTAR HARGA LAYANAN BENGKEL
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Geser kartu ke samping untuk melihat tarif pengerjaan ban
              motor/mobil dan stok suku cadang. Hubungi mekanik di{" "}
              <strong className="font-mono text-cobalt-800">
                {MECHANIC_PHONE}
              </strong>{" "}
              untuk konfirmasi ukuran ban.
            </p>
          </div>

          {/* Filter Kategori + Tombol Geser Kiri/Kanan */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => onFilterChange(tab.key)}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                      isActive
                        ? "bg-cobalt-700 text-white shadow-sm"
                        : tab.key === "darurat"
                        ? "text-espresso-800 bg-butter-100/80 hover:bg-butter-300"
                        : "text-slate-700 hover:text-cobalt-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider(-1)}
                aria-label="Geser Kiri"
                className="w-10 h-10 rounded-lg bg-white border-2 border-slate-300 hover:border-cobalt-700 hover:bg-cobalt-700 hover:text-white text-slate-800 flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                onClick={() => scrollSlider(1)}
                aria-label="Geser Kanan"
                className="w-10 h-10 rounded-lg bg-cobalt-700 border-2 border-cobalt-900 hover:bg-cobalt-800 text-white flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Indikator Swipe Mobile */}
        <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-3 sm:hidden">
          <span>
            <i className="fa-solid fa-arrows-left-right mr-1.5 text-cobalt-600"></i>
            Geser kartu ke samping
          </span>
          <span className="text-cobalt-700">
            {filteredItems.length} Layanan Tersedia
          </span>
        </div>

        {/* Horizontal Slider Container */}
        <div
          ref={sliderRef}
          className="snap-carousel gap-5 pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="snap-item w-[275px] sm:w-[295px] bg-white rounded-xl p-4 border-2 border-slate-200 industrial-card flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 rounded-lg overflow-hidden bg-slate-900 mb-3.5 border border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/400x300/1239a0/ffffff?text=Sarana+Jaya";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-cobalt-900/90 text-butter-300 font-mono font-bold text-[10px] uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/95 text-slate-800 font-mono font-bold text-[10px]">
                    {item.duration}
                  </span>
                </div>
                <h3 className="heading-condensed font-extrabold text-2xl text-slate-900 leading-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.spec}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    Tarif / Info
                  </div>
                  <div className="font-mono text-xs font-bold text-cobalt-900">
                    {item.price}
                  </div>
                </div>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin tanya layanan: ${item.title}`
                    )
                  }
                  className="px-3.5 py-2 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-sm transition flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xs"></i> Tanya Harga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
