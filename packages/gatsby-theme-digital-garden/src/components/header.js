import React from 'react'
import { Link } from 'gatsby'
import { css, Styled } from 'theme-ui'
import { Header } from 'theme-ui/layout'

import { Box } from './ui'
import useSiteMetadata from '../use-site-metadata'

export default () => {
  const { title } = useSiteMetadata()

  return (
    <Header
      css={css({
        p: [3, 4],
        bg: 'background'
      })}
    >
      <Styled.a as={Link} to="/">
        {title}
      </Styled.a>
      <Box mx="auto" />
      <Styled.a as={Link} to="/writing">
        Writing
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to="/txt">
        Notes
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to="/contact">
        Contact
      </Styled.a>
    </Header>
  )
}
