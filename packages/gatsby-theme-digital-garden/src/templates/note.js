import { graphql } from 'gatsby'

import Note from '../components/note'

export default Note

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`
