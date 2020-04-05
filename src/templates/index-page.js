import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image' // https://www.gatsbyjs.org/packages/gatsby-image/
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

import GlobalLayout from '../layouts/index'
import AppContentContainer from '../components/AppContentContainer'
import StackOverflowFlair from '../components/StackOverflowFlair'
import BrandIconSlideshow from '../components/BrandIconSlideshow'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.dark,
    paddingTop: '.8rem',
    paddingBottom: '.8rem',
    color: '#fff',
  },
  flexJustifyContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  spaceBetweenSections: {
    marginTop: '2rem',
  },
  maxWidth600: {
    width: '100%',
    maxWidth: '600px',
  },
}))

export function IndexPageContent({ gmapUrl, mainImage, secondaryImage }) {
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t } = useTranslation()
  const classNames = useStyles()

  return (
    <>
      <header
        className={[
          classNames.header,
          classNames.flexJustifyContentCenter,
        ].join(' ')}
      >
        <div style={{ maxWidth: '500px' }}>
          <h1>{t('author.name')}</h1>
          <h2>
            {t('author.profession')}
            <br />
            <OutboundLink href={gmapUrl} style={{ color: '#fff' }}>
              {t('author.location')}
            </OutboundLink>
          </h2>
        </div>
      </header>

      <AppContentContainer>
        <section
          className={[
            classNames.flexJustifyContentCenter,
            classNames.spaceBetweenSections,
          ].join(' ')}
        >
          <div>
            <Img fluid={mainImage.childImageSharp.fluid} />
            <br />
            <StackOverflowFlair theme="clean" width="300px" />
          </div>
        </section>
        <section
          className={[
            classNames.flexJustifyContentCenter,
            classNames.spaceBetweenSections,
          ].join(' ')}
        >
          <div className={classNames.maxWidth600}>
            <div>{t('pages.home.hobbies')}</div>
            <BrandIconSlideshow />
            <div>{t('pages.home.etc')}</div>
          </div>
        </section>
        <section
          className={[
            classNames.flexJustifyContentCenter,
            classNames.spaceBetweenSections,
          ].join(' ')}
        >
          <div className={classNames.maxWidth600}>
            <Img
              fluid={secondaryImage.childImageSharp.fluid}
              alt="Masatoshi Nishiguchi at Node DC"
            />
          </div>
        </section>
      </AppContentContainer>
    </>
  )
}

IndexPageContent.propTypes = {
  gmapUrl: PropTypes.string,
  mainImage: PropTypes.object,
  secondaryImage: PropTypes.object,
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
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondaryImage {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
