import React from 'react'
import { Link } from 'gatsby'

export default ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </li>
    ))}
  </ul>
)