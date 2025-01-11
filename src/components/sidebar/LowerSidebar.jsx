import React from 'react'
import { FaPlus } from "../icons"
import { NavLink } from 'react-router-dom'



const LowerSidebar = () => {
    const playlist = [
        {
            title: "Liked Music",
            subtitle: "Auto Playlist"
        },
        {
            title: "Abcd",
            subtitle: "user playlist"
        },
        {
            title: "edghi",
            subtitle: "Auto Playlist"
        },
    ]
    return (
        <div>

            <div className='bg-[#292727] rounded-xl flex justify-center items-center'>
                <button className='flex py-2 px-4 justify-center items-center gap-4'>
                    <FaPlus size={25} color='white' />
                    <span className='text-white'>New Playlist</span>
                </button>
            </div>
            <div className='mt-3'>
                {playlist.map((item)=>(
                    <NavLink key={item.title} className="flex flex-col justify-center items-start pl-3    py-2">
                    <div className='text-white font-semibold text-base'>{item.title}</div>
                    <div className='text-white font-extralight text-xs'> {item.subtitle}</div>
                </NavLink>
                ))}
            </div>
        </div>
    )
}

export default LowerSidebar
