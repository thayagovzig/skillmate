import { Link } from "react-router-dom"; 
import Passion from "../assets/passion.png"; 
import Career from "../assets/career_growth.png"; 
import Right_Fit from "../assets/right_fit.png"; 
import for_freelancers from "../assets/for_freelancers-removebg.png";  
import for_employers from "../assets/for_employers-removebg.png"; 

const HeroAlterBanner = () => (
    <div className = "flex flex-col w-full bg-secondary-green py-8 overflow-x-hidden px-5"> 

        {/* FOR DEVELOPERS */}

            <div className="container mx-auto flex justify-center items-center flex-col lg:flex-row">   
            <div className="flex flex-col items-center justify-center text-center lg:items-start px-4  gap-y-5 py-5 rounded-lg mx-10">     
                
                {/* <h2 className = "font-bold font-sora text-xl sm:text-2xl mb-4 text-grey">Elevate Your Craft</h2>
                <p className = "sm:text-lg font-semibold text-center md:text-left text-grey">Discover the Power of Skills, Jobs and Projects</p> 
                <p className= "font-semibold mt-1 mb-4 sm:text-lg text-center md:text-left text-grey">Your Gateway to Limitless Possibilities</p> 
                <Link to="/signup" className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150">Start Here</Link> 
                */}
                <div className = "text-center mx-auto"><p className = "text-xl font-semibold px-6 py-2 rounded-full bg-primary-green shadow-md">For&nbsp;Freelancers</p></div>
                <img src={for_freelancers} alt="" className = "w-[250px] h-auto object-cover" />
            </div>

            <div className=" h-full mx-2 flex justify-center items-center gap-x-12 my-10 flex-wrap md:flex-nowrap gap-y-6">    
                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">    
                    {/* <img src = {Career} className = "text-center block fa-solid fa-suitcase text-6xl w-[65px] h-[65px]"></img> */}
                    <i className="fa-solid fa-arrow-up-right-dots text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Growth</h3> 
                    <p className = "font-semibold text-center text-sm">Elevate your career as a freelancer by growing your experience in applying your core skills</p> 
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">  
                    {/* <img src = {Right_Fit} className = "text-center block fa-solid fa-brain text-6xl w-[65px] h-[65px]" /> */} 
                    <i className="fa-solid fa-circle-nodes text-6xl "></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Network</h3> 
                    <p className = "font-semibold text-center text-sm">Find other people who share or compliment your skill set for endless collaboration possibilities.</p>
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">  
                    {/* <img src = {Passion} className = "text-center block fa-solid fa-diagram-project text-6xl w-[67px] h-[67px]"></img> */} 
                    <i className="fa-solid fa-dumbbell text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Ease of Work</h3> 
                    <p className = "font-semibold text-center text-sm">Cruise through with clarity on requirements, timeline and payments hassle free with our platform design</p>
                </div>
            </div>
        </div>

        {/* FOR EMPLOYERS  */}

        <div className="container mx-auto flex justify-center items-center flex-grow-0 flex-col lg:flex-row"> 

            <div className="flex lg:hidden max-w-fit  flex-col items-center lg:items-start px-5 py-5 gap-y-5 rounded-lg mx-10">  
                {/* <h2 className = "font-bold font-sora text-xl sm:text-2xl mb-4 text-grey">Elevate Your Craft</h2>
                <p className = "sm:text-lg font-semibold text-center md:text-left text-grey">Discover the Power of Skills, Jobs and Projects</p> 
                <p className= "font-semibold mt-1 mb-4 sm:text-lg text-center md:text-left text-grey">Your Gateway to Limitless Possibilities</p> 
                <Link to="/signup" className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150">Start Here</Link> 
             */}                    
                <div className = "text-center mx-auto"><p className = "text-xl font-semibold px-6 py-2 rounded-full bg-primary-green shadow-md">For&nbsp;Employers</p></div>
                <img src={for_employers} alt="" className = "w-[250px] h-auto object-cover" />
            </div>  

            <div className="flex-grow-x h-full mx-2 flex justify-center items-center gap-x-12 my-10 flex-wrap md:flex-nowrap gap-y-6">    
                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">    
                    {/* <img src = {Career} className = "text-center block fa-solid fa-suitcase text-6xl w-[65px] h-[65px]"></img> */} 
                    <i className="fa-regular fa-handshake text-7xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Perfect Match</h3> 
                    <p className = "font-semibold text-center text-sm">Find the right skilled support your dreams deserve from our pool of registered talented freelancers.</p> 
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">  
                    {/* <img src = {Right_Fit} className = "text-center block fa-solid fa-brain text-6xl w-[65px] h-[65px]" /> */} 
                    <i className ="fa-solid fa-people-group text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Collaborations</h3> 
                    <p className = "font-semibold text-center text-sm">Looking for similar project ideas or potential collaborators for your project? Look no further!</p>
                </div>

                <div className = "flex rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex-col items-center">  
                    {/* <img src = {Passion} className = "text-center block fa-solid fa-diagram-project text-6xl w-[67px] h-[67px]"></img> */} 
                    <i className="fa-solid fa-ranking-star text-7xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Quality Assured</h3> 
                    <p className = "font-semibold text-center text-sm">Our review and rating system helps you choose the best of the talent for top notch results.</p>
                </div>
            </div>

            <div className="hidden lg:flex justify-center flex-col items-center lg:items-start px-4  py-5 gap-y-5 rounded-lg mx-10">  
                {/* <h2 className = "font-bold font-sora text-xl sm:text-2xl mb-4 text-grey">Elevate Your Craft</h2>
                <p className = "sm:text-lg font-semibold text-center md:text-left text-grey">Discover the Power of Skills, Jobs and Projects</p> 
                <p className= "font-semibold mt-1 mb-4 sm:text-lg text-center md:text-left text-grey">Your Gateway to Limitless Possibilities</p>  */}

                {/* <div className = "text-center"> */}
                {/* </div> */}
                {/* <div className = "flex items-center justify-center"> */}
                    {/* <Link to="/signup" className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150">Start Here</Link>  */}
                {/* </div> */}

                <div className = "text-center mx-auto"><p className = "text-xl font-semibold px-6 py-2 rounded-full bg-primary-green shadow-md">For&nbsp;Employers</p></div>
                <img src={for_employers} alt="" className = "w-[250px] h-auto object-cover" />
            </div>

        </div>

    </div>
)

export default HeroAlterBanner; 