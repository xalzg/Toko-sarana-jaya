import React, { useState, useEffect } from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("Motor Matic / Bebek");
  const [service, setService] = useState("Tambal Ban Tubeless");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling on iOS/Android when modal is open
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
  }, [isOpen, onClose]);

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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
    >
      <div
        className="bg-white rounded-[24px] sm:rounded-[28px] max-w-md w-full p-5 sm:p-8 border border-slate-100 shadow-2xl relative animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup form panggil mekanik"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-surface hover:bg-slate-200 text-ink flex items-center justify-center transition cursor-pointer focus-visible:ring-2 focus-visible:ring-[#255C7D]"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#255C7D] block mb-1">
          RESPON CEPAT JATIUWUNG
        </span>
        <h3
          id="modal-booking-title"
          className="font-display font-semibold text-xl sm:text-2xl text-ink"
        >
          Hubungi Mekanik
        </h3>
        <p className="text-xs text-ink-muted mt-1 mb-5 sm:mb-6">
          Toko Sarana Jaya Bengkel Tambal Ban • <strong>{MECHANIC_PHONE}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label
              htmlFor="book-name"
              className="block font-medium text-ink mb-1.5 text-xs"
            >
              Nama Anda
            </label>
            <input
              type="text"
              id="book-name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:ring-2 focus:ring-[#255C7D]/30 focus:bg-white focus:outline-none text-sm transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="book-vehicle"
                className="block font-medium text-ink mb-1.5 text-xs"
              >
                Kendaraan
              </label>
              <select
                id="book-vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:ring-2 focus:ring-[#255C7D]/30 focus:outline-none text-sm cursor-pointer transition"
              >
                <option value="Motor Matic / Bebek">Motor Matic / Bebek</option>
                <option value="Motor Sport">Motor Sport</option>
                <option value="Mobil Penumpang / MPV">Mobil Penumpang</option>
                <option value="Mobil Pick Up / Box">Mobil Operasional</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="book-service"
                className="block font-medium text-ink mb-1.5 text-xs"
              >
                Layanan
              </label>
              <select
                id="book-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:ring-2 focus:ring-[#255C7D]/30 focus:outline-none text-sm cursor-pointer transition"
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
            <label
              htmlFor="book-notes"
              className="block font-medium text-ink mb-1.5 text-xs"
            >
              Patokan Lokasi / Keluhan
            </label>
            <textarea
              id="book-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Ban belakang kena baut di depan PT..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface border border-slate-200 focus:border-[#255C7D] focus:ring-2 focus:ring-[#255C7D]/30 focus:bg-white focus:outline-none text-sm transition resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-ink hover:bg-[#255C7D] text-white text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
              <span>Kirim ke WhatsApp Mekanik</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
