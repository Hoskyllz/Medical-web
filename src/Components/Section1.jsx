import React from "react";
import "../styles/Section1.css";
import zigzag from "../assets/zigzag.png";
import ambu from "../assets/ambu.png";
import nurse from "../assets/nurse.png";
import time from "../assets/time.png";
import jay from "../assets/jay.png";
import ajay from "../assets/ajay.png";
import aisha from "../assets/aisha.png";
import stella from "../assets/stella.png";
import call from "../assets/call.png";
import text from "../assets/text.png";
import vid from "../assets/vid.png";




const Section1 = () => {
  return (
    <div>
      <div>
        <div className="container" id="med">
          <h4>MEDKIT SPECIALITIES</h4>
          <img src={zigzag} alt="" />
          <div className="medk">
            <div className="ambulance">
              <div className="ambu">
                <img src={ambu} alt="" />
              </div>
              <h5>FASTEST AMBULANCE</h5>
              <p>
                We provide you with experienced <br /> and highly professional
                doctors <br /> with the aim of providing <br /> exceptional
                care.
              </p>
            </div>
            <div className="nursess">
              <div className="nurse">
                <img src={nurse} alt="" />
              </div>
              <h5>PROFESSIONAL DOCTORS</h5>
              <p>
                We provide you with experienced <br /> and highly professional
                doctors <br /> with the aim of providing <br /> exceptional
                care.
              </p>
            </div>
            <div className="timee">
              <div className="time">
                <img src={time} alt="" />
              </div>
              <h5>BEST SERVICES</h5>
              <p>
                We are committed to providing <br /> healthcare services with
                the <br /> consideration of patients satisfaction. <br /> Our
                patients come first!
              </p>
            </div>
          </div>
        </div>
        <div className="container" id="med">
          <h4>MEET OUT DOCTORS</h4>
          <img src={zigzag} alt="" />
          <div className="medkk">
            <div className="drr">
              <div>
                <img src={jay} alt="" />
              </div>
              <h4>Dr. Jay Stephen</h4>
              <p>Optometrist</p>
              <div className="tcv">
                <img src={text} alt="" />
                <img src={call} alt="" />
                <img src={vid} alt="" />
              </div>
            </div>
            <div className="drr">
              <div>
                <img src={ajay} alt="" />
              </div>
              <h4>Dr. Ajay Verma</h4>
              <p>Gynecologist</p>
              <div className="tcv">
                <img src={text} alt="" />
                <img src={call} alt="" />
                <img src={vid} alt="" />
              </div>
            </div>
            <div className="drr">
              <div>
                <img src={aisha} alt="" />
              </div>
              <h4>Dr. Aisha Joe</h4>
              <p>Paediatrician</p>
              <div className="tcv">
                <img src={text} alt="" />
                <img src={call} alt="" />
                <img src={vid} alt="" />
              </div>
            </div>
            <div className="drr">
              <div>
                <img src={stella} alt="" />
              </div>
              <h4>Dr. Stella Maris</h4>
              <p>General Physician</p>
              <div className="tcv">
                <img src={text} alt="" />
                <img src={call} alt="" />
                <img src={vid} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container patient">
          <h4>Patients Say</h4>
          <div className="ae">
            <div className="a">
              <p>
                “I had a wonderful experience with Medkit. <br /> They ensured
                my health was greatly taken <br /> care of. I highly recommend
                Medkit.”
              </p>
              <h5>Aliya Roll</h5>
            </div>
            <div className="e">
              <p>
                “My treatment was second to none and the <br /> staffs of Medkit
                were polite and caring ” <br />{" "}
              </p>
              <h5> Elo Zona</h5>
            </div>
          </div>
        </div>
          </div>
          <div className="zig">
              <img src={zigzag} alt="" />
              <div className="container zag">
                  <h4>We Operate 24h a day - 7 days a week!</h4>
                  <button>REPORT A PROBLEM</button>
                  
              </div>
          </div>
    </div>
  );
};

export default Section1;
