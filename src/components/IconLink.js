import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import HomeIcon from '@material-ui/icons/Home'
import NoteIcon from '@material-ui/icons/Note'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import LinkedinIcon from '@material-ui/icons/Linkedin'
import GithubIcon from '@material-ui/icons/Github'

import css from './IconLink.module.scss'

// Abstract component for external link with SVG icon.
const ExternalLink = ({ href, children, className = '' }) => (
  <OutboundLink className={className} href={href}>
    <span className={css.icon}>{children /* SVG˝ */}</span>
  </OutboundLink>
)

// Abstract component for internal link with SVG icon.
// https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-css-for-the-currently-active-link
const InternalLink = ({ to, children, className = '' }) => (
  <Link
    className={`${className} ${css.internalLink}`}
    to={to}
    activeClassName="isActive"
  >
    <span className={css.icon}>{children /* SVG˝ */}</span>
  </Link>
)

export const LinkedinLink = ({ className = '' }) => (
  <ExternalLink
    className={className}
    href="https://linkedin.com/in/mnishiguchi"
  >
    <LinkedinIcon />
  </ExternalLink>
)

export const GithubLink = ({ className = '' }) => (
  <ExternalLink className={className} href="https://github.com/mnishiguchi">
    <GithubIcon />
  </ExternalLink>
)

export const HomeLink = ({ className = '' }) => (
  <InternalLink className={className} to="/">
    <HomeIcon />
  </InternalLink>
)

export const BlogLink = ({ className = '' }) => (
  <InternalLink className={className} to="/blog">
    <NoteIcon />
  </InternalLink>
)

export const TagsLink = ({ className = '' }) => (
  <InternalLink className={className} to="/tags">
    <LocalOfferIcon />
  </InternalLink>
)
