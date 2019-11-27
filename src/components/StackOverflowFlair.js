import React from 'react'

const StackOverflowFlair = ({ theme = '', width = 208, height = 58 }) => (
  <a href="https://stackoverflow.com/users/3837223/mnishiguchi">
    <img
      src={`https://stackoverflow.com/users/flair/3837223.png?theme=${theme}`}
      width={width}
      height={height}
      alt="profile for mnishiguchi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      title="profile for mnishiguchi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
    />
  </a>
)

export default StackOverflowFlair
