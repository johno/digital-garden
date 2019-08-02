module.exports = options => {
  const { contentPath = '/notes', basePath = '/notes' } = options

  return {
    plugins: [
      {
        resolve: 'gatsby-theme-notes',
        options: {
          basePath,
          contentPath
        }
      }
    ].filter(Boolean)
  }
}
