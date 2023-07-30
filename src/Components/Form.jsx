
import "../styles/Form.css";

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!phone) {
      errors.phone = 'Phone number is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      
      console.log('Form submitted:', { name, phone, email, message });

      
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="container wholeform">
      <div>
        <h3>Send us a message</h3>
      </div>

      <form onSubmit={handleSubmit} className="name">
        <div className="d-flex np">
          {errors.name && <div className="error">{errors.name}</div>}
          <div className="form-group">
            
            <input
              type="text"
              id="name"
              placeholder="Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {errors.phone && <div className="error">{errors.phone}</div>}
          <div className="form-group">
            
            <input
              type="tel"
              id="phone"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {errors.email && <div className="error">{errors.email}</div>}
        <div className="form-group mess">
          
          <input
            type="email"
            id="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mebu">
        <div className="form-group">
          
          <textarea
            id="message"
            rows={3}
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

          <button type="submit">Send Message</button>
          </div>
      </form>
    </div>
  );
};

export default ContactForm;
