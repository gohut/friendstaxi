"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight scroll parallax hook
 * - Returns 0 on mobile (< 768px) to eliminate mobile jitter
 * - Returns 0 if prefers-reduced-motion is true
 * - Throttled via requestAnimationFrame with passive scroll listener
 */
export function useParallax(speed: number = 0.1) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Disable on mobile or if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      setOffsetY(0);
      return;
    }

    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          setOffsetY(lastScrollY * speed);
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return offsetY;
}
