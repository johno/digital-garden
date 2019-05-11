import React from 'react'
import { Link } from 'gatsby'
import { css, Styled } from 'theme-ui'
import { Header } from 'theme-ui/layout'

import { Box } from './ui'
import useSiteMetadata from '../use-site-metadata'
import useOptions from '../use-options'

export default () => {
  const { title } = useSiteMetadata()
  const { notesPath, postsPath } = useOptions()

  return (
    <Header
      css={css({
        p: [3, 4],
        bg: 'background',
        color: 'red'
      })}
    >
      <Styled.a as={Link} to="/">
        {title}
      </Styled.a>
      <Box mx="auto" />
      <Styled.a as={Link} to={postsPath || '/writing'}>
        Writing
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to={notesPath || '/notes'}>
        Notes
      </Styled.a>
      <Box mx={1} />
      <Styled.a as={Link} to="/contact">
        Contact
      </Styled.a>
    </Header>
  )
}
