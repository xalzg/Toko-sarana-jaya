import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";

export default function MidBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cobalt-900 via-cobalt-700 to-cobalt-800 text-white border-y-2 border-cobalt-950">
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80"
          alt="Banner Ban"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cobalt-800 via-cobalt-800/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Thumbnail Berbingkai Putih di Kiri */}
          <div className="w-36 h-32 sm:w-44 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80"
              alt="Toko Sarana Jaya"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center sm:text-left space-y-1">
            <h3 className="heading-condensed font-black text-4xl sm:text-5xl text-white">
              TOKO SARANA JAYA
            </h3>
            <div className="heading-condensed font-black text-2xl sm:text-3xl text-butter-300">
              BENGKEL TAMBAL BAN — JATIUWUNG
            </div>
            <p className="text-xs text-blue-100">{SHOP_ADDRESS}</p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 font-mono text-xs text-butter-300 font-bold">
              <span>TELP/WA: {MECHANIC_PHONE}</span>
              <span>|</span>
              <span>TANGERANG, BANTEN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

