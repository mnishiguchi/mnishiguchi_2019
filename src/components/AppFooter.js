import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t, i18n } = useTranslation()

  return (
    <footer className="py-5 bg-primary text-white">
      <p>
        ©{new Date().getFullYear()} {t('author.name')}
      </p>
    </footer>
  )
}

export default Footer
