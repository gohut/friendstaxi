"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import { ClockIcon, ShieldCheckIcon, CheckIcon, CarIcon } from "@/components/Icons";

export function TrustStrip() {
  const { t } = useLang();

  const facts = [
    { icon: <ShieldCheckIcon className="w-4 h-4 text-[#FFCE00] shrink-0" />, text: t.trust_est },
    { icon: <ClockIcon className="w-4 h-4 text-[#FFCE00] shrink-0" />, text: t.trust_service },
    { icon: <CarIcon className="w-4 h-4 text-[#FFCE00] shrink-0" />, text: t.trust_coverage },
    { icon: <CheckIcon className="w-4 h-4 text-[#FFCE00] shrink-0" />, text: t.trust_pricing },
    { icon: <ShieldCheckIcon className="w-4 h-4 text-[#FFCE00] shrink-0" />, text: t.trust_maintenance },
  ];

  return (
    <section
      aria-label="Trust Highlights"
      className="bg-[#080A55] text-white border-b-2 border-black py-2.5 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-y-2 gap-x-6 text-xs sm:text-sm font-bold">
        {facts.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {item.icon}
            <span className="text-slate-100 whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
