# 🌻 [WIP] Digital Garden

Digital Garden is a content-first project meant to make it easier to
write and curate content on the web. This is a project I've built for
myself but hope it can be useful for other folks looking to create
their own gardens that leverage the _open_ web. You can use components
in your content seamlessly using [MDX][] which is rad for writing.

## Motivation

I was inspired by [numerous posts](#related) that struck a chord.
At the time of writing this I had roughly 100 WIP blog posts and essays
that were sitting, hidden in a local directory: `~nt`.

With a nice digital garden, content can be fun again. With [MDX][] you can
now write dynamic and immersive content that can _show_ rather than _tell_.
I've found myself writing a lot more, and want to make it easy as hell to
share that content with the community. With a digital garden I can share
thoughts with folks without having to copy pasta the material to a GitHub
Gist.

## Installation

Install the libraries that are needed:

```sh
yarn add gatsby gatsby-theme-digital-garden react react-dom
```

## Usage

Create a `gatsby-config.js` that uses the `gatsby-theme-digital-garden`
theme:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {}
    }
  ]
}
```

### Project structure

```txt
site
├── gatsby-config.js
├── package.json
├── pages
│   └── index.md
│   └── contact.md
├── posts
│   └── my-first-post.md
└── wiki
    ├── music
    │   └── list.md
    └── thoughts
        ├── thoughts-1.md
        └── thoughts-2.md
```

### Ordering your content

__:warning: Not yet implemented__

Only the journal feature uses chronological order by default since it's meant
to be a long running diary of ideas. The posts and wiki categories default
to alphabetical but allow for you to set a priority. The priority key is used
to sort. The higher priority number wins.

```txt
---
title: My wiki page
priority: 9999
---
```

## 🛰 Future

This project is nowhere close to completed. There are numerous
things on the horizon like:

- Content ordering
- Wiki index page
- Typography theming
- Layout theming
- Custom colors
- Projects section (portfolio)
- Post archive

## Built with

- [MDX][]
- [Gatsby][]
- [gatsby-theme-system][]

## Related

These following posts served as an inspiration to start this project.

- https://joelhooks.com/digital-garden
- https://stackingthebricks.com/how-blogs-broke-the-web/
- https://tomcritchlow.com/2019/02/17/building-digital-garden/

[mdx]: https://mdxjs.com

[gatsby]: https://gatsbyjs.org

[gatsby-theme-system]: https://gatsby-themes.now.sh
