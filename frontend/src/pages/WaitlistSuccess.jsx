import React from 'react'
import { Link } from 'react-router-dom'; 
import LimitedNavbar from '../components/LimitedNavbar';
import Footer from '../components/Footer';
import success_animation from "../assets/success_animation.gif"; 


const WaitlistSuccess = () => {
  return (
    <div className = "w-screen"> 
    <LimitedNavbar />
    <div className = "w-full border-t-2 mt-3">   
        <div className="container mx-auto mt-20"> 
            <h2 className="text-2xl md:text-4xl text-center font-bold font-sora"><span className = "text-primary-green">Successfully</span> Registered</h2>
            <h3 className = "text-2xl text-center font-semibold font-inter my-6 tracking-widest">in Waitlist</h3>

            <div className = "mx-auto flex justify-center max-w-md my-10"> 
                {/* <iframe src="https://lottie.host/embed/71ad1c0c-810e-4a19-a4d1-faa24683e3ed/LGfcu8xyXc.json" frameBorder="0" className = "aspect-video w-full"></iframe> */}
                <img src={success_animation} alt="" className = " w-full" /> 
            </div>

            <div className = "">
                <div>
                  <p className = "text-lg sm:text-xl text-center font-semibold my-10">
                    Congratulations!<br />  
                    Great work. We'll update once the projects are Live
                  </p>
                </div> 
            </div>

            <div className = "">
                <Link to = "/"><p className = "text-xl sm:text-2xl text-center font-semibold underline my-10">&lt; Go Back to <span className = "text-primary-green text-2xl sm:text-3xl">Home</span></p></Link>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default WaitlistSuccess; 
