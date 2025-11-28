"use client";
import Link from "next/link";
import React from "react";

import { useLanguageStore } from "@/app/(features)/(general)/(localization)/_store";
const Logo = () => {
  const { language } = useLanguageStore();
  return (
    <Link href="/home" className="text-2xl font-semibold font-[rubicRegular]">
      {language === "ar" ? "تاسكيفاي" : "Taskify"}
    </Link>
  );
};

export default Logo;
