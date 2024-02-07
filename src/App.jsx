
import './App.css'

import { Route, Routes } from "react-router-dom";

import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import HouseList from './components/HouseList/HouseList'
import HouseDetails from './components/HouseList/HouseDetails';


function App() {
  return (
    <div className='app-container'>

    <Navbar/>

    <div className='main-content'>

    <Routes>
        <Route path="/" element={<HouseList />} />
        <Route path="/house/:houseId" element={<HouseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>
  
    <Sidebar>
    
    </Sidebar>
    </div>

    <Footer />
    </div>
  )
}

export default App


