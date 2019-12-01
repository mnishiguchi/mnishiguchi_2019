import React from 'react'
import { useTranslation } from 'react-i18next'
import BackToTopLink from './BackToTopLink'

const Footer = () => {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { i18n } = useTranslation()

  return (
    <footer className="footer">
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>©{new Date().getFullYear()} Masatoshi Nishiguchi</span>
        <BackToTopLink>⬆</BackToTopLink>
      </div>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>Language: {i18n.language || `en`}</div>
        <div>
          <span onClick={() => i18n.changeLanguage('en')}>EN</span>
          {` | `}
          <span onClick={() => i18n.changeLanguage('ja')}>JA</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
