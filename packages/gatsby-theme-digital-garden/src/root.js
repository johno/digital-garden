import React from 'react'
import { Context } from 'theme-ui'
import theme from './theme'

const Root = props => (
  <Context.Provider
    value={{
      theme,
      components: {}
    }}
  >
    {props.children}
  </Context.Provider>
)

export const wrapRootElement = ({ element, props }) => (
  <Root {...props}>{element}</Root>
)
