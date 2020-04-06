import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import GlobalLayout from '../layouts/index'
import BlogTagLink from '../components/BlogTagLink'
import AppContentContainer from '../components/AppContentContainer'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1.5),
  },
  date: {
    marginBottom: theme.spacing(1.5),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: theme.spacing(0.5),
    },
  },
  header: {
    marginBottom: theme.spacing(6.0),
  },
  description: {
    marginBottom: theme.spacing(2.0),
  },
  body: {
    marginBottom: theme.spacing(0.5),
  },
}))

export function BlogPostContent({
  html,
  description,
  tags,
  title,
  helmet,
  date,
}) {
  const classNames = useStyles()

  return (
    <AppContentContainer>
      {helmet || ''}
      <header className={classNames.header}>
        <Typography
          component="h1"
          variant="h4"
          className={classNames.title}
          color="textPrimary"
        >
          {title}
        </Typography>
        <div className={classNames.date}>{date}</div>
        {tags && tags.length ? (
          <div className={classNames.tags}>
            {tags.map((tag) => (
              <BlogTagLink key={tag} tagName={tag} size="small" />
            ))}
          </div>
        ) : null}
      </header>
      <div className={classNames.description}>{description}</div>
      <div
        className={classNames.body}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </AppContentContainer>
  )
}

BlogPostContent.propTypes = {
  html: PropTypes.node.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

function BlogPost({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) {
  return (
    <GlobalLayout>
      <BlogPostContent
        html={html}
        description={frontmatter.description}
        date={frontmatter.date}
        tags={frontmatter.tags}
        title={frontmatter.title}
        helmet={
          <Helmet
            title={frontmatter.title}
            meta={[{ name: 'description', content: frontmatter.description }]}
          />
        }
      />
    </GlobalLayout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
