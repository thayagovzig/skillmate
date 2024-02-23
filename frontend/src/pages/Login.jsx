import {useState} from 'react'; 
import { Link} from 'react-router-dom'; 
import Footer from '../components/Footer';

const Login = () => {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [remember, setRemember] = useState(false); 

    return (

        <div className = "flex items-center justify-center h-screen w-screen">
            
            <form className="max-w-xl w-3/4 rounded-xl neomorphic flex flex-col gap-y-4 px-8 py-10 relative"> 
                <Link to = "/" className = "absolute top-0 left-0 transform -translate-y-[130%] font-semibold text-primary-green underline-offset-2 underline font-inter">&lt; Go back to Home</Link> 
                <h2 className = "text-3xl text-center text-inter font-semibold font-inter mb-6">Login and Explore</h2>

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
                    <input type="checkbox" value = {remember} onChange = {(e) => {setRemember(e.target.value)}} className = "" /> 
                    <label htmlFor="agree" className = "text-sm font-semibold font-inter">Remember Me</label>
                </div> 

                <div className = "flex justify-center">
                    <button type = "submit" className = "rounded-md bg-primary-green text-white px-8 py-2 font-inter shadow-md shadow-slate-400">Login</button>
                </div>

                <div className = "flex justify-center text-center">
                    <p className="text-sm font-inter font-semibold mt-2">Don't have an account? <Link to = "/signup" className = "underline text-primary-green cursor-pointer">Signup Here</Link></p> 
                </div>

            </form> 
        </div>
    )
}

export default Login; 