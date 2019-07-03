import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from '../../components/layout'
import { Heading } from '../../components/ui'
import { SEO } from '../../components/seo'

const Post = ({
  data: {
    post: {
      frontmatter: { title, description },
      body
    }
  }
}) => (
  <Layout>
    <SEO title={title} description={description} />
    <Heading>{title}</Heading>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)

export default Post
