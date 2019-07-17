import React from 'react'

import Header from './header'
import useOptions from '../use-options'

export default () => {
  const { header } = useOptions()
  const { home, links } = header

  return <Header home={home} links={links} />
}
