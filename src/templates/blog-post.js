import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container, Alert } from 'reactstrap'

import GlobalLayout from '../components/GlobalLayout'
import BlogTag from '../components/BlogTag'

export function BlogPostContent({
  html,
  description,
  tags,
  title,
  helmet,
  date,
}) {
  return (
    <Container className="my-4 blogPost">
      {helmet || ''}

      <header>
        <h1>{title}</h1>
        <span className="text-muted">{date}</span>
        {tags && tags.length ? (
          <p>
            {tags.map(tag => (
              <BlogTag key={tag} tagName={tag} />
            ))}
          </p>
        ) : null}
      </header>

      <Alert color="light" className="lead py-2">
        {description}
      </Alert>

      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
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
          <Helmet titleTemplate="%s | Blog">
            <title>{frontmatter.title}</title>
            <meta name="description" content={frontmatter.description} />
          </Helmet>
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
