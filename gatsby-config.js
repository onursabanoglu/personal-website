module.exports = {
  siteMetadata: {
    title: `Onur Sabanoglu`,
    description: `Onur Sabanoglu Personal Website`,
    author: `Onur Sabanoglu`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              linkImagestoOrginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-postcss`,
  ]
}
