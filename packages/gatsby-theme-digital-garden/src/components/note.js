import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import path from 'path'

import Layout from './layout'
import { SEO } from './seo'

const WikiPage = ({
  data: {
    note: {
      body,
      frontmatter: { title },
      fileAbsolutePath
    }
  }
}) => {
  const filename = path.basename(fileAbsolutePath).split('.')[0]
  const fileTitle = filename.charAt(0).toUpperCase() + filename.slice(1)
  return (
    <Layout>
      <SEO title={title || fileTitle} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default WikiPage
