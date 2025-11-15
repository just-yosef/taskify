"use client";
import React from "react";
import { messages } from "@/app/(features)/(protected)/(messages)/constants";
// import { useTranslations } from "next-intl";
const Messages = () => {
  // const t = useTranslations("nav");
  return (
    <>
      <h3 className="border-b-solid sticky -top-0 left-0 z-[999] bg-white p-3 py-1 font-[rubicMedium] border-b-teal-500 border-2 border-transparent mb-3 pb-2">
        Messages
        <span className="float-end">({messages.length})</span>
      </h3>
    </>
  );
};

export default Messages;
