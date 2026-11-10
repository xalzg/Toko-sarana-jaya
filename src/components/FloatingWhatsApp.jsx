import React from "react";
import { MECHANIC_PHONE } from "../data/data";
import { openWhatsApp } from "../utils/helpers";

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() =>
        openWhatsApp(
          `Halo Mekanik Toko Sarana Jaya (${MECHANIC_PHONE}), saya butuh bantuan tambal ban / bengkel.`
        )
      }
      title={`WhatsApp Mekanik ${MECHANIC_PHONE}`}
      aria-label="Chat WhatsApp Mekanik"
      className="fixed bottom-5 left-5 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-xl flex items-center justify-center text-2xl sm:text-3xl border-2 border-white transition transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </button>
  );
}

