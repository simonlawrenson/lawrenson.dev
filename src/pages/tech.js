import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink" 

export default({ data }) => (
  <Layout>
    <SEO
      title="Tech"
      description="I work with a number of platforms to ensure you're provided with the most suitable solution."
    />
    <div className="container container-tech">
      <div className="col page-intro">
        <h1>Tech.</h1>
        <p>Utilising a variety of technologies, frameworks and platforms to deliver results!</p>
        <p>Lets find the one that works for you.</p>  
        <AniLink cover
          to="/contact"
          direction="right"
          duration={1}
          bg="#ff414e"
          className="btn"
          >Let's chat!</AniLink>
      </div>
      <div className="col">
        <div className="tech-list-container">
          <Img fluid={data.imageCraft.childImageSharp.fluid} />
          <h3 className="tech-label">Craft CMS,</h3>
          <Img fluid={data.imageGatsby.childImageSharp.fluid} />
          <h3 className="tech-label">Gatsby,</h3>
          <Img fluid={data.imageLaravel.childImageSharp.fluid} />
          <h3 className="tech-label">Laravel,</h3>
          <Img fluid={data.imageShopify.childImageSharp.fluid} />
          <h3 className="tech-label">Shopify,</h3>
          <Img fluid={data.imageWordpress.childImageSharp.fluid} />
          <h3 className="tech-label">WordPress.</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    imageCraft: file(relativePath: { eq: "tech-logos/logo-craftcms-white.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageGatsby: file(relativePath: { eq: "tech-logos/logo-gatsby-white.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageLaravel: file(relativePath: { eq: "tech-logos/logo-laravel-white.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageShopify: file(relativePath: { eq: "tech-logos/logo-shopify-white.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageWordpress: file(relativePath: { eq: "tech-logos/logo-wordpress-white.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`