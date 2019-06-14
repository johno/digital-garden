import React from 'react'
import { css } from 'theme-ui'
import { Header } from 'theme-ui/layout'

import HeaderLink from './header-link'
import { Box } from './ui'
import useOptions from '../use-options'

export default () => {
  const { header } = useOptions()
  const { home, links } = header

  return (
    <Header
      css={css({
        p: [3, 4],
        bg: 'background',
        color: 'red'
      })}
    >
      <HeaderLink href={home.href} label={home.label} />
      <Box mx="auto" />
      {links.map(({ href, label }) => (
        <Box key={href} mx={1}>
          <HeaderLink href={href} label={label} />
        </Box>
      ))}
    </Header>
  )
}
