import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "@/app/(lang)/ar.json";
import en from "@/app/(lang)/en.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18next.init({
  lng: "en",
  resources: resources,
  fallbackLng: "ar",
});

i18next.use(initReactI18next).init({
  resources,
  lng: "ar",
});
