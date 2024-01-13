import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
function Card({review}){
    return(
        <>
        <div className=" hidden absolute top-[-7rem] z-[10] sm:block">
        <img src={review.image} className="aspect-sqaure w-[140px] rounded-full z-[25]"></img>
        <div className="w-[140px] h-[140px] rounded-full absolute top-[-0.2rem] left-[10px] bg-violet-800 z-[-8]"></div>
        </div>
        <div>
        <h2 className="text-black text-3xl font-bold">{review.name}</h2>
        <p className="text-violet-700 opacity-90 font-semibold text-md">{review.job}</p>
        </div>
        <div className="mx-auto text-violet-700">
            <FaQuoteLeft />
        </div>
        <p className="text-md text-black text-md px-6 font-semibold">
            {review.text}
        </p>
        <div className="mx-auto text-violet-700">
            <FaQuoteRight/>
        </div>
        </>
    )
}
export default Card;