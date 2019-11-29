import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styles from './BackToTopLink.module.scss'

const defaultTitle = 'Back to top'

// https://github.com/fisshy/react-scroll
const onClick = () => scroll.scrollToTop({ duration: 200 })

const BackToTopLink = ({ children, style = {}, className = '' }) => {
  return (
    <button
      style={style}
      className={className || styles.button}
      onClick={onClick}
      title={defaultTitle}
    >
      {children || defaultTitle}
    </button>
  )
}

export default BackToTopLink
