import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from './layout'

const WikiPage = ({
  data: {
    note: { body }
  }
}) => (
  <Layout>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
)

export default WikiPage
