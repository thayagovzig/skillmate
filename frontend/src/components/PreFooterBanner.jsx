const PreFooterBanner = () => (
    <div className = "bg-slate-100 py-16 mx-auto px-8 relative"> 
    
        <div className = "max-w-5xl mx-auto relative">     

            <div className="blur-blob blur-blob-1"></div> 
            <div className="blur-blob blur-blob-2"></div>
            <div className="blur-blob blur-blob-3"></div>

        <div className="isolate glass px-8 py-12 border-2 backdrop-blur-xl bg-white/0 rounded-2xl border-slate-200 shadow-md shadow-slate-300 w-full  z-20 relative">  
            {/* <div className="glass-blur absolute top-0 bottom-0 left-0 right-0"></div>  */}

            <div className = "z-10 relative ">     
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

export default PreFooterBanner;  