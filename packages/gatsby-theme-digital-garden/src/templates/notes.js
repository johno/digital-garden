import React from 'react'
import { Link } from 'gatsby'
import isPresent from 'is-present'
import { Folder } from 'react-feather'

import { Box } from '../components/ui'

export default ({ pathContext: { groupedNotes, urls } }) => (
  <>
    {isPresent(groupedNotes) && (
      <>
        <h3>Categories</h3>
        <Box py={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Object.entries(groupedNotes).map(([key, value]) => (
            <Link to={value[0].pagePath}>
              <Box
                w={[1, 2, 2]}
                p={3}
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Folder style={{ marginRight: '10px' }} />
                <span>{key}</span>
              </Box>
            </Link>
          ))}
        </Box>
        <hr />
      </>
    )}
    <h3>List</h3>
    <ul>
      {urls.map(url => (
        <li key={url}>
          <Link to={url}>{url}</Link>
        </li>
      ))}
    </ul>
  </>
)
