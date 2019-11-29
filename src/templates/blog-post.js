import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import GlobalLayout from '../components/GlobalLayout'
import Content, { HTMLContent } from '../components/Content'
import BlogTag from '../components/BlogTag'

export const BlogPostContent = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}

      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <span className="subtitle is-size-5 is-block">{date}</span>

            <p>{description}</p>

            <PostContent content={content} />

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <div className="content">
                  {tags.map(tag => (
                    <BlogTag key={tag} tagName={tag} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostContent.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <GlobalLayout>
      <BlogPostContent
        content={html}
        contentComponent={HTMLContent}
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
