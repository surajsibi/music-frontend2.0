import React from 'react'
import {FaPlay} from "../../icons"
import { NavLink } from 'react-router-dom'

const LowerCard = ({song,onClick}) => {
  const {name,images,songId,songUrl,_id,artists} = song
  function decodeHtmlEntities(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body.textContent;
}
  
  
  return (
    <div className=' ' onClick={onClick}>
    <button className='  max-w-[10rem]  gap-3 flex-col  group  '>
        <div className='w-full h-full relative'>
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center"><FaPlay color='white' size={30}/></div>
            <img className='w-full h-full rounded-md' src={images?.[1]?.url}/>
        </div>
        <div className=''>
            <div className='text-white truncate font-semibold'>{name}</div>
            <div className='text-[#eee] truncate'> {artists?.map((art, index) => (
    <NavLink key={index}>{decodeHtmlEntities(art.name)}{index !== artists.length - 1 ? ", " : ""}</NavLink>
  ))}</div>
        </div>
    </button>
      
    </div>
  )
}

export default LowerCard
