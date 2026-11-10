import React from "react";
import { statsData } from "../data/data";

export default function Stats() {
  return (
    <section className="relative z-30 bg-[#EEF4FF] border-b-2 border-cobalt-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-2 divide-cobalt-100 bg-white rounded-lg p-4 sm:p-6 border-2 border-cobalt-100 shadow-sm">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3.5 py-3 md:py-1 px-3"
            >
              <div
                className={`w-11 h-11 rounded border flex items-center justify-center text-xl shrink-0 ${item.bgIcon}`}
              >
                <i className={item.icon}></i>
              </div>
              <div>
                <div className="heading-condensed font-black text-3xl sm:text-4xl text-cobalt-950">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 font-bold uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

