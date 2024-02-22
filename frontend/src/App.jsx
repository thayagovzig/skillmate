import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup" 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Login from './pages/Login';
import FakeLogin from './pages/fakelogin';
import WaitlistSuccess from './pages/WaitlistSuccess';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import WaitlistFailed from './pages/WaitlistFailed';

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
      <Route path = "/waitlist-failed" element = {<WaitlistFailed />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/blogs" element = {<Blog />} />
      <Route path = "/blog/:id" element = {<BlogPage />} />
    </Routes>
  </>    

  )
}

export default App
