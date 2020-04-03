import React from 'react'

import AppHelmet from './AppHelmet'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import '../i18n'

export default ({ children }) => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <AppHelmet />

      <AppHeader />

      <main
        style={{
          minHeight: '80vh',
          overflowWrap: 'break-word',
        }}
      >
        {children}
      </main>

      <AppFooter />
    </div>
  )
}
