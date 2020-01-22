import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

export default({ props }) => (
  <div className="col tech-component-container">
    <FontAwesomeIcon icon={['fab', props.icon]} />
    <p>{ props.name }</p>
  </div>
)