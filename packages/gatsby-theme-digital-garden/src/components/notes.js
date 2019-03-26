import React from 'react'

import DirectoryList from './directory-list'
import FileList from './file-list'
import Layout from './layout'

export default ({ directories, files }) => (
  <Layout>
    <DirectoryList directories={directories} />
    <FileList files={files} />
  </Layout>
)
