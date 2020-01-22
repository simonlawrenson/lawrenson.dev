import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import ProjectComponent from "../components/projectComponent"

export default ({ data }) =>
  <Layout>
    <SEO
      title="Projects"
      description="A collection of my previous projects that I've built. Enjoy what you see? Get in touch."
    />
    <div className="container container-projects">
      <div className="col page-intro">
        <h1>Projects</h1>
        <p>These are some of my recent projects</p>
      </div>
      <ProjectComponent
        name="Institute of Somatic Sexology"
        domain="https://instituteofsomaticsexology.com/"
        img={data.file.childImageSharp.fluid.src}
        cms="CMS: WordPress (Sage starter theme by Roots)"
        js="Libraries: GSAP (Anime.js &amp; ScrollMagic)"
        designLink="https://www.behance.net/georgiav134fde"
        designText="Georgia Vincent Design"
        awardLink="https://www.typewolf.com/site-of-the-day/institute-of-somatic-sexology"
        awardText="Typewolf Site of the Day"
        ></ProjectComponent>
    </div>
  </Layout>

export const query = graphql`
  query {
    file(relativePath: { eq: "project-previews/instituteofsomaticsexology.png"}) {
      childImageSharp {
        fluid( maxWidth: 700 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`