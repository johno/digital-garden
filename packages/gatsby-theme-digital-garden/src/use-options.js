import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      notesConfig(id: { eq: "gatsby-theme-notes-config" }) {
        notesPath
        postsPath
      }
    }
  `)

  return data.garden
}
