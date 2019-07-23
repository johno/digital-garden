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
        header: {
          home: {
            href: '/',
            label: 'Digital Garden'
          },
          links: [
            {
              href: '/txt',
              label: 'Notes'
            }
          ]
        },
        postsPath: '/writing',
        notesPath: '/txt'
      }
    }
  ]
}
