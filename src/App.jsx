
import './App.css'

import { Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

import HouseList from './components/HouseList/HouseList'



function App() {
  return (
    <div className='app-container'>

    <Navbar/>

    <div className='main-content'>

    <HouseList />
  
    <Sidebar>
    <Routes>
        <Route path="/" element={<HouseList/>} />
        <Route path="/about" element={<h1>This is the About page</h1>} />
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


