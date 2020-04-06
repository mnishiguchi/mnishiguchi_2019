import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import GlobalLayout from '../layouts/index'
import BlogTagLink from '../components/BlogTagLink'
import AppContentContainer from '../components/AppContentContainer'

export function BlogPostContent({
  html,
  description,
  tags,
  title,
  helmet,
  date,
}) {
  return (
    <AppContentContainer>
      {helmet || ''}
      <header>
        <h1>{title}</h1>
        <span>{date}</span>
        {tags && tags.length ? (
          <p>
            {tags.map((tag) => (
              <BlogTagLink key={tag} tagName={tag} />
            ))}
          </p>
        ) : null}
      </header>
      <div>{description}</div>
      <section dangerouslySetInnerHTML={{ __html: html }} />
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
