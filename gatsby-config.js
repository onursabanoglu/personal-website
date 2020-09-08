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
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-postcss`,
  ]
}
