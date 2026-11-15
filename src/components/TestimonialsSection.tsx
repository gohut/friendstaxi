"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";

export function TestimonialsSection() {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        iframeRef.current?.contentWindow?.postMessage(
          { type: "testimonial-visibility", visible: isVisibleRef.current },
          "*",
        );
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: "friends-taxi-language", lang }, "*");
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      aria-label={lang === "ta" ? "வாடிக்கையாளர் கருத்துகள்" : "Customer testimonials"}
      className="w-full overflow-hidden bg-[#020F41]"
    >
      <iframe
        ref={iframeRef}
        src="/testimonials.html?v=6"
        title={lang === "ta" ? "Friends Taxi வாடிக்கையாளர் கருத்துகள்" : "Friends Taxi customer testimonials"}
        className="block h-[100svh] min-h-[700px] w-full border-0"
        loading="lazy"
        onLoad={() => {
          iframeRef.current?.contentWindow?.postMessage({ type: "friends-taxi-language", lang }, "*");
          iframeRef.current?.contentWindow?.postMessage(
            { type: "testimonial-visibility", visible: isVisibleRef.current },
            "*",
          );
        }}
      />
    </section>
  );
}
