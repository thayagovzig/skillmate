import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";  
import HeroBanner from './components/HeroBanner';
import LandingContent from './components/LandingContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "w-screen">  
      <Navbar /> 
      <Hero />
      <HeroBanner />
      <LandingContent />
    </div> 
  )
}

export default App
