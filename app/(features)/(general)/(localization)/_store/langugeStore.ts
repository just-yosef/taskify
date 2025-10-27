// store/language-store.ts
import { create } from "zustand";

type Language = "en" | "ar";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language:
    (typeof window !== "undefined" &&
      (localStorage.getItem("language") as Language)) ||
    "en",

  setLanguage: (lang) => {
    set({ language: lang });
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  },

  toggleLanguage: () => {
    set((state) => {
      const newLang = state.language === "en" ? "ar" : "en";
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLang);
      }
      return { language: newLang };
    });
  },
}));
