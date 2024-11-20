import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.logoAlt}
              className="footer4-logo1"
            />
          </div>
         
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            
            <div className="footer4-footer-links">
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
 
}

Footer4.propTypes = {
 
}

export default Footer4
