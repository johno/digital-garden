import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      garden(id: { eq: "gatsby-theme-digital-garden-root" }) {
        notesPath
        postsPath
        projectsPath
        projects
      }
    }
  `)

  return data.garden
}
