import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sathish from "../assets/people/sathish.jpg"; 
import {blogs} from "../blog_db/db.json";   
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const BlogPage = () => { 
    // post.photo = post.photo?post.photo:pfp 
    let {id} = useParams(); 
    let [post, setPost] = useState([]); 
    let blog_url = "http://localhost:8000/blogs/";  

    useEffect( () => {
        let b = blogs.filter(blog => blog.id == id)[0]; 
        b.photo = Sathish;  
        setPost(b);  
    }, []); 

    // useEffect(() => {
    //     fetch(blog_url+id)
    //     .then(res => res.json())   
    //     .then(data => {
    //         data.photo = pfp; 
    //         setPost(data); 
    //         console.log(data);  
    //     }) 
    // }, []) 

    return (
        <div className = "w-full min-h-screen">  
            <Navbar /> 
            {post && 
                <div className = "max-w-[700px] mx-auto my-6 mb-10">  
                    <h2 className = "text-3xl font-bold text-grey my-6 text-center">{post.title}</h2>
                    {post.subtitle && 
                        <div className = "text-center text-xl text-slate-700 ">  
                            {post.subtitle} 
                        </div> 
                    }
                    <div className = "flex flex-row gap-x-6 items-center mb-8 justify-end  mt-6">    
                        <div className="object-contain">
                            { post.photo && <img src={post.photo} alt="Author Image" className = "rounded-full border-2 border-slate-600 w-10 h-10" />}
                        </div>

                        <div className = "flex gap-x-2 items-baseline">  
                            <p className = "font-semibold font-inter text-lg text-grey">{post.author},</p>
                            {post.time && <p className = "font-semibold text-slate-500 ">{post.time}</p>}
                        </div>

                    </div>

                    <div className = "text-left px-4">  
                        <div dangerouslySetInnerHTML={{ __html: post.content }} className = "blog-markdown [&>*]:font-inter" />  
                    </div>

                    <div className = "flex justify-center items-center my-10"> 
                        <Link to = "/signup" className="hidden md:block rounded-full bg-primary-green text-white px-4 sm:px-8 py-2 border-2 border-primary-green text-xs sm:text-sm font-semibold text-nowrap hover:bg-[#27e36c] transition-all duration-150" >Join Waitlist</Link>
                    </div>

                </div>
            }

            <Footer /> 
        </div>
    )  
}

export default BlogPage; 