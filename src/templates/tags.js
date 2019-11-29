import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import GlobalLayout from '../components/GlobalLayout'

import styles from './tags.module.scss'

const TagRoute = ({
  data: { site, allMarkdownRemark },
  pageContext: { tag },
}) => {
  const posts = allMarkdownRemark.edges
  const title = site.siteMetadata.title
  const totalCount = allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} ${
    totalCount === 1 ? 'post' : 'posts'
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
                {posts.map(({ node: { fields, frontmatter } }) => (
                  <Link
                    to={fields.slug}
                    key={fields.slug}
                    className={`list-item ${styles.listItem}`}
                  >
                    {frontmatter.title}
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
