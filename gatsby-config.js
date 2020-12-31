module.exports = {
  siteMetadata: {
    title: 'Srijan\'s Blog',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Srijan\'s Blog',
        short_name: 'Srijan\'s Blog',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
