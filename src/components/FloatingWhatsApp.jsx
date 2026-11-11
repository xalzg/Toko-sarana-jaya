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
      title={`Chat WhatsApp ${MECHANIC_PHONE}`}
      aria-label={`Chat WhatsApp ${MECHANIC_PHONE}`}
      className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-ink hover:bg-[#255C7D] text-white shadow-portrait flex items-center justify-center text-2xl transition hover:scale-105 border-2 border-white cursor-pointer active:scale-95 focus-visible:ring-4 focus-visible:ring-[#255C7D]"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </button>
  );
}
