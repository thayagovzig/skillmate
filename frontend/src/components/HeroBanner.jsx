const HeroBanner = () => (
    <div className = "flex w-full bg-secondary-green py-8 overflow-x-hidden">   
        <div className="container mx-auto flex justify-between items-center flex-grow-0 flex-col lg:flex-row">   
            <div className="max-w-fit"> 
                <h2 className = "font-bold text-black font-sora text-2xl mb-4">Elevate Your Craft</h2>
                <p className = "text-lg font-semibold">Discover the Power of Skills, Jobs and Projects</p> 
                <p className= "font-semibold mt-1 mb-4 text-lg">Your Gateway to Limitless Possibilities</p> 
                <button className="rounded-full bg-primary-green text-white px-8 py-2 border-2 border-primary-green text-sm font-semibold text-nowrap">Start Here</button>
            </div>

            <div className="flex-grow h-full mx-2 flex justify-center items-center gap-x-12 my-10 flex-wrap md:flex-nowrap gap-y-4">    
                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400">  
                    <i className = "text-center block fa-solid fa-suitcase text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Get a Job</h3> 
                    <p className = "font-semibold text-center text-sm">Discover Tailored job opportunities <br/> to elevate your career.</p>
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400">  
                    <i className = "text-center block fa-solid fa-brain text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Discover Skills</h3> 
                    <p className = "font-semibold text-center text-sm">Explore and Showcase your Unique skills. <br /> Find the perfect match for your talents</p>
                </div>

                <div className = "rounded-lg bg-primary-green text-white px-3 py-8 max-w-xs shadow-sm shadow-slate-400">  
                    <i className = "text-center block fa-solid fa-diagram-project text-6xl"></i>
                    <h3 className = "font-semibold text-xl text-center my-3">Projects</h3> 
                    <p className = "font-semibold text-center text-sm">Explore and Showcase your Unique skills <br/> Find the perfect match for your talents.</p>
                </div>
            </div>
        </div>
    </div>
)

export default HeroBanner; 