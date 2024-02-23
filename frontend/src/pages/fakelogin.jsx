import { Link } from "react-router-dom";
import GIF from "../assets/under construction.gif"; 
import LimitedNavbar from "../components/LimitedNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FakeLogin = () => {
    return (
        <div className = "w-screen overflow-x-hidden"> 
        <Navbar />
        <div className="flex items-center justify-center border-t-2 login-simple-white-paper"> 
            <div className="container mx-auto mt-10"> 
                <h1 className = "text-3xl font-inter font-semibold text-center">Cooking <span className = "text-primary-green">Something</span> <span className = "text-5xl">Huge!</span></h1>
                {/* <Link to = "/"><p className = "text-primary-green font-semibold underline text-xl text-right w-1/2 mx-auto my-10">&lt; Come back after <span className = "text-dark-green">Lunch!</span></p></Link> */}
                <div className="w-full flex justify-center items-center py-10 gap-x-10"> 
                    <Link to = "/" className="block rounded-full text-primary-green px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap">Home</Link> 
                    <Link to = "/signup" className="block rounded-full bg-primary-green text-white px-4 sm:px-8 py-2 border-2 border-primary-green text-xs sm:text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150" >Join Waitlist</Link>
                </div>
                <div className = "mx-auto my-10 max-w-3xl flex justify-center items-center"> 
                    <img src = {GIF} alt="" className = "object-cover" />  
                </div>
            </div>
        </div>
        <Footer /> 
        </div>
    )
} 


export default FakeLogin; 