import React from "react";
import { MECHANIC_PHONE, SHOP_ADDRESS } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function AboutProfile() {
  return (
    <section
      id="profil"
      className="py-16 sm:py-20 bg-[#EEF4FF] border-y-2 border-cobalt-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Kiri: Kolase 2 Foto Bertumpuk + Kotak Biru Logo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none pb-8 pr-6">
              {/* Foto Utama Kanan Atas */}
              <div className="ml-auto w-4/5 h-60 sm:h-72 rounded-lg overflow-hidden border-4 border-white shadow-lg bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80"
                  alt="Area Kerja Toko Sarana Jaya"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400/0d2c7e/ffffff?text=Area+Kerja+Bengkel";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Foto Kedua Kiri Bawah Bertumpuk */}
              <div className="-mt-28 w-3/5 h-48 sm:h-56 rounded-lg overflow-hidden border-4 border-white shadow-xl relative z-10 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=600&q=80"
                  alt="Pengerjaan Ban Kendaraan"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/500x400/18181b/ffffff?text=Tambal+Ban";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lencana Kotak Biru */}
              <div className="absolute bottom-2 right-6 sm:right-10 z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-lg bg-cobalt-700 text-white p-3 flex flex-col items-center justify-center text-center border-4 border-white shadow-xl">
                <i className="fa-solid fa-wrench text-2xl mb-1 text-butter-300"></i>
                <span className="heading-condensed font-black text-base tracking-wide leading-none">
                  SARANA JAYA
                </span>
                <span className="text-[9px] text-sky-200 font-bold mt-1 uppercase tracking-widest">
                  JATIUWUNG
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi Teknis Lugas */}
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3 py-1 bg-white border border-cobalt-200 text-cobalt-800 font-mono font-bold text-[11px] uppercase tracking-wider">
              PROFIL BENGKEL
            </span>
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl text-slate-900">
              TOKO SARANA JAYA BENGKEL TAMBAL BAN
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Toko Sarana Jaya Bengkel Tambal Ban</strong> melayani
              perbaikan ban bocor dan perawatan ringan kendaraan roda dua maupun
              roda empat di kawasan padat industri dan pemukiman Jatiuwung. Kami
              menangani{" "}
              <strong>
                tambal ban tubeless, tambal press ban dalam, penggantian ban
                luar/dalam, ganti pentil, oli mesin, hingga kampas rem
              </strong>
              .
            </p>

            <div className="p-3.5 rounded bg-white border-l-4 border-cobalt-700 text-xs sm:text-sm text-slate-700 shadow-sm">
              <div className="font-bold text-cobalt-900 uppercase text-[11px] tracking-wider mb-0.5">
                Titik Lokasi Bengkel:
              </div>
              {SHOP_ADDRESS}
            </div>

            <ul className="space-y-2.5 pt-1">
              <li className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <span className="w-5 h-5 rounded-full bg-cobalt-700 text-butter-300 flex items-center justify-center text-[10px] shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>
                  Bongkar Pasang Ban Rapi Tanpa Merusak Cat Bibir Velg
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <span className="w-5 h-5 rounded-full bg-cobalt-700 text-butter-300 flex items-center justify-center text-[10px] shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>
                  Tambalan Press Ban Dalam Matang Merata & Tidak Mudah
                  Mengelupas
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <span className="w-5 h-5 rounded-full bg-cobalt-700 text-butter-300 flex items-center justify-center text-[10px] shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>
                  Mekanik Siaga Dihubungi di Nomor {MECHANIC_PHONE}
                </span>
              </li>
            </ul>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  openWhatsApp(
                    `Halo Pak Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya ingin tanya layanan bengkel.`
                  )
                }
                className="px-6 py-2.5 rounded bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-bold uppercase tracking-wider text-lg transition shadow-sm cursor-pointer"
              >
                Hubungi Mekanik
              </button>
              <a
                href="#lokasi"
                className="px-5 py-2.5 rounded bg-white hover:bg-slate-100 text-cobalt-900 border-2 border-cobalt-900 font-condensed font-bold uppercase tracking-wider text-lg transition"
              >
                Cek Peta Lokasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
