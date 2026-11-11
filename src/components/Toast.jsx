import React from "react";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-ink text-white text-xs font-medium px-4 py-3 rounded-full shadow-lg flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <i className="fa-solid fa-circle-check text-emerald-400"></i>
      <span>{message}</span>
    </div>
  );
}
