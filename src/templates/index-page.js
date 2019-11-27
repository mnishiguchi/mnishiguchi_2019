import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Media from 'react-media'

import GlobalLayout from '../components/GlobalLayout'
import StackOverflowFlair from '../components/StackOverflowFlair'
import BrandIconList from '../components/BrandIconList'
import masaChinatown from '../img/masa-chinatown.png'

import styles from './index-page.module.scss'

export const IndexPageContent = ({ title, heading, subheading }) => (
  <>
    <header className={`hero ${styles.hero}`}>
      <div className={`hero-body ${styles.heroBody}`}>
        <div className="container">
          <h1 className={`title ${styles.heroTitle}`}>Masatoshi Nishiguchi</h1>
          <h2 className={`subtitle ${styles.heroSubtitle}`}>
            Software Engineer
            <Media query={{ maxWidth: styles.tablet }}>
              {matches => (matches ? <br /> : <span>{` · `}</span>)}
            </Media>
            <a href="https://www.google.com/maps/d/u/0/embed?mid=1VQHZbH9Elf3YIR0JCo9qQ0ywXGA&hl=en&ll=38.901906769884384%2C-77.01435253235564&z=6">
              Washington, DC
            </a>
          </h2>
        </div>
      </div>
    </header>

    <section className="section section--gradient" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <section className="content">
              <img src={masaChinatown} alt="" style={{ width: `230px` }} />
              <br />
              <StackOverflowFlair theme="clean" />
            </section>
            <section className="content">
              I enjoy
              <br />
              <BrandIconList />
              <br />
              and more...
            </section>
          </div>
        </div>
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
    <GlobalLayout hideNavbar={false}>
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
