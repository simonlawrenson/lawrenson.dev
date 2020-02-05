/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your SEO config here */
  siteMetadata: {
    title: `Melbourne Freelance Web Developer`,
    siteUrl: `https://lawrenson.dev`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'techlogo',
        path: `${__dirname}/src/images/tech-logos`,
      }
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/tech-logos/`
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NKDTPTC",
        
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
