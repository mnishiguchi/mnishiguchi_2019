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

export const IndexPageContent = ({ title, heading, subheading }) => (
  <>
    <header className={`hero ${styles.hero}`}>
      <div className={`container ${styles.indexContainer}`}>
        <div className={`hero-body ${styles.heroBody}`}>
          <h1 className={`title ${styles.heroTitle}`}>Masatoshi Nishiguchi</h1>
          <h2 className={`subtitle ${styles.heroSubtitle}`}>
            Software Engineer
            <Media query={{ maxWidth: styles.tablet }}>
              {matches => (matches ? <br /> : <span>{` · `}</span>)}
            </Media>
            <OutboundLink href="https://www.google.com/maps/d/u/0/embed?mid=1VQHZbH9Elf3YIR0JCo9qQ0ywXGA&hl=en&ll=38.901906769884384%2C-77.01435253235564&z=6">
              Washington, DC
            </OutboundLink>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <GlobalLayout>
      <IndexPageContent
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
        heading
        subheading
        description
      }
    }
  }
`
