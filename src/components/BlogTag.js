import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

import css from './BlogTag.module.scss'

function BlogTag({ tagName, tagCount = null }) {
  return (
    <Link className={`badge ${css.tag}`} to={`/tags/${kebabCase(tagName)}/`}>
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
