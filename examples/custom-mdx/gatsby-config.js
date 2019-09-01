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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve('./src/components/layout')
        },
        rehypePlugins: [
          require('rehype-autolink-headings'),
          require('rehype-highlight'),
          require('rehype-slug'),
          require('rehype-toc')
        ]
      }
    },
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {
        mdx: false,
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
