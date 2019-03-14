import React from "react"
import { Link } from "gatsby"
import isPresent from "is-present"

import { Box } from '../components/ui'

export default ({ pathContext: { groupedNotes, urls } }) => (
  <>
    {isPresent(groupedNotes) && (
      <>
        <h3>Categories</h3>
        <Box py={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.entries(groupedNotes).map(([key, value]) => (
            <Box w={[1, 2, 2]} p={3} key={key} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://icon.now.sh/folder" alt="folder" style={{ marginRight: '4px' }} />
              <Link to={value[0].pagePath}>{key}</Link>
            </Box>
          ))}
        </Box>
        <hr />
      </>
    )}
    <h3>List</h3>
    <ul>
      {urls.map(url => <li key={url}><Link to={url}>{url}</Link></li>)}
    </ul>
  </>
)
