
import './App.css'


import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import About from  './pages/About';

function App() {
  return (
    <>
    <Navbar />  
    
    <Sidebar>
    <Home />
    <About />
     
    </Sidebar>

    <Footer />
    </>
  )
}

export default App
