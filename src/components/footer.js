import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

export default() =>
  <footer>
    <div className="container container-footer">
      <div className="col">
        <p>Email: <a href="mailto:hello@lawrenson.dev">hello@lawrenson.dev</a> </p>
      </div>
      <div className="col col-social">
        <p><a href="https://www.linkedin.com/in/simon-lawrenson-ba40b537" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} / ></a> </p>
        <p><a href="https://bitbucket.org/simonlawrenson" target="_blank" rel="noopener noreferrer" title="Bitbucket"><FontAwesomeIcon icon={['fab', 'bitbucket']} / ></a> </p>
      </div>
    </div>
  </footer>