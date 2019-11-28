import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styles from './BackToTopLink.module.scss'

// https://github.com/fisshy/react-scroll
const onClick = () => scroll.scrollToTop({ duration: 200 })

const BackToTopLink = ({ children, style = {}, className = '' }) => {
  return (
    <button
      style={style}
      className={`${className} ${styles.button}`}
      onClick={onClick}
      title="Back to top"
    >
      {children || 'Back to top'}
    </button>
  )
}

export default BackToTopLink
