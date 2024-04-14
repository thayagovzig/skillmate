import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


export default function TermsOfService() {
    let navigate = useNavigate() 

  return (
    <div className = "max-w-screen w-screen overflow-x-hidden bg-gray-200 max-h-max">  
        <Navbar></Navbar>
        <div className="container sm:mx-auto mt-6 mx-3">
            <h2 className="text-2xl font-semibold"><button onClick = {() => {navigate(-1)}} className="fa-solid fa-angle-left px-3 py-2 bg-primary-green/30 rounded-xl m-2"></button>Terms and Conditions</h2>
            <div className="bg-white px-5 py-5 md:p-10 rounded-lg shadow-md my-4"> 
                <ol className = "list-decimal px-4 mt-3">

                    <li className="font-sora space-y-1"><span className = "font-semibold">Introduction</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">Welcome to SkillMate! These Terms and Conditions ("Terms") govern your use of the SkillMate platform and services. By accessing or using SkillMate, you agree to comply with these Terms.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Account Registration</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">You must create an account to access certain features of SkillMate. You agree to provide accurate and complete information during registration and to keep your account credentials secure.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">User Responsibilities</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">You are responsible for all activities conducted through your SkillMate account. You agree not to engage in any prohibited activities, including fraud, harassment, or illegal behavior.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Platform Usage</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">SkillMate provides a platform for users to connect, collaborate, and transact. Users must conduct themselves professionally and treat others with respect. SkillMate does not endorse or guarantee the quality of services provided by users.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Intellectual Property</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">Users retain ownership of the content they create and upload to SkillMate. By using the platform, you grant SkillMate a non-exclusive license to use, reproduce, and distribute your content for platform-related purposes.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Payments</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">SkillMate may facilitate payments between users for services rendered. Users agree to pay applicable fees and adhere to SkillMate's payment policies. SkillMate is not responsible for disputes related to payments between users.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Feedback</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">Users may leave feedback and reviews for each other based on their experiences. Feedback should be honest, constructive, and respectful. SkillMate reserves the right to remove feedback that violates these guidelines.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Privacy</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">SkillMate respects your privacy and protects your personal information in accordance with our Privacy Policy. By using the platform, you consent to the collection, use, and disclosure of your information as described in the <Link to = "/privacypolicy" className = "underline text-primary-green">Privacy Policy</Link>.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Termination</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">SkillMate reserves the right to suspend or terminate your account if you violate these Terms or engage in prohibited activities. Upon termination, you will lose access to your account and any associated data.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Modifications</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">SkillMate may update or modify these Terms from time to time. We will notify users of any material changes to the Terms. Continued use of the platform after the effective date of the changes constitutes acceptance of the modified Terms.</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Governing Law</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">These Terms are governed by the laws of [jurisdiction]. Any disputes arising out of or relating to these Terms will be resolved through arbitration in [jurisdiction].</li>
                        </ul>
                    </li>

                    <li className="font-sora space-y-1"><span className = "font-semibold">Contact Us</span>
                        <ul className = "px-12 list-disc">  
                            <li className="text-gray-700 my-1">If you have any questions or concerns about these Terms, please contact us at chat@skillmate.ai</li>
                        </ul>
                    </li>


                </ol>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
