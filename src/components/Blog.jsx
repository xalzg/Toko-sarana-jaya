import React, { useRef } from "react";
import { articlesData, MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Blog({ onOpenArticle, onOpenBooking }) {
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

  return (
    <section id="artikel" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-2 border-slate-100 gap-4">
          <div>
            <h2 className="heading-condensed font-black text-4xl text-slate-900">
              OUR BLOG & CATATAN MEKANIK
            </h2>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 font-semibold mt-1">
              <span>
                <i className="fa-regular fa-user mr-1 text-cobalt-700"></i>
                Mekanik Sarana Jaya
              </span>
              <span>
                <i className="fa-regular fa-folder mr-1 text-cobalt-700"></i>
                Perawatan Roda & Mesin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scrollSlider(-1)}
              aria-label="Artikel Sebelumnya"
              className="w-9 h-9 rounded-lg bg-white border-2 border-slate-300 hover:border-cobalt-700 text-slate-800 flex items-center justify-center transition cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button
              onClick={() => scrollSlider(1)}
              aria-label="Artikel Berikutnya"
              className="w-9 h-9 rounded-lg bg-cobalt-700 border-2 border-cobalt-900 text-white flex items-center justify-center transition cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="snap-carousel lg:grid lg:grid-cols-3 gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {articlesData.map((art) => (
            <article
              key={art.id}
              onClick={() => onOpenArticle(art)}
              className="snap-item w-[290px] sm:w-[340px] lg:w-auto bg-white rounded-xl border-2 border-slate-200 p-4 industrial-card cursor-pointer"
            >
              <div className="relative h-44 rounded-lg overflow-hidden mb-4">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-white px-2.5 py-1 rounded text-[9px] font-extrabold text-cobalt-900 uppercase tracking-wider shadow">
                  SARANA JAYA
                </div>
                <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-cobalt-700 text-white border-2 border-white flex items-center justify-center shadow">
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </div>
              </div>
              <div className="px-1">
                <div className="font-mono text-[10px] text-cobalt-700 font-bold uppercase">
                  {art.tag}
                </div>
                <h3 className="heading-condensed font-extrabold text-xl text-slate-900 mt-1 hover:text-cobalt-700 transition">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                  {art.preview}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Baris Bawah Blog */}
        <div className="mt-10 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => openWhatsApp("Halo Toko Sarana Jaya")}
              className="w-6 h-6 rounded-full bg-cobalt-700 text-white flex items-center justify-center text-[11px] cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            <a
              href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
              className="w-6 h-6 rounded-full bg-cobalt-700 text-white flex items-center justify-center text-[11px]"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="#lokasi"
              className="w-6 h-6 rounded-full bg-cobalt-700 text-white flex items-center justify-center text-[11px]"
            >
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>

          <div className="text-slate-600">
            Konsultasi langsung dengan mekanik kami:{" "}
            <button
              onClick={onOpenBooking}
              className="text-cobalt-700 font-bold underline cursor-pointer"
            >
              Klik di sini
            </button>
          </div>

          <div className="heading-condensed font-bold text-slate-500 tracking-wider text-sm uppercase">
            TOKO SARANA JAYA BENGKEL TAMBAL BAN
          </div>
        </div>
      </div>
    </section>
  );
}

