import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/projects'

export default ({
  data: {
    allMdx: { edges }
  }
}) => {
  const projects = edges
    .filter(({ node }) => node.parent.sourceInstanceName === 'projects')
    .map(edge => edge.node)

  return <Projects projects={projects} />
}

export const pageQuery = graphql`
  query ProjectList {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            title
            path
            description
            image
          }
        }
      }
    }
  }
`
