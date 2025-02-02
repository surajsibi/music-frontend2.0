import React from 'react'
import { FaPlus } from "../icons"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {changeNewPlaylist} from "../../store/Slice/utilsSlice"


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
        {
            title: "Abcd",
            subtitle: "user playlist"
        },
        {
            title: "edghi",
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

    const dispatch = useDispatch()

    const openNewPlaylist = ()=>{
        dispatch(changeNewPlaylist())
    }
    return (
        <div>

            <div onClick={openNewPlaylist} className='bg-[#292727] rounded-xl flex justify-center items-center cursor-pointer'>
                <button className='flex py-2 px-4 justify-center items-center gap-4'>
                    <FaPlus size={25} color='white' />
                    <span className='text-white'>New Playlist</span>
                </button>
            </div>
            <div className='mt-3 h-[53vh]  overflow-y-scroll scrollbarPlaylist overflow-x-hidden'>
                {playlist.map((item,index)=>(
                    <NavLink key={index} className="flex flex-col justify-center items-start pl-3    py-2 hover:bg-[#212121]">
                    <div className='text-white font-semibold text-base'>{item.title}</div>
                    <div className='text-white font-extralight text-xs'> {item.subtitle}</div>
                </NavLink>
                ))}
            </div>
        </div>
    )
}

export default LowerSidebar
