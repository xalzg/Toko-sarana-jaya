import React from "react";
import { MECHANIC_PHONE } from "../data/data";

export default function DarkBannerFeatures() {
  const cards = [
    {
      num: "01 / MEKANIK AHLI",
      title: "Mekanik Berpengalaman",
      desc: "Terbiasa menangani ban motor matic, bebek, sport, hingga ban mobil penumpang dan pick-up.",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=500&q=80",
    },
    {
      num: "02 / PRESISI & KUAT",
      title: "Pengerjaan Presisi",
      desc: "Titik bocor dibersihkan tuntas sebelum ditambal sehingga karet menyatu kuat saat ban dipompa.",
      image:
        "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=500&q=80",
    },
    {
      num: "03 / PART LENGKAP",
      title: "Stok Ban & Part Harian",
      desc: "Sedia ban dalam baru, ban luar harian, pentil tubeless, oli mesin, busi, dan kampas rem.",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="bg-white pb-16">
      <div className="relative min-h-[380px] sm:min-h-[420px] flex items-center bg-espresso-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1800&q=80"
          alt="Penanganan Roda & Ban Kendaraan"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/1600x700/18181b/ffffff?text=Toko+Sarana+Jaya";
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
          <div className="max-w-lg text-white space-y-4">
            <h2 className="heading-condensed font-black text-4xl sm:text-5xl leading-none">
              TOKO SARANA JAYA
              <br />
              <span className="text-butter-300">BENGKEL TAMBAL BAN</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Melayani pengendara motor harian, ojek online, pekerja kawasan
              industri Jatiuwung, hingga mobil operasional yang melintas di jalur
              Cikoneng Girang PLN & Manis Jaya.
            </p>

            {/* Floating Box */}
            <div className="inline-flex items-center gap-3.5 bg-white/10 backdrop-blur-md border border-white/25 p-2.5 pr-5 rounded-lg mt-2">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=200&q=80"
                alt="Layanan Panggilan"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/100x100/1239a0/ffffff?text=SIAGA";
                }}
                className="w-14 h-14 rounded object-cover shrink-0 border border-butter-300"
              />
              <div>
                <div className="font-condensed font-extrabold text-base uppercase tracking-wide text-butter-300">
                  Respon Cepat Panggilan
                </div>
                <div className="text-[11px] text-slate-200">
                  Khusus Area Manis Jaya & Jatiuwung
                </div>
                <div className="font-mono text-xs font-bold text-white mt-0.5">
                  Telp/WA: {MECHANIC_PHONE}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Kartu Overlap */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-butter-100 border-2 border-espresso-800/20 rounded-xl p-5 shadow-sm">
              <div className="font-condensed font-black text-lg uppercase text-espresso-800">
                Standar Kerja Bengkel
              </div>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                Setiap ban yang selesai ditambal wajib dicek ulang di bak air /
                air sabun untuk memastikan tidak ada rembesan halus pada tambalan
                maupun pentil.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="snap-carousel lg:grid lg:grid-cols-3 gap-4 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="snap-item w-[275px] sm:w-[300px] lg:w-auto bg-white rounded-xl border-2 border-slate-200 overflow-hidden industrial-card shadow-md"
                >
                  <div className="h-40 overflow-hidden border-b-4 border-cobalt-700 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-slate-950/80 text-butter-300 font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                      {card.num}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="heading-condensed font-extrabold text-xl text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
