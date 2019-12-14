import React, { useState } from 'react'
import { navigate } from 'gatsby'
import {
  Input,
  Button,
  Modal,
  ModalBody,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

// https://www.gatsbyjs.org/packages/gatsby-plugin-flexsearch
function BlogPostSearch({ className, style }) {
  const MIN_QUERY_LENGTH = 3

  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setsuggestions] = useState([])

  let queryInputRef = React.createRef()

  const fetchSearchsuggestions = query => {
    const index = window.__FLEXSEARCH__.en.index
    const store = window.__FLEXSEARCH__.en.store

    if (!query || !index) return []

    let results = []
    Object.keys(index).forEach(idx =>
      results.push(...index[idx].values.search(query))
    )
    results = Array.from(new Set(results))

    return store
      .filter(node => results.includes(node.id))
      .map(node => node.node)
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
    <>
      <Button onClick={toggleActiveStatus}>
        <FontAwesomeIcon icon={isActive ? faTimes : faSearch} />
      </Button>
      <Modal isOpen={isActive} toggle={toggleActiveStatus}>
        <ModalBody>
          <Input
            type="text"
            ref={queryInputRef}
            onChange={onSearch}
            placeholder="Search mnishiguchi.com"
          />

          {query.length > MIN_QUERY_LENGTH ? (
            <ListGroup>
              {suggestions.length === 0 ? (
                <ListGroupItem>{`No suggestions for ${query}`}</ListGroupItem>
              ) : (
                suggestions.map((page, i) => (
                  <ListGroupItem
                    key={page.title}
                    onClick={() => navigate(page.url)}
                  >
                    <h4>{page.title}</h4>
                  </ListGroupItem>
                ))
              )}
            </ListGroup>
          ) : (
            ''
          )}
        </ModalBody>
      </Modal>
    </>
  )
}

export default BlogPostSearch
