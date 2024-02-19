import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup" 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Routes>
      <Route path = "/" element = {<Home />} />  
      <Route path = "/signup" element = {<Signup />} />
      {/* <Route path = "/login" element = {<Login />} />  */} 
    </Routes>
  </>    

  )
}

export default App
