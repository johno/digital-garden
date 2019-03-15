const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);

const debug = Debug(`gatsby-theme-digital-garden`);

const Post = require.resolve("./src/templates/post");
const Posts = require.resolve("./src/templates/posts");
const Note = require.resolve("./src/templates/note");
const Notes = require.resolve("./src/templates/notes");

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage, createRedirect } = actions;

  const { postsPath = `/posts`, notesPath = "/notes" } = pluginOptions;

  const toNotesPath = node => {
    const { dir } = path.parse(node.parent.relativePath);
    return path.join(notesPath, dir, node.parent.name);
  };

  const result = await graphql(`
    {
      mdxPages: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { draft: { ne: true }, archived: { ne: true } } }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
            frontmatter {
              path
              title
              redirects
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    throw new Error(`Could not query articles`, result.errors);
  }

  const { mdxPages } = result.data;

  // Create pages and redirects
  mdxPages.edges.forEach(({ node }) => {
    const fallbackPath = `/${node.parent.sourceInstanceName}/${
      node.parent.name
    }`;
    const pagePath = node.frontmatter.path || fallbackPath;

    if (
      node.frontmatter.redirects &&
      node.parent.sourceInstanceName === "posts"
    ) {
      // TODO: Handle notes redirects as well
      node.frontmatter.redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true
        });
      });
    }

    if (node.parent.sourceInstanceName === "notes") {
      return createPage({
        path: toNotesPath(node),
        context: {
          ...node,
          title: node.frontmatter.title || node.parent.name
        },
        component: Note
      });
    }

    createPage({
      path: pagePath,
      context: node,
      component: Post
    });
  });

  const notes = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === "notes"
  );

  const notesUrls = notes.map(({ node }) => toNotesPath(node));

  const groupedNotes = notes.reduce((acc, { node }) => {
    const { dir } = path.parse(node.parent.relativePath);

    if (!dir) {
      return acc;
    }

    acc[dir] = acc[dir] || [];
    acc[dir].push({
      pagePath: path.join(notesPath, dir),
      url: toNotesPath(node),
      ...node
    });

    return acc;
  }, {});

  Object.entries(groupedNotes).map(([key, value]) => {
    createPage({
      path: path.join(notesPath, key),
      context: {
        urls: value.map(v => v.url)
      },
      component: Notes
    });
  });

  createPage({
    path: notesPath,
    context: {
      urls: notesUrls,
      groupedNotes
    },
    component: Notes
  });

  createPage({
    path: postsPath,
    component: Posts
  });
};

exports.onPreBootstrap = ({ store }, opts) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, opts.posts || `posts`),
    path.join(program.directory, `pages`),
    path.join(program.directory, opts.notes || `notes`)
  ];

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve(`gatsby-theme-digital-garden`)),
          use: [loaders.js()]
        }
      ]
    }
  });
};
