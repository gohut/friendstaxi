"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import {
  ClockIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "@/components/Icons";

export function AboutSection() {
  const { t } = useLang();

  const keyPoints = [
    { text: t.about_feat1, icon: <ClockIcon className="w-5 h-5 text-[#0A45B8] shrink-0" /> },
    { text: t.about_feat2, icon: <ShieldCheckIcon className="w-5 h-5 text-[#0A45B8] shrink-0" /> },
    { text: t.about_feat3, icon: <CheckIcon className="w-5 h-5 text-[#0A45B8] shrink-0" /> },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="hidden lg:block lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/aboutus.png"
                alt="Friends Track driver welcoming a family for their taxi journey"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          {/* Right Column: Clean Text & Strict Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div>
              <span className="neo-badge bg-[#080A55] text-white mb-2.5">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
                <span>{t.about_badge}</span>
              </span>
              <div className="relative mt-3 mb-4 aspect-[16/10] w-full lg:hidden">
                <Image
                  src="/aboutus.png"
                  alt="Friends Track driver welcoming a family for their taxi journey"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0F1D] tracking-tight uppercase">
                {t.about_title}
              </h2>
            </div>

            <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
              {t.about_text}
            </p>

            {/* 3 Core Value Points from Old Site */}
            <div className="space-y-2.5 pt-1">
              {keyPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F8FAFC] border border-black flex items-center gap-3 shadow-[2px_2px_0px_#000]"
                >
                  {pt.icon}
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {pt.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
