"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";

export function FleetSection() {
  const { lang } = useLang();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: "friends-taxi-language", lang }, "*");
  }, [lang]);

  return (
    <section id="fleet" aria-label={lang === "ta" ? "எங்கள் வாகனங்கள்" : "Vehicle fleet"} className="w-full overflow-hidden bg-[#FBD404]">
      <iframe
        ref={iframeRef}
        src="/vehicle-slider.html?v=10"
        title={lang === "ta" ? "Friends Taxi வாகனங்கள்" : "Friends Taxi vehicle fleet"}
        className="block h-[620px] w-full border-0 sm:h-[900px] lg:h-[980px]"
        loading="lazy"
        onLoad={() => iframeRef.current?.contentWindow?.postMessage({ type: "friends-taxi-language", lang }, "*")}
      />
    </section>
  );
}
