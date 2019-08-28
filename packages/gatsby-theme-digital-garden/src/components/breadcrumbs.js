import React from 'react'
import { Link } from 'gatsby'
import { Styled, css } from 'theme-ui'

import getOptions from '../get-options'

export default ({ links }) => {
  const { notesPath } = getOptions()

  return (
    <nav
      css={css({
        mb: 3,
        '& a': {
          textDecoration: 'none',
          fontWeight: 'bold'
        }
      })}
    >
      <Styled.a as={Link} to={'/'}>
        ~
      </Styled.a>
      <span css={css({ px: 2 })} children="/" />
      <Styled.a as={Link} to={notesPath}>
        {notesPath.replace(/^\//, '')}
      </Styled.a>
      {links.map(link => (
        <>
          <span css={css({ px: 2 })} children="/" />
          <Styled.a as={Link} to={link.url} key={link.url}>
            {link.name}
          </Styled.a>
        </>
      ))}
    </nav>
  )
}
