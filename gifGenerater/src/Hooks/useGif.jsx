import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const url=`https://api.giphy.com/v1/gifs/random?api_key=Yzi4IqQ7vmhxUeGwNNitHXAZDViB1CjL`;
const useGif = (searchValue) => {
    const [gif,setgif]=useState('');
    const [loading,setloading]=useState(false);
    async function fetchData(searchValue){
      setloading(true);
      const output=await axios.get(searchValue?`${url}&tag=${searchValue}`:url);
      const data=output.data;
      const img_src=data.data.images.downsized_large.url;
      setloading(false);
      setgif(img_src);
      console.log(output);
    }
    useEffect(()=>{
      fetchData();
    },[])
    return{gif,loading,fetchData};
}
export default useGif;