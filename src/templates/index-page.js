import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Media from 'react-media'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image' // https://www.gatsbyjs.org/packages/gatsby-image/

import GlobalLayout from '../components/GlobalLayout'
import StackOverflowFlair from '../components/StackOverflowFlair'
import BrandIconSlideshow from '../components/BrandIconSlideshow'

import styles from './index-page.module.scss'

const IndexPageSections = ({ children }) => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className={`container ${styles.indexContainer}`}>
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-narrow has-text-centered">
          <div className="content">
            <React.Fragment>{children}</React.Fragment>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const IndexPageContent = ({
  title,
  subtitle,
  location,
  gmapUrl,
  mainImage,
}) => (
  <>
    <header className={`hero ${styles.hero}`}>
      <div className={`container ${styles.indexContainer}`}>
        <div className={`hero-body ${styles.heroBody}`}>
          <h1 className={`title ${styles.heroTitle}`}>{title}</h1>
          <h2 className={`subtitle ${styles.heroSubtitle}`}>
            {subtitle}
            <Media query={{ maxWidth: styles.tablet }}>
              {matches => (matches ? <br /> : <span>{` · `}</span>)}
            </Media>
            <OutboundLink href={gmapUrl}>{location}</OutboundLink>
          </h2>
        </div>
      </div>
    </header>

    <IndexPageSections>
      <Img fluid={mainImage.childImageSharp.fluid} />
      <br />
      <StackOverflowFlair theme="clean" size="300px" />
    </IndexPageSections>

    <IndexPageSections>
      <div style={{ width: '100vw' }}>
        I enjoy
        <BrandIconSlideshow />
        and more...
      </div>
    </IndexPageSections>
  </>
)

IndexPageContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
  gmapUrl: PropTypes.string,
  mainImage: PropTypes.object,
}

const IndexPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <GlobalLayout>
    <IndexPageContent {...frontmatter} />
  </GlobalLayout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageContent {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subtitle
        location
        gmapUrl
        mainImage {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
