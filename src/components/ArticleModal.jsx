import React from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[28px] max-w-lg w-full overflow-hidden border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow cursor-pointer transition"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img
          src={article.img}
          alt={article.title}
          className="w-full h-60 object-cover"
        />

        <div className="p-6 sm:p-8 space-y-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#255C7D]">
            CATATAN MEKANIK SARANA JAYA
          </span>
          <h3 className="font-display font-semibold text-xl text-ink">
            {article.title}
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {article.body || article.excerpt}
          </p>
          <div className="pt-4 flex justify-end">
            <button
              onClick={() =>
                openWhatsApp(
                  `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin konsultasi perawatan ban / kendaraan mengenai: ${article.title}`
                )
              }
              className="px-5 py-2.5 rounded-full bg-ink hover:bg-[#255C7D] text-white font-medium text-xs transition cursor-pointer"
            >
              Konsultasi via WA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
