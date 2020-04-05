import React from 'react'
import { useTranslation } from 'react-i18next'

import GlobalLayout from '../../layouts/index'
import BlogRoll from '../../components/BlogRoll'
import AppContentContainer from '../../components/AppContentContainer'

export default function BlogIndexPage() {
  const { t } = useTranslation()
  return (
    <GlobalLayout>
      <AppContentContainer>
        <h1>{t(`pages.blog.title`)}</h1>
        <BlogRoll />
      </AppContentContainer>
    </GlobalLayout>
  )
}
