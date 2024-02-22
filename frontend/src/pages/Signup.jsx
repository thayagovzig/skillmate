import { useState, useRef } from "react"; 
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'; 
import "react-phone-number-input/style.css"; 
import LimitedNavbar from "../components/LimitedNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [country, setCountry] = useState(""); 
    const [agree, setAgree] = useState(false);  
    const [phoneNumber, setPhoneNumber] = useState(); 
    
    const backend_url = "http://skillmate-production.up.railway.app"; //{ {process.env.REACT_ALL_BACKEND_URL }} 
    // const backend_url = "http://localhost:5000" 

    let enabled_submit = "rounded-md bg-primary-green text-white px-4 py-2 font-inter shadow-md shadow-slate-400 cursor-pointer" 
    let disabled_submit = "rounded-md bg-gray-500 text-white px-4 py-2 font-inter shadow-md shadow-slate-400 disabled cursor-not-allowed" 
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        let valid = validateForm(); 
        if(valid == true){ 
            let data = {firstname:firstName, lastname:lastName, email:email,phonenumber:phoneNumber, password:password}  
            console.log(data); 
            fetch(backend_url+"/waitlist", {
                method:"POST", 
                headers:{'Content-Type':"application/json"}, 
                body:JSON.stringify(data), 
                mode:"no-cors" 
            });    
        }else{
            alert(valid);  
        }
    }

    const validateForm = () => {
        if(firstName.length==0){
            return "FirstName can't be empty" 
        }if(lastName.length == 0){
            return "LastName can't be empty"
        }if(email.length==0){
            return "Email can't be empty" 
        }if(password.length < 8){
            return "Invalid Password Length"
        }

        return true
    }
    
    return (
        <div className = "w-screen h-screen">    
        <Navbar />
        <div className = "flex flex-col justify-center items-center paper-texture-bg pt-8 pb-16">     
            <div className = "mx-auto max-w-3xl px-4 py-4 ">   
                <Link to = "/" className = "font-semibold text-primary-green underline-offset-2 underline font-inter">&lt; Go back to Home</Link> 
            </div>
            <div className = "flex justify-center w-full">    
            <form className="rounded-xl flex flex-col mx-auto max-w-3xl px-16 py-10 gap-y-4 w-auto lg:w-3/4 neomorphic bg-white/40 backdrop-blur-sm" method="POST" action={backend_url+"/waitlist"}>    
                {/* <Link to = "/" className = "absolute top-0 left-0 transform -translate-y-[130%] font-semibold text-primary-green underline-offset-2 underline font-inter">&lt; Go back to Home</Link>  */}
                <h2 className = "text-3xl text-center text-inter font-semibold font-inter mb-6">Join Our Waitlist</h2>

                <div className = "flex flex-col md:flex-row justify-between gap-x-3">    
                    <div className = "flex flex-col gap-y-2 w-full md:w-1/2">   
                        <label htmlFor="firstname" className = "font-semibold">First Name<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>
                        <input type="text" name = "firstname" 
                            value={firstName} onChange = {(e) => {setFirstName(e.target.value)}}
                            className = "border-2 border-slate-700 px-3 py-1 rounded-md" required        
                        /> 
                    </div>

                    <div className = "flex flex-col gap-y-2 w-full md:w-1/2">   
                        <label htmlFor="lastname" className = "font-semibold">Last Name<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>
                        <input type="text" name = "lastname" 
                            value={lastName} onChange = {(e) => {setLastName(e.target.value)}}
                            className = "border-2 border-slate-700 px-3 py-1 rounded-md" required      
                        /> 
                    </div>

                </div>

                <div className = "flex flex-col gap-y-2"> 
                    <label htmlFor="email" className = "font-semibold">Email<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>
                    <input type="email" name = "email"
                        className = "border-2 border-slate-700 px-3 py-1 rounded-md"
                        value = {email} onChange = {(e) => {setEmail(e.target.value)}} required 
                    />
                </div>

                <div className = "flex flex-col gap-y-2 my-2">
                    <label htmlFor="phonenumber" className = "font-semibold">Phone Number<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>  
                    <PhoneInput placeholder = "Phone Number" name = "phonenumber" value = {phoneNumber} defaultCountry = "IN" onChange = {setPhoneNumber} className="px-4 py-1 border-2 border-black rounded-md outline-none  focus:outline-none" />
                </div>

                <div className = "flex flex-col gap-y-2"> 
                    <label htmlFor="password" className = "font-semibold">Password<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>
                    <input type="password" name = "password" 
                        className = "border-2 border-slate-700 px-3 py-1 rounded-md"
                        value = {password} onChange = {(e) => {setPassword(e.target.value)}} required 
                    />
                </div>

                <div className = "flex gap-x-3 px-2 my-2">  
                    <input type="checkbox" value = {agree} onChange = {(e) => { if(e.target.checked){setAgree(true)}else{setAgree(false)}}} className = "" /> 
                    <label htmlFor="agree" className = "text-sm font-semibold font-inter">I agree to the terms of Service and Privacy Policy<span className = "text-red-500 text-lg">&nbsp;*&nbsp;</span></label>
                </div>

                <div className = "flex justify-center">
                    <button type = "submit" className = {agree?enabled_submit:disabled_submit} disabled={agree?false:true} >Join Waitlist</button>
                </div>

                <div className = "flex justify-center text-center">
                    {/* <p className="text-sm font-inter font-semibold mt-2">Already have an account? <Link to = "/login" className = "underline text-primary-green cursor-pointer">Login</Link></p>  */}
                </div>
            </form> 
            </div>
        </div>
        <div className = "">
            <Footer />
        </div>
    </div> 
) }

export default Signup;  