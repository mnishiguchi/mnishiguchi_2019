import React, { useState } from 'react'
import { navigate } from 'gatsby'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'

// https://www.gatsbyjs.org/packages/gatsby-plugin-flexsearch
function BlogPostSearch({ className, style }) {
  const MIN_QUERY_LENGTH = 3

  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setsuggestions] = useState([])

  let queryInputRef = React.createRef()

  const fetchSearchsuggestions = (query) => {
    const index = window.__FLEXSEARCH__.en.index
    const store = window.__FLEXSEARCH__.en.store

    if (!query || !index) return []

    let results = []
    Object.keys(index).forEach((idx) =>
      results.push(...index[idx].values.search(query))
    )
    results = Array.from(new Set(results))

    return store
      .filter((node) => results.includes(node.id))
      .map((node) => node.node)
  }

  const onSearch = (event) => {
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
    <>
      <div onClick={toggleActiveStatus}>
        {isActive ? <ClearIcon /> : <SearchIcon />}
      </div>
      <div isOpen={isActive} toggle={toggleActiveStatus}>
        <div>
          <div
            type="text"
            ref={queryInputRef}
            onChange={onSearch}
            placeholder="Search mnishiguchi.com"
          />

          {query.length > MIN_QUERY_LENGTH ? (
            <div>
              {suggestions.length === 0 ? (
                <div>{`No suggestions for ${query}`}</div>
              ) : (
                suggestions.map((page, i) => (
                  <div key={page.title} onClick={() => navigate(page.url)}>
                    <h4>{page.title}</h4>
                  </div>
                ))
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default BlogPostSearch
