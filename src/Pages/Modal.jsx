import React from 'react'
import bell from "../assets/bell.png";
import { Link } from "react-router-dom"; 
import "../styles/Modal.css";

const Modal = () => {
  return (
    <div>
      <div className="container mo">
        <div className='mod rounded-top'><h3>Appointment Successful!</h3></div>
        <div className='moda'><img src={bell} alt="" /> <p>Go back to home page</p></div>
        <div className='h'><hr /></div><br />
        
        <button><Link to= "/" className='text-decoration-none text-white'>Continue</Link></button>
      </div>
    </div>
  )
}

export default Modal