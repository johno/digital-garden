import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

export default props => {
  const { href, label } = props
  if (
    label.endsWith('jpg') ||
    label.endsWith('jpeg') ||
    label.endsWith('png') ||
    label.endsWith('svg')
  ) {
    return (
      <Link to={href}>
        <img
          alt={href}
          src={label}
          style={{ maxHeight: '100%', width: '50px' }}
        />
      </Link>
    )
  } else {
    return (
      <Styled.a as={Link} to={href}>
        {label}
      </Styled.a>
    )
  }
}
