// For sourcing data into your Gatsby application from your local filesystem.
// https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
const sourceFilesystemPlugins = [
  {
    // Keep as first gatsby-source-filesystem plugin for gatsby image support.
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/static/img`,
      name: 'uploads',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/img`,
      name: 'images',
    },
  },
]

// Parses Markdown files using Remark.
// https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
const transformarRemarkPlugins = [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 2048,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static',
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-autolink-headers`],
    },
  },
]

// For full text search implementation based on FlexSearch.js client-side index.
// https://www.gatsbyjs.org/packages/gatsby-plugin-flexsearch/
const flexsearchPlugin = {
  resolve: 'gatsby-plugin-flexsearch',
  options: {
    languages: ['en'],
    type: 'MarkdownRemark',
    fields: [
      {
        name: 'title',
        indexed: true,
        resolver: 'frontmatter.title',
        attributes: {
          encode: 'balance',
          tokenize: 'strict',
          threshold: 6,
          depth: 3,
        },
        store: true,
      },
      {
        name: 'description',
        indexed: true,
        resolver: 'frontmatter.description',
        attributes: {
          encode: 'balance',
          tokenize: 'strict',
          threshold: 6,
          depth: 3,
        },
        store: false,
      },
      {
        name: 'url',
        indexed: false,
        resolver: 'fields.slug',
        store: true,
      },
    ],
  },
}

// https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
const googleAnalyticsPlugin = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: process.env.GA_TRACKING_ID,
  },
}

module.exports = {
  siteMetadata: {
    title: 'mnishiguchi',
    description: `This is Masatoshi Nishiguchi's blog`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    ...sourceFilesystemPlugins,
    // Exposes several image processing functions built on the Sharp image processing library.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
    'gatsby-plugin-sharp',
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
    // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
    'gatsby-transformer-sharp',
    ...transformarRemarkPlugins,
    googleAnalyticsPlugin,
    flexsearchPlugin,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // Remove unused css from css/sass/less/stylus files and modules in your Gatsby project using purgecss.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/global.scss'], // applies purging only on the bulma css file
      },
    },
    // Must be after other CSS plugins
    // https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/
    'gatsby-plugin-netlify', // Make sure to keep it last in the array
  ],
}
