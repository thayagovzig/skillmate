import React from 'react'
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

export default function About() {
  return (
    <div className = "w-screen"> 
    <Navbar />
    <div className = "w-full mt-2 pt-10 border-t-2 mb-20">     
        <div className="container mx-auto flex flex-col items-center px-8"> 
            <h2 className = "font-semibold text-2xl text-center font-inter text-grey">Welcome To India's Trusted Portal for Freelancing Jobs.</h2>
            <h2 className = "font-bold text-center text-4xl my-6 text-grey">Skill<span className = "text-primary-green">Mate</span></h2>
            <h2 className = "text-center text-2xl font-semibold text-grey">Where genuine skills meet great job opportunities</h2>

            <p className = "md:text-lg max-w-4xl mt-10">
                Freelancing is fast growing in India with currently, 60% of Indian freelancers are under the age of 30. It is predicted that freelancers will contribute to 50% of the nation’s workforce volumes, and the market size is estimated to touch USD 25 billion by 2025
            </p>

            <p className = "md:text-lg max-w-4xl mt-10"> 
                However, there is a looming gap between skilled people finding the right jobs that suit their talents and for employers in finding quality freelancers who can bring their dreams to life in the best way possible.
            </p>

            <p className = "md:text-lg max-w-4xl mt-10">
                Skillmate rises to bridge this gap and address the growing needs of freelance possibilities in India by building a trustworthy, quality platform that connects employers and freelancers seamlessly.
            </p>

            <h3 className = "text-center font-semibold text-2xl text-slate-800 mt-16 font-inter">Your Search For Quality Freelancing Ends Here!</h3>
        </div>
    </div>
    <Footer />
    </div>
  )
}
