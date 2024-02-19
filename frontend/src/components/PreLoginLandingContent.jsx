import People from "../assets/three peeps.png" 

const PreLoginLandingContent = () => {
    return(
        <div className = "py-10">  
            <div className="container mx-auto flex flex-col lg:flex-row">  
                <div className = "col-span-1"> 
                    <h2 className = "text-3xl font-bold font-inter">Why Skill<span className = "text-primary-green">mate?</span></h2>

                    <p className = "my-4 font-inter leading-8">
                                <span className = "font-semibold">Empowering Freelancers, Redefining Success</span><br />
                                At Skillmate, we believe in the extraordinary potential of freelancers like you.<br />
                                Our platform is not just another marketplace;<br />
                                it s a revolution in the freelancing landscape. Here s why you should make<br />  
                                Skillmate your ultimate freelancing companion:<br />
                    </p>

                    <div className="w-full rounded-lg neomorphic-inward px-4 py-6">  
                        <ul className = "list-disc px-6 space-y-8">   
                            <li className = "font-bold font-inter text-lg"> Zero Commission, All Earnings Yours</li>
                            <li className = "font-bold font-inter text-lg"> Seamless and Secure Payments</li>
                            <li className = "font-bold font-inter text-lg"> Diverse Opportunities, Endless Possibilities</li>
                            <li className = "font-bold font-inter text-lg"> User Friendly Interface, Effortless Experience</li>
                            <li className = "font-bold font-inter text-lg"> Community Support and Collaboration</li>
                            <li className = "font-bold font-inter text-lg"> Ready to Redefine Freelancing? Join Us Today!</li>
                        </ul>
                    </div>

                </div>

                <div className="col-span-1 px-16 py-12 flex items-center justify-center w-full lg:w-1/2">     
                    <img src={People} alt="" className = "object-contain" />
                </div>
            </div>
        </div> 
    ) 
}

export default PreLoginLandingContent; 