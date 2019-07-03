import React from 'react'
import { graphql } from 'gatsby'

import Posts from '../components/posts'

export default ({
  data: {
    allMdx: { edges }
  }
}) => {
  const posts = edges
    .filter(({ node }) => node.parent.sourceInstanceName === 'posts')
    .map(edge => edge.node)

  return <Posts posts={posts} />
}

export const pageQuery = graphql`
  query PostList {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            description
            path
          }
        }
      }
    }
  }
`
