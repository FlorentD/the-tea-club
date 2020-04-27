import i18n from "i18next";
import flow from "lodash/fp/flow";
import mapValues from "lodash/fp/mapValues";
import reduce from "lodash/fp/reduce";
import translations from "./translations";
import { initReactI18next } from "react-i18next";

const explode = (data, index = 0) => {
  const firstKey = Object.keys(data)[0];
  const splitKeys = firstKey.split(".");
  return {
    [splitKeys[index]]:
      index < splitKeys.length - 1 ? explode(data, index + 1) : data[firstKey],
  };
};

const resources = (languages) => {
  return languages.reduce((acc, lang) => {
    acc[lang] = {
      translation: flow(
        mapValues(lang),
        reduce.convert({ cap: false })((acc, value, key) => {
          return { ...acc, ...explode({ [key]: value }) };
        }, {})
      )(translations),
    };
    return acc;
  }, {});
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources(["fr", "en"]),
    lng: "fr",
    fallbackLng: "en",
  })
  .then(console.info);
