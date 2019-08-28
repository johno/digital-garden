import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'
import { SEO } from '../../components/seo'
import getOptions from '../../get-options'

export default ({ posts }) => (
  <Layout>
    <SEO
      title={
        getOptions().postsPath ? getOptions().postsPath.slice(1) : 'Writing'
      }
    />
    <Styled.ul>
      {posts.map(post => (
        <Styled.li key={post.id}>
          <Styled.a as={Link} to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Styled.a>
        </Styled.li>
      ))}
    </Styled.ul>
  </Layout>
)
