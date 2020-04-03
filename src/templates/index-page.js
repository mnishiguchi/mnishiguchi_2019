import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image' // https://www.gatsbyjs.org/packages/gatsby-image/
import { useTranslation } from 'react-i18next'

import GlobalLayout from '../layouts/GlobalLayout'
import StackOverflowFlair from '../components/StackOverflowFlair'
import BrandIconSlideshow from '../components/BrandIconSlideshow'
import masaTalk from '../img/masa-talk.jpg'

export function IndexPageContent({ gmapUrl, mainImage }) {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t } = useTranslation()

  return (
    <>
      <header className={`py-3 bg-primary`}>
        <div style={{ maxWidth: '500px', textAlign: 'center' }}>
          <h1 className={`text-white`}>{t('author.name')}</h1>
          <h2 className={`text-white`}>
            {t('author.profession')}
            <br />
            <OutboundLink className="h3 text-white-50" href={gmapUrl}>
              {t('author.location')}
            </OutboundLink>
          </h2>
        </div>
      </header>

      <div className="mb-4" style={{ maxWidth: '300px' }}>
        <section>
          <Img fluid={mainImage.childImageSharp.fluid} />
          <br />
          <StackOverflowFlair theme="clean" width="300px" />
        </section>
      </div>

      <div
        style={{ maxWidth: '600px', overflowX: 'hidden', textAlign: 'center' }}
      >
        <section className="mb-4">
          <div>{t('indexPage.iEnjoy')}</div>
          <BrandIconSlideshow style={{ width: '100px' }} />
          <div>{t('indexPage.etc')}</div>
        </section>

        <section className="mb-4">
          {/* I left this as a normal img because I had trouble setting up gatsby image for multiple images */}
          <img
            src={masaTalk}
            alt="Masatoshi Nishiguchi at Node DC"
            style={{ maxWidth: `600px` }}
          />
        </section>
      </div>
    </>
  )
}

IndexPageContent.propTypes = {
  gmapUrl: PropTypes.string,
  mainImage: PropTypes.object,
}

function IndexPage({
  data: {
    markdownRemark: { frontmatter },
  },
}) {
  return (
    <GlobalLayout>
      <IndexPageContent {...frontmatter} />
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
