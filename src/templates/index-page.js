import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Media from 'react-media'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import GlobalLayout from '../components/GlobalLayout'
import StackOverflowFlair from '../components/StackOverflowFlair'
import BrandIconList from '../components/BrandIconList'
import masaChinatown from '../img/masa-chinatown.png'

import styles from './index-page.module.scss'

export const IndexPageContent = ({ title, subtitle, location, gmapUrl }) => (
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

    <section className="section" style={{ paddingTop: 0 }}>
      <div className={`container ${styles.indexContainer}`}>
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-narrow has-text-centered">
            <div className="content">
              <img src={masaChinatown} alt="" style={{ width: `280px` }} />
              <br />
              <StackOverflowFlair theme="clean" size="300px" />
            </div>
          </div>
        </div>

        <p className="content">
          I enjoy
          <br />
          <BrandIconList />
          <br />
          and more...
        </p>
      </div>
    </section>
  </>
)

IndexPageContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
  gmapUrl: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <GlobalLayout>
      <IndexPageContent
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        location={frontmatter.location}
        gmapUrl={frontmatter.gmapUrl}
      />
    </GlobalLayout>
  )
}

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
      }
    }
  }
`
