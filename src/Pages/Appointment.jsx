import React from 'react'
import Appnavbar from '../Components/Appnavbar'
import Footer from '../Components/Footer'
import Appbody from '../Components/Appbody'

const Appointment = () => {
  return (
    <div>
      <Appnavbar />
      <div className="back">
      <Appbody/>
        <Footer />
        </div>
    </div>
  )
}

export default Appointment