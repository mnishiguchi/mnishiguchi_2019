import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../static/locales/en/translation'
import ja from '../static/locales/ja/translation'

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV !== 'production',
    resources: { en: { translation: en }, ja: { translation: ja } },
    lang: 'ja',
    whitelist: ['ja', 'en'],
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false, // https://github.com/i18next/react-i18next/issues/766
    },
    detection: {
      order: ['path'],
      caches: [],
    },
  })

export default i18next
