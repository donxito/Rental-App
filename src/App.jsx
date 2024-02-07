
import './App.css'

import { NavLink, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home';
import About from  './pages/About';
import Contact from  './pages/Contact';
import HouseList from './components/HouseList/HouseList'



function App() {
  return (
    <div className='app-container'>

    <Navbar/>

    <div className='main-content'>

    <HouseList />
  
    <Sidebar>
    <Routes>
        <Route path="/" element={<p>This is the Homepage</p>} />
        <Route path="/about" element={<p>This is the About page</p>} />
        <Route path="/contact" element={<p>This is the Contact page</p>} />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>
    </Sidebar>
    </div>

    <Footer />
    </div>
  )
}

export default App


