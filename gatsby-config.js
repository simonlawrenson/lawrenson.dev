/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your SEO config here */
  siteMetadata: {
    title: `Melbourne Freelance Web Developer`,
    titleTemplate: `%s | Simon Lawrenson`,
    title: `%s | Simon Lawrenson`,
    description: `Melbourne based freelance Web Developer focused on crafting beautifully functional sites`,
    url: "https://www.lawrenson.dev", // No trailing slash allowed!
    image: "/images/headshot/simon-headshot.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@simon_lawrenson",
    author: `@simonlawrenson`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-transition-link`,
  ],
}
