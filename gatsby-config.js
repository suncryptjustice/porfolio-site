module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'React go',
      short_name: 'Reactgo',
      start_url: '/',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone',
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  ],
  pathPrefix: "/portfolio-site"
};
