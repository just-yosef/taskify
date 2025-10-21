"use client";

import { useTranslation } from "react-i18next";

interface Props {
  text: string;
  translationKey?: string;
}
const TitleSection = ({ text, translationKey }: Props) => {
  const { t } = useTranslation();
  return (
    <h4 className="text-xl font-[rubicMedium] text-blue bg-sky-soft mb-3 mt-2 p-4 leading-[1]">
      ✨ {translationKey ? t("general." + translationKey) : text} ✨
    </h4>
  );
};

export default TitleSection;
