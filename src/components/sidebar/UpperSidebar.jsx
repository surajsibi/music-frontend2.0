import React from 'react'
import {MdHomeFilled,MdOutlineExplore,LuLibrary} from "../icons"
import { NavLink } from 'react-router-dom'

const UpperSidebar = () => {

    const sidebarTopIcons = [
        {
        icon:<MdHomeFilled color='white' size={30}/>,
        title:"Home",
        url:"/"
    },
   
]

  return (
    <div className='flex-col flex gap-1 py-1 px-2 '>
    {sidebarTopIcons.map((item)=>(
        <NavLink key={item.title} to={item.url} className='flex justify-evenly items-center w-full py-3 rounded-xl hover:bg-[#1d1d1d] bg-black'>
      {item.icon}
      <span className='text-white font-semibold text-left'>{item.title}</span>
    </NavLink>
    ))}
        
    </div>
  )
}

export default UpperSidebar
