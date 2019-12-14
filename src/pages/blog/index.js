import React from 'react'
import { Container } from 'reactstrap'

import GlobalLayout from '../../components/GlobalLayout'
import BlogRoll from '../../components/BlogRoll'

export default function BlogIndexPage() {
  return (
    <GlobalLayout>
      <Container className="my-4">
        <h1>Blog</h1>

        <BlogRoll />
      </Container>
    </GlobalLayout>
  )
}
