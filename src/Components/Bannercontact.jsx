import React from 'react';
import "../styles/Bannercontact.css";
import map from "../assets/map.png";
import num from "../assets/num.png";
import message from "../assets/message.png";
import hours from "../assets/hours.png";
import googlemap from "../assets/googlemap.png";







const Bannercontact = () => {

  

  return (
      <div>
                <section
        id="hero3"
        className="container-fluid d-flex justify-content-center align-items-center"
      >
        <div className="text-center serv">
          <h1 className="my-3">Contact Us</h1>
       </div>
      </section>
      
      <div className=" container fourth">
        <div className="map">
          <img src={map} alt="" />
          <p>1, Ogunlesi str, <br /> onipanu, Lagos.</p>
        </div>
        <div className="num">
          <img src={num} alt="" />
          <p>(233) 768-0202 <br /> (234) 799-1020</p>
        </div>
        <div className="message">
          <img src={message} alt="" />
          <p>www.medkit.com <br />info@medkit.com</p>
        </div>
        <div className="hours">
          <img src={hours} alt="" />
          <p>24 Hours a Day <br />7 Days a Week</p>
        </div>
      </div>
      <div className='googlemap'>
        <img src={googlemap} alt="" />
      </div>

      <div className="container form">
        
    </div>
    </div>
  )
}

export default Bannercontact