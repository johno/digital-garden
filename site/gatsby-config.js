module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {
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
  ],
  siteMetadata: {
    title: 'Digital Garden',
    email: 'johnotander@gmail.com',
    social: {
      twitter: '4lpine',
      github: 'johno'
    }
  }
}
