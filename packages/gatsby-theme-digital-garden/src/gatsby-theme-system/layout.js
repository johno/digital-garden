import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import { Layout, Main, Header } from 'gatsby-theme-system'

import theme from '../theme'
import useSiteMetadata from '../use-site-metadata'
import { Box } from '../components/ui'

export default props => {
  const { title } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main>
          <Header bg="white" color="black">
            <Box as={Link} to="/">
              {title}
            </Box>
            <Box mx="auto" />
            <Box as={Link} to="/writing">
              Writing
            </Box>
            <Box mx={1} />
            <Box as={Link} to="/txt" color="inherit">
              Notes
            </Box>
            <Box mx={1} />
            <Box as={Link} to="/contact" color="inherit">
              Contact
            </Box>
          </Header>
          <Box maxWidth={1024} mt={[3, 4, 5]} mx="auto">
            {props.children}
          </Box>
        </Main>
      </Layout>
    </ThemeProvider>
  )
}
