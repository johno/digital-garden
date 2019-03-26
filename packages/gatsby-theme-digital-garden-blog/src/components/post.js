import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'
import { Heading } from './ui'

const Post = ({
  data: {
    post: {
      frontmatter: { title },
      code
    }
  }
}) => (
  <Layout>
    <Heading>{title}</Heading>
    <MDXRenderer>{code.body}</MDXRenderer>
  </Layout>
)

export default Post
