import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './layout'

const WikiPage = ({
  data: {
    note: { code }
  }
}) => (
  <Layout>
    <MDXRenderer>{code.body}</MDXRenderer>
  </Layout>
)

export default WikiPage
