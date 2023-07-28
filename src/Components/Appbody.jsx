
import React, { useState } from 'react';
import blkwyt from "../assets/blkwyt.png";
import { Link } from "react-router-dom";
import "../styles/Appbody.css";

const Appbody = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleRequestAppointment = () => {
   
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setAppointmentDate('');
  };

  return (
    <div className='container d-flex formage'>
      <div className=' container bg-white formpart'>
        <h3>MAKE AN APPOINTMENT</h3>
       
      <form>
        
         <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder='First Name*'
          />
        </div>
      
      <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          required
          placeholder='Last Name*'
          />
        </div>
       
       <div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          required
          placeholder='Phone Number*'
          />
       </div>
       
      <div>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          required
          placeholder="Appointment Date*"
          />
        </div>
       
        
        <button type="submit"  onClick={handleRequestAppointment} > <Link to= "/Modal"className='text-decoration-none text-white'> REQUEST</Link> </button>


        </form>
        </div>
      <div className='imgpart'>
        <img src={blkwyt} alt="" />
      </div>
    </div>
  );
};

export default Appbody;
