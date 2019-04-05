const path = require(`path`)

module.exports = config => {
  const plugins = []

  return {
    __experimentalThemes: [],
    plugins: [
      ...plugins,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: config.posts || `posts`,
          name: `posts`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(process.cwd(), `pages`)
        }
      }
    ]
  }
}
