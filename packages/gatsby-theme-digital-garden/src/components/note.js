import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const WikiPage = ({
  data: {
    note: { code }
  }
}) => (
  <>
    <MDXRenderer>{code.body}</MDXRenderer>
  </>
)

export default WikiPage
