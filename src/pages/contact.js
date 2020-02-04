import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

export default () => (
  <Layout>
    <SEO
      title="Get in touch"
      description="Fill out the form to start your journey to the next level."
    />
    <div className="container container-contact">
      <div className="col page-intro">
        <h1>Get in touch.</h1>
        <p>If you'd like to work together or you just have a general question, feel free to get in touch.</p>
      </div>
      <div className="col col-gutter-right">
        <ContactForm></ContactForm>
      </div>
    </div>
  </Layout>
)