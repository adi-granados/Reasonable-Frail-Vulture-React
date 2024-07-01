import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container1 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal"
          >
            <div className="features24-divider-container">
              {activeTab === 0 && <div className="features24-container2"></div>}
            </div>
            <div className="features24-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 1 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 2 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1585435582425-a0399930ee74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'High-quality materials used in all construction projects',
  feature3ImgAlt: 'Image of personalized construction services',
  feature3Description: 'Customized housing solutions tailored to your needs',
  feature2ImgAlt: 'Image of high-quality construction materials',
  feature3Title: 'Personalized Construction Services',
  feature1Description:
    'Specializing in all aspects of residential construction',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Image of completed residential construction project',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Quality Materials Used',
  feature1Title: 'Expert Residential Construction',
}

Features24.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features24
