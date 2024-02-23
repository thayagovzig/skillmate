import Logo from "../assets/skillmate_logo/Pasted Graphic footer logo white.png"; 
import { Link } from "react-router-dom";

const Footer = () => (
    <div className="bg-dark-green footer">  
        <div className="container mx-auto py-10"> 
            <div className = "flex justify-around flex-col items-center md:flex-row">   
                <div className="logo">
                    <img src={Logo} alt="" className = "w-40" /> 
                </div>

                <ul className = "navlinks flex gap-y-3 my-12 gap-x-3">    
                    <Link to="/">
                        <li>Home</li>
                    </Link> 
                    <Link to={"/about"}>  
                        <li>About</li>
                    </Link>
                    {/* <Link to={"/blogs"}>   
                        <li>Blog</li>
                    </Link>  */}
                    <Link to={"/signup"}> 
                        <li>Contact</li>
                    </Link> 
                </ul>

                <div>
                    <h2 className = "font-inter text-center text-white tracking-wider">Follow us on</h2>
                    <div className="social">
                        <a href = "https://www.instagram.com/skillmate.official/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href = "https://www.facebook.com/skillmateofficial" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a><i className="fa-brands fa-twitter" href = "https://twitter.com/SkillMate257345" target="_blank" ></i></a>
                        <a href = "https://www.linkedin.com/company/skillmate-official/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href = "https://www.youtube.com/channel/UCOx9vSrE4_GEDC7cof5D5ow" target="_blank"><i className="fa-brands fa-youtube"></i></a>

                    </div>
                </div>

            </div>

            <div className = "py-6 border-t border-white mt-4 flex flex-col md:flex-row  gap-y-6 justify-between items-center px-4">    
                <p className = "text-white text-xs font-inter">&copy; 2024 Skillmate, All rights reserved</p>
                <p className = "text-white text-xs font-inter">Privacy Policy | Terms of Service | Cookie Policy</p>
            </div>
        </div>
    </div>
) 

export default Footer; 