import React from 'react'
import { css } from 'theme-ui'

export default ({ ratio = 3 / 4, src, ...props }) => (
  <div
    {...props}
    css={css({
      width: '100%',
      height: 0,
      paddingBottom: ratio * 100 + '%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${src})`
    })}
  />
)
