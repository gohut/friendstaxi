"use client";

import React from "react";
import { useLang } from "@/context/LangContext";

export function StatsBar() {
  const { t } = useLang();

  const stats = [
    { num: t.stat1_num, label: t.stat1_label },
    { num: t.stat2_num, label: t.stat2_label },
    { num: t.stat3_num, label: t.stat3_label },
    { num: t.stat4_num, label: t.stat4_label },
  ];

  return (
    <section id="stats" aria-label="Company Statistics" className="relative z-10 -mt-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="neo-card p-4 sm:p-5 text-center bg-white"
          >
            <div className="font-extrabold text-2xl sm:text-4xl text-[#0A45B8] tracking-tight mb-1">
              {s.num}
            </div>
            <div className="font-bold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
