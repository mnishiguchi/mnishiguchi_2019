import React from 'react'
import Container from '@material-ui/core/Container'

const AppContentContainer = ({ children, ...rest }) => {
  return (
    <Container maxWidth="md" style={{ margin: '3rem auto', minHeight: '90vh' }}>
      {children}
    </Container>
  )
}

export default AppContentContainer
