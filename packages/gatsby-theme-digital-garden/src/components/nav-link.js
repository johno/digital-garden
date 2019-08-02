/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const styles = {
  display: 'block',
  px: 2,
  py: 2,
  color: 'inherit',
  textDecoration: 'none',
  fontSize: 1,
  fontWeight: 'bold',
  '&.active': {
    color: 'primary'
  }
}

export default ({ href, children, ...props }) => {
  const isExternal = isAbsoluteURL(href || '')

  if (isExternal) {
    return (
      <a {...props} href={href} sx={styles}>
        {children}
      </a>
    )
  }

  const to = props.to || href

  return (
    <Link {...props} to={to} sx={styles} activeClassName="active">
      {children}
    </Link>
  )
}
