"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang, Strings, translations } from "@/lib/translations";

interface LangContextType {
  lang: Lang;
  t: Strings;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Tamil is the primary language as required
  const [lang, setLangState] = useState<Lang>("ta");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("friends_taxi_lang") as Lang | null;
      if (saved === "ta" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
      } else {
        setLangState("ta");
        document.documentElement.lang = "ta";
      }
    } catch {
      // ignore storage restriction
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem("friends_taxi_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const next: Lang = lang === "ta" ? "en" : "ta";
    setLang(next);
  };

  const currentStrings = translations[lang] || translations.ta;

  return (
    <LangContext.Provider
      value={{
        lang,
        t: currentStrings,
        toggleLang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
