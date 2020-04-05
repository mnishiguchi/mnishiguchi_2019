import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import NoteIcon from '@material-ui/icons/Note'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import LinkedinIcon from '@material-ui/icons/Linkedin'
import GithubIcon from '@material-ui/icons/Github'

import AppLink from './AppLink'

export const LinkedinLink = (props) => (
  <AppLink.Outbound {...props} href="https://linkedin.com/in/mnishiguchi">
    <LinkedinIcon />
  </AppLink.Outbound>
)

export const GithubLink = (props) => (
  <AppLink.Outbound {...props} href="https://github.com/mnishiguchi">
    <GithubIcon />
  </AppLink.Outbound>
)

export const HomeLink = (props) => (
  <AppLink to="/" {...props}>
    <HomeIcon />
  </AppLink>
)

export const BlogLink = (props) => (
  <AppLink to="/blog" {...props}>
    <NoteIcon />
  </AppLink>
)

export const TagsLink = (props) => (
  <AppLink to="/tags" {...props}>
    <LocalOfferIcon />
  </AppLink>
)
