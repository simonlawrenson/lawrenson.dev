import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

export default ( props ) => (
  <div className={"project-slide " + props.class}>
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
        <Img fluid={ props.img } />
      </div>
      <div className="col col-gutter-left ">
        <h3 className="project-tech">Tech:</h3>
        <p className="project-tech-list" style={{display: !props.cms && "none"}}>{ props.cms }</p>
        <p className="project-tech-list" style={{display: !props.js && "none"}}>{ props.js }</p>
        <p className="project-tech-list" style={{display: !props.designLink && "none"}}>Design: <a href={ props.designLink } title="Visit site" rel="nofollow noopener noreferrer" target="_blank">{ props.designText }</a></p>
        <p className="project-tech-list" style={{display: !props.awardLink && "none"}}>Awards: <a href={ props.awardLink } title="Visit site" rel="nofollow noopener noreferrer" target="_blank">{ props.awardText }</a></p>
      </div>
    </div>
  </div>
)