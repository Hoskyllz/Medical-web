import React from 'react'
import medLogo from "../assets/medLogo.png"

import { Link } from "react-router-dom";

const Appnavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
       
        <Link className="navbar-brand" to="/" id="logo">
          <img src= {medLogo} alt="" />
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                <div class="flex-grow-1"></div>
                
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
         
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className=" link nav-link me-4 fw-bold " to="/Appointment" id="home">
                My Appointment
              </Link>
               </li>
               <li className="nav-item">
              <Link className=" link nav-link me-4 fw-bold text-danger" to="/" id="home">
                Log Out
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Appnavbar