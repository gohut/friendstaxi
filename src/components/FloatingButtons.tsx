"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import { WhatsAppIcon, PhoneIcon } from "@/components/Icons";

export function FloatingButtons() {
  const { t } = useLang();

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 select-none pointer-events-auto"
      role="region"
      aria-label="Direct Contact Actions"
    >
      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/917339340800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.btn_whatsapp_aria}
        title={t.btn_whatsapp_aria}
        className="w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>

      {/* Phone Call Action Button */}
      <a
        href="tel:+917339340800"
        aria-label={t.btn_phone_aria}
        title={t.btn_phone_aria}
        className="w-12 h-12 sm:w-13 sm:h-13 bg-[#FFCE00] text-black border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] focus:outline-none focus:ring-2 focus:ring-black"
      >
        <PhoneIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
      </a>
    </div>
  );
}
