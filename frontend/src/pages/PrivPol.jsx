import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const  PrivPol = () => { 
    let navigate = useNavigate() 
  return (
    <div className = "max-w-screen w-screen min-h-screen bg-gray-200"> 
        <Navbar></Navbar>
            <div className="container sm:mx-auto my-6 mx-3">   
                <h2 className="text-2xl font-semibold"><button onClick = {() => {navigate(-1)}} className="fa-solid fa-angle-left px-3 py-2 bg-primary-green/30 rounded-xl m-2"></button>Privacy Policy</h2>
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

                    <div className="w-full h-[2px] bg-gray-700 mt-8"></div>

                    <ol className = "list-decimal px-4 mt-8">  
                        <li className="font-sora space-y-1 mt-2"><span className = "font-semibold">Information we Collect</span>
                            <p className="font-sora">We collect various types of information from users of our Service, including:</p>
                            <ul className = "px-4 list-disc"> 
                                <li>Personal Information: Name, email address, phone number, address, payment information (if applicable), profile information, and any other information voluntarily provided by users.</li>
                                <li>Non-Personal Information: Usage data, device information, IP address, browser type, and other anonymous data collected through cookies and similar technologies.</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">How We Collect Information</span>
                            <p className="font-sora">We collect information from users when they:</p>
                            <ul className = "px-4 list-disc"> 
                                <li>Create an account on the SkillMate platform.</li>
                                <li>Post or respond to job listings.</li>
                                <li>Interact with other users.</li>
                                <li>Engage with the platform's features and services.</li>
                                <li>We may also collect information automatically through cookies and similar technologies when users access or use the Service.</li>
                            </ul>
                        </li>
                        
                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">How We Use Information</span>
                            <p className="font-sora">We use the information we collect for the following purposes:</p>
                            <ul className = "px-4 list-disc"> 
                                <li>To provide and personalize the services offered by SkillMate.</li>
                                <li>To facilitate communication and interactions between users.</li>
                                <li>To process transactions and payments (if applicable).</li>
                                <li>To improve and optimize the SkillMate platform and user experience.</li>
                                <li>To send promotional communications and marketing materials (with user consent).</li>
                            </ul>
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">How We Protect Information</span>
                            <p className="font-sora">We take appropriate measures to protect the security of user information and prevent unauthorized access, disclosure, alteration, or destruction. This includes using encryption, access controls, and other security technologies to safeguard user data.</p>
                            {/* <ul className = "px-4 list-disc"> 
                                <li></li>
                                <li></li>
                            </ul> */}
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">Information Sharing</span>
                            <p className="font-sora">We may share user information with trusted third-party service providers and affiliates to facilitate the provision of services, such as payment processing, customer support, and analytics. User information may also be shared with other users on the platform as necessary to fulfill job requirements and facilitate interactions.</p>
                            {/* <ul className = "px-4 list-disc"> 
                                <li></li>
                                <li></li>
                            </ul> */}
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">User Rights</span>
                            <p className="font-sora">Users have the right to access, rectify, and delete their personal information stored on the SkillMate platform. Users can exercise their rights by contacting SkillMate's privacy team using the contact information provided below.</p>
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">Cookies and Similar Technologies</span>
                            <p className="font-sora">SkillMate uses cookies and similar technologies to collect and store information about user preferences, session data, and website usage patterns. Users have the option to disable cookies through their browser settings, but this may limit certain features and functionalities of the SkillMate platform.</p>
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">Policy Updates</span>
                            <p className="font-sora">SkillMate reserves the right to update and modify this privacy policy as needed to reflect changes in business practices, legal requirements, or technological advancements. Users will be notified of any material changes to the privacy policy through the SkillMate platform or via email.</p>
                        </li>

                        <li className="font-sora space-y-1 mt-5"><span className = "font-semibold">Contact Us</span>
                            <p className="font-sora">If you have any questions or concerns about your privacy or this privacy policy, please contact us at chat@skillmate.ai or 8438988992</p>
                        </li>

                    </ol>
                </div>
            </div>
        <Footer></Footer> 
    </div>
  )
}

export default PrivPol
