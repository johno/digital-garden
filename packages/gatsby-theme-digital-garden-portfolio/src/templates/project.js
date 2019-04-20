import { graphql } from 'gatsby'
import Project from '../components/project'

export default Project

export const pageQuery = graphql`
  query($id: String!) {
    project: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        image
      }
      body
    }
  }
`
