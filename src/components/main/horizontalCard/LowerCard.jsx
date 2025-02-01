import React from 'react'
import {FaPlay} from "../../icons"

const LowerCard = ({title,image,artist,onClick}) => {
  return (
    <div className=' ' onClick={onClick}>
    <button className='  max-w-[10rem]  gap-3 flex-col  group  '>
        <div className='w-full h-full relative'>
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center"><FaPlay color='white' size={30}/></div>
            <img className='w-full h-full rounded-md' src={image}/>
        </div>
        <div className=''>
            <div className='text-white truncate font-semibold'>{title}</div>
            <div className='text-[#eee] truncate'>{artist}</div>
        </div>
    </button>
      
    </div>
  )
}

export default LowerCard
