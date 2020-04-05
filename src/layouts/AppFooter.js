import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'

function Copyright() {
  const { t } = useTranslation()

  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mnishiguchi.com/">
        {t('author.name')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    textAlign: 'center',
  },
}))

function AppFooter() {
  const classNames = useStyles()

  return (
    <>
      <Divider />
      <footer className={classNames.footer}>
        <Container maxWidth="md">
          <Copyright />
        </Container>
      </footer>
    </>
  )
}

export default AppFooter
