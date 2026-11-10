import React from "react";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-cobalt-950 text-white text-xs font-bold px-4 py-3 rounded border-2 border-butter-300 shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <i className="fa-solid fa-check text-butter-300 text-sm"></i>
      <span>{message}</span>
    </div>
  );
}
