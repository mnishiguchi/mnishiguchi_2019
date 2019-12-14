import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'reactstrap'

import GlobalLayout from '../components/GlobalLayout'

function NotFoundPage() {
  return (
    <GlobalLayout>
      <Helmet title={`Not Found`} />

      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </Container>
    </GlobalLayout>
  )
}
export default NotFoundPage
