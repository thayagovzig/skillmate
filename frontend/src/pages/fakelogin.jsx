import { Link } from "react-router-dom";
import GIF from "../assets/under construction.gif"; 
import LimitedNavbar from "../components/LimitedNavbar";

const FakeLogin = () => {
    return (
        <div className = "w-screen overflow-x-hidden"> 
        <LimitedNavbar />
        <div className="flex items-center justify-center border-t-2 login-simple-white-paper"> 
            <div className="container mx-auto mt-10"> 
                <h1 className = "text-3xl font-inter font-semibold text-center">Cooking <span className = "text-primary-green">Somethin</span> <span className = "text-5xl">Huge!</span></h1>
                <Link to = "/"><p className = "text-primary-green font-semibold underline text-xl text-right w-1/2 mx-auto my-10">&lt; Come back after <span className = "text-dark-green">Lunch!</span></p></Link>
                <div className = "mx-auto my-10 max-w-3xl flex justify-center items-center"> 
                    <img src = {GIF} alt="" className = "object-cover" />  
                </div>
            </div>
        </div>
        </div>
    )
} 


export default FakeLogin; 