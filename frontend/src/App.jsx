import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";  
import HeroBanner from './components/HeroBanner';
import LandingContent from './components/LandingContent';
import Appraisal from './components/Appraisal';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "overflow-x-hidden w-screen relative">    
      <Navbar /> 
      <Hero />
      <HeroBanner />
      <LandingContent />
      <Appraisal />
      <Footer />
    </div> 
  )
}

export default App
