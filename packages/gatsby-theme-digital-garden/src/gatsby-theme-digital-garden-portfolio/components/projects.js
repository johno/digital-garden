import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import Layout from '../../components/layout'

export default ({ projects }) => (
  <Layout>
    <ul
      css={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'stretch'
      }}
    >
      {projects.map(project => (
        <li
          key={project.id}
          css={{
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: 256,
            padding: 32
          }}
        >
          <Link
            to={project.frontmatter.path}
            css={theme => ({
              display: 'block',
              color: 'inherit',
              textDecoration: 'none'
            })}
          >
            <Styled.img src={project.frontmatter.image} />
            <Styled.h3>{project.frontmatter.title}</Styled.h3>
            <Styled.p>{project.frontmatter.title}</Styled.p>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
