"use client";

import React, { useEffect, useState } from "react";

export function ParallaxOrbs() {
  const [isMobile, setIsMobile] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    checkViewport();

    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);
    window.addEventListener("resize", checkViewport, { passive: true });

    // Calm subtle mouse response on desktop only
    if (window.innerWidth >= 768 && !mq.matches) {
      let rafId: number | null = null;
      const onMouseMove = (e: MouseEvent) => {
        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            const normX = (e.clientX / window.innerWidth - 0.5) * 20;
            const normY = (e.clientY / window.innerHeight - 0.5) * 20;
            setCoords({ x: normX, y: normY });
            rafId = null;
          });
        }
      };
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      return () => {
        mq.removeEventListener("change", onMotionChange);
        window.removeEventListener("resize", checkViewport);
        window.removeEventListener("mousemove", onMouseMove);
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    return () => {
      mq.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  // On small screens, hide floating orbs completely for peak mobile performance
  if (isMobile) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Orb 1: Subtle Brand Blue */}
      <div
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0A45B8]/10 blur-3xl ${
          reducedMotion ? "" : "animate-orb-slow-1"
        }`}
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
                transition: "transform 0.4s ease-out",
              }
        }
      />

      {/* Orb 2: Subtle Taxi Yellow */}
      <div
        className={`absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#FFCE00]/12 blur-3xl ${
          reducedMotion ? "" : "animate-orb-slow-2"
        }`}
        style={
          reducedMotion
            ? undefined
            : {
                transform: `translate3d(${-coords.x}px, ${-coords.y}px, 0)`,
                transition: "transform 0.4s ease-out",
              }
        }
      />
    </div>
  );
}
