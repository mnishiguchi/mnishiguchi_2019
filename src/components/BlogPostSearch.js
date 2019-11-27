import React, { useState } from 'react'
import { Link } from 'gatsby'

import styles from './BlogPostSearch.module.scss'

const ResultList = ({ results, query }) => {
  if (results.length === 0) return ''

  if (results.length > 0) {
    return (
      <ul className={styles.suggestions}>
        {results.map((page, i) => (
          <li className={styles.suggestion} key={i}>
            <Link to={page.url}>
              <h4 className={styles.pageTitle}>{page.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    )
  } else if (query.length > 2) {
    return (
      <ul className={styles.suggestions}>
        <li className={styles.suggestion}>{`No results for ${query}`}</li>
      </ul>
    )
  } else {
    return ''
  }
}

const defaultState = {
  query: '',
  results: [],
}

// https://www.gatsbyjs.org/packages/gatsby-plugin-flexsearch
const BlogPostSearch = ({ className, style }) => {
  const [state, setState] = useState(defaultState)

  const fetchSearchResults = query => {
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
    const query = event.target.value
    if (state.query.length > 2) {
      setState({ results: fetchSearchResults(query), query: query })
    } else {
      setState({ results: [], query: query })
    }
  }

  const onBlur = event => {
    event.target.value = ''

    // Delay a bit for navigating to a new page.
    setTimeout(() => setState(defaultState), 200)
  }

  return (
    <div className={className} style={style}>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          aria-label="Search"
          autoComplete="off"
          spellCheck="false"
          onChange={onSearch}
          onBlur={onBlur}
        />
        <ResultList results={state.results} query={state.query} />
      </div>
    </div>
  )
}

export default BlogPostSearch
