import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const  PrivPol = () => { 
  return (
    <div className = "max-w-screen w-screen min-h-screen bg-gray-200"> 
        <Navbar></Navbar>
            <div className="container sm:mx-auto my-6 mx-3">   
                <h2 className="text-2xl font-semibold"><Link to = "/signup" className="fa-solid fa-angle-left px-3 py-2 bg-primary-green/30 rounded-xl m-2"></Link>Privacy Policy</h2>
                <div className="bg-white px-5 py-5 md:p-10 rounded-lg shadow-md my-4">  
                    <h2 className="text-lg font-semibold font-sora mb-2">Effective April 4, 2024</h2>
                    <p className="text-gray-700 font-sora">
                    Welcome to SkillMate! This Privacy Policy explains how SkillMate ("we," "us," or "our") collects, uses, discloses, and protects your information when you use our website (<a href = "https://www.skillmate.ai" target="_blank" className = "text-primary-green">https://www.skillmate.ai</a>) and related services (collectively, the "Service"). By accessing or using the Service, you agree to the terms of this Privacy Policy.
                    </p>
                    <h2 className="font-semibold text-lg mt-3 mb-2">Table of Contents</h2>
                    <ol className = "list-decimal px-4 mt-3"> 

                        <li className="font-sora space-y-1"><span className = "font-semibold">Introduction</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Welcome to Skillmate</li>
                                <li className="text-gray-700 my-1">Agreement to Privacy Policy</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">Information We Collect</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Personal Information</li>
                                <li className="text-gray-700 my-1">Non-Personal Information</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">How We Collect Information</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Account Creation</li>
                                <li className="text-gray-700 my-1">Job Listings</li>
                                <li className="text-gray-700 my-1">User Interactions</li>
                                <li className="text-gray-700 my-1">Platform Features and Services</li>
                                <li className="text-gray-700 my-1">Cookie and Similar Technologies</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">How we Use Information</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Service Provision</li>
                                <li className="text-gray-700 my-1">Communication</li>
                                <li className="text-gray-700 my-1">Transaction Processing </li>
                                <li className="text-gray-700 my-1">Platform Improvement</li>
                                <li className="text-gray-700 my-1">Marketing and Promotional Communications</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">How We Protect Information</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Security Measures</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">Information Sharing</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Third-Party Service Providers</li>
                                <li className="text-gray-700 my-1">Affiliates</li>
                                <li className="text-gray-700 my-1">Other Users</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">User Rights</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Access</li>
                                <li className="text-gray-700 my-1">Rectification</li>
                                <li className="text-gray-700 my-1">Deletion</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1"><span className = "font-semibold">Cookies and Similar Technologies</span>
                            <ul className = "px-12 list-disc">  
                                <li className="text-gray-700 my-1">Cookie Usage</li>
                                <li className="text-gray-700 my-1">Cookie Management</li>
                            </ul>
                        </li>


                        <li className="font-sora space-y-1 mt-2"><span className = "font-semibold">Policy Updates</span></li>
                        
                        <li className="font-sora space-y-1 mt-2 ml-2"><span className = "font-semibold">Contact Us</span></li>

                    </ol>
                </div>
            </div>
        <Footer></Footer> 
    </div>
  )
}

export default PrivPol
