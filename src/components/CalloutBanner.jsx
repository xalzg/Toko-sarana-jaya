import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";

export default function CalloutBanner() {
  return (
    <section className="bg-white">
      <div className="bg-cobalt-700 border-y-2 border-cobalt-900 py-9 px-4 text-center text-white">
        <h2 className="heading-condensed font-black text-3xl sm:text-4xl tracking-wide uppercase">
          CEK TEKANAN ANGIN, KONDISI BAN & KONSULTASI MEKANIK
        </h2>
        <p className="text-xs sm:text-sm text-sky-200 mt-1 font-medium">
          {SHOP_ADDRESS} — Telp: {MECHANIC_PHONE}
        </p>
      </div>
      <div className="relative h-56 sm:h-72 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1800&q=80"
          alt="Aktivitas Bengkel Tambal Ban"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1600x500/0d2c7e/ffffff?text=Toko+Sarana+Jaya+Bengkel+Tambal+Ban";
          }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-cobalt-950/35"></div>
      </div>
    </section>
  );
}

