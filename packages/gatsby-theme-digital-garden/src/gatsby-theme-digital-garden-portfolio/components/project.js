import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Styled, css } from 'theme-ui'
import Layout from '../../components/layout'

export default ({
  data: {
    project: {
      frontmatter: { title, description, image },
      code
    }
  }
}) => (
  <Layout>
    <Styled.h1>{title}</Styled.h1>
    <Styled.p>{description}</Styled.p>
    {image && <Styled.img src={image} />}
    <MDXRenderer children={code.body} />
  </Layout>
)
