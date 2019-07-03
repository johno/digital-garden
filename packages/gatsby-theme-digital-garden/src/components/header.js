import React from 'react'
import { css } from 'theme-ui'
import { Header } from 'theme-ui/layout'

import HeaderLink from './header-link'
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
      <div css={css({ mx: 'auto' })} />
      {links.map(({ href, label }) => (
        <div key={href} css={css({ mx: 1 })}>
          <HeaderLink href={href} label={label} />
        </div>
      ))}
    </Header>
  )
}
