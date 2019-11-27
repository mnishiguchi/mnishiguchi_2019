import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const BlogTag = ({
  tagName,
  className = '',
  style = null,
  tagCount = null,
}) => {
  return (
    <button className="button" style={style || { margin: '0.2rem' }}>
      <Link to={`/tags/${kebabCase(tagName)}/`}>
        {tagCount ? (
          <span>
            {tagName}({tagCount})
          </span>
        ) : (
          tagName
        )}
      </Link>
    </button>
  )
}

export default BlogTag
