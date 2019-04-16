import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'

export default ({ projects }) => (
  <Layout>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <Link to={project.frontmatter.path}>{project.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)
