import React from 'react'
import { kebabCase } from 'lodash'
import Chip from '@material-ui/core/Chip'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

import AppLink from './AppLink'

// https://material-ui.com/components/badges/#customized-badges
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: `1rem`,
    top: `1rem`,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

function BlogTagLink({ tagName, tagCount = null, ...rest }) {
  const tagCountProvided = parseInt(tagCount) >= 0
  return (
    <AppLink to={`/tags/${kebabCase(tagName)}/`} {...rest}>
      <StyledBadge badgeContent={tagCount} color="primary">
        <Chip
          variant="outlined"
          label={tagName}
          style={{ paddingRight: tagCountProvided ? `1rem` : `auto` }}
        />
      </StyledBadge>
    </AppLink>
  )
}

export default BlogTagLink
