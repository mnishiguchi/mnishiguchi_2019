import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import Footer from './Footer'
import Navbar from './Navbar'
import useSiteMetadata from './SiteMetadata'

import styles from './GlobalLayout.module.scss'
import '../styles/global.scss'

export default ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        {/* https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html */}
        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color={styles.primaryColor}
        />
        <meta name="theme-color" content={styles.primaryColor} />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />
      </Helmet>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
