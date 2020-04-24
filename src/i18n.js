import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "With",
          map: {
            title: "Where to find me",
          },
        },
      },
      fr: {
        translation: {
          welcome: "Avec",
          map: {
            title: "Ou me trouver",
          },
        },
      },
    },
    lng: "fr",
    fallbackLng: "en",
  })
  .then(console.info);
