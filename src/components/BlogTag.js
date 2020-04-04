import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

function BlogTag({ tagName, tagCount = null }) {
  return (
    <Link to={`/tags/${kebabCase(tagName)}/`}>
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
