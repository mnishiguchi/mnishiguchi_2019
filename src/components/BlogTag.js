import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

import styles from './BlogTag.module.scss'

const BlogTag = ({
  tagName,
  className = '',
  style = null,
  tagCount = null,
}) => {
  return (
    <Link
      className={className || `tag ${styles.tag}`}
      to={`/tags/${kebabCase(tagName)}/`}
      style={style || { margin: '0.2rem' }}
    >
      {tagCount ? (
        <span>
          {tagName} <span>({tagCount})</span>
        </span>
      ) : (
        tagName
      )}
    </Link>
  )
}

export default BlogTag
