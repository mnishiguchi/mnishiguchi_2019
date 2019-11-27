import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import GlobalLayout from '../../components/GlobalLayout'
import BlogTag from '../../components/BlogTag'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <GlobalLayout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <div className="content">
              {group.map(tag => (
                <BlogTag
                  key={tag.fieldValue}
                  tagName={tag.fieldValue}
                  tagCount={tag.totalCount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </GlobalLayout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`