const path = require('path')

module.exports = _config => {
  return {
    __experimentalThemes: ['gatsby-theme-system'],
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `posts`,
          name: `posts`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `notes`,
          name: `notes`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(process.cwd(), `pages`)
        }
      },
      `gatsby-plugin-meta-redirect`,
      'gatsby-plugin-og-image'
    ]
  }
}
