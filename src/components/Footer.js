import React from 'react'
import BackToTopLink from './BackToTopLink'

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>© 2019 Masatoshi Nishiguchi</span>
        <BackToTopLink style={{ width: `50px`, height: `50px` }}>
          ⬆
        </BackToTopLink>
      </div>
    </footer>
  )
}

export default Footer
