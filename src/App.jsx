
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from "./Pages/Landing"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contacts from "./Pages/Contacts"
import Login from "./Pages/Login"
import Sign from "./Pages/Sign"
import Appointment from "./Pages/Appointment"
import Modal from "./Pages/Modal"

function App() {
  

  return (
    
          <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Appointment" element= {<Appointment/>} />
          <Route path= "*" element= {<Modal/>}  />
        </Routes>
      </Router>
   </div>

   
  )
}

export default App
