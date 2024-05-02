import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";  
import HeroBanner from '../components/HeroBanner';
import LandingContent from '../components/LandingContent';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';
import PreLoginLandingContent from "../components/PreLoginLandingContent";
import PreFooterBanner from "../components/PreFooterBanner";
import WhySkillmate from "../components/WhySkillmate";
import HeroAlterBanner from "../components/HeroAlterBanner";

import gsap from "gsap"; 
import {useGSAP} from "@gsap/react"; 

import Modal from "../components/Modal";
import { useState } from "react";
import registration_poster from "../assets/registration_poster.jpg"; 
import registration_poster_mobile from "../assets/registration_poster_mobile.jpg"; 
const Home = () =>{ 

    const [regPopup, setRegPopup] = useState(true);  

    return (
    <> 
        <Hero />

        {/* <Modal isVisible={regPopup} close = {() => {setRegPopup(false)}}>
            <a target = '_blank' className = "relative w-full" href = "https://konfhub.com/slrf"><div className="max-w-3xl mx-auto flex items-center justify-center w-full overflow-hidden">
                <img src={registration_poster} alt="" className="hidden sm:block object-contain w-full h-auto" />
                <img src={registration_poster_mobile} alt="" className="block sm:hidden object-contain w-full h-auto max-h-[calc(100%-200px)]" />
            </div></a>
        </Modal> */}
        {/* <HeroBanner /> */}
        <HeroAlterBanner />
        {/* <LandingContent /> */}
        {/* <PreLoginLandingContent /> Landing Content Before Signin / Login */}
        {/* <WhySkillmate />  */}
        <PreFooterBanner />
        <Footer />
    </>
)}

export default Home; 