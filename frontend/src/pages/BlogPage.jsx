import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/skillmate_logo/human.png";  


const BlogPage = () => { 
    // post.photo = post.photo?post.photo:pfp 
    let {id} = useParams(); 
    let [post, setPost] = useState([]); 
    let blog_url = "http://localhost:8000/blogs/";  

    useEffect(() => {
        fetch(blog_url+id)
        .then(res => res.json())   
        .then(data => {
            data.photo = pfp; 
            setPost(data); 
            console.log(data);  
        }) 
    }, []) 

    return (
        <div className = "w-full px-5 min-h-screen">  
            <Navbar /> 
            {post && 
                <div className = "max-w-[700px] mx-auto mt-6"> 
                    <h2 className = "text-3xl font-semibold text-grey my-6 text-center">{post.title}</h2>
                    {post.subtitle && 
                        <div className = "text-2xl text-slate-700 text-left">  
                            {post.subtitle} 
                        </div> 
                    }
                    <div className = "flex flex-row gap-x-6 items-center mb-8">    
                        <div className="object-contain">
                            { post.photo && <img src={post.photo} alt="Author Image" className = "rounded-full border-2 border-slate-600 w-10 h-10" />}
                        </div>

                        <div className = "flex flex-col gap-y-2">  
                            <p className = "font-semibold font-inter text-grey">{post.author}</p>
                            <p className = "font-semibold text-slate-500 ">{post.time}</p>
                        </div>

                    </div>

                    <div className = "text-left px-4">  
                        <div dangerouslySetInnerHTML={{ __html: post.content }} className = "blog-markdown [&>*]:font-inter" />  
                    </div>

                </div>
            }
        </div>
    )  
}

export default BlogPage; 