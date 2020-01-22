import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

export default ( props ) => (
  <div className="col">
    <div className="project-tech-title">
      <h2>{props.name}</h2>
      <p><span className="spacer">|</span>
        <a href={props.domain} style={{display:'inline-block'}} title="Visit site" rel="nofollow noopener noreferrer" target="_blank">
          Visit <FontAwesomeIcon icon={['far', 'link']} />
        </a>
      </p>
    </div>
    <div className="project-component-container">
      <div className="col col-gutter-right">
        <img src={ props.img } alt={ props.name + " project preview" } />
      </div>
      <div className="col col-gutter-left ">
        <h3 className="project-tech">Tech:</h3>
        <p className="project-tech-list">{ props.cms }</p>
        <p className="project-tech-list">{ props.js }</p>
        <p className="project-tech-list">{ props.design }Design: <a href={ props.designLink } title="Visit site" rel="nofollow noopener noreferrer" target="_blank">{ props.designText }</a></p>
        <p className="project-tech-list">Awards: <a href={ props.awardLink } title="Visit site" rel="nofollow noopener noreferrer" target="_blank">{ props.awardText }</a></p>
        <a href="/next-project" className="project-next" title="Next project">Next project <FontAwesomeIcon icon={['far', 'long-arrow-alt-right']} /></a>
      </div>
    </div>
  </div>
)