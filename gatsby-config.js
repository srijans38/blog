module.exports = {
  siteMetadata: {
    siteUrl: 'https://blog.srij.dev/',
    title: "Srijan's Blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Srijan\'s Blog',
    //     short_name: 'Srijan\'s Blog',
    //     start_url: '/',
    //   },
    // },
  ],
};
