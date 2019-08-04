import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationRU from './ru.json';
import translationBY from './by.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  by: {
    translation: translationBY,
  },
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
