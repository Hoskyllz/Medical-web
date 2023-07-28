import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Login.css";
import medLogo from "../assets/medLogo.png";
import drblak from "../assets/drblak.png";
import gmail from "../assets/gmail.png";
import facebookcolo from "../assets/facebookcolo.png";
import linkedincolo from "../assets/linkedincolo.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (
      formData.fullName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }


    if (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.password.trim().length >= 8
    ) {
      return <Redirect to="/landing-page" />;
    }
  };

  return (
    <div className="login-container">
      
          <div className="login-form">
              <div>
                  <div className="Loglogo"> <img src={medLogo} alt="" /></div>
                  <div className="logmed"><h3>Create an Account</h3></div>
                  <div className="socalcolo">
                      <a href=""><img src={facebookcolo} alt="" /></a>
                      <a href=""><img src={gmail} alt="" /></a>
                      <a href=""><img src={linkedincolo} alt="" /></a>
                  </div>
                  <p className="oradd">Or use your email address:</p>
              </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Min 8 characters"
            />
          </div>
          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button text-white text-decoration-none">
            <span>Sign Up</span>
          </button>
          <p>
            Already a user? <Link to="/login" className="text-decoration-none lb" >Log In</Link>{" "}
          </p>
        </form>
      </div>
            <div className="login-image">
        <img src={drblak} alt="Your Image" />
      </div>
    </div>
  );
};

export default SignUp;
