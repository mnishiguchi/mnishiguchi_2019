import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import GlobalLayout from '../../components/GlobalLayout'
import BlogTag from '../../components/BlogTag'

function TagsPage({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <GlobalLayout>
      <Helmet title={`Tags | ${title}`} />

      <Container className="my-4">
        <h1>Tags</h1>
        <div className="h3">
          {group.map(tag => (
            <BlogTag
              key={tag.fieldValue}
              tagName={tag.fieldValue}
              tagCount={tag.totalCount}
            />
          ))}
        </div>
      </Container>
    </GlobalLayout>
  )
}

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
