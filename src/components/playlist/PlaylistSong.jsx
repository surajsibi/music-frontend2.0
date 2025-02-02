import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import {LuThumbsDown,LuThumbsUp} from "../icons" 

const PlaylistSong = () => {
    const [isLiked, setIsliked] = useState(false)
    const toggleLike = () => {
        setIsliked((prev) => !prev)
    
      }
    return (
        <div className='mt-16 w-full'>

            <div className=" flex w-full  justify-between px-4 items-center group ">
                <div className='flex gap-5'>
                    <div className='max-w-12 relative'>
                        <div
                            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                        >
                            <FaPlay color="white" size={25} />
                        </div>
                        <img className='rounded-lg' src="/songsimg/sultan.jpg" />
                    </div>
                    <div>
                        <div>Bulleya</div>
                        <div className='flex gap-[3px] '>
                            <NavLink className="hover:underline">Vishal &amp; Shekhar,</NavLink>
                            <NavLink className="hover:underline">Papon,</NavLink>
                            <NavLink className="hover:underline">Irshad Kamil</NavLink>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className=' p-2 rounded-[50%] flex items-center justify-center hover:bg-[#3a3a3a]'>
                        <LuThumbsDown color='white' size={20} />
                    </div>
                    <div onClick={toggleLike} className={` ${isLiked ? "jack-in-the-box" : ""} animate__animated animate__jackInTheBox p-2 rounded-[50%] flex items-center justify-center hover:bg-[#3a3a3a]`}>
                    <LuThumbsUp color={isLiked ? "transparent" : "white"} fill={isLiked ? "red" : "transparent"} size={20} />
                    </div>

                </div>
                <div>
                    5:55
                </div>

            </div>
        </div>
    )
}

export default PlaylistSong
