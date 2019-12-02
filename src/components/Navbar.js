import React from 'react'
import BlogPostSearch from './BlogPostSearch'
import LanguageSwitcher from './LanguageSwitcher'
import {
  HomeLink,
  BlogLink,
  TagsLink,
  GithubLink,
  LinkedinLink,
} from './IconLink'

import styles from './Navbar.module.scss'

const Navbar = () => {
  const [languagesActive, setLanguagesActive] = React.useState(false)

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className={`navbar-menu ${styles.navbarMenu}`}>
          <div className="navbar-start has-text-centered">
            <HomeLink className="navbar-item" />
            <BlogLink className="navbar-item" />
            <TagsLink className="navbar-item" />
            <LinkedinLink className="navbar-item" />
            <GithubLink className="navbar-item" />

            <div
              className="navbar-item"
              style={{
                position: 'relative',
              }}
            >
              <span onClick={() => setLanguagesActive(prev => !prev)}>
                A⇄文
              </span>

              <div
                className={`navbar-dropdown ${styles.langDropdown}`}
                onClick={() => setLanguagesActive(false)}
                style={{ display: languagesActive ? 'block' : 'none' }}
              >
                <span className="navbar-item">
                  <LanguageSwitcher
                    languageCode="en"
                    style={{ color: 'black' }}
                  />
                </span>
                <span className="navbar-item">
                  <LanguageSwitcher
                    languageCode="ja"
                    style={{ color: 'black' }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="navbar-end has-text-centered">
            <BlogPostSearch
              className="navbar-item"
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                zIndex: 9,
                padding: '0.5rem 0.75rem 0 0',
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
