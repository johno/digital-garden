import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'
import { SEO } from '../../components/seo'
import useOptions from '../../use-options'

export default ({ posts }) => (
  <Layout>
    <SEO
      title={
        useOptions().postsPath ? useOptions().postsPath.slice(1) : 'Writing'
      }
    />
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
