import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import reviews from './Data'
function App() {
  return(
   <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-400'>
    <div className='text-center'>
      <h1 className="text-white text-4xl font-bold mt-8">Our Testimonials</h1>
      <div className='bg-violet-600 w-[18rem] h-[4px] mt-2 mx-auto'></div>
    <Cards reviews={reviews}></Cards>
    </div>
   </div>
  )
}

export default App
