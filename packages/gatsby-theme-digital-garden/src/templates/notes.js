import React from 'react'

import DirectoryList from '../components/directory-list'
import FileList from '../components/file-list'

export default ({ pathContext: { groupedNotes, urls } }) => (
  <>
    <DirectoryList directories={groupedNotes} />
    <FileList files={urls} />
  </>
)
