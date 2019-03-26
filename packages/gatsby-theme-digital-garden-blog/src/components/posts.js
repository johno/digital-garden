import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'

export default ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)
