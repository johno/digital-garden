import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const PostPage = ({ data: { mdx } }) => (
  <>
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </>
)

export default PostPage
