import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import './navbar8.css';

const Navbar8 = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kgclkjg', // Replace with your EmailJS Service ID
        'template_xckqknt', // Replace with your EmailJS Template ID
        e.target,
        'z4cWuirrneV0R_sif' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setIsModalOpen(false);
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );
  };

  return (
    <header className="navbar8-container">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        {/* Navbar Content */}
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links">
            <span
              className="thq-body-small thq-link"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {props.link1}
            </span>
          </nav>
          <div className="navbar8-buttons">
            <button
              className="navbar8-action2 thq-button-outline thq-button-animated"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="thq-body-small">Email Us</span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon04">
            <path d="M128 554.667h768c23.552 0 42.667-19.115..."></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          {/* Mobile menu content */}
          <nav className="navbar8-links1">
            <span
              className="thq-body-small thq-link"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsModalOpen(false);
              }}
            >
              {props.link1}
            </span>
          </nav>
          <div className="navbar8-buttons1">
            <button
              className="thq-button-filled"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="thq-body-small">Email Us</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Contact Us</h2>
            <form id="contact-form" onSubmit={sendEmail}>
  <label>
    Your Name:
    <input type="text" name="from_name" required />
  </label>
  <label>
    Your Email:
    <input type="email" name="user_email" required />
  </label>
  <label>
    Subject:
    <input type="text" name="subject" required />
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Send Message</button>
</form>

          </div>
        </div>
      )}
    </header>
  );
};

Navbar8.defaultProps = {
  link1: 'Home',
  logoAlt: 'Logo',
};

Navbar8.propTypes = {
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
};

export default Navbar8;
