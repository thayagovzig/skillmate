import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import Photo from "../assets/skillmate_logo/human.png";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
const Blog = () => {

    const blog_url = "http://localhost:8000/blogs/" 

    let [blogs, setBlogs] = useState([]); 

    const dummp_blogs = [
        {
            title:"Some Heading", 
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus labore quia iure vero rerum sit error eius, at, sapiente, culpa maiores? Velit provident, possimus nesciunt necessitatibus modi vitae perspiciatis ducimus harum qui, saepe sequi ea dolores, minima deleniti rerum excepturi rem earum? Necessitatibus qui quasi suscipit odio reiciendis itaque fuga cupiditate iusto, blanditiis dolore animi ratione modi assumenda maiores molestias facere sed saepe. Earum harum cumque consequatur voluptatem eum explicabo aspernatur libero! Animi delectus eveniet ex ut aperiam voluptate vel saepe. Dicta, at. Libero totam, quas aspernatur dignissimos nobis adipisci dolore sint inventore consequatur voluptates neque cumque hic nam labore.",
            author:"Random Guy", 
            time:"5 Mar, 2025", 
            photo:Photo   
        }, 
        {
            title:"Random HEading",  
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda mollitia deserunt distinctio cum unde debitis possimus hic qui eos.", 
            author:"More Random",  
            time:"5 Mar, 2025", 
            photo:Photo
        }, 
        {
            title:"Header Heading", 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda mollitia deserunt distinctio cum unde debitis possimus hic qui eos.", 
            author:"Xtremists",  
            time:"5 Mar, 2025", 
            photo:Photo
        }, 
        {
            title:"Some SUM" , 
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda mollitia deserunt distinctio cum unde debitis possimus hic qui eos.", 
            author:"Inexplainable",  
            time:"5 Mar, 2025", 
            photo:Photo
        }
    ];  

    useEffect(() => {
        fetch(blog_url)
        .then(res => res.json())
        .then(data => {data.forEach(ele => {ele.photo = ele.photo?ele.photo:Photo}); return data}) // if(!ele.photo){ele.photo = Photo}
        .then(data => {setBlogs(data); console.log(data)})  
    }, [])

    return (
        <div className="w-screen min-h-screen"> 
            <Navbar /> 

            {blogs&&

                <div className="container mx-auto h-auto py-10 border-t">   
                    <h2 className="text-4xl text-center font-bold">Ask Like-<span className = "text-primary-green">Minded</span> People!</h2>

                    <div className="blogs flex justify-center items-center gap-6 mt-10 flex-wrap">  

                        {blogs && blogs.map((blog,i) => (
                            <Link to = {"/blog/"+blog.id} key = {blog.id}>    
                            <div className = "flex flex-col gap-y-5 rounded-md px-5 py-3 border-2 max-w-md min-w-[150px] shadow-[0px_0px_0px] hover:shadow-green-500 hover:shadow-[5px_5px_0px] transition-all duration-200 cursor-pointer">        
                                <h2 className="text-lg text-center font-bold font-inter">{blog.title}</h2> 
                                <h3 className="text-center font-inter" dangerouslySetInnerHTML={{__html:blog.previewContent.slice(0,200)}}></h3>

                                <div className = "flex gap-x-3 justify-end items-center"> 
                                    <img src={blog.photo} alt="" className = "h-10 w-10 object-contain rounded-full overflow-hidden border-2 border-black" /> 
                                    <p className = "text-sm font-semibold font-inter">{blog.author}</p>
                                    <p className = "font-semibold">|</p>
                                    <p className = "font-semibold text-sm">{blog.time}</p> 
                                </div>
                            </div>
                            </Link>
                        ))}
                        

                    </div>

                    
    
                </div>
            }

            <Footer /> 
        </div>
    ) 
}

export default Blog; 