module.exports = {
  siteMetadata: {
    title: `Chill-Rite Refrigeration & Air-Conditioning Limited`,
    description: `We provide 24 hours services Auckland wide. We do it right the first time. We take pride in what we do and we are very prompt with time. We do: Commercial, Marine, Heat Pump, Air Conditioning, Transport, Programmed Maintenance.`,
    author: `Bryce Kehoe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
