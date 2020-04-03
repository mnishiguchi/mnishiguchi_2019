import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import useSiteMetadata from '../components/useSiteMetadata'
import '../i18n'

export default (overrides) => {
  const {
    authorName,
    siteTitle,
    siteDescription,
    pageTitle,
    pageDescription,
    lang,
  } = useSiteMetadata()

  const metaTitle = pageTitle || siteTitle
  const metaDescription = pageDescription || siteDescription

  // prettier-ignore
  // https://github.com/nfl/react-helmet
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      defaultTitle={siteTitle}
      link={[
        // https://material-ui.com/getting-started/installation/
        { rel:"stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" },
        { rel:"stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
        { rel: 'apple-touch-icon', sizes: '57x57', href: `${withPrefix('/')}img/apple-icon-57x57.png` },
        { rel: 'apple-touch-icon', sizes: '60x60', href: `${withPrefix('/')}img/apple-icon-60x60.png` },
        { rel: 'apple-touch-icon', sizes: '72x72', href: `${withPrefix('/')}img/apple-icon-72x72.png` },
        { rel: 'apple-touch-icon', sizes: '76x76', href: `${withPrefix('/')}img/apple-icon-76x76.png` },
        { rel: 'apple-touch-icon', sizes: '114x114', href: `${withPrefix('/')}img/apple-icon-114x114.png` },
        { rel: 'apple-touch-icon', sizes: '120x120', href: `${withPrefix('/')}img/apple-icon-120x120.png` },
        { rel: 'apple-touch-icon', sizes: '144x144', href: `${withPrefix('/')}img/apple-icon-144x144.png` },
        { rel: 'apple-touch-icon', sizes: '152x152', href: `${withPrefix('/')}img/apple-icon-152x152.png` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${withPrefix('/')}img/apple-icon-180x180.png` },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${withPrefix('/')}img/android-icon-192x192.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${withPrefix('/')}img/favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: `${withPrefix('/')}img/favicon-96x96.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${withPrefix('/')}img/favicon-16x16.png` },
        { rel: 'manifest', href: `${withPrefix('/')}img/manifest.json` },
      ]}
      meta={[
        { name: 'theme-color', content: '#123' },
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: 'og:url', content: '/' },
        { property: 'og:image', content: `${withPrefix('/')}img/logo-512.jpg` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: authorName },
        { name: `twitter:title`, content: metaTitle },
        { name: `twitter:description`, content: metaDescription },
      ]}
    />
  )
}
