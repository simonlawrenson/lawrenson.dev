import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <SEO
      title="Melbourne Freelance Web Developer"
      description="Melbourne based freelance Web Developer focused on crafting beautifully functional sites."
    />
    <div className="container container-welcome">
      <div className="page-intro">
        <h1>Welcome.</h1>
        <p>Hello! I'm Simon, a freelance web developer based in Melbourne.</p>
        <p>I build exceptional websites that provide a high level of flexibility &amp; functionality.</p>
      </div>
    </div>
  </Layout>
)