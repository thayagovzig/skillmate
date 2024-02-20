import React from 'react'
import { Link } from 'react-router-dom'; 
import LimitedNavbar from '../components/LimitedNavbar';


export default function WaitlistSuccess() {
  return (
    <div className = "w-screen"> 
    <LimitedNavbar />
    <div className = "w-full border-t-2 mt-3">   
        <div className="container mx-auto mt-20"> 
            <h2 className="text-4xl text-center font-bold font-sora"><span className = "text-primary-green">Successfully</span> Registered</h2>
            <h3 className = "text-2xl text-center font-semibold font-inter my-6 tracking-widest">in Waitlist</h3>

            <div className = "mx-auto flex justify-center max-w-md my-10"> 
                <iframe src="https://lottie.host/embed/71ad1c0c-810e-4a19-a4d1-faa24683e3ed/LGfcu8xyXc.json" frameBorder="0" className = "aspect-video w-full"></iframe>
            </div>

            <div className = "">
                <Link to = "/"><p className = "text-2xl text-center font-semibold underline mt-10">&lt; Go Back to <span className = "text-primary-green text-3xl">Home</span></p></Link>
            </div>
        </div>
    </div>
    </div>
  )
}
