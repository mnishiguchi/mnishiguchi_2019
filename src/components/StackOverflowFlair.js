import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StackOverflowFlair = ({ theme = '', height = '', width = '' }) => (
  <OutboundLink href="https://stackoverflow.com/users/3837223/mnishiguchi">
    <img
      src={`https://stackoverflow.com/users/flair/3837223.png?theme=${theme}`}
      height={height}
      width={width}
      alt="profile for mnishiguchi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      title="profile for mnishiguchi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
    />
  </OutboundLink>
)

export default StackOverflowFlair
