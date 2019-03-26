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
        <Box maxWidth={1024} mt={[3, 4, 5]} mx="auto">
          {props.children}
        </Box>
      </Main>
    </Layout>
  </ThemeProvider>
)
