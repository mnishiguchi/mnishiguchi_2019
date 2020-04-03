import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import HomeIcon from '@material-ui/icons/Home'
import NoteIcon from '@material-ui/icons/Note'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import LinkedinIcon from '@material-ui/icons/Linkedin'
import GithubIcon from '@material-ui/icons/Github'

export const LinkedinLink = (props) => (
  <OutboundLink {...props} href="https://linkedin.com/in/mnishiguchi">
    <LinkedinIcon />
  </OutboundLink>
)

export const GithubLink = (props) => (
  <OutboundLink {...props} href="https://github.com/mnishiguchi">
    <GithubIcon />
  </OutboundLink>
)

export const HomeLink = ({ activeClassName, ...rest }) => (
  <Link activeClassName={activeClassName} to="/" {...rest}>
    <HomeIcon />
  </Link>
)

export const BlogLink = ({ activeClassName, ...rest }) => (
  <Link activeClassName={activeClassName} to="/blog" {...rest}>
    <NoteIcon />
  </Link>
)

export const TagsLink = ({ activeClassName, ...rest }) => (
  <Link activeClassName={activeClassName} to="/tags" {...rest}>
    <LocalOfferIcon />
  </Link>
)
