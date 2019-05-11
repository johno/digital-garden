import React from 'react'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'
import { Layout, Main, Container } from 'theme-ui/layout'
import Header from './header'

export default props => (
  <>
    <Global
      styles={css({
        '*': {
          boxSizing: 'border-box'
        },
        body: {
          margin: 0,
          color: 'text',
          bg: 'background',
          fontFamily: 'body'
        }
      })}
    />
    <Layout>
      <Header />
      <Main>
        <Container>{props.children}</Container>
      </Main>
    </Layout>
  </>
)
