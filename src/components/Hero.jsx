import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";

export default function Hero({ onOpenBooking, onSelectCatalogCategory }) {
  const handlePillClick = (category) => {
    if (onSelectCatalogCategory) {
      onSelectCatalogCategory(category);
    }
    const elem = document.getElementById("harga");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-cobalt-950">
      {/* Foto Latar Bengkel Sebelah Kanan */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=80"
          alt="Pengerjaan Ban & Mesin di Toko Sarana Jaya"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1600x900/091f5c/ffffff?text=Toko+Sarana+Jaya+Bengkel";
          }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-industrial-overlay"></div>
        {/* Aksen Geometris Sisi Kiri */}
        <div className="hidden lg:block absolute -left-28 top-12 w-96 h-96 bg-cobalt-950/55 rotate-45 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Kolom Kiri: Tipografi Condensed Kapital Raksasa + Kotak Highlight + Nomor Mekanik */}
          <div className="lg:col-span-7 text-white space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-butter-100 text-espresso-800 font-mono text-[11px] font-bold uppercase tracking-wider rounded-sm border border-butter-300">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>SIAGA JALUR CIKONENG GIRANG PLN • MANIS JAYA • JATIUWUNG</span>
            </div>

            <div className="space-y-2">
              <h1 className="heading-condensed font-black text-5xl sm:text-6xl lg:text-[72px] text-white tracking-tight">
                TOKO SARANA JAYA
              </h1>
              {/* Highlight Box Biru Terang */}
              <div className="inline-block bg-[#2B7FFF] px-4 py-2 border-2 border-white/40 shadow-[6px_6px_0px_rgba(6,19,59,0.6)]">
                <span className="heading-condensed font-black text-4xl sm:text-5xl lg:text-[58px] text-white block">
                  BENGKEL TAMBAL BAN
                </span>
              </div>
            </div>

            <p className="font-condensed font-bold text-lg sm:text-xl tracking-[0.18em] text-butter-300 uppercase pt-1">
              TAMBAL BAN MOTOR & MOBIL • PRESS BAN DALAM • SERVIS MEKANIK HARIAN
            </p>

            <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed font-normal">
              Penanganan langsung tanpa antre berbelit untuk ban bocor di jalan,
              ganti ban luar/dalam, ganti pentil, kuras oli, hingga kampas rem.
              Berlokasi di <strong>{SHOP_ADDRESS}</strong>.
            </p>

            {/* Baris Call Us & CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              <a
                href={`tel:+${MECHANIC_PHONE.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-3.5 bg-cobalt-900/90 hover:bg-cobalt-900 border-2 border-sky-400/60 px-4 py-2.5 rounded transition group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-butter-300 flex items-center justify-center text-butter-300 group-hover:bg-butter-300 group-hover:text-cobalt-950 transition">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-sky-200 font-bold">
                    Call / WA Mekanik
                  </div>
                  <div className="font-mono font-bold text-lg sm:text-xl text-white tracking-tight">
                    {MECHANIC_PHONE}
                  </div>
                </div>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded bg-butter-300 hover:bg-butter-400 text-cobalt-950 font-condensed font-black uppercase tracking-wider text-xl border-2 border-white shadow-[4px_4px_0px_#06133b] transition cursor-pointer active:translate-y-0.5"
              >
                Panggil Ke Lokasi
              </button>
            </div>
          </div>

          {/* Kolom Kanan: 6 Pill Layanan Transparan */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:items-end">
            <div className="w-full max-w-md bg-cobalt-950/65 backdrop-blur-md p-5 rounded border border-white/25">
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => handlePillClick("ban")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Tubeless
                </button>
                <button
                  onClick={() => handlePillClick("ban")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Press Dalam
                </button>
                <button
                  onClick={() => handlePillClick("ban")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Ganti Ban
                </button>
                <button
                  onClick={() => handlePillClick("servis")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Ganti Oli
                </button>
                <button
                  onClick={() => handlePillClick("servis")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Kampas Rem
                </button>
                <button
                  onClick={() => handlePillClick("darurat")}
                  className="px-3 py-2 rounded-full border border-white/60 bg-white/10 hover:bg-butter-300 hover:text-cobalt-950 hover:border-butter-300 text-white text-xs font-bold uppercase tracking-wider text-center transition cursor-pointer"
                >
                  Panggilan
                </button>
              </div>
              <p className="text-[11px] text-center text-sky-200 mt-3.5 font-semibold tracking-wide">
                Jasa Tambal Ban & Servis Kendaraan Area Jatiuwung – Tangerang
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 Foto Produk/Bengkel Geometris di Kiri Bawah Hero */}
      <div className="hidden sm:flex items-end gap-4 absolute -bottom-7 left-6 lg:left-16 z-20 pointer-events-none">
        {/* Foto 1: Bingkai Berlian Miring */}
        <div className="w-28 h-28 lg:w-36 lg:h-36 diamond-cutout bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=500&q=80"
            alt="Foto Produk Ban & Velg"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/300x300/1239a0/ffffff?text=Ban+Tubeless";
            }}
          />
        </div>
        {/* Foto 2: Bingkai Segitiga Lebar */}
        <div className="w-44 h-28 lg:w-56 lg:h-36 bg-white p-1.5 triangle-cutout shadow-2xl -ml-5">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=500&q=80"
            alt="Pengerjaan Mekanik Bengkel"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/400x300/1239a0/ffffff?text=Servis+Mekanik";
            }}
            className="w-full h-full object-cover triangle-cutout"
          />
        </div>
      </div>
    </section>
  );
}

