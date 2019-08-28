import React from 'react'

import Header from './header'
import getOptions from '../get-options'

export default () => {
  const { header } = getOptions()
  const { home, links } = header

  return <Header home={home} links={links} />
}
