import React from 'react'
import Helmet from 'react-helmet'

import GlobalLayout from '../components/GlobalLayout'

const NotFoundPage = () => (
  <GlobalLayout>
    <section className="section">
      <Helmet title={`Not Found`} />

      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title">NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist...</p>
          </div>
        </div>
      </div>
    </section>
  </GlobalLayout>
)

export default NotFoundPage
