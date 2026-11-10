import React, { useRef } from "react";
import { galleryData } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Gallery({ onPreviewGallery }) {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="galeri" className="py-14 sm:py-18 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-3 py-1 bg-cobalt-50 border border-cobalt-200 text-cobalt-800 font-mono font-bold text-[10px] uppercase tracking-widest mb-2 rounded-sm">
              DOKUMENTASI BENGKEL
            </span>
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl text-slate-900">
              GALERI PENGERJAAN
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Geser ke samping untuk melihat dokumentasi pengerjaan ban dan servis
              di Toko Sarana Jaya
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scrollSlider(-1)}
              aria-label="Galeri Sebelumnya"
              className="w-10 h-10 rounded-lg bg-white border-2 border-slate-300 hover:border-cobalt-700 hover:bg-cobalt-700 hover:text-white text-slate-800 flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => scrollSlider(1)}
              aria-label="Galeri Berikutnya"
              className="w-10 h-10 rounded-lg bg-cobalt-700 border-2 border-cobalt-900 hover:bg-cobalt-800 text-white flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="snap-carousel gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onPreviewGallery({
                  title: item.title,
                  image: item.img,
                  description:
                    "Dokumentasi pengerjaan di Toko Sarana Jaya Bengkel Tambal Ban — Jl. Cikoneng Girang PLN No.21-31, RT.007/RW.004, Manis Jaya, Kec. Jatiuwung, Kota Tangerang.",
                })
              }
              className="snap-item w-60 sm:w-64 group relative h-48 sm:h-52 rounded-xl overflow-hidden cursor-pointer border-2 border-slate-200 hover:border-cobalt-700"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3">
                <span className="font-condensed font-bold text-white text-base tracking-wide">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() =>
              openWhatsApp(
                "Halo Toko Sarana Jaya, saya ingin menanyakan layanan bengkel hari ini."
              )
            }
            className="px-6 py-2.5 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-base transition shadow-sm cursor-pointer"
          >
            Tanya Jadwal & Stok Ban via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
