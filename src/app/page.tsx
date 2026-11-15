"use client";

import React from "react";
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
    </div>
  );
}
