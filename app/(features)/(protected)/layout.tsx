"use client";
import { ReactNode, useEffect } from "react";
import { useLanguageStore } from "../(general)/(localization)/_store";
export default function layout({ children }: { children: ReactNode }) {
  const { language } = useLanguageStore();
  useEffect(() => {
    document.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  return <>{children}</>;
}
