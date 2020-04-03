import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { useLocation } from '@reach/router'

import { pathToPageKey } from '../lib/utils'

// A custom react hook that gather site meta data from our config file and translation file.
const useSiteMetadata = () => {
  const location = useLocation()
  // https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
  const { t, i18n } = useTranslation()
  const isHomePage = location.pathname === '/'
  const pageKey = pathToPageKey(location.pathname)

  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const siteTitle = i18n.exists(`site.title`)
    ? t(`site.title`)
    : siteMetadata.title
  const siteDescription = i18n.exists(`site.description`)
    ? t(`site.description`)
    : siteMetadata.description
  const pageTitle =
    isHomePage || !i18n.exists(`pages.${pageKey}.title`)
      ? null
      : t(`pages.${pageKey}.title`)
  const pageDescription =
    isHomePage || !i18n.exists(`pages.${pageKey}.description`)
      ? null
      : t(`pages.${pageKey}.description`)

  return {
    // The data from gatsby-config.js
    ...siteMetadata,

    // The data from translation.json
    authorName: t('author.name'),
    siteTitle,
    siteDescription,
    pageTitle,
    pageDescription,
    lang: i18n.language,
  }
}

export default useSiteMetadata
