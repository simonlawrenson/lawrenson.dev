import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import ProjectSlider from "../components/projectSlider"

export default () =>
  <Layout>
    <SEO
      title="Projects"
      description="A collection of my previous projects that I've built. Enjoy what you see? Get in touch."
    />
    <div className="container container-projects">
      <div className="col page-intro">
        <h1>Projects.</h1>
        <p>These are some of my recent projects</p>
      </div>
      <div class="col">
        <ProjectSlider />
      </div>
    </div>
  </Layout>
