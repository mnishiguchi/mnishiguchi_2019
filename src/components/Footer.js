import React from 'react'
import { useTranslation } from 'react-i18next'
import BackToTopLink from './BackToTopLink'
import LanguageSwitcher from './LanguageSwitcher'

const Footer = () => {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t, i18n } = useTranslation()

  return (
    <footer className="footer">
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>
          ©{new Date().getFullYear()} {t('author.name')}
        </span>
        <BackToTopLink>⬆</BackToTopLink>
      </div>

      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <div>Language: {i18n.language || `en`}</div>
        <div>
          <LanguageSwitcher languageCode="en" />
          {` | `}
          <LanguageSwitcher languageCode="ja" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
