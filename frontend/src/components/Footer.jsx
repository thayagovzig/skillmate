import Logo from "../assets/skillmate_logo/Pasted Graphic footer logo white.png"; 

const Footer = () => (
    <div className="bg-dark-green footer">  
        <div className="container mx-auto py-10"> 
            <div className = "flex justify-around">  
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
                        <a><i class="fa-brands fa-instagram"></i></a>
                        <a><i class="fa-brands fa-facebook"></i></a>
                        <a><i class="fa-brands fa-twitter"></i></a>
                        <a><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 

export default Footer; 