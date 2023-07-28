import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Bannercontact from '../Components/Bannercontact'
import Form from "../Components/Form"
import Subform from '../Components/Subform'

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className='back'>
        <Bannercontact />
        <div className='adj'>
          <Form />
        </div>
        <div>
          <Subform/>
          <Footer />
          </div>
      </div>
      
    </div>
  )
}

export default Contacts