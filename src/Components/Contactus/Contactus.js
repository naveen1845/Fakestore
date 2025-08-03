import React from 'react';
import './Contactus.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>We’d love to hear from you! Reach out to us anytime.</p>

      <div className="contact-details">
        <div className="contact-item">
          <h3>📧 Email</h3>
          <p>support@fakestore.com</p>
        </div>

        <div className="contact-item">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-item">
          <h3>🏢 Address</h3>
          <p>
            123, Market Lane<br />
            Bangalore, Karnataka<br />
            India - 560001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
