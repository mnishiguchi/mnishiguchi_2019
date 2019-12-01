// Adopted from https://react.i18next.com/latest/using-with-hooks#configure-i-18-next
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: {
      en: {
        indexPage: {
          iEnjoy: 'I enjoy',
          etc: 'and more...',
        },
      },
      ja: {
        indexPage: {
          iEnjoy: '得意分野',
          etc: '等々',
        },
      },
    },
  })

export default i18next
