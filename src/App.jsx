
import './App.css'


import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import About from  './pages/About';
import HouseList from './components/HouseList'

function App() {
  return (
    <div className='app-container'>

    <Navbar/>

    <HouseList />
    
    <Sidebar>
    <Home />
    <About />
    </Sidebar>

    <Footer />
    </div>
  )
}

export default App


