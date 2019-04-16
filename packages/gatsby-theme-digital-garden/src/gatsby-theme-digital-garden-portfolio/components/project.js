import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Styled, css } from 'theme-ui'
import { ExternalLink } from 'react-feather'
import Layout from '../../components/layout'

export default ({
  data: {
    project: {
      frontmatter: { title, description, date, url, image },
      code
    }
  }
}) => (
  <Layout>
    <Styled.h1>
      {title}
      {url && (
        <Styled.a
          href={url}
          title="View original"
          css={css({
            mx: 2,
            display: 'inline-flex',
            alignItems: 'center'
          })}
        >
          {' '}
          <ExternalLink />
        </Styled.a>
      )}
    </Styled.h1>
    <Styled.p>{description}</Styled.p>
    {image && <Styled.img src={image} />}
    <MDXRenderer children={code.body} />
  </Layout>
)
