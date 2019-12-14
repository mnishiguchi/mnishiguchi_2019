import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'

import GlobalLayout from '../components/GlobalLayout'

function TagPage({ data: { site, allMarkdownRemark }, pageContext: { tag } }) {
  const posts = allMarkdownRemark.edges
  const title = site.siteMetadata.title
  const totalCount = allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} ${
    totalCount === 1 ? 'post' : 'posts'
  } tagged with “${tag}”`

  return (
    <GlobalLayout>
      <Helmet title={`${tag} | ${title}`} />

      <Container className="my-4">
        <h1 className="h3">{tagHeader}</h1>

        <ListGroup>
          {posts.map(({ node: { fields, frontmatter } }) => (
            <ListGroupItem>
              <Link to={fields.slug} key={fields.slug} className="text-dark">
                {frontmatter.title}
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>

        <br />
        <br />
        <Link to="/tags/" className="btn btn-outline-primary">
          Browse all tags
        </Link>
      </Container>
    </GlobalLayout>
  )
}

export default TagPage

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
