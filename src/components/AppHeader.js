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

function AppHeader() {
  return (
    <div>
      <div>
        <HomeLink />
        <BlogLink />
        <TagsLink />
        <LinkedinLink />
        <GithubLink />
        <div>
          <div>A⇄文</div>
          <LanguageSwitcher languageCode="en" />
          <LanguageSwitcher languageCode="ja" />
        </div>
      </div>

      <BlogPostSearch
        style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          zIndex: 9,
          padding: '0.5rem 0.75rem 0 0',
        }}
      />
    </div>
  )
}

export default AppHeader
