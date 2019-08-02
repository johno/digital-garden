import React from 'react'
import { jsx, Header, Container, Flex } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import MenuButton from './menu-button'
import NavLink from './nav-link'
import Content from '../header.mdx'

const components = {
  a: NavLink,
  h1: props => <h1 {...props} />
}

const styles = {
  alignItems: 'center',
  width: '100%',
  h1: {
    m: 0
  },
  ul: {
    ml: 'auto',
    display: 'flex',
    listStyleType: 'none'
  },
  li: {
    ml: 3
  }
}

export default ({ menuOpen, setMenuOpen, nav }) => {
  return (
    <Header>
      <Container>
        <Flex>
          <Flex>
            <MenuButton
              onClick={e => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector('a')
                if (navLink) navLink.focus()
              }}
            />
            <MDXProvider
              components={c => {
                console.log(c)
                return {}
              }}
            >
              <Content />
            </MDXProvider>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
