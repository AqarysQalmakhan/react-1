import banner from './assets/Banner block.png'
import Header from './components/Header.jsx'
import Restaurants from './components/Restaurants.jsx'
import Footer from './components/Footer.jsx'


import './App.css'

function App() {
  return (
    <>
    <Header />
    <img src={banner} alt="" />
    <h2>Our favourite picks</h2>
    <Restaurants />
    <h2>New arrivals</h2>
    <Restaurants />
    <h2>Categories</h2>
    <Footer />
    
    </>
  )
}

export default App
