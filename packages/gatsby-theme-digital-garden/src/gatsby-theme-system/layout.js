import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Layout, Main } from 'gatsby-theme-system'

import theme from '../theme'
import { Box } from '../components/ui'

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main>
          <Box maxWidth={1024} mt={[3, 4,5 ]} mx="auto">
            {props.children}
          </Box>
        </Main>
      </Layout>
    </ThemeProvider>
  )
}
