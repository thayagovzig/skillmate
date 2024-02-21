import Logo from "../assets/skillmate_logo/skillmate_logo.png"
import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";

const Navbar = () =>{ 



    const scrollIntoView = () => {} 

    let [isActive, setActive] = useState(false); 

    let navlink_collapsed = {
        height:0 
    } 

    let navlink_expanded = {
        height:"auto" 
    }   

    return(
    <div className = "w-full relative z-20">       
        <div className = "container mx-auto flex justify-between items-center py-4 px-2">   
            <div className="left flex justify-center items-center gap-x-14 mr-10"> 
                <div className="logo">
                    <Link to = "/"><img src={Logo} alt="logo" className = "w-32 object-cover" /></Link> 
                </div>

                <ul className = "hidden md:flex justify-center items-center gap-x-6 font-semibold text-sm py-2 flex-nowrap "> 
                    {/* <li>Get a Job</li> */}
                    {/* <li>Discover Skills</li> */}
                    <li><Link to = {"/#whyskillmate"} className = "px-3 py-1 font-bold">Why&nbsp;Skillmate</Link></li>
                    <li><Link to = {"/about"} className = "px-3 py-1 font-bold">About</Link></li>
                    <li><Link to = {"/blog"} className = "px-3 py-1 font-bold">Blog</Link></li> 
                </ul>

            </div>

            <div className="right flex justify-center items-center gap-x-3"> 
                {/* <input type="text" className="hidden md:block rounded-full px-4 py-2 max-w-md outline-none border-2 border-slate-200 placeholder:text-slate-600 text-slate-900 placeholder:font-semibold placeholder:text-sm text-sm font-semibold" placeholder = "Search" /> */}
                <Link to = "/login" className="hidden md:block rounded-full text-primary-green px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap">Log in</Link> 
                <Link to = "/signup" className="hidden md:block rounded-full bg-primary-green text-white px-4 sm:px-8 py-2 border-2 border-primary-green text-xs sm:text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150" >Join Waitlist</Link>
            </div>

            <div className = "flex md:hidden items-center justify-center gap-x-12 px-4">       
                <Link to = "/signup" className=" sm:block rounded-full bg-primary-green text-white px-4 sm:px-8 py-2 border-2 border-primary-green text-xs sm:text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150" >Join Waitlist</Link>

                <div className={"hamburger md:hidden flex flex-col w-8 h-6 cursor-pointer transition-all duration-200 relative " + ((isActive)?"justify-center":"justify-between")} onClick = {(e) => {setActive(prev => !prev)}}>        
                    <div className={"w-full h-1 transition-all duration-200 bg-black origin-center relative rounded-full " + ((isActive)?"rotate-45 translate-y-1/2":"rotate-0") } ></div> 
                    <div className={"w-full h-1 transition-all duration-200 bg-black rounded-full transform rotate-0 " +  ((isActive)?"hidden":"block")}></div> 
                    <div className={"w-full h-1 transition-all duration-200 bg-black origin-center relative rounded-full transform rotate-0 " + ((isActive)?" rotate-[-45deg] -translate-y-1/2":" rotate-0 ")} ></div> 
                </div>

                <ul className = {"ham-links flex flex-col absolute top-full left-0 right-0 justify-center items-center gap-y-8 font-semibold text-sm bg-primary-green transition-all duration-500 overflow-hidden z-10 " + ((isActive)?"py-8":"py-0 max-h-0") } >    
                    {/* <li>Get a Job</li> */}
                    {/* <li>Discover Skills</li> */}
                    <li><Link to = {"/#whyskillmate"} className = "px-3 py-1 font-bold font-inter">Why&nbsp;Skillmate</Link></li>
                    <li><Link to = {"/about"} className = "px-3 py-1 font-bold font-inter">About</Link></li>
                    <li><Link to = {"/blog"} className = "px-3 py-1 font-bold ">Blog</Link></li> 
                    <li><Link to = {"/login"} className = "px-6 py-2 font-sora font-bold bg-white rounded-full shadow-md">Login</Link></li> 
                </ul>

            </div>

            
        </div>
    </div> 
) }

export default Navbar; 