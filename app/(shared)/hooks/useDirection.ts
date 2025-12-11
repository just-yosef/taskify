"use client";
import i18next from "i18next";
import { useEffect, useState } from "react";

export function useDirection() {
  const [dir, setDir] = useState<"ltr" | "rtl">(
    i18next.language === "ar" ? "rtl" : "ltr"
  );
  useEffect(() => setDir(i18next.language === "en" ? "rtl" : "ltr"), [i18next.language]);
  return { dir, setDir };
}
