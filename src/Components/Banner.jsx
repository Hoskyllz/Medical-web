import React from "react";
import { Link } from "react-router-dom";
import maleDoc from "../assets/maleDoc.png";
import "../styles/banner.css"

const Banner = () => {
  return (
    <div className="container">
      <div className="block">
        <div className="flex ">
          <div className="maledoc">
            <img src={maleDoc} alt={maleDoc} />
          </div>
          <div className="container get">
           
            <h4>Get Access to Quick And <br /> Confidential Medical Services</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper <br />
              nullam lacus tristique diam. Nulla sed rhoncus cras neque <br />
              pulvinar. Pretium et adipiscing sociis commodo sit sem. <br />
              fusce vel facilisis pellentesque aliquam elentum. Massa <br />
              morbi phasellus viverra nisi id.
            </p>
            <button className="start ">Get Started</button>
          </div>
        </div>

        <div className="container dr">
           <div id="raj">
           <h4>Dr Raj Spencer</h4>
           <p>Consultant</p>
            <Link to= "/Appointment"><button >Book Appointment</button></Link> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
