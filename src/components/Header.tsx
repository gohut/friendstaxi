"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import {
  PhoneIcon,
  GlobeIcon,
  MailIcon,
  ClockIcon,
} from "@/components/Icons";

export function Header() {
  const { lang, t, toggleLang } = useLang();
  // Concise navigation items that stay cleanly on one line in both Tamil and English
  const navLinks = [
    { href: "#fleet", label: t.nav_fleet },
    { href: "#about", label: t.nav_about },
    { href: "#reviews", label: t.nav_testimonials },
    { href: "#contact", label: t.nav_contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b-2 border-black shadow-sm">
      {/* Top Utility Bar (Desktop only, spacious, restrained) */}
      <div className="hidden lg:block bg-[#080A55] text-white text-xs border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-200">
              <ClockIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{t.topbar_service_note}</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-200">
            <a
              href="tel:04324235000"
              className="flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{t.topbar_landline_label}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href="tel:7339340800"
              className="flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors font-bold text-white"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>{t.topbar_mobile_label}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href="mailto:friendstrackcalltaxikarur@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
              <span>friendstrackcalltaxikarur@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Brand Logo from old site */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Friends Track Call Taxi"
        >
          <div className="relative w-40 sm:w-48 h-12 sm:h-14">
            <Image
              src="/logoimg.png"
              alt="Karur Friends Track Call Taxi"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 160px, 200px"
            />
          </div>
        </a>

        {/* Desktop Nav Links: short, elegant, never wrap */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-3"
          aria-label="Main Navigation"
        >
          <a
            href="#home"
            className="px-3 py-2 text-sm font-bold text-[#0A0F1D] hover:text-[#0A45B8] hover:bg-slate-100 rounded transition-colors whitespace-nowrap"
          >
            {t.nav_home}
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold text-[#0A0F1D] hover:text-[#0A45B8] hover:bg-slate-100 rounded transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Language Switcher & Book Now CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            type="button"
            className="neo-btn bg-white hover:bg-slate-100 text-black px-3 py-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-2 border-black"
            aria-label={t.lang_toggle_aria}
            title={t.lang_toggle_aria}
          >
            <GlobeIcon className="w-4 h-4 text-[#0A45B8]" />
            <span className="font-extrabold">{t.lang_toggle}</span>
          </button>

          {/* Book Now Button (Desktop & Tablet >= 640px) */}
          <div className="hidden sm:block">
            <a
              href="#booking"
              className="neo-btn neo-btn-yellow text-xs sm:text-sm font-extrabold whitespace-nowrap"
            >
              {t.nav_booking}
            </a>
          </div>

        </div>
      </div>

    </header>
  );
}
