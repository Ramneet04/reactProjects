import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

const Footer = () => {
  const{page,totalpages,handlePageChange}=useContext(AppContext);
  return (
    <div className='flex justify-evenly pt-2 bg-white w-full fixed bottom-0 mx-auto shadow-inner shadow-sky-800'>
      <div className='flex gap-x-2 px-20'>
        { page>1&&
        <button className='bg-sky-800 text-white py-1 px-2 rounded-xl' onClick={()=>{handlePageChange(page-1)}}>Previous</button>
        }
        {
          page<totalpages&&
        <button className='bg-sky-800 text-white py-1 px-2 rounded-xl' onClick={()=>{handlePageChange(page+1)}}>Next</button>
        }
      </div>
      <div className='text-lg font-semibold px-20'>
        Page <span className='text-sky-900'>{page}</span> of <span className='text-sky-900'>{totalpages}</span>
        </div>
    </div>
  )
}
export default Footer;