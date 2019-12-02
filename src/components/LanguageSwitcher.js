import React from 'react'
import { useTranslation } from 'react-i18next'
// import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = ({ languageCode, style = {} }) => {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t, i18n } = useTranslation()

  // const isActive = i18n.language === languageCode

  // https://www.i18next.com/overview/api#getresource
  const nativeLanguageName = i18n.getResource(
    languageCode,
    'translation',
    `language.${languageCode}`
  )

  return (
    <span
      // className={isActive ? styles.activeLink : styles.link}
      onClick={() => i18n.changeLanguage(languageCode)}
      style={style}
    >
      {nativeLanguageName || t(`language.${languageCode}`)}
    </span>
  )
}

export default LanguageSwitcher
