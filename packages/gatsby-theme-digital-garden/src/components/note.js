import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const WikiPage = ({ data: { mdx } }) => (
  <>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </>
)

export default WikiPage
