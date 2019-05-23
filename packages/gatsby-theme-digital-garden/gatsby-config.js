const path = require('path')

module.exports = options => {
  const { mdx = true, mdxLayouts = {} } = options

  return {
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-notes',
        options: {
          mdx,
          mdxLayouts
        }
      }
    ],
    plugins: [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.resolve(`pages`)
        }
      }
    ]
  }
}
