import { useState } from "react";
import "./App.css";

function App() {
  const [count,setcount]=useState(1);
  const handledec=()=>{
    if(count>1)
    setcount(count-1);
  }
  const handleinc=()=>{
    if(count<50)
    setcount(count+1);
  }
  const doreset=()=>{
    setcount(1);
  }
  return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-6">
        <div className="text-[#0398d4]  font-2xl font-extrabold">Increment And Decrement</div>
        <div className="bg-[#fff] flex justify-between py-3 rounded-md gap-12 px-7 text-[25px]">
        <button onClick={handledec} className="border-r-2 border-[#bfbfbf] pr-2">-</button>
        <div>{count}
        </div>
        <button onClick={handleinc} className="border-l-2 border-[#bfbfbf] pl-2">+</button>
        </div>
        <button onClick={doreset} className="bg-[#0398d4] text-white px-5 rounded-2xl">reset</button>
      </div>
  );
}

export default App;
