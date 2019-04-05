import React from 'react'
import { Link } from 'gatsby'
import { css } from 'theme-ui'
import { Header } from 'theme-ui/layout'

import { Box } from '../../components/ui'
import useSiteMetadata from '../../use-site-metadata'

export default () => {
  const { title } = useSiteMetadata()

  return (
    <Header
      css={css({
        bg: 'background'
      })}
    >
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
