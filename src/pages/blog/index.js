import React from 'react'
import { useTranslation } from 'react-i18next'

import GlobalLayout from '../../layouts/index'
import BlogRoll from '../../components/BlogRoll'

export default function BlogIndexPage() {
  const { t } = useTranslation()
  return (
    <GlobalLayout>
      <div className="my-4">
        <h1>{t(`pages.blog.title`)}</h1>

        <BlogRoll />
      </div>
    </GlobalLayout>
  )
}
