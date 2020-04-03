import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import GlobalLayout from '../layouts/GlobalLayout'
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
    <div className="blogPost">
      {helmet || ''}

      <header>
        <h1>{title}</h1>
        <span>{date}</span>
        {tags && tags.length ? (
          <p>
            {tags.map((tag) => (
              <BlogTag key={tag} tagName={tag} />
            ))}
          </p>
        ) : null}
      </header>

      <div>{description}</div>

      <section dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
