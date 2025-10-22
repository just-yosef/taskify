"use client";
import i18next from "i18next";
import { useEffect, useState } from "react";

export function useDirection() {
  const [dir, setDir] = useState<"ltr" | "rtl">(
    i18next.language === "ar" ? "rtl" : "ltr"
  );
  useEffect(() => {
    console.log("change languge");
    setDir(i18next.language === "en" ? "rtl" : "ltr");
    // i18next.changeLanguage(i18next.language === "en" ? "ar" : "en");
  }, [i18next.language]);
  return { dir, setDir };
}
