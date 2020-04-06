import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

import BlogTagLink from './BlogTagLink'

const useStyles = makeStyles((theme) => ({
  blogTagLinkList: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

function BlogRoll({ data: { allMarkdownRemark } }) {
  const posts = allMarkdownRemark.edges
  const classNames = useStyles()

  return (
    <div>
      {posts &&
        posts.map(({ node: { id, frontmatter, fields, excerpt } }) => (
          <div sm="12" md="6" lg="4" key={fields.slug}>
            <div className="mb-2">
              <div>
                <Link className="card-title h4 text-dark" to={fields.slug}>
                  {frontmatter.title}
                </Link>
                <br />
                <span className="card-text">
                  <span className="text-muted">{frontmatter.date}</span>
                  <br />
                  <div className={classNames.blogTagLinkList}>
                    {frontmatter.tags.map((tagName) => (
                      <BlogTagLink
                        tagName={tagName}
                        key={tagName}
                        size="small"
                      />
                    ))}
                  </div>
                </span>
              </div>

              <div style={{ overflowX: `auto`, wordWrap: `break-word` }}>
                {frontmatter.description || excerpt}
                <br />
                <br />
                <Link className="button" to={fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
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
