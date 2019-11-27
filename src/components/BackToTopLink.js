import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

// https://github.com/fisshy/react-scroll
const onClick = () => scroll.scrollToTop({ duration: 200 })

const BackToTopLink = ({ children, style = {}, className = '' }) => {
  return (
    <button style={style} className={`button ${className}`} onClick={onClick}>
      {children || 'back to top'}
    </button>
  )
}

export default BackToTopLink
