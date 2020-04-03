import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'
import grey from '@material-ui/core/colors/grey'
import MenuItem from '@material-ui/core/MenuItem'

import BlogPostSearch from './BlogPostSearch'
import I18nSwitcher from './I18nSwitcher'
import {
  HomeLink,
  BlogLink,
  TagsLink,
  GithubLink,
  LinkedinLink,
} from '../components/iconLinks'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function AppHeader() {
  return (
    <HideOnScroll>
      <AppBar
        style={{
          background: grey[50],
        }}
      >
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Toolbar>
            <IconButton>
              <HomeLink />
            </IconButton>
            <IconButton>
              <BlogLink />
            </IconButton>
            <IconButton>
              <TagsLink />
            </IconButton>
          </Toolbar>

          <Toolbar>
            <IconButton>
              <LinkedinLink />
            </IconButton>
            <IconButton>
              <GithubLink />
            </IconButton>

            <MenuItem>
              <I18nSwitcher />
            </MenuItem>
            <IconButton>
              <BlogPostSearch
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  zIndex: 9,
                  padding: '0.5rem 0.75rem 0 0',
                }}
              />{' '}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}

export default AppHeader
