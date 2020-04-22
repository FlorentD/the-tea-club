import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "With",
        },
      },
      fr: {
        translation: {
          welcome: "Avec",
        },
      },
    },
    lng: "fr",
    fallbackLng: "en",
  })
  .then(console.info);
