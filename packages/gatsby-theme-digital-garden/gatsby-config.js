const path = require('path')

module.exports = options => {
  const { mdx = true, mdxLayouts = {} } = options

  return {
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-system',
        options: {
          mdx: false
        }
      }
    ],
    plugins: [
      mdx && {
        resolve: 'gatsby-mdx',
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: mdxLayouts
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.notes || `notes`,
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
    ].filter(Boolean)
  }
}
