import { useState } from "react";
import Card from "./Card";
function Cards({courses,category}){
    const [likeCourses,setlikedCourses]=useState([]);
    function getcourses(){
        if(category==="All"){
            let allcourses=[];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                // console.log(course);
                allcourses.push(course);
            })
        })
        return allcourses;
        }
        else{
           return courses[category];
        }
    }
    let arr=getcourses();
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {arr.map((course)=>{return <Card key={course.id} course={course} likeCourses={likeCourses} setlikedCourses={setlikedCourses}></Card>})}
        </div>
    )
}
export default Cards;