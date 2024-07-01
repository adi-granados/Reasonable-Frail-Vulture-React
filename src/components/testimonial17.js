import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Position: 'Position, Company name',
  author2Name: 'Jane Smith',
  author4Src:
    'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Author Name',
  review4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Alt: 'Image of John Doe',
  author4Alt: 'image',
  author1Position: 'Homeowner',
  review3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author2Src:
    'https://images.unsplash.com/photo-1519764622345-23439dd774f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Author Name',
  author2Position: 'Real Estate Agent',
  author1Src:
    'https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg1NDE1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: '5 stars',
  content1:
    'Residential Construction Company LLC exceeded all my expectations. The quality of work and attention to detail were exceptional. I highly recommend their services.',
  heading1: 'Client Testimonials',
  author1Name: 'John Doe',
  author3Alt: 'image',
  review1: '5 stars',
  author4Position: 'Position, Company name',
  author2Alt: 'Image of Jane Smith',
}

Testimonial17.propTypes = {
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  review4: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Position: PropTypes.string,
  review3: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author4Name: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  author1Name: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  author4Position: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial17
