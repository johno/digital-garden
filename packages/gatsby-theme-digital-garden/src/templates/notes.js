import React from 'react'

import Notes from '../components/notes'

export default ({ pathContext: { groupedNotes, urls } }) => (
  <Notes directories={groupedNotes} files={urls} />
)
