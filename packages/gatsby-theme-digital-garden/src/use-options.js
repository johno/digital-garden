import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      sitePlugin(name: { eq: "gatsby-theme-digital-garden" }) {
        pluginOptions {
          path
          name
          notesPath
          postsPath
        }
      }
    }
  `)

  return data.sitePlugin.pluginOptions
}
