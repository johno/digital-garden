import React from 'react'

import DirectoryList from './directory-list'
import FileList from './file-list'
import Breadcrumbs from './breadcrumbs'
import Layout from './layout'
import { SEO } from './seo'
import getOptions from '../get-options'

export default ({ directories, files, breadcrumbs = [] }) => {
  const breadcrumbsPath =
    breadcrumbs.length > 0
      ? ` | ${breadcrumbs.map(i => i.name).join(' | ')}`
      : ''
  const notesTitle = getOptions().notesPath
    ? `${getOptions().notesPath.slice(1)}${breadcrumbsPath}`
    : `Notes${breadcrumbsPath}`
  return (
    <Layout>
      <SEO title={notesTitle} />
      {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
      <DirectoryList directories={directories} />
      <FileList files={files} />
    </Layout>
  )
}
