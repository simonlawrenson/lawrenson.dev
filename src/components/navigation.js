import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"


function Navigation () {
  
  const [isExpanded, toggleExpansion] = useState(false)
  
  return (
    <div className={`${ isExpanded ? `nav-open` : `nav-closed` } col col-navigation`}>
      <button className="navigation-toggler" type="button" data-toggle="offcanvas" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" onClick={() => toggleExpansion(!isExpanded)} >
        <span></span>
      </button>
      <nav className="navigation">
        <AniLink cover
          to="/tech"
          direction="right"
          duration={1}
          bg="#ff414e"
          activeClassName="active"
          >Tech stack</AniLink>
        <AniLink cover
          to="/projects"
          direction="right"
          duration={1}
          bg="#ff414e"
          activeClassName="active"
          >Projects</AniLink>
        <AniLink cover
          to="/contact"
          direction="right"
          duration={1}
          bg="#ff414e"
          activeClassName="active"
          >Get in touch</AniLink>
      </nav>
    </div>
  )
}
export default Navigation