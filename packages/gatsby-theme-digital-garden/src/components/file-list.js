import React from 'react'
import { Link } from 'gatsby'

export default ({ files }) => (
  <ul>
    {files.map(url => (
      <li key={url}>
        <Link to={url}>{url}</Link>
      </li>
    ))}
  </ul>
)
