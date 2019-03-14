import { graphql } from 'gatsby'

import Note from '../components/note'

export default Note

export const pageQuery = graphql`
  query($id: String!, $title: String) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  ogImage {
    src(text: $title)}
  }
`
