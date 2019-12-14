import React from 'react'
import { useTranslation } from 'react-i18next'
// import css from './LanguageSwitcher.module.scss'

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
      // className={isActive ? css.activeLink : css.link}
      onClick={() => i18n.changeLanguage(languageCode)}
      onKeyDown={() => {
        /* warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener */
      }}
      style={style}
      role="button"
      tabIndex="0"
    >
      {nativeLanguageName || t(`language.${languageCode}`)}
    </span>
  )
}

export default LanguageSwitcher
