const path = require('path')

// Resolve the paths with "src" - root
const resolvePath = (directory) => path.resolve(__dirname, 'src', directory)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        alias: {
          '@components': resolvePath('components'),
          '@content': resolvePath('content'),
          '@pages': resolvePath('pages'),
        },
        extensions: [
          'js',
        ],
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': resolvePath('components'),
          '@content': resolvePath('content'),
          '@pages': resolvePath('pages'),
        },
        extensions: [
          'js',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito+Sans:300,600,800']
        }
      }
    },
  ],
}
