import React, { useState } from "react";
import { faqData, MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 bg-[#EEF4FF] border-t-2 border-cobalt-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri */}
          <div className="lg:col-span-5 space-y-3">
            <div className="w-10 h-1.5 bg-cobalt-700"></div>
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl text-slate-900">
              FREQUENTLY ASKED
              <br />
              QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Informasi teknis seputar layanan tambal ban, ketersediaan ukuran
              ban, dan jangkauan panggilan mekanik Toko Sarana Jaya.
            </p>
            <div className="pt-2">
              <div className="bg-white p-4 rounded-lg border-2 border-cobalt-200 space-y-2">
                <div className="font-condensed font-extrabold text-lg uppercase text-cobalt-900">
                  Kontak Darurat Mekanik
                </div>
                <p className="text-xs text-slate-600">
                  Jika ban kendaraan Anda kempis di sekitar Jatiuwung, hubungi
                  nomor berikut:
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono font-bold text-base text-slate-900">
                    {MECHANIC_PHONE}
                  </span>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        "Halo Mekanik Toko Sarana Jaya, saya butuh bantuan tambal ban."
                      )
                    }
                    className="px-3.5 py-1.5 rounded bg-cobalt-700 hover:bg-cobalt-800 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Chat WA
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan (Accordion) */}
          <div className="lg:col-span-7 space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-cobalt-700 text-white flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                        ?
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.question}
                      </span>
                    </div>
                    <i
                      className={`fa-solid fa-chevron-down text-xs text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-2 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

