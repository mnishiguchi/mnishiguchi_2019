import React from 'react'
import { navigate } from 'gatsby'
import { kebabCase } from 'lodash'

const BlogTag = ({
  tagName,
  className = '',
  style = null,
  tagCount = null,
}) => {
  return (
    <button
      className="button"
      style={style || { margin: '0.2rem' }}
      onClick={() => navigate(`/tags/${kebabCase(tagName)}/`)}
    >
      {tagCount ? (
        <span>
          {tagName} <span className="tag">{tagCount}</span>
        </span>
      ) : (
        tagName
      )}
    </button>
  )
}

export default BlogTag
