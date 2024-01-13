import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] gap-x-2'>
    <div className='spinner'></div>
    <div className='text-sky-800 font-bold'>Loading...</div>
    </div>
  )
}
export default Spinner;
