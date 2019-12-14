import React from 'react'
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import BlogPostSearch from './BlogPostSearch'
import LanguageSwitcher from './LanguageSwitcher'
import {
  HomeLink,
  BlogLink,
  TagsLink,
  GithubLink,
  LinkedinLink,
} from './IconLink'

function AppHeader() {
  return (
    <Navbar color="light" light expand="xs">
      <Nav className="mr-auto" navbar>
        <HomeLink className="nav-link" />
        <BlogLink className="nav-link" />
        <TagsLink className="nav-link" />
        <LinkedinLink className="nav-link" />
        <GithubLink className="nav-link" />
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            A⇄文
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <LanguageSwitcher languageCode="en" />
            </DropdownItem>
            <DropdownItem>
              <LanguageSwitcher languageCode="ja" />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>

      <BlogPostSearch
        style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          zIndex: 9,
          padding: '0.5rem 0.75rem 0 0',
        }}
      />
    </Navbar>
  )
}

export default AppHeader
