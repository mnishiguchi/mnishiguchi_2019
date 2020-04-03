import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import green from '@material-ui/core/colors/green'

import AppHelmet from './AppHelmet'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import '../i18n'

export default ({ children }) => {
  // https://material-ui.com/customization/theming/
  const theme = createMuiTheme({
    typography: {},
    palette: {
      primary: indigo,
      secondary: green,
    },
    overrides: {},
  })

  return (
    <ThemeProvider theme={theme}>
      <AppHelmet />

      <AppHeader />

      {/* A spacer for the content */}
      <div
        style={{
          height: '4rem',
        }}
      />

      {/* Use a container in each template not here so that they can be styled freely. */}
      {children}

      <AppFooter />
    </ThemeProvider>
  )
}
