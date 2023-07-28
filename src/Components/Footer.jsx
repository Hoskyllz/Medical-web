import React from 'react'
import "../styles/Footer.css";
import medLogo from "../assets/medLogo.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"


const Footer = () => {
  return (
      <footer>
          <div>
              <div className="container side">
                  <div className='sideone'>
                        <div className='social2'>
                          <a href=""><img src={twitter} alt="" /></a>
                          <a href=""><img src={facebook} alt="" /></a>
                          <a href=""><img src={instagram} alt="" /></a>
                      </div>
                      <img className='sider' src={medLogo} alt="" />
                      <p className='ac'>Access to medical services with Certified Medical <br /> Consultants on Medkit.</p>
                      <p>Contact@medkit.com</p>
                      <p>(233) 678-0202</p>
                      <div className='social'>
                          <a href=""><img src={twitter} alt="" /></a>
                          <a href=""><img src={facebook} alt="" /></a>
                          <a href=""><img src={instagram} alt="" /></a>
                      </div>
                  </div>
                  <div className="spread">
                      <div className='ro'>
                          <a href="" className='text-decoration-none text-white'><h5>Information</h5></a>
                          <a href=""className='text-decoration-none text-white' ><p>Blog</p></a>
                          <a href=""className='text-decoration-none text-white'><p>Special Offers</p></a>
                          <a href=""className='text-decoration-none text-white'><p>F.A.Q</p></a>
                          <a href=""className='text-decoration-none text-white'><p>Privacy Policy</p></a>
                          <a href="" className='text-decoration-none text-white'><p>Terms and Conditions</p></a>
                      </div>
                      <div className='ro'>
                          <a href=""className='text-decoration-none text-white' ><h5>Quick Links</h5></a>
                          <a href="" className='text-decoration-none text-white'><p>Our Doctors</p></a>
                          <a href=""className='text-decoration-none text-white '><p>Book an Appointment</p></a>
                          <a href=""className='text-decoration-none text-white'><p>Free Consultation</p></a>
                      </div>
                      <div className='ro'>
                          <a href=""className='text-decoration-none text-white'><h5>Company</h5></a>
                          <a href=""className='text-decoration-none text-white'><p>About Us</p></a>
                          <a href=""className='text-decoration-none text-white'><p>Help Center</p></a>
                          <a href=""className='text-decoration-none text-white'><p>Privacy Policy</p></a>
                      </div>
                  </div>
                  <div className='text-center d-md-none'>
                      <hr />
          <h3>&copy; 2023 All Right Reserved</h3>
          
      </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer