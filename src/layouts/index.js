import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

import AppHelmet from './AppHelmet'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import '../i18n'

export default ({ children }) => {
  // https://material-ui.com/customization/theming/
  const theme = createMuiTheme({
    typography: {},
    // https://material-ui.com/customization/palette/
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#1853a9',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
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
          height: '3.5rem',
        }}
      />

      {/* Use a container in each template not here so that they can be styled freely. */}
      {children}

      <AppFooter />
    </ThemeProvider>
  )
}
