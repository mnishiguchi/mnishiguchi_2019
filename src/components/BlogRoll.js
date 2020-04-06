import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import BlogTagLink from './BlogTagLink'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1.5),
    textDecoration: 'none',
  },
  date: {
    marginBottom: theme.spacing(0.5),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: theme.spacing(0.5),
      marginBottom: theme.spacing(1.5),
    },
  },
}))

function BlogRoll({ data: { allMarkdownRemark } }) {
  const posts = allMarkdownRemark.edges
  const classNames = useStyles()

  return (
    <List>
      {posts &&
        posts.map(({ node: { id, frontmatter, fields, excerpt } }) => (
          <ListItem key={fields.slug}>
            <ListItemText
              primary={
                <Typography
                  component={Link}
                  to={fields.slug}
                  variant="h4"
                  className={classNames.title}
                  color="textPrimary"
                >
                  {frontmatter.title}
                </Typography>
              }
              secondary={
                <>
                  <div className={classNames.date}>{frontmatter.date}</div>
                  <div className={classNames.tags}>
                    {frontmatter.tags.map((tagName) => (
                      <BlogTagLink
                        tagName={tagName}
                        key={tagName}
                        size="small"
                      />
                    ))}
                  </div>

                  <div>{frontmatter.description || excerpt}</div>
                </>
              }
            />
          </ListItem>
        ))}
    </List>
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
