import { useState } from "react";

function Card({id,name,info,image,price,handleButton}){
    //Content Static hai 
    const [readmore,setreadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}...`;

    const handleSpan=()=>{
        setreadmore(!readmore);
    }
    return(
        <div className="w-[320px] max-h-max m-2 p-2 flex flex-col rounded-[10px] shadow-lg shadow-sky-800">
            <img src={image} class="w-[320px] aspect-square object-cover"></img>
            <div className="m-[18px]">
            <div>
                <h4 className="text-green-500 font-extrabold">{price}</h4>
                <h4 className="text-[#fff] text-lg font-bold">{name}</h4>
            </div>
            <div>
                <p className="text-[#fff] text-lg">
                    {description}
                    <span onClick={handleSpan} className="text-sky-800 font-bold  cursor-pointer">
                    {readmore?`Show Less`:`Read More`}
                    </span>
                </p>
            </div>
            </div>
            <button onClick={()=>{handleButton(id)}} className="w-[70%] m-auto border-2 border-sky-800 rounded-2xl my-4 h-[3rem] text-white font-bold text-lg hover:bg-sky-800 hover:text-[red] transition-all ease-in-out duration-300">
                Not Interested
            </button>
        </div>
    )
}
export default Card;