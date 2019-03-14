import React from "react"
import { Link } from "gatsby"

import { Box } from '../components/ui'

export default ({ pathContext: { groupedNotes, urls } }) => (
  <>
    {groupedNotes && (
      <>
        <h3>Categories</h3>
        <ul>
          {Object.entries(groupedNotes).map(([key, value]) => (
            <li key={key}><Link to={value[0].pagePath}>{key}</Link></li>
          ))}
        </ul>
        <hr />
      </>
    )}
    <h3>List</h3>
    <ul>
      {urls.map(url => <li key={url}><Link to={url}>{url}</Link></li>)}
    </ul>
  </>
)
