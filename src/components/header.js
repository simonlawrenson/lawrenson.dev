import React from "react"
// import { Link } from "gatsby"
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Navigation from "./navigation"

export default() => 
  <header className="header">
    <div className="container container-logo">
      <div className="col">
        <p className="logo">
        <AniLink cover
      to="/"
      direction="right"
      duration={1}
      bg="
        #ff414e     /* color */
    ">Simon Lawrenson</AniLink>
        </p>
        <p className="tagline">Melbourne based developer.</p>
      </div>
      <div className="col">
        <Navigation />
      </div>
    </div>
  </header>