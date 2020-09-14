module.exports = {
  siteMetadata: {
    title: `Onur Sabanoglu`,
    titleTemplate: "%s · The Real Hero",
    description: `Programmer of boxes`,
    url: 'https://onursabanoglu.com/',
    author: "Onur Şabanoğlu",
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
          },
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript"},
              showLineNumbers: true,
            }
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Onur Şabanoğlu',
        short_name: 'Ai',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`
  ]
}
