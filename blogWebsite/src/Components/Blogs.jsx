import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const {posts,loading}=useContext(AppContext);
  return (
    <div className='w-[100%] mb-12 mt-14'>
      {loading?<Spinner></Spinner>:(
        posts.length==0?<div>No Post Found</div>:posts.map((post)=>{
          return <div className='flex flex-col mx-auto gap-y-1 max-w-[670px] py-4' key={post.id}>
            <p className='text-xl  font-semibold'>{post.title}</p>
            <p className='font-semibold font-mono'>By <span className='text-sky-800'>{post.author}</span> on <span>{post.category}</span></p>
            <p className='font-semibold'>Posted on <span className='text-sky-800'>{post.date}</span></p>
            <p className='text-md font-serif font-light'>{post.content}</p>
            <div>
              {post.tags.map((tag,index)=>{
                return <span className='text-sky-800 font-mono pr-2 font-semibold underline' key={index}>{`#${tag}`}</span>
              })}
            </div>
          </div>
        })
      )}
    </div>
  )
}
export default Blogs;
