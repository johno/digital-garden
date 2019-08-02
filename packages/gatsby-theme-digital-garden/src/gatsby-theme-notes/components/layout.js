/** @jsx jsx */
import { useState, useRef } from 'react'
import { Global } from '@emotion/core'
import { Styled, Layout, Main, Container, jsx, useThemeUI } from 'theme-ui'

import Header from '../../components/header'

export default ({ children }) => {
  const {
    theme: { colors = {} }
  } = useThemeUI()
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef(null)

  const bodyStyles = {
    body: {
      margin: 0,
      color: colors.text,
      backgroundColor: colors.background
    }
  }

  return (
    <Styled.root>
      <Global styles={bodyStyles} />
      <Layout>
        <Header nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Main>
          <Container py={0} px={3}>
            {children}
          </Container>
        </Main>
      </Layout>
    </Styled.root>
  )
}
