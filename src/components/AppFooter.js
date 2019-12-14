import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'reactstrap'

import BackToTopLink from './BackToTopLink'
import LanguageSwitcher from './LanguageSwitcher'

function Footer() {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t, i18n } = useTranslation()

  return (
    <footer className="py-5 bg-primary text-white">
      <Container>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            ©{new Date().getFullYear()} {t('author.name')}
          </span>
          <BackToTopLink>⬆</BackToTopLink>
        </section>

        <section
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
        </section>
      </Container>
    </footer>
  )
}

export default Footer
