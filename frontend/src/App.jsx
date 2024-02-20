import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup" 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from './pages/Login';
import FakeLogin from './pages/fakelogin';
import WaitlistSuccess from './pages/WaitlistSuccess';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Routes>
      <Route path = "/" element = {<Home />} />  
      <Route path = "/signup" element = {<Signup />} />
      {/* <Route path = "/login" element = {<Login />} />  */} 
      <Route path = "/login" element = {<FakeLogin />} /> 
      <Route path = "/waitlist-success" element = {<WaitlistSuccess />} />
      <Route path = "/about" element = {<About />} />
    </Routes>
  </>    

  )
}

export default App
