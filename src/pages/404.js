import React from 'react'
import Helmet from 'react-helmet'

import GlobalLayout from '../layouts/index'

function NotFoundPage() {
  return (
    <GlobalLayout>
      <Helmet title={`Not Found`} />

      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </GlobalLayout>
  )
}
export default NotFoundPage
