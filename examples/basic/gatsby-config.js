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
              href: '/writing',
              label: 'Writing'
            },
            {
              href: '/txt',
              label: 'Notes'
            },
            {
              href: '/contact',
              label: 'Contact'
            }
          ]
        },
        notesPath: '/txt'
      }
    },
    {
      resolve: 'gatsby-theme-digital-garden-blog',
      options: {
        postsPath: '/writing'
      }
    },
    {
      resolve: 'gatsby-theme-digital-garden-portfolio',
      options: {
        projectsPath: '/work',
        projects: 'projects'
      }
    }
  ]
}
