import { useState } from "react";
import Card from "./Card";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
function Cards({reviews}){
    const[Curr,setCurr]=useState(5);
    function handleLeft(){
        if(Curr-1<0){
            setCurr(reviews.length-1);
        }
        else{
            setCurr(Curr-1);
        }
    }
    function handleRight(){
        if(Curr+1===reviews.length){
            setCurr(0);
        }
        else{
            setCurr(Curr+1);
        }
    }
    function handleSuprise(){
        const ranCurr=Math.floor((Math.random()*reviews.length));
        setCurr(ranCurr);
    }
    return(
        <>
        <div className='max-w-[650px] relative flex flex-col mt-14 gap-3 bg-[#fff] h-max py-6 shadow-lg shadow-[#3f3f46] rounded-md'>
        <Card review={reviews[Curr]}></Card>
        <div className="text-violet-800 text-2xl flex justify-center gap-4 py-3">
            <button onClick={handleLeft}><IoIosArrowBack/></button>
            <button onClick={handleRight}><IoIosArrowForward/></button>
        </div>
        <div>
            <button onClick={handleSuprise} className="text-[#fff] bg-violet-700 w-[120px] h-10 mx-auto rounded-lg">Surprise Me</button>
        </div>
        </div>
        </>
    )
}
export default Cards;