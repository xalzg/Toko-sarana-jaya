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

    const msg = `Halo Pak Mekanik *Toko Sarana Jaya Bengkel Tambal Ban*,\n\nSaya *${name}* membutuhkan layanan:\n- Kendaraan: ${vehicle}\n- Layanan: ${service}\n- Lokasi/Catatan: ${formattedNotes}\n\nMohon informasinya Pak.`;

    onClose();
    openWhatsApp(msg);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-8 border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface hover:bg-slate-200 text-ink flex items-center justify-center transition cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#255C7D] block mb-1">
          RESPON CEPAT JATIUWUNG
        </span>
        <h3 className="font-display font-semibold text-2xl text-ink">
          Hubungi Mekanik
        </h3>
        <p className="text-xs text-ink-muted mt-1 mb-6">
          Toko Sarana Jaya Bengkel Tambal Ban • <strong>{MECHANIC_PHONE}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block font-medium text-ink mb-1.5 text-xs">
              Nama Anda
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:bg-white focus:outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-ink mb-1.5 text-xs">
                Kendaraan
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:outline-none text-sm cursor-pointer"
              >
                <option value="Motor Matic / Bebek">Motor Matic / Bebek</option>
                <option value="Motor Sport">Motor Sport</option>
                <option value="Mobil Penumpang / MPV">Mobil Penumpang</option>
                <option value="Mobil Pick Up / Box">Mobil Operasional</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-ink mb-1.5 text-xs">
                Layanan
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:outline-none text-sm cursor-pointer"
              >
                <option value="Tambal Ban Tubeless">Tambal Tubeless</option>
                <option value="Tambal Ban Dalam (Press)">Press Ban Dalam</option>
                <option value="Ganti Ban Luar / Dalam">Ganti Ban Baru</option>
                <option value="Ganti Oli / Kampas Rem">Oli / Kampas Rem</option>
                <option value="Panggilan Darurat di Jalan">
                  Panggilan Darurat
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium text-ink mb-1.5 text-xs">
              Patokan Lokasi / Keluhan
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Ban belakang bocor di dekat Jl. Cikoneng Girang PLN..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:bg-white focus:outline-none text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-ink hover:bg-[#255C7D] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md cursor-pointer active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i> Kirim ke WhatsApp{" "}
            {MECHANIC_PHONE}
          </button>
        </form>
      </div>
    </div>
  );
}
