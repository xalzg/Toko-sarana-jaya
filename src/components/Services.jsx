import React, { useRef } from "react";
import { servicesData } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Services({ onOpenBooking }) {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 350;
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="layanan"
      className="py-16 sm:py-20 bg-[#EEF4FF] border-t-2 border-cobalt-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-3 py-1 bg-white border border-cobalt-200 text-cobalt-800 font-mono font-bold text-[11px] uppercase tracking-widest mb-2 rounded-sm">
              SPESIALISASI BENGKEL
            </span>
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl text-slate-900">
              LAYANAN TOKO SARANA JAYA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Geser ke samping untuk memilih layanan yang dibutuhkan kendaraan
              Anda
            </p>
          </div>

          {/* Navigasi Slider Layanan */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase mr-1 hidden sm:inline">
              Geser Layanan
            </span>
            <button
              onClick={() => scrollSlider(-1)}
              aria-label="Layanan Sebelumnya"
              className="w-10 h-10 rounded-lg bg-white border-2 border-slate-300 hover:border-cobalt-700 hover:bg-cobalt-700 hover:text-white text-slate-800 flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => scrollSlider(1)}
              aria-label="Layanan Berikutnya"
              className="w-10 h-10 rounded-lg bg-cobalt-700 border-2 border-cobalt-900 hover:bg-cobalt-800 text-white flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>

        {/* Horizontal Slider 6 Kartu Layanan */}
        <div
          ref={sliderRef}
          className="snap-carousel gap-5 pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {servicesData.map((svc) => (
            <div
              key={svc.num}
              className={`snap-item w-[300px] sm:w-[350px] bg-white rounded-xl p-5 border-2 ${
                svc.isEmergency ? "border-cobalt-700" : "border-slate-200"
              } industrial-card flex flex-col justify-between`}
            >
              <div>
                <div className="h-48 rounded-lg overflow-hidden mb-4 border border-slate-200 relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                  {svc.isEmergency ? (
                    <span className="absolute top-3 right-3 bg-butter-300 text-cobalt-950 border border-cobalt-950 font-mono text-[10px] font-bold px-2.5 py-1 uppercase rounded-sm shadow">
                      {svc.time}
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 bg-cobalt-900/90 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded">
                      <i className={`${svc.timeIcon} mr-1 text-butter-300`}></i>
                      {svc.time}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                      svc.isEmergency ? "text-espresso-800" : "text-cobalt-700"
                    }`}
                  >
                    LAYANAN {svc.num}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${svc.statusClass}`}
                  >
                    {svc.statusBadge}
                  </span>
                </div>

                <h3 className="heading-condensed font-black text-2xl sm:text-3xl text-slate-900">
                  {svc.title}
                </h3>

                <div
                  className={`grid grid-cols-2 gap-y-2 gap-x-2 my-3.5 text-xs text-slate-700 font-medium p-3 rounded-lg border ${
                    svc.isEmergency
                      ? "bg-butter-50 border-butter-300/60"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  {svc.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">
                    {svc.priceLabel}
                  </div>
                  <div className="font-mono font-bold text-sm text-cobalt-900">
                    {svc.price}
                  </div>
                </div>

                {svc.isEmergency ? (
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2.5 rounded-lg bg-butter-300 hover:bg-butter-400 text-cobalt-950 border border-cobalt-950 font-condensed font-black uppercase tracking-wider text-sm inline-flex items-center gap-2 transition cursor-pointer"
                  >
                    <i className="fa-solid fa-phone-volume"></i> Panggil Mekanik
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Halo Pak Mekanik, saya mau tanya layanan ${svc.query} di Toko Sarana Jaya.`
                      )
                    }
                    className="px-4 py-2.5 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-sm inline-flex items-center gap-2 transition cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Hubungi Mekanik
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
