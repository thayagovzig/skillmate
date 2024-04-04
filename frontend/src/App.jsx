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
import PrivPol from './pages/PrivPol';

function App() {
  

  return (
  <>
    <Routes>
      <Route path = "/" element = {<Home />} />  
      <Route path = "/signup" element = {<Signup />} />
      {/* <Route path = "/login" element = {<Login />} />  */} 
      <Route path = "/login" element = {<FakeLogin />} /> 
      <Route path = "/success" element = {<WaitlistSuccess />} />
      <Route path = "/failed" element = {<WaitlistFailed />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/privacypolicy" element = {<PrivPol />} />
      {/* <Route path = "/blogs" element = {<Blog />} /> */}
      {/* <Route path = "/blog/:id" element = {<BlogPage />} /> */}
    </Routes>
  </>    

  )
}

export default App
