import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import {Route,Routes,useLocation,useSearchParams} from "react-router-dom";

function App() {
  const {fetchBlogData}=useContext(AppContext);
  const [searchParms,setSearchParams]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    fetchBlogData();
  },[])
  return(
    <div className='flex flex-col overflow-x-hidden'>
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
    // <Routes>
    //   <Route path="/" element={<Home/>}></Route>
    //   <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
    //   <Route path="/tags/:tag" element={<TagPage/>}></Route>
    //   <Route path="/categories/:category" element={<CategoryPage/>}></Route>
    // </Routes>
  )
}
import { Form } from 'react-router-dom'

export default App
