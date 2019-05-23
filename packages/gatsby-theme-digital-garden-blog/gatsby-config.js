const path = require(`path`)

module.exports = config => {
  return {
    __experimentalThemes: [],
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: config.posts || `posts`,
          name: `posts`
        }
      }
    ]
  }
}
