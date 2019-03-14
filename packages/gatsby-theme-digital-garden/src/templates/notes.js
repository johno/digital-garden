import React from "react"
import { Link } from "gatsby"

export default ({ pathContext: { urls } }) => (
  <ul>
    {urls.map(url => <li key={url}><Link to={url}>{url}</Link></li>)}
  </ul>
)
