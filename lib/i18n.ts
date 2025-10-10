import i18next from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: { hello: "aaaa" },
    },
    ar: {
        translation: { hello: "bbb" }
    },
};
i18next.init({
    lng: 'en',
    resources: resources,
    fallbackLng: "ar"
});

i18next.use(initReactI18next).init({
    resources,
    lng: "ar",
});

