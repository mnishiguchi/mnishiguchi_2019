import React from 'react'

import GlobalLayout from '../../layouts/GlobalLayout'
import BlogRoll from '../../components/BlogRoll'

export default function BlogIndexPage() {
  return (
    <GlobalLayout>
      <div className="my-4">
        <h1>Blog</h1>

        <BlogRoll />
      </div>
    </GlobalLayout>
  )
}
