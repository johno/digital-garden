const path = require('path')

module.exports = _config => {
  const plugins = []

  _config.posts !== false &&
    plugins.push({
      resolve: `gatsby-source-filesystem`,
      options: {
        path: _config.posts || `posts`,
        name: `posts`
      }
    })

  return {
    __experimentalThemes: ['gatsby-theme-system'],
    plugins: [
      ...plugins,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: _config.notes || `notes`,
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
