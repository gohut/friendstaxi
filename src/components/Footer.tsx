"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { href: "#home", label: t.nav_home },
    { href: "#fleet", label: t.nav_fleet },
    { href: "#about", label: t.nav_about },
    { href: "#reviews", label: t.nav_testimonials },
    { href: "#booking", label: t.nav_booking },
  ];

  return (
    <footer id="contact" className="bg-[#080A55] text-white border-t-2 border-black relative z-10">
      
      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-3">
            <div className="relative h-12 w-48">
              <Image
                src="/logoimg.png"
                alt="Karur Friends Track Call Taxi"
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </div>
            <p className="max-w-xs text-xs sm:text-sm font-medium leading-relaxed text-slate-300">
              {t.footer_tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-extrabold text-sm uppercase text-[#FFCE00] tracking-wider border-b border-white/20 pb-2">
              {t.footer_links_title}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#FFCE00] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRightIcon className="w-3 h-3 text-slate-400" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address (Real data only) */}
          <div className="md:col-span-5 space-y-3.5">
            <h3 className="font-extrabold text-sm uppercase text-[#FFCE00] tracking-wider border-b border-white/20 pb-2">
              {t.footer_contact_title}
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <div>
                <span className="block text-[11px] uppercase text-slate-400 font-bold">
                  {t.footer_phone_label}
                </span>
                <div className="mt-1 flex flex-col gap-1 font-bold">
                  <a
                    href="tel:04324235000"
                    className="flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors text-white"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
                    <span>04324 - 235000 / 235300</span>
                  </a>
                  <a
                    href="tel:7339340800"
                    className="flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors text-[#FFCE00]"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#FFCE00]" />
                    <span>+91 7339340800 (24/7 Hotline)</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-[11px] uppercase text-slate-400 font-bold">
                  {t.footer_email_label}
                </span>
                <a
                  href="mailto:friendstrackcalltaxikarur@gmail.com"
                  className="mt-0.5 flex items-center gap-1.5 hover:text-[#FFCE00] transition-colors break-all"
                >
                  <MailIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>friendstrackcalltaxikarur@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase text-slate-400 font-bold">
                  {t.footer_address_label}
                </span>
                <p className="mt-0.5 text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
                  <MapPinIcon className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{t.footer_address}</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Credits */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-2 pr-16 sm:pr-0 pb-6 sm:pb-0">
          <div>{t.footer_copy}</div>
          <div>{t.footer_designed}</div>
        </div>

      </div>
    </footer>
  );
}
