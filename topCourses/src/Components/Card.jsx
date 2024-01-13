import './card.css'
import { useState } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
function Card({course,likeCourses,setlikedCourses}){
    const [likedIcon,setlikedicon]=useState(false);
    function handleLike(course){
        if(likeCourses.includes(course.id)){
           const newarray=likeCourses.filter((id)=>{return id!==course.id});
           setlikedCourses(newarray);
           toast.warning("Like removed");
           setlikedicon(false);
        }
        else{
            setlikedCourses([...likeCourses,course.id]);
            toast.success("Liked Succesfully");
            setlikedicon(true);
        }
    }
    return(
        <div className="w-[300px] bg-[#171717] bg-opacity-90 rounded-md overflow-hidden shadow-md shadow-sky-900 hover:shadow-white transition-all duration-300">
            <div className="relative">
                <img src={course.image.url}></img>
             <div>
                <button className=" w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-1" onClick={()=>{handleLike(course)}}>
                  {likedIcon?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>}
                </button>
             </div>
            </div>
            <div className="px-2 b">
                <p className="text-white text-xl font-bold leading-8">{course.title}</p>
                <p className="text-white my-2 font-semibold text-md">{course.description.length>110?(`${course.description.substr(0,100)}...`):(course.description)}</p>
            </div>
        </div>
    )
}
export default Card;