import Logo from "../assets/skillmate_logo/Pasted Graphic footer logo white.png"; 

const Footer = () => (
    <div className="bg-dark-green footer">  
        <div className="container mx-auto py-10"> 
            <div className = "flex justify-around flex-col items-center md:flex-row">   
                <div className="logo">
                    <img src={Logo} alt="" className = "w-40" /> 
                </div>

                <ul className = "navlinks flex flex-col gap-y-3">  
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About Us</li>
                    </a>
                    <a href="">
                        <li>Services</li>
                    </a>
                    <a href="">
                        <li>Contact Us</li>
                    </a>
                </ul>

                <div>
                    <h2 className = "font-inter text-center text-white tracking-wider">Follow us on</h2>
                    <div className="social">
                        <a><i className="fa-brands fa-instagram"></i></a>
                        <a><i className="fa-brands fa-facebook"></i></a>
                        <a><i className="fa-brands fa-twitter"></i></a>
                        <a><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

            </div>

            <div className = "py-6 border-t border-white mt-4 flex justify-between items-center px-4">    
                <p className = "text-white text-xs font-inter">&copy; 2024 Skillmate, All rights reserved</p>
                <p className = "text-white text-xs font-inter">Privacy Policy | Terms of Service | Cookie Policy</p>
            </div>
        </div>
    </div>
) 

export default Footer; 