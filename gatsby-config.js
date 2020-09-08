module.exports = {
  siteMetadata: {
    title: `Onur Sabanoglu`,
    description: `Onur Sabanoglu Personal Website`,
    author: `@10ursabanoglu`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-postcss`
  ]
}
