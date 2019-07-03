import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'
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
    <Styled.h1>{title}</Styled.h1>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)

export default Post
