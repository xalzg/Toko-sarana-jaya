import React from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function PreviewModal({ previewData, onClose }) {
  if (!previewData) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-full overflow-hidden border-2 border-cobalt-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup Preview"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {previewData.image && (
          <img
            src={previewData.image}
            alt={previewData.title || "Preview"}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6 space-y-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt-700 bg-cobalt-50 px-2.5 py-1 rounded">
            Toko Sarana Jaya Bengkel
          </span>
          <h3 className="heading-condensed font-black text-2xl text-slate-900">
            {previewData.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {previewData.description || previewData.content}
          </p>

          <div className="pt-3 flex justify-end">
            <button
              onClick={() =>
                openWhatsApp(
                  `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin bertanya mengenai: ${previewData.title}`
                )
              }
              className="px-5 py-2 rounded bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-sm transition cursor-pointer"
            >
              Hubungi {MECHANIC_PHONE}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

