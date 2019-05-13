import React from 'react'
import { Styled } from 'theme-ui'

export default ({ links }) => (
  <nav>
    {links.map(link => (
      <Styled.a to={link.url} key={link.url}>
        {link.name}
      </Styled.a>
    ))}
  </nav>
)
