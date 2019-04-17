const path = require('path')
const mkdirp = require('mkdirp')
const Debug = require('debug')
const pkg = require('./package.json')

const debug = Debug(pkg.name)

const Project = require.resolve('./src/templates/project')
const Projects = require.resolve('./src/templates/projects')

exports.createPages = async ({ graphql, actions }, opts) => {
  const { createPage } = actions
  const { projectsPath = '/work' } = opts

  const toProjectsPath = node => {
    const { dir } = path.parse(node.parent.relativePath)
    return path.join(projectsPath, dir, node.parent.name)
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
    throw new Error(`Could not query projects`, result.errors)
  }

  const { mdxPages } = result.data
  const projects = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === 'projects'
  )

  // Create projects pages
  projects.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path || toProjectsPath(node),
      context: node,
      component: Project
    })
  })

  createPage({
    path: projectsPath,
    component: Projects
  })
}

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState()

  const dirs = [path.join(program.directory, opts.projects || `projects`)]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    mkdirp.sync(dir)
  })
}
