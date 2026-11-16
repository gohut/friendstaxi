"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { BookingSection } from "@/components/BookingSection";
import { FleetSection } from "@/components/FleetSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ParallaxOrbs } from "@/components/ParallaxOrbs";

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) setFontsReady(true);
    });

    function handleMessage(event: MessageEvent) {
      const frame = document.getElementById("hero-frame") as HTMLIFrameElement | null;
      if (
        event.origin === window.location.origin &&
        event.source === frame?.contentWindow &&
        event.data?.type === "friends-track-hero-ready"
      ) {
        setHeroReady(true);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      cancelled = true;
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!heroReady || !fontsReady) return;
    const hideTimer = window.setTimeout(() => setLoadingVisible(false), 700);
    return () => window.clearTimeout(hideTimer);
  }, [heroReady, fontsReady]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A0F1D] overflow-x-hidden">
      {/* Background Floating Orbs (Disabled on mobile & reduced-motion, calm on desktop) */}
      <ParallaxOrbs />

      {/* 1. Header with clean navigation, phone links & language switch */}
      <Header />

      {/* Main Content with Required Sections */}
      <main className="flex-1 relative z-10">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Stats Row */}
        <StatsBar />

        {/* 4. Booking Section */}
        <BookingSection />

        {/* 5. Types of Cars (Fleet) Section */}
        <FleetSection />

        {/* 6. Testimonials Section */}
        <TestimonialsSection />

        {/* 7. About Us Section */}
        <AboutSection />
      </main>

      {/* 8. Footer Section */}
      <Footer />

      {/* Two fixed icon-only buttons (WhatsApp and Phone) at bottom-right */}
      <FloatingButtons />

      {loadingVisible && (
        <div
          aria-label="Loading Friends Track"
          aria-busy={!heroReady || !fontsReady}
          className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
            heroReady && fontsReady ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <iframe
            src="/friends-track-loading.html"
            title="Friends Track loading animation"
            className="h-full w-full border-0"
          />
        </div>
      )}
    </div>
  );
}
