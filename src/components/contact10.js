import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact10-container2">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: 'Contact Us',
  location2Description: 'Email: info@residentialconstruction.com',
  location1: 'Granados General Contractor LLC',

  location1ImageSrc:
    'https://images.unsplash.com/photo-1706720097169-b4120bb97a30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Office Location',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1719328860646-0ed3e7891582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2: 'Phone: 269-369-0615',
  location1Description: '2205 Holly St, Benton Harbor, MI, 49022',
  location2ImageAlt: 'image2Alt',
}

Contact10.propTypes = {
  heading1: PropTypes.string,
  location2Description: PropTypes.string,
  location1: PropTypes.string,
  content1: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.string,
  location1Description: PropTypes.string,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
