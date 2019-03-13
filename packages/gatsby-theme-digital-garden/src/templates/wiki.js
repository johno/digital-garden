import { graphql } from 'gatsby'

import Wiki from '../components/wiki'

export default Wiki

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
