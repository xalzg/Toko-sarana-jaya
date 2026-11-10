import React, { useState } from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("Motor Matic / Bebek");
  const [service, setService] = useState("Tambal Ban Tubeless");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedNotes = notes.trim()
      ? notes.trim()
      : "Datang ke bengkel Jl. Cikoneng Girang PLN No.21-31";

    const msg = `Halo Pak Mekanik *Toko Sarana Jaya Bengkel Tambal Ban*,\n\nSaya *${name}* butuh layanan:\n- Kendaraan: ${vehicle}\n- Layanan: ${service}\n- Lokasi/Keluhan: ${formattedNotes}\n\nMohon infonya Pak.`;

    onClose();
    openWhatsApp(msg);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full p-6 border-2 border-cobalt-900 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          className="absolute top-4 right-4 w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded bg-cobalt-700 text-butter-300 flex items-center justify-center text-lg">
            <i className="fa-solid fa-wrench"></i>
          </div>
          <div>
            <h3 className="heading-condensed font-black text-2xl text-slate-900">
              PANGGIL / HUBUNGI MEKANIK
            </h3>
            <p className="font-mono text-xs text-cobalt-700 font-bold">
              Toko Sarana Jaya • {MECHANIC_PHONE}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
          <div>
            <label className="block font-bold text-slate-800 mb-1">
              Nama Anda
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Rian"
              className="w-full px-3.5 py-2.5 rounded border-2 border-slate-200 focus:border-cobalt-700 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Jenis Kendaraan
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3 py-2.5 rounded border-2 border-slate-200 focus:border-cobalt-700 focus:outline-none bg-white cursor-pointer"
              >
                <option value="Motor Matic / Bebek">Motor Matic / Bebek</option>
                <option value="Motor Sport">Motor Sport</option>
                <option value="Mobil Penumpang / MPV">
                  Mobil Penumpang / MPV
                </option>
                <option value="Mobil Pick Up / Box">
                  Mobil Pick Up / Box
                </option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-800 mb-1">
                Layanan
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 rounded border-2 border-slate-200 focus:border-cobalt-700 focus:outline-none bg-white cursor-pointer"
              >
                <option value="Tambal Ban Tubeless">Tambal Ban Tubeless</option>
                <option value="Tambal Ban Dalam (Press)">
                  Tambal Ban Dalam (Press)
                </option>
                <option value="Ganti Ban Luar / Dalam">
                  Ganti Ban Luar / Dalam
                </option>
                <option value="Ganti Oli / Kampas Rem">
                  Ganti Oli / Kampas Rem
                </option>
                <option value="Panggilan Darurat di Jalan">
                  Panggilan Darurat di Jalan
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-800 mb-1">
              Patokan Lokasi / Keluhan
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Ban belakang bocor di dekat Jl. Cikoneng Girang PLN..."
              className="w-full px-3.5 py-2 rounded border-2 border-slate-200 focus:border-cobalt-700 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded bg-cobalt-700 hover:bg-cobalt-800 text-white font-condensed font-black uppercase tracking-wider text-lg flex items-center justify-center gap-2 transition cursor-pointer active:translate-y-0.5"
          >
            <i className="fa-brands fa-whatsapp"></i> Kirim ke WhatsApp{" "}
            {MECHANIC_PHONE}
          </button>
        </form>
      </div>
    </div>
  );
}

