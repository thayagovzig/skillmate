import React from 'react'
import People from "../assets/three peeps.png"; 
import { useRef } from 'react'; 
// import vector_left from "../assets/Vector left.png" 
// import vector_right from "../assets/Vector right.png" 

export default function WhySkillmate() {

  let scrollRef = useRef(null); 

  const scrollToElement = () => {
    if(scrollRef.current.scrollIntoView({behaviour:"smooth"}));  
  } 

  return (
    <div className = "w-full py-8" id = {"whyskillmate"}>   
        <div className="container mx-auto p-2">  
            <h2 className = "text-center text-2xl sm:text-4xl font-bold font-inter mt-3">Why Skill<span className = "text-primary-green">mate?</span></h2>
            <h3 className = "text-lg sm:text-xl font-semibold font-inter text-center mt-4 text-slate-800">Empowering Freelancers, Redefining Success</h3>

            <p className = "text-center font-semibold text-slate-800 mt-3 mb-2 font-lg">At Skillmate, we believe in the extraordinary potential of the freelancers like you. Our platform is not just another marketplace;</p>
            <p className = "text-center font-semibold text-slate-800 font-lg">It's a revolution in the freelancing landscape, Here's why you should make Skillmate your ultimate freelancing companion;</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 mt-16 mb-4 gap-x-6 sm:gap-x-14 px-5">  

            {/* LEFT ARCH */}

              <div className="flex flex-col relative items-center justify-between gap-y-14">  
              <div className="hidden sm:block absolute top-0 bottom-0 left-0 right-0 left-vector-line -z-10"></div>
              <div className="sm:hidden absolute top-0 bottom-0 left-0 w-1/2 border-r-2 border-dashed border-primary-green -z-10"></div>

                {/* <img src={vector_left} alt="" className = "absolute top-[20px] bottom-0 left-0 right-0 object-contain -z-10" /> */}

                <h2 className = "font-bold text-xl text-center sm:text-2xl relative sm:left-[25%] bg-white px-2 py-1">For&nbsp;<span className = "text-primary-green">Freelancers</span></h2>

                <div className = "bg-white sm:w-[200px] relative sm:left-[0%] group mb-24 w-full">   
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2">Growth</h3>
                  <div className="max-h-0 absolute top-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold">Elevate your career as a freelancer by growing your experience in applying your core skills.</p>
                  </div>
                </div> 

                <div className = "bg-white sm:w-[200px] relative sm:left-[-20%] group mb-24 w-full">    
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2">Network</h3>
                  <div className="max-h-0  absolute top-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold">Find other people who share or compliment your skill set for endless collaboration possibilities..</p>
                  </div>
                </div>

                <div className = "bg-white sm:w-[200px] relative sm:left-[-10%] group w-full">   
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2">Ease of Work</h3>
                  <div className="max-h-0 absolute bottom-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold">Cruise through with clarity on requirements, timeline and payments hassle free with our platform design</p>
                  </div>
                </div>

              </div>

              <div className = "items-center hidden sm:flex">     
                <img src={People} alt="" className = "w-full object-contain px-2 py-4 hidden sm:block" />     
              </div>

              {/* RIGHT ARCH */}

              <div className="flex flex-col relative items-center justify-between gap-y-20">
                <div className="hidden sm:block absolute top-0 bottom-0 left-0 right-0 right-vector-line -z-10"></div> 
                <div className="sm:hidden absolute top-0 bottom-0 left-0 w-1/2 border-r-2 border-dashed border-primary-green -z-10"></div>


                <h2 className = "font-bold text-center text-xl sm:text-2xl relative sm:-left-1/4 bg-white py-1 text-grey">For&nbsp;<span className = "text-primary-green py-2 bg-white">Employers</span></h2>

                <div className = "bg-white sm:w-[200px] relative sm:left-[10%] group mb-24 w-full">    
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2">Perfect Match</h3>
                  <div className="max-h-0  absolute top-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold text-grey">Find the right skilled support your dreams deserve from our pool of registered talented freelancers.</p>
                  </div>
                </div>

                {/* <p className = "bg-white sm:w-[200px] text-center py-2 relative sm:left-[10%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold sm:text-lg px-6">  
                  Perfect Match
                </p> */}

                <div className = "bg-white sm:w-[200px] relative sm:left-[20%] group mb-24 w-full">    
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2 text-grey">Project Collaborations</h3>
                  <div className="max-h-0  absolute top-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold text-grey">Looking for similar project ideas or potential collaborators for your project? Look no further!</p>
                  </div>
                </div>

                {/* <p className = "bg-white w-auto sm:w-[220px] text-center py-2 relative sm:left-[20%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold sm:text-lg px-6">  
                  Project Collaborations
                </p> */}

                {/* <p className = "bg-white sm:w-[200px] text-center py-2 relative sm:left-[10%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold sm:text-lg px-6">  
                  Quality Assured
                </p> */}

                <div className = "bg-white sm:w-[200px] relative sm:left-[10%] group w-full">   
                  <h3 className = "shadow-green-600 font-inter font-semibold peer sm:text-lg px-6 text-center shadow-[3px_3px_0px] py-2 rounded-2xl border-2 text-grey">Quality Assured</h3>
                  <div className="max-h-0 absolute bottom-[110%] left-0 right-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-700 ease-in-out rounded-2xl shadow-[3px_3px_0px] shadow-green-600 bg-white">  
                    <p className = "px-3 py-2 font-inter rounded-2xl text-sm font-semibold text-grey">Our review and rating system helps you choose the best of the talent for top notch results.</p>
                  </div>
                </div>

              </div>


            </div>

        </div>
    </div>
  )
}

