import HeroImage from "../assets/pasted_graphic_world.png"; 
import Navbar from "./Navbar";
const Hero = () => {
    

    return (
    <>
    <Navbar />
    <div className = "bg-slate-100 w-full relative overflow-x-hidden">  {/* flex flex-row  */}  

        <div className="pt-10 flex flex-col lg:flex-row justify-between"> {/* container max-w-lg mx-auto grid grid-cols-1 lg:grid-cols-1 grid-flow-row auto-rows-max*/}
            <div className="flex flex-col items-center lg:items-start py-20 p-5 md:pl-20 flex-grow-0">  {/* col-span-1 lg:col-span-1 */}
                <h2 className="text-4xl font-sora font-bold text-black text-center md:text-left">Empower Your Freelance Journey:</h2>
                <h2 className="font-bold text-primary-green text-4xl font-sora mt-5 text-center md:text-left">Unlock Your Potential Today!</h2>

                <p className = "mt-6 font-semibold text-lg text-center md:text-left">Discover endless opportunities to thrive in the world of freelancing.</p>
                <p className = "mt-1 font-semibold text-lg text-center md:text-left">Let your talent shine and your dreams soar.</p>

                {/* Stats TABLE HERE */}

                {/* <div className = "border-2 border-slate-600 mt-10 max-w-lg rounded-md overflow-hidden pt-3 shadow-[5px_5px_0px] shadow-primary-green">     
                    <table className="table-auto rounded-md border-2 overflow-hidden w-full">   
                        <thead className = "">
                            <tr className = "border-b-2 border-slate-300"> 
                                <th className = "text-center font-bold font-sora text-xl">Innovate</th>
                                <th className = "text-center font-bold font-sora text-xl">Collaborate</th>
                                <th className="text-center font-bold font-sora text-xl">Succeed</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = ""><div className = "text-center px-2 font-semibold border-r-2 border-slate-300 p-2">1000+ <br /> Gig Workers</div></td>  
                                <td className = ""><div className = "text-center px-2 border-r-2 font-semibold border-slate-300 p-2">800+ <br />Project Owners</div></td>  
                                <td className = ""><div className = "text-center px-2 font-semibold">5k+ successful<br /> Deliverables</div></td>  
                            </tr>
                        </tbody>
                    </table>
                </div>  */}

                {/* STATS TABLE ENDS */}
            </div>

            <div className = "flex pl-10 hero-bg-image w-full h-[20rem] lg:h-auto lg:w-1/2 relative min-h-28">     
                {/* <img src={HeroImage} alt="" className = "object-cover h-40 object-right-bottom" /> */}
            </div>



        </div>

        {/* <div className = "hero-bg-cover w-56 flex-grow-1 br-red-200">            
                
        </div> */}

        {/* <div className = "ml-5 pl-20 flex">    
            <div className = "mb-10 border-2 border-slate-600 mt-10 max-w-lg rounded-md overflow-hidden pt-3 shadow-[5px_5px_0px] shadow-primary-green">     
                <table className="table-auto rounded-md border-2 overflow-hidden w-full">   
                    <thead className = "">
                        <tr className = "border-b-2 border-slate-300"> 
                            <th className = "text-center font-bold font-sora text-xl">Innovate</th>
                            <th className = "text-center font-bold font-sora text-xl">Collaborate</th>
                            <th className="text-center font-bold font-sora text-xl">Succeed</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className = ""><div className = "text-center px-2 font-semibold border-r-2 border-slate-300 p-2">1000+ <br /> Gig Workers</div></td>  
                            <td className = ""><div className = "text-center px-2 border-r-2 font-semibold border-slate-300 p-2">800+ <br />Project Owners</div></td>  
                            <td className = ""><div className = "text-center px-2 font-semibold">5k+ successful<br /> Deliverables</div></td>  
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className = "flex flex-grow pl-10 hero-bg-image h-56">   
                <img src={HeroImage} alt="" className = "object-cover h-40 object-right-bottom" />
            </div>

        </div> */}

    </div>
    </>
) }

export default Hero