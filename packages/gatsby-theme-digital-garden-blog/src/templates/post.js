import { graphql } from 'gatsby'

import Post from '../components/post'

export default Post

export const pageQuery = graphql`
  query($id: String!, $title: String) {
    post: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      body
    }
    image: ogImage {
      src(text: $title)
    }
  }
`
