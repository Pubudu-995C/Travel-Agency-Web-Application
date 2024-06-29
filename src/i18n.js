import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import menuEN from "./locales/en/menu.json";
import menuDE from "./locales/de/menu.json";
import tendaysEN from "./locales/en/tendays.json";
import tendaysDE from "./locales/de/tendays.json";
import fourteendaysEN from "./locales/en/fourteendays.json";
import fourteendaysDE from "./locales/de/fourteendays.json";
import thirtydaysEN from "./locales/en/thirtydays.json";
import thirtydaysDE from "./locales/de/thirtydays.json";

const resources = {
  en: {
    menu: menuEN,
    translation: translationEN,
    tendays: tendaysEN,
    fourteendays: fourteendaysEN,
    thirtydays: thirtydaysEN,
  },
  de: {
    menu: menuDE,
    translation: translationDE,
    tendays: tendaysDE,
    fourteendays: fourteendaysDE,
    thirtydays: thirtydaysDE,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
