import React from 'react'
import { kebabCase } from 'lodash'
import { navigate } from 'gatsby'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  badge: {
    color: '#fff',
    background: theme.palette.primary.main,
    '&:hover': {
      color: '#fff',
    },
  },
}))

const noop = () => {}

function BlogTagLink({ tagName, tagCount = null, ...rest }) {
  const classNames = useStyles()
  const tagCountProvided = parseInt(tagCount) >= 0

  // onDelete is noop but necessary because it enables the deleteIcon prop.
  // https://material-ui.com/components/chips/
  return (
    <Chip
      variant="outlined"
      label={tagName}
      clicable
      onClick={() => navigate(`/tags/${kebabCase(tagName)}/`)}
      onDelete={noop}
      deleteIcon={
        tagCountProvided ? (
          <Avatar className={classNames.badge}>{tagCount}</Avatar>
        ) : (
          <></>
        )
      }
      {...rest}
    />
  )
}

export default BlogTagLink
