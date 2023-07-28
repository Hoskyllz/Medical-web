import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Section from '../Components/Section'
import Section1 from '../Components/Section1'
import Footer from '../Components/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className='back'>
      <Banner />
      <Section />
        <Section1 />
       
        <Footer />
         </div>
    </div>
  )
}

export default Landing