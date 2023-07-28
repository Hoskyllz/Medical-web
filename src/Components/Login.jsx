import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom"; 
import medLogo from "../assets/medLogo.png";
import stella2 from "../assets/stella2.png";
import gmail from "../assets/gmail.png";
import facebookcolo from "../assets/facebookcolo.png";
import linkedincolo from "../assets/linkedincolo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
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

    if (formData.name === "example" && formData.password === "password") {
      
      return <Redirect to="/landing-page" />;
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
          <div className=" login-form">
              <div>
                  <div className="Loglogo"> <img src={medLogo} alt="" /></div>
                  <div className="logmed"><h3>Log In to MedKit</h3></div>
                  <div className="socalcolo">
                      <a href=""><img src={facebookcolo} alt="" /></a>
                      <a href=""><img src={gmail} alt="" /></a>
                      <a href=""><img src={linkedincolo} alt="" /></a>
                  </div>
                  <p className="oradd">Or use your email address:</p>
              </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
                          onChange={handleInputChange}
                          placeholder="elo@techstudio.com"
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

          <p className="red">
            <a href="">Forgot your password?</a>
          </p>
          <button type="submit" className="login-button">
            {" "}
            <Link to="/" className="text-white text-decoration-none">Login</Link>
                  </button>
                  <p>Don’t have an account? <Link to= "/Sign"className="text-decoration-none lb">Sign Up</Link> </p> 
        </form>
      </div>
      <div className="login-image">
        <img src={stella2} alt="Your Image" />
      </div>
    </div>
  );
};

export default Login;
