import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default()  =>
  <nav className="navigation">
    <AniLink cover
      to="/tech"
      direction="right"
      duration={1}
      bg="
        #ff414e     /* color */
    ">Tech stack</AniLink>
    <AniLink cover
      to="/projects"
      direction="right"
      duration={1}
      bg="
        #ff414e     /* color */
    ">Projects</AniLink>
    <AniLink cover
      to="/contact"
      direction="right"
      duration={1}
      bg="
        #ff414e     /* color */
    ">Get in touch</AniLink>
  </nav>