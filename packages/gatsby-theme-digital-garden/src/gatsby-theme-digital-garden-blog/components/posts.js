import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'

export default ({ posts }) => (
  <Layout>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Styled.a as={Link} to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Styled.a>
        </li>
      ))}
    </ul>
  </Layout>
)
