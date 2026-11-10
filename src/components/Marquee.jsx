import React from "react";
import { marqueeItems } from "../data/data";

export default function Marquee() {
  const renderItemSet = (keyPrefix) => (
    <div
      key={keyPrefix}
      className="flex items-center gap-8 px-4 font-condensed font-extrabold text-lg sm:text-xl uppercase tracking-wider text-espresso-800"
    >
      {marqueeItems.map((item, index) => (
        <React.Fragment key={`${keyPrefix}-${index}`}>
          <span>{item}</span>
          <span className="w-2.5 h-2.5 bg-cobalt-700 rotate-45 inline-block"></span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="bg-butter-100 border-b-2 border-espresso-800/20 py-3 overflow-hidden select-none">
      <div className="marquee-track items-center">
        {renderItemSet("set1")}
        {renderItemSet("set2")}
      </div>
    </div>
  );
}

