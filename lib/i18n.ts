import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../public/locales/en/translation.json';
import deTranslation from '../public/locales/de/translation.json';

const resources = {
    en: {
        translation: enTranslation
    },
    de: {
        translation: deTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'de',
        fallbackLng: 'de',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;