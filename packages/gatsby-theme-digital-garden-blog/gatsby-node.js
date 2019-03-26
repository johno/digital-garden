const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const Debug = require(`debug`)

const debug = Debug(`gatsby-theme-digital-garden-blog`)

const Post = require.resolve('./src/templates/post')
const Posts = require.resolve('./src/templates/posts')

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage } = actions
  const { postsPath = '/posts' } = pluginOptions

  const toPostsPath = node => {
    const { dir } = path.parse(node.parent.relativePath)
    return path.join(postsPath, dir, node.parent.name)
  }

  const result = await graphql(`
    {
      mdxPages: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
            }
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query posts`, result.errors)
  }

  const { mdxPages } = result.data
  const posts = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === 'posts'
  )

  // Create posts pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path || toPostsPath(node),
      context: node,
      component: Post
    })
  })

  createPage({
    path: postsPath,
    component: Posts
  })
}

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState()

  const dirs = [
    path.join(program.directory, `pages`),
    path.join(program.directory, opts.posts || `posts`)
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      debug(`Initializing ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(
            require.resolve(`gatsby-theme-digital-garden-blog`)
          ),
          use: [loaders.js()]
        }
      ]
    }
  })
}
