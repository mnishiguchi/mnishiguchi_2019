import React from 'react'

import GlobalLayout from '../../components/GlobalLayout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <GlobalLayout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h1 className="title is-size-2 is-bold-light">Blog</h1>

                <BlogRoll />
              </div>
            </div>
          </div>
        </section>
      </GlobalLayout>
    )
  }
}
