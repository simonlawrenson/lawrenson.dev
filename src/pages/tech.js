import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink" 

export default() => (
  <StaticQuery
    query={graphql`
      query {
        imageIss : file(relativePath: { eq: "tech-logos/logo-craftcms.svg"}) {
          publicURL
        }
      }
    `}
    render={data => (
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
              <h3 className="tech-label">Craft CMS,</h3>
              <h3 className="tech-label">Gatsby,</h3>
              <h3 className="tech-label">Laravel,</h3>
              <h3 className="tech-label">Shopify,</h3>
              <h3 className="tech-label">WordPress.</h3>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
)
