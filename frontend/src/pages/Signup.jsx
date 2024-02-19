import { useState, useRef } from "react"; 
import { Link } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [country, setCountry] = useState(""); 
    const [agree, setAgree] = useState(false);     
    
    return (
    <div className = "w-screen h-screen flex justify-center items-center ">  
        <form className="rounded-xl flex flex-col max-w-3xl border-2 px-16 py-10 gap-y-4 w-3/4 neomorphic absolute"> 
            <Link to = "/" className = "absolute top-0 left-0 transform -translate-y-[130%] font-semibold text-primary-green underline-offset-2 underline font-inter">&lt; Go back to Home</Link> 

            <h2 className = "text-3xl text-center text-inter font-semibold font-inter mb-6">Join Our Waitlist</h2>

            <div className = "flex flex-col md:flex-row justify-between gap-x-3">    
                <div className = "flex flex-col gap-y-2 w-full md:w-1/2">   
                    <label htmlFor="firstname" className = "font-semibold">First Name</label>
                    <input type="text" name = "firstname" 
                        value={firstName} onChange = {(e) => {setFirstName(e.target.value)}}
                        className = "border-2 border-slate-700 px-3 py-1 rounded-md" required        
                    /> 
                </div>

                <div className = "flex flex-col gap-y-2 w-full md:w-1/2">   
                    <label htmlFor="lastname" className = "font-semibold">Last Name</label>
                    <input type="text" name = "lastname" 
                        value={lastName} onChange = {(e) => {setLastName(e.target.value)}}
                        className = "border-2 border-slate-700 px-3 py-1 rounded-md" required      
                    /> 
                </div>

            </div>

            <div className = "flex flex-col gap-y-2"> 
                <label htmlFor="email" className = "font-semibold">Email</label>
                <input type="email" name = "email"
                    className = "border-2 border-slate-700 px-3 py-1 rounded-md"
                    value = {email} onChange = {(e) => {setEmail(e.target.value)}} required 
                />
            </div>

            <div className = "flex flex-col gap-y-2"> 
                <label htmlFor="password" className = "font-semibold">Password</label>
                <input type="password" name = "password" 
                    className = "border-2 border-slate-700 px-3 py-1 rounded-md"
                    value = {password} onChange = {(e) => {setPassword(e.target.value)}} required 
                />
            </div>

            <div className = "flex gap-x-3 px-2 my-2">  
                <input type="checkbox" value = {agree} onChange = {(e) => {setAgree(e.target.value)}} className = "" /> 
                <label htmlFor="agree" className = "text-sm font-semibold font-inter">I agree to the terms of Service and Privacy Policy</label>
            </div>

            <div className = "flex justify-center">
                <button type = "submit" className = "rounded-md bg-primary-green text-white px-4 py-2 font-inter shadow-md shadow-slate-400">Join Waitlist</button>
            </div>

            <div className = "flex justify-center text-center">
                <p className="text-sm font-inter font-semibold mt-2">Already have an account? <Link to = "/login" className = "underline text-primary-green cursor-pointer">Login</Link></p> 
            </div>
        </form> 
    </div>
) }

export default Signup;  