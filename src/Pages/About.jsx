import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Bannerabt from '../Components/Bannerabt'
import Secabt from '../Components/Secabt'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='back'>
      <Bannerabt />
      <Secabt/>
        <Footer />
        </div>
    </div>
  )
}

export default About