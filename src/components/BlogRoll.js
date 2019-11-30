import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

import styles from './BlogRoll.module.scss'

const BlogRoll = ({ data: { allMarkdownRemark } }) => {
  const posts = allMarkdownRemark.edges

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: { id, frontmatter, fields, excerpt } }) => (
          <div className="is-parent column is-6" key={id}>
            <article
              className={`tile is-child box notification ${
                frontmatter.featuredpost ? styles.isFeatured : ''
              }`}
            >
              <header className={styles.header}>
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4 is-block"
                    to={fields.slug}
                  >
                    {frontmatter.title}
                  </Link>
                  <span className="subtitle is-size-5 is-block">
                    {frontmatter.date}
                  </span>
                </p>
              </header>

              <p style={{ overflowX: `auto`, wordWrap: `break-word` }}>
                {frontmatter.description || excerpt}

                <span className="subtitle is-size-5 is-block">
                  {frontmatter.tags.map(tagName => (
                    <Link
                      className={`tag ${styles.tagName}`}
                      to={`/tags/${kebabCase(tagName)}/`}
                    >
                      {tagName}
                    </Link>
                  ))}
                </span>

                <Link className="button" to={fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
