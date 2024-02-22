import React from 'react'
import { Link } from 'react-router-dom'; 
import LimitedNavbar from '../components/LimitedNavbar';
import Footer from '../components/Footer';


 const WaitlistFailed = () => { 
  return (
    <div className = "w-screen"> 
    <LimitedNavbar />
    <div className = "w-full border-t-2 mt-3">   
        <div className="container mx-auto mt-20"> 
            <h2 className="text-2xl md:text-4xl text-center font-bold font-sora"><span className = "text-red-500">Failed to</span> Register</h2>
            <h3 className = "text-2xl text-center font-semibold font-inter my-6 tracking-widest">in Waitlist</h3>

            <div className = "mx-auto flex justify-center max-w-md my-10"> 
            <iframe src="https://lottie.host/embed/a0f10734-0c12-4a2f-8110-5715866f45c3/xzvEFGoQIf.json" className = "aspect-video w-full"></iframe>
            </div>

            <div className = "">
                <Link to = "/"><p className = "text-2xl text-center font-semibold underline mt-10">&lt; Go Back to <span className = "text-primary-green text-3xl">Home</span></p></Link>
                <p className = "text-xl md:text-3xl font-inter font-semibold text-center my-16"><span className = "text-red-500 font-bold">Retry</span> After Sometime</p>
            </div>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default WaitlistFailed; 
