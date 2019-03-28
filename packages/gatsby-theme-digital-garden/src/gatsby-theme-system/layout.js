import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Layout, Main, ColorScheme, Typography } from 'gatsby-theme-system'

import theme from '../theme'
import Header from '../components/header'
import { Box } from '../components/ui'

export default props => (
  <ThemeProvider theme={theme}>
    <ColorScheme />
    <Typography />
    <Layout>
      <Header />
      <Main>
        <Box maxWidth={1024} mx="auto">
          <Box is="main" m={[3, 4, 5]}>
            {props.children}
          </Box>
        </Box>
      </Main>
    </Layout>
  </ThemeProvider>
)
