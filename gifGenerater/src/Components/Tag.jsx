import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';
// const Api_Key=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  // const [gif,setgif]=useState('');
  // const [loading,setloading]=useState(false);
  // async function fetchData(){
    //   setloading(true);
    //   const url=`https://api.giphy.com/v1/gifs/random?api_key=Yzi4IqQ7vmhxUeGwNNitHXAZDViB1CjL&tag=${searchValue}`;
    //   const output=await axios.get(url);
    //   const data=output.data;
    //   const img_src=data.data.images.downsized_large.url;
    //   setloading(false);
    //   setgif(img_src);
    //   console.log(output);
    // }
    // useEffect(()=>{
    //   fetchData();
    // },[])

  const [searchValue,setsearchValue]=useState();

  const{gif,loading,fetchData}=useGif(searchValue);

    function handleGif(){
        fetchData(searchValue);
    }
    function searchHandler(event){
      setsearchValue(event.target.value);
    }
  return (
    <div className='flex flex-col w-1/2 bg-zinc-900 mt-8 items-center rounded-lg shadow-lg shadow-sky-900 gap-6 pt-4'>
        <h2 className='text-green-600 text-3xl font-semibold shadow-md shadow-emerald-800 p-1 px-2'>Random {searchValue} Gif</h2>
        
        {loading?<Spinner></Spinner>:<img src={gif} width="450"></img>}

        <label htmlFor='Gifsearch' className='text-green-600 text-sm font-semibold shadow-md shadow-emerald-800 py-1 px-2'>What you are looking for???</label>

        <input onChange={searchHandler} value={searchValue} id='Gifsearch' placeholder='Enter Something' className='shadow-md shadow-emerald-800 text-green-600 text-md font-semibold px-3 p-1 mb-6 bg-zinc-900 outline-none enabled:hover:shadow-white'></input>

        <button onClick={handleGif} className='shadow-md shadow-emerald-800 text-green-600 text-xl font-semibold px-3 p-1 mb-6  active:bg-white transition-all duration-500'>Generate</button>
    </div>
  )
}
export default Tag;

