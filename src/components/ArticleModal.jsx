import React, { useEffect } from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function ArticleModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      <div
        className="bg-white rounded-[24px] sm:rounded-[28px] max-w-lg w-full overflow-hidden border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup modal artikel"
          className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow cursor-pointer transition focus-visible:ring-2 focus-visible:ring-[#255C7D]"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="overflow-y-auto">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-48 sm:h-60 object-cover"
          />

          <div className="p-5 sm:p-8 space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#255C7D]">
              CATATAN MEKANIK SARANA JAYA
            </span>
            <h3
              id="modal-article-title"
              className="font-display font-semibold text-lg sm:text-xl text-ink"
            >
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {article.body || article.excerpt}
            </p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-end">
              <button
                onClick={() =>
                  openWhatsApp(
                    `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin konsultasi perawatan ban / kendaraan mengenai: ${article.title}`
                  )
                }
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-ink hover:bg-[#255C7D] text-white font-medium text-xs transition cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#255C7D] text-center"
              >
                Konsultasi via WA ({MECHANIC_PHONE})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
