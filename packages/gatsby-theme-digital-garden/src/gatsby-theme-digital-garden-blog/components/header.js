import React from 'react'
import { Link } from 'gatsby'
// import { Header } from 'gatsby-theme-system'

import { Box } from '../../components/ui'
import useSiteMetadata from '../../use-site-metadata'

const Header = props => <header {...props} />

export default () => {
  const { title } = useSiteMetadata()

  return (
    <Header bg="background">
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
  )
}
