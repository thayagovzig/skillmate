import { Link } from "react-router-dom"; 
import Passion from "../assets/passion.png"; 
import Career from "../assets/career_growth.png"; 
import Right_Fit from "../assets/right_fit.png"; 
const HeroBanner = () => (
    <div className = "flex w-full bg-secondary-green py-8 overflow-x-hidden">   
        <div className="container mx-auto flex justify-between items-center flex-grow-0 flex-col lg:flex-row">   
            <div className="max-w-fit flex flex-col items-center lg:items-start px-5"> 
                <h2 className = "font-bold font-sora text-xl sm:text-2xl mb-4 text-grey">Elevate Your Craft</h2>
                <p className = "sm:text-lg font-semibold text-center md:text-left text-grey">Discover the Power of Skills, Jobs and Projects</p> 
                <p className= "font-semibold mt-1 mb-4 sm:text-lg text-center md:text-left text-grey">Your Gateway to Limitless Possibilities</p> 
                <Link to="/signup" className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150">Start Here</Link> 
            </div>

            <div className="flex-grow h-full mx-2 flex justify-center items-center gap-x-12 my-10 flex-wrap md:flex-nowrap gap-y-4">    
                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">    
                    <img src = {Career} className = "text-center block fa-solid fa-suitcase text-6xl w-[65px] h-[65px]"></img>
                    <h3 className = "font-semibold text-xl text-center my-3">Career Growth</h3> 
                    <p className = "font-semibold text-center text-sm">Discover opportunities <br />helps you rise in your chosen field and elevate <br />your career</p> 
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">  
                    <img src = {Right_Fit} className = "text-center block fa-solid fa-brain text-6xl w-[65px] h-[65px]" />
                    <h3 className = "font-semibold text-xl text-center my-3">Right Fit</h3> 
                    <p className = "font-semibold text-center text-sm">Discover jobs that match your unique skill sets. <br />Showcase your gifts to the world</p>
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400 w-[220px] transition-all duration-200 hover:shadow-[2px_2px_5px_rgba(0,0,0,.6)] hover:shadow-md hover:scale-105 hover:bg-[#27e36c] flex flex-col items-center">  
                    <img src = {Passion} className = "text-center block fa-solid fa-diagram-project text-6xl w-[67px] h-[67px]"></img>
                    <h3 className = "font-semibold text-xl text-center my-3">Self Growth</h3> 
                    <p className = "font-semibold text-center text-sm">Find opportunities to deepen your talents and build confidence to follow your dream</p>
                </div>
            </div>
        </div>
    </div>
)

export default HeroBanner; 