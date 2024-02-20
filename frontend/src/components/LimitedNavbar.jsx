import Logo from "../assets/skillmate_logo/skillmate_logo.png"
import { Link } from "react-router-dom"; 
import { useRef } from "react"; 

const LimitedNavbar = () =>{ 

    let ref = useRef(null); 

    const scrollIntoView = () => {} 
    return(
    <div className = "">      
        <div className = "container mx-auto flex justify-between items-center py-4 px-2">   
            <div className="left flex justify-center items-center gap-x-14 mr-10"> 
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="logo" className = "w-32 object-cover" /></Link>
                </div>

                <ul className = "hidden md:flex justify-center items-center gap-x-6 font-semibold text-sm py-2 flex-nowrap "> 
                    {/* <li>Get a Job</li> */}
                    {/* <li>Discover Skills</li> */}
                    <li><Link to = {"/#whyskillmate"} className = "px-3 py-1 font-bold">Why Skillmate</Link></li>
                    <li><Link to = {"/about"} className = "px-3 py-1 font-bold">About</Link></li> 
                </ul>

            </div>

            <div className="right flex justify-center items-center gap-x-3"> 
                {/* <input type="text" className="hidden md:block rounded-full px-4 py-2 max-w-md outline-none border-2 border-slate-200 placeholder:text-slate-600 text-slate-900 placeholder:font-semibold placeholder:text-sm text-sm font-semibold" placeholder = "Search" /> */}
                {/* <Link to = "/login" className="rounded-full text-primary-green px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap">Log in</Link> 
                <Link to = "/signup" className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150" >Join Waitlist</Link> */}
            </div>
        </div>
    </div> 
) }

export default LimitedNavbar; 