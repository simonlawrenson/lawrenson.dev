import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"

export default({ data }) => (
  <Layout>
    <SEO
      title="Tech"
      description="I work with a number of platforms to ensure you're provided with the most suitable solution."
    />
    <div className="container container-tech">
      <div className="col page-intro">
        <h1>Tech.</h1>
        <p>I have utilised a number of technologies, frameworks and platforms.</p>
        <p>Lets find the one that works for you.</p>
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
)