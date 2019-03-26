const path = require('path')

module.exports = config => {
  const plugins = []

  return {
    __experimentalThemes: ['gatsby-theme-system'],
    plugins: [
      ...plugins,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: config.notes || `notes`,
          name: `notes`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(process.cwd(), `pages`)
        }
      },
      'gatsby-plugin-redirects',
      'gatsby-plugin-og-image'
    ]
  }
}
