
import './App.css'

import { Route, Routes } from "react-router-dom";

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import HouseList from './components/HouseList/HouseList'
import HouseDetails from './components/HouseDetails/HouseDetails';


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
        <Route path="*" element={<NotFound />} />
      </Routes>
  
    <Sidebar>
    
    </Sidebar>
    </div>

    <Footer />
    </div>
  )
}

export default App


