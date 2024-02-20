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
        <div className="container mx-auto"> 
            <h2 className = "text-center text-4xl font-bold font-inter mt-3">Why Skill<span className = "text-primary-green">mate?</span></h2>
            <h3 className = "text-xl font-semibold font-inter text-center mt-4 text-slate-800">Empowering Freelancers, Redefining Success</h3>

            <p className = "text-center font-semibold text-slate-800 mt-3 mb-2 font-lg">At Skillmate, we believe in the extraordinary potential of the freelancers like you. Our platform is not just another marketplace;</p>
            <p className = "text-center font-semibold text-slate-800 font-lg">It's a revolution in the freelancing landscape, Here's why you should make Skillmate your ultimate freelancing companion;</p>

            <div className="grid grid-cols-3 mt-16 mb-4 gap-x-6"> 
              <div className="flex flex-col relative items-center justify-between gap-y-14 left-vector-line "> 

                {/* <img src={vector_left} alt="" className = "absolute top-[20px] bottom-0 left-0 right-0 object-contain -z-10" /> */}

                <h2 className = "font-bold text-2xl relative left-[25%] bg-white">For <span className = "text-primary-green">Freelancers</span></h2>

                <p className = "bg-white w-[200px] text-center py-2 rounded-2xl relative left-[0%] border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Growth
                </p>

                <p className = "bg-white w-[200px] text-center py-2 rounded-2xl relative -left-[20%] border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Network
                </p>

                <p className = "bg-white w-[200px] text-center py-2 rounded-2xl -left-[10%] border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Ease of Work
                </p>

              </div>

              <div> 
                <img src={People} alt="" className = "w-full object-contain px-2 py-4" />    
              </div>


              <div className="flex flex-col relative items-center justify-between gap-y-14 right-vector-line">  

                <h2 className = "font-bold text-2xl relative -left-1/4 bg-white">For <span className = "text-primary-green ">Employers</span></h2>

                <p className = "bg-white w-[200px] text-center py-2 relative left-[10%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Perfect Match
                </p>

                <p className = "bg-white w-[220px] text-center px-2 py-2 relative left-[20%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Project Collaborations
                </p>

                <p className = "bg-white w-[200px] text-center py-2 relative left-[10%] rounded-2xl border-2 shadow-[3px_3px_0px] shadow-green-600 font-inter font-semibold text-lg ">  
                  Quality Assured
                </p>

              </div>


            </div>

        </div>
    </div>
  )
}

