
import './App.css'


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home';
import About from  './pages/About';
import HouseList from './components/HouseList/HouseList'



function App() {
  return (
    <div className='app-container'>

    <Navbar/>

    <div className='main-content'>

    <HouseList />
  
    <Sidebar>
    <Home />
    <About />
    </Sidebar>
    </div>

    <Footer />
    </div>
  )
}

export default App


