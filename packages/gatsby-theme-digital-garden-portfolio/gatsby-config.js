const path = require('path')
const pkg = require('./package.json')

module.exports = options => {
  return {
    plugins: [
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: options.projects || 'projects',
          name: 'projects'
        }
      }
    ]
  }
}
