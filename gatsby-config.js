module.exports = {
  siteMetadata: {
    title: "Srijan's Blog",
    description:
      'Hi! I am Srijan and I write about Web development, life and cooking(maybe).',
    url: 'https://blog.srij.dev',
    siteUrl: 'https://blog.srij.dev',
    image: '/images/srijan.jpg',
    twitterUsername: '@guywithabignose',
    titleTemplate: "%s | Srijan's Blog",
    fbAppId: '167551394831029',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Srijan's Blog",
        short_name: "Srijan's Blog",
        start_url: '/',
        background_color: '#1e2835',
        theme_color: '#1e2835',
        display: 'standalone',
        icon: `src/images/blog-icon.png`,
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-YD9KSLTBG3'],
      },
    },
  ],
};
