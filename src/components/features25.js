import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2Title: 'Renovation Services',
  feature3Description:
    'We provide interior design services to enhance the aesthetics and functionality of your living space.',
  feature1ImgAlt: 'Custom Home Construction Image',
  feature3ImgAlt: 'Interior Design Image',
  feature2ImgAlt: 'Renovation Services Image',
  feature3Title: 'Interior Design',
  feature1Title: 'Custom Home Construction',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1684471039942-e5de2f5dc4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'We specialize in building custom homes tailored to your needs and preferences.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1621463678038-8fc7b01d13e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Our team offers renovation services to transform your existing space into your dream home.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1569643352942-035cb4fd2ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE2MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
