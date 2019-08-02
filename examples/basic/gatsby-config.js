const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Digital Garden',
    email: 'johnotander@gmail.com',
    social: {
      twitter: '4lpine',
      github: 'johno'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {
        basePath: '/txt',
        contentPath: path.join(__dirname, 'notes')
      }
    }
  ]
}
