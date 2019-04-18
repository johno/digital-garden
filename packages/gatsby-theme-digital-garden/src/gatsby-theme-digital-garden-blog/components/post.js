import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from '../../components/layout'
import { Heading } from '../../components/ui'

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
