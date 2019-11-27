import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import GlobalLayout from '../components/GlobalLayout'

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`

  return (
    <GlobalLayout>
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h2 className="title is-size-4">{tagHeader}</h2>

              <div className="list">
                {posts.map(post => (
                  <Link
                    to={post.node.fields.slug}
                    key={post.node.fields.slug}
                    className="list-item"
                  >
                    {post.node.frontmatter.title}
                  </Link>
                ))}
              </div>

              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </GlobalLayout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
