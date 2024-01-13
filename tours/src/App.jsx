import Tours from './components/Tours'
import data from './Data';
import { useState } from 'react'
import './App.css'


function App() {
  const [Toursdata,setToursdata]=useState(data);
  const handleButton=(id)=>{
    const newdata=Toursdata.filter((tour)=>tour.id!==id);
    setToursdata(newdata);
  }
  const handleRefresh=()=>{
    setToursdata(data);
  }
  if(Toursdata.length===0){
    return(
      <div className='min-h-screen  bg-zinc-900 w-[100vw] flex flex-col justify-center items-center'>
        <h1 className='text-white font-bold text-xl'>No Tours Left</h1>
        <button onClick={handleRefresh} className='text-sky-800 mt-3 h-[3rem] w-[6rem] border-2 rounded-full shadow-md shadow-sky-800 text-[20px]'>Refresh</button>
      </div>
    )
  }
  return (
    <div className='min-h-screen  bg-zinc-900 w-[100vw]'>
      <Tours Toursdata={Toursdata} handleButton={handleButton}></Tours>
    </div>
  )
}

export default App
