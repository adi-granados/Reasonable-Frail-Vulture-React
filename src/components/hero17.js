import React from 'react'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

// Import the first 22 local images from your imgs folder
import img1 from '../imgs/15774.jpg';
import img2 from '../imgs/15775.jpg';
import img3 from '../imgs/18010.jpg';
import img4 from '../imgs/20500.jpg';
import img5 from '../imgs/28420.jpg';
import img6 from '../imgs/28422.jpg';
import img7 from '../imgs/28426.jpg';
import img8 from '../imgs/5AF4BBF3-C207-47A9-B28B-270B376D922E.jpg';
import img9 from '../imgs/7a263f9f-0e5a-4716-921f-0a395aa7337c.jpg';
import img10 from '../imgs/D51CE357-FE93-4D41-9F18-59045F5F76DD.jpg';
import img11 from '../imgs/IMG_0961.jpg';
import img12 from '../imgs/IMG_1603.jpg';
import img13 from '../imgs/IMG_1880.jpg';
import img14 from '../imgs/IMG_20200228_175206777_HDR.jpg';
import img15 from '../imgs/IMG_20200228_175210547_HDR.jpg';
import img16 from '../imgs/IMG_20200228_175227934_HDR.jpg';
import img17 from '../imgs/IMG_20200228_175259595_HDR.jpg';
import img18 from '../imgs/IMG_20200228_175311744_HDR.jpg';
import img19 from '../imgs/IMG_20200228_175332716_HDR.jpg';
import img20 from '../imgs/IMG_20200228_175343915_HDR.jpg';
import img21 from '../imgs/IMG_20200228_175403230_HDR.jpg';
import img22 from '../imgs/IMG_20201009_180722625.jpg';

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content">
          <h1 className="hero17-text thq-heading-1">{props.heading1}</h1>
          <p className="hero17-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
      </div>
      <div className="hero17-content1">
        {/* First animated row */}
        <div className="hero17-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img alt={props.image1Alt} src={img1} className="hero17-placeholder-image thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image2Alt} src={img2} className="hero17-placeholder-image01 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image3Alt} src={img3} className="hero17-placeholder-image02 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image4Alt} src={img4} className="hero17-placeholder-image03 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image5Alt} src={img5} className="hero17-placeholder-image04 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image6Alt} src={img6} className="hero17-placeholder-image05 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image7Alt} src={img7} className="hero17-placeholder-image06 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image8Alt} src={img8} className="hero17-placeholder-image07 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image9Alt} src={img9} className="hero17-placeholder-image08 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image10Alt} src={img10} className="hero17-placeholder-image09 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image11Alt} src={img11} className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image12Alt} src={img12} className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1" />
          </div>
        </div>

        {/* Second animated row */}
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img alt={props.image13Alt} src={img13} className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image14Alt} src={img14} className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image15Alt} src={img15} className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image16Alt} src={img16} className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image17Alt} src={img17} className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image18Alt} src={img18} className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image19Alt} src={img19} className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image20Alt} src={img20} className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image21Alt} src={img21} className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image22Alt} src={img22} className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1" />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
  .thq-animated-group-horizontal {
    display: flex;
    animation: scroll-x 20s linear infinite;
  }
  .thq-animated-group-horizontal-reverse {
    display: flex;
    animation: scroll-x 20s linear infinite reverse;
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image1Alt: 'Construction work in progress',
  image2Alt: 'Completed residential project',
  image3Alt: 'Skilled construction team at work',
  image4Alt: 'High-quality materials used in construction',
  image5Alt: 'Modern and innovative designs',
  image6Alt: 'Interior finishing details',
  image7Alt: 'Exterior view of a newly built home',
  image8Alt: 'Happy homeowners in front of their new house',
  image9Alt: 'Architectural plans for a new project',
  image10Alt: 'Landscaping around a residential property',
  image11Alt: 'Customized home features',
  image12Alt: 'Energy-efficient construction practices',
  image13Alt: 'New construction site preparation',
  image14Alt: 'Ongoing project view',
  image15Alt: 'Exterior design showcase',
  image16Alt: 'Finished home interiors',
  image17Alt: 'Newly installed garden',
  image18Alt: 'Bright living room setup',
  image19Alt: 'Backyard renovation',
  image20Alt: 'Detail-oriented construction',
  image21Alt: 'Residential property project',
  image22Alt: 'Finalized home design',
  heading1: 'Granados General Contractor LLC',
  content1: 'Specializing in all aspects of housing constructions',
  action1: 'Our Work'
}

Hero17.propTypes = {
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image13Alt: PropTypes.string,
  image14Alt: PropTypes.string,
  image15Alt: PropTypes.string,
  image16Alt: PropTypes.string,
  image17Alt: PropTypes.string,
  image18Alt: PropTypes.string,
  image19Alt: PropTypes.string,
  image20Alt: PropTypes.string,
  image21Alt: PropTypes.string,
  image22Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string
}

export default Hero17;
