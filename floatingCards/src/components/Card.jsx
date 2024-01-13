import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
// how card looks alike => 1.) icon  2.)text  3.) footer => (i) data  or  (ii) tag
const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 w-52 h-60 rounded-[45px] bg-zinc-900 text-zinc-100 py-7 px-6 overflow-hidden'>
        <FaRegFileAlt></FaRegFileAlt>
        <p className='text-sm mt-7 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between mb-2 py-2 px-8'>
                <p>{data.filesize}</p>
                <span className='flex justify-center items-center w-6 h-6 bg-sky-600 rounded-full'>
                    {data.close? <IoClose></IoClose> : <GoDownload></GoDownload>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "sky" ? "bg-sky-600" : "bg-green-600" } flex justify-center items-center`}>
                    <p className='text-sm leading-none'>{data.tag.tagTitle}</p>
                </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card