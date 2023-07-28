import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import medLogo from "../assets/medLogo.png"
import "../styles/navbar.css"


const Navbars = () => {
  return (
    <div className='nave'>
     <Navbar expand="lg" className="bg-body-light nav">
      <Container className='d-flex justify-content-around'>
        <Navbar.Brand className=' fs-4 fw-bold'>
          <img src={medLogo} alt="logo" className='logo' />

        </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
        <Navbar.Collapse id="basic-navbar-nav" className='block mx-auto text-center my-1 '>
          <Nav className="ms-auto">
           
                <Link to ='/' className='text-decoration-none my-1 mx-3 hom'>Home</Link>
           
                <Link to='/About' className='text-decoration-none text-center  my-1  mx-3 other' >About</Link>
                <Link to ='/ContactS' className='text-decoration-none text-center  my-1 mx-3 other'>Contact</Link>
           
                <Link to='/Services' className='text-decoration-none text-center my-1  mx-3 other' >Services</Link>
          </Nav>

          <Nav className="ms-auto">
           
                <Link to ='/Log' className='text-decoration-none my-1   mx-3 hom'>Login</Link>
           
                <Link to='/Sign'  >
                <button  id="up">Signup</button>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Navbars;

