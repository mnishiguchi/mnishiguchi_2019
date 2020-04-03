import React from 'react'
import TranslateIcon from '@material-ui/icons/Translate'

import BlogPostSearch from './BlogPostSearch'
import I18nSwitcher from './I18nSwitcher'
import {
  HomeLink,
  BlogLink,
  TagsLink,
  GithubLink,
  LinkedinLink,
} from '../components/IconLink'

function AppHeader() {
  return (
    <div>
      <div>
        <HomeLink />
        <BlogLink />
        <TagsLink />
        <LinkedinLink />
        <GithubLink />
        <I18nSwitcher />
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
