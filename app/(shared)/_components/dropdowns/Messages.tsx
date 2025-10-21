"use client";
import React from "react";
import { translateKeys } from "../../helpers/translateWords";
import arJson from "@/app/(lang)/ar.json";
import { useTranslation } from "react-i18next";
import { messages } from "@/app/(features)/(protected)/(messages)/constants";
const Messages = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="border-b-solid sticky -top-0 left-0 z-[999] bg-white p-3 py-1 font-[rubicMedium] border-b-teal-500 border-2 border-transparent mb-3 pb-2">
        {t(translateKeys<typeof arJson.general>("general.", "allMessages"))}
        <span className="float-end">({messages.length})</span>
      </h3>
    </>
  );
};

export default Messages;
