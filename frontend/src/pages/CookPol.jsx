import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function CookPol() {

    let navigate = useNavigate() 

  return (
    
    <div className = "max-w-screen w-screen overflow-x-hidden bg-gray-200 max-h-max">  
        <Navbar></Navbar>
        <div className="container sm:mx-auto mt-6 mx-3">
            <h2 className="text-2xl font-semibold"><button onClick = {() => {navigate(-1)}} className="fa-solid fa-angle-left px-3 py-2 bg-primary-green/30 rounded-xl m-2"></button>Cookies Policy</h2>
            <div className="bg-white px-5 py-5 md:p-10 rounded-lg shadow-md my-4">
              <h2 className="text-lg font-semibold font-sora mb-2">Last updated: February 20, 2024</h2>
              <p className="text-gray-700 font-sora">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Cookies Policy Generator.
              </p>

              <p className="text-gray-700 font-sora my-5"> 
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our <Link to = "/privacypolicy" className = "text-primary-green underline underline-offset-2">Privacy Policy</Link>.
              </p>

              <p className="text-gray-700 font-sora my-5">
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </p>

              <h2 className="text-xl font-semibold font-sora mb-2 mt-8">Interpretation and Definitions</h2>

              <div>
                <h2 className="font-semibold text-lg">Interpretation</h2>
                <p className="font-sora">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              </div>

              <div className="font-sora space-y-1 mt-10"><span className = "font-semibold">Definitions</span>
                  <p className="font-sora">For the purposes of this Cookies Policy:</p>
                  <ul className = "px-4 list-disc space-y-1">    
                      <li className = "mx-4">Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to SKILLMATETECH SOLUTIONS LLP, No-h25, Tamil Nagar, Ramapuram, Ramapuram (kanchipuram), Kanchipuram, Saidapet, Tamil Nadu, India, 600089 .</li>
                      <li className = "mx-4">Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
                      <li className = "mx-4">Website refers to SKILLMATE, accessible from <a href = "http://www.skillmate.ai" target = "_blank" className = "text-primary-green underline">http://www.skillmate.ai</a></li>
                      <li className = "mx-4">You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
                  </ul>
              </div>

              <div>
                <h2 className="font-semibold text-xl mt-8 mb-3">The use of the Cookies</h2> 
                <p className="font-sora font-semibold">Type of Cookies We Use</p>
              </div>

              <p className="font-sora my-2">  
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
              </p>

              <div className="font-sora space-y-1 mt-10"><span className = "font-semibold">We use both session and persistent Cookies for the purposes set out below:</span>

                <p className="font-sora font-semibold pt-4">Necessary / Essential Cookies</p>
                <ul className = "px-4 list-disc space-y-1">    
                    <li className = "mx-4"><span className = "font-semibold">Type:</span> Session Cookies</li>
                    <li className = "mx-4"><span className = "font-semibold">Administered by:</span> Us</li>
                    <li className = "mx-4"><span className = "font-semibold">Purpose:</span> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
                </ul>

                <p className="font-sora font-semibold pt-4">Functionality Cookies</p>
                <ul className = "px-4 list-disc space-y-1">    
                    <li className = "mx-4"><span className = "font-semibold">Type:</span>Persistent Cookies</li>
                    <li className = "mx-4"><span className = "font-semibold">Administered by:</span> Us</li>
                    <li className = "mx-4"><span className = "font-semibold">Purpose:</span> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
                </ul>
              </div>

              <div className= "mt-10"> 
                <div className="font-sora text-xl font-semibold">Your Choices Regarding Cookies</div>
                <p className="font-sora mt-2">If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
                <p className="font-sora mt-2">If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>

                <ul className = "list-disc">
                  <p className="font-sora mt-2">If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>

                  <li className="mx-6"><ul className = "">For the Chrome web browser, please visit this page from Google: <li className = "mx-4"><a href = "https://support.google.com/accounts/answer/32050" className = "text-primary-green underline">https://support.google.com/accounts/answer/32050</a></li></ul></li>

                  <li className="mx-6"><ul className = "">For the Internet Explorer web browser, please visit this page from Microsoft:  <li className = "mx-4"><a href = "http://support.microsoft.com/kb/278835" className = "text-primary-green underline">http://support.microsoft.com/kb/278835</a></li></ul></li>

                  <li className="mx-6"><ul className = "">For the Firefox web browser, please visit this page from Mozilla: <li className = "mx-4"><a href = "https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className = "text-primary-green underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li></ul></li>

                  <li className="mx-6"><ul className = "">For the Safari web browser, please visit this page from Apple: <li className = "mx-4"><a href = "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className = "text-primary-green underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li></ul></li>
                </ul>

                <p className="font-sora mt-4 font-semibold">For any other web browser, please visit your web browser's official web pages.</p>
   
              </div>

              <h2 className="text-lg font-semibold mt-5">More Information about Cookies</h2>
              <p className="font-sora mt-1">You can learn more about cookies here: All About Cookies by TermsFeed.</p>

              <h2 className="font-sota font-semibold text-lg mt-5">Contact Us</h2>
              <p className="font-sora mt-2">If you have any questions about this Cookies Policy, You can contact us:</p>
              <ul className = "list-disc mt-2"> 
                <li className="mx-6"><span className = "font-semibold">By Email:</span> contact@skillmate.ai</li>
              </ul>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
