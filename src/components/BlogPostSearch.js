import React, { useState } from 'react'
import { navigate } from 'gatsby'

import styles from './BlogPostSearch.module.scss'

// https://www.gatsbyjs.org/packages/gatsby-plugin-flexsearch
const BlogPostSearch = ({ className, style }) => {
  const MIN_QUERY_LENGTH = 3

  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setsuggestions] = useState([])

  let queryInputRef = React.createRef()

  const fetchSearchsuggestions = query => {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store

    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  const onSearch = event => {
    const inputValue = event.target.value
    setQuery(inputValue)
    setsuggestions(
      inputValue.length > 2 ? fetchSearchsuggestions(inputValue) : []
    )
  }

  const toggleActiveStatus = () => {
    if (isActive) {
      queryInputRef.current.value = ''
      setIsActive(false)
      setQuery('')
      setsuggestions([])
    } else {
      setIsActive(true)
      queryInputRef.current && queryInputRef.current.focus()
    }
  }

  return (
    <div className={className} style={style}>
      <div className={`${styles.searchBox} ${isActive ? 'is-active' : ''}`}>
        <input
          type="text"
          ref={queryInputRef}
          className={`input ${styles.queryInput}`}
          onChange={onSearch}
          placeholder="Search mnishiguchi.com"
        />
        <div
          className={`${styles.searchToggle}`}
          onClick={toggleActiveStatus}
        ></div>
      </div>

      {query.length > MIN_QUERY_LENGTH ? (
        <ul className={`list is-hoverable ${styles.suggestions}`}>
          {suggestions.length === 0 ? (
            <li
              className={`list-item ${styles.suggestion}`}
            >{`No suggestions for ${query}`}</li>
          ) : (
            suggestions.map((page, i) => (
              <li
                className={`list-item ${styles.suggestion}`}
                key={page.title}
                onClick={() => navigate(page.url)}
              >
                <h4>{page.title}</h4>
              </li>
            ))
          )}
        </ul>
      ) : (
        ''
      )}
    </div>
  )
}

export default BlogPostSearch
