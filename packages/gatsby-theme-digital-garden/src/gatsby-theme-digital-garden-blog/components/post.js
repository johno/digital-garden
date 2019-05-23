import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'

const Post = ({
  data: {
    post: {
      frontmatter: { title },
      body
    }
  }
}) => (
  <Layout>
    <Styled.h1>{title}</Styled.h1>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)

export default Post
