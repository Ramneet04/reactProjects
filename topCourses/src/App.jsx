import {apiUrl, filterData } from './Data';
import Navbar from './Components/Navbar';
import Filterbar from './Components/Fiterbar';
import Cards from './Components/Cards';
import { useState } from 'react';
import {useEffect} from 'react';
import './App.css'
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App() {
  const[courses,setCourses]=useState([]);
  const[loading,setloading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);
    const fetchdata=async()=>{
      setloading(true);
      try{
        const response=await fetch(apiUrl);
        const output=await response.json();
        setCourses(output.data);
        console.log(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setloading(false);
    }
    useEffect(()=>{
      fetchdata();
    },[])
  return(
    <>
    <div className='flex flex-col min-h-screen bg-zinc-900'>
      <div>
      <Navbar></Navbar>
      </div>
      <div>
      <Filterbar filterData={filterData} category={category} setcategory={setcategory}></Filterbar>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {loading?(<Spinner></Spinner>):<Cards courses={courses} category={category}></Cards>}
      </div>
    </div>
    </>
  )
}

export default App
