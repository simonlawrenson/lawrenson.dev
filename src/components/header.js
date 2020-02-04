import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Navigation from "./navigation"

export default() => 
  <header className="header">
    <div className="container container-logo">
      <div className="col col-logo">
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
      <Navigation />
    </div>
  </header>