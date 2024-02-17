const Appraisal = () => (
    <div className = "py-10"> 
        <div className="container mx-auto pb-10"> 
            <h2 className = "font-sora font-bold text-2xl text-center">Testimonial</h2>

            <div className = "flex gap-x-4 mt-6 flex-wrap gap-y-6 justify-center md:justify-start lg:flex-nowrap">     
                
                <div className="card rounded-md bg-slate-200 px-3 py-4 max-w-xs">  
                    <p className = "text-xs font-inter">Incredible platform! Found a skilled freelancer effortlessly.Seamless process, exceptional results.</p>
                    <div className = "text-right text-3xl pb-2">   
                        <i className="fa-solid fa-quote-right text-primary-green"></i> 
                    </div>

                    <div className = "flex gap-x-2 px-2 items-center border-t border-slate-500 pt-2">     
                        {/* <img src="" alt="" />  */}
                        <i className="fa-solid fa-user-tie p-1 border-2 border-slate-800 rounded-full"></i>
                        <p className = "text-xs">Profile Name</p>
                    </div>
                </div>

                <div className="card rounded-md bg-slate-200 px-3 py-4 max-w-xs">  
                    <p className = "text-xs font-inter">Solved my freelancing needs effortlessly. User friendly platform, transparent process, and top notch results. Very satisfied!</p>
                    <div className = "text-right text-3xl pb-2">  
                        <i className="fa-solid fa-quote-right text-primary-green"></i> 
                    </div>

                    <div className = "flex gap-x-2 px-2 items-center border-t border-slate-500 pt-2">     
                        {/* <img src="" alt="" />  */}
                        <i className="fa-solid fa-user-tie p-1 border-2 border-slate-800 rounded-full"></i>
                        <p className = "text-xs">Profile Name</p>
                    </div>

                </div>

                <div className="card rounded-md bg-slate-200 px-3 py-4 max-w-xs shadow-[2px_2px_0px] shadow-primary-green">  
                    <p className = "text-xs font-inter">This platform exceeded my expectations. Quick and easy to use, excellent communication, and a</p>
                    <div className = "text-right text-3xl pb-2">  
                        <i className="fa-solid fa-quote-right text-primary-green mt-2"></i> 
                    </div>

                    <div className = "flex gap-x-2 px-2 items-center border-t border-slate-500 pt-2">     
                        {/* <img src="" alt="" />  */}
                        <i className="fa-solid fa-user-tie p-1 border-2 border-slate-800 rounded-full"></i>
                        <p className = "text-xs">Profile Name</p>
                    </div>
                </div>

                <div className="card rounded-md bg-slate-200 px-3 py-4 max-w-xs">  
                    <p className = "text-xs font-inter">Highly efficient service. Talented freelancers, clear communication, and impressive outcomes. </p>
                    <div className = "text-right text-3xl pb-2">  
                        <i className="fa-solid fa-quote-right text-primary-green"></i> 
                    </div>

                    <div className = "flex gap-x-2 px-2 items-center border-t border-slate-500 pt-2">     
                        {/* <img src="" alt="" />  */}
                        <i className="fa-solid fa-user-tie p-1 border-2 border-slate-800 rounded-full"></i>
                        <p className = "text-xs">Profile Name</p>
                    </div>
                </div>

                <div className="card rounded-md bg-slate-200 px-4 py-4 max-w-xs">  
                    <p className = "text-xs font-inter">This platform is now my go to for finding top talent. Highly recommended!</p>
                    <div className = "text-right text-3xl pb-2">  
                        <i className="fa-solid fa-quote-right text-primary-green"></i> 
                    </div>

                    <div className = "flex gap-x-2 px-2 items-center border-t border-slate-500 pt-2">     
                        {/* <img src="" alt="" />  */}
                        <i className="fa-solid fa-user-tie p-1 border-2 border-slate-800 rounded-full"></i>
                        <p className = "text-xs">Profile Name</p>
                    </div>
                </div>
   
            </div>

        </div>

        <div className = "bg-slate-100 py-16 mx-auto px-8 relative">    
            <div className="glass px-8 py-12 border-2 bg-secondary-green rounded-2xl border-white shadow-md shadow-slate-300 max-w-5xl mx-auto z-20 relative">  
                <div className="glass-blur relative"></div> 
                <div className = "z-10 relative">     
                    <h2 className="text-center text-primary-green text-3xl font-sora font-bold">Ready for your next hire?</h2>
                    <p className = "text-center  font-inter pt-5 font-semibold">   
                        "Ready to level up your freelance game? Your next standout hire awaits at Skill Mate.<br />
                        Let s make your project a success together!"
                    </p>

                    <div className = "flex justify-center mt-8">  
                        <button className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-dark-green font-semibold text-nowrap">Start Here</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 

export default Appraisal; 