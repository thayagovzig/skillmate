import HeroImage from "../assets/pasted_graphic_world.png"; 

const Hero = () => (
    <div className = "bg-slate-100 w-full relative flex flex-row overflow-x-hidden">   

        <div className="pt-10 container mx-auto max-w-lg flex-grow-0"> {/* grid grid-cols-1 lg:grid-cols-1 grid-flow-row auto-rows-max*/}
            <div className="flex flex-col py-10 pl-10 ">  {/* col-span-1 lg:col-span-1 */}
                <h2 className="text-4xl font-sora font-bold text-black">Empower&nbsp;Your&nbsp;Freelance&nbsp;Journey:</h2>
                <h2 className="font-bold text-primary-green text-4xl font-sora mt-5">Unlock Your Potential Today!</h2>

                <p className = "mt-6 font-semibold text-lg">Discover endless opportunities to thrive in the world of freelancing.</p>
                <p className = "mt-1 font-semibold text-lg">Let your talent shine and your dreams soar.</p>

                {/* <div className = "grid grid-cols-3 max-w-lg mt-8 rounded-md border-2 border-slate-400 overflow-hidden"> 
                    <div className = "text-center font-bold font-sora text-xl">Innovate</div>
                    <div className = "text-center font-bold font-sora text-xl">Collaborate</div>
                    <div className="text-center font-bold font-sora text-xl">Succeed</div>


                </div> */}
                <div className = "border-2 border-slate-600 mt-10 max-w-lg rounded-md overflow-hidden pt-3 shadow-[5px_5px_0px] shadow-primary-green">     
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
            </div>

        </div>

        <div className = "hero-bg-cover w-56 flex-grow-1 br-red-200">            
                
        </div>

    </div>
) 

export default Hero