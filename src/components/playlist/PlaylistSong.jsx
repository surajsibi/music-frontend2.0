import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { LuThumbsDown, LuThumbsUp } from "../icons"
import Artist from '../../pages/Artist'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentSong } from '../../store/Slice/howler'


const PlaylistSong = ({ song }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLiked, setIsliked] = useState(false)
    const toggleLike = () => {
        setIsliked((prev) => !prev)
    }
    function decodeHtmlEntities(text) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, "text/html");
        return doc.body.textContent;
    }
    const handleClick=()=>{
        dispatch(setCurrentSong(song))
         
        navigate(`/music/${song.songId}`)
    }

    console.log(song,"thisis songgg")


    return (
        <div  onClick={handleClick} className='mt-8 w-full '>


            <div className="flex w-full  justify-between px-4 items-center group ">
                <div className='flex gap-5'>
                    <div className='max-w-12 relative'>
                        <div
                            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                        >
                            <FaPlay color="white" size={25} />
                        </div>
                        <img className='rounded-lg' src={song.images?.[0]?.url} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-lg font-medium w-64 '>{song.name}</div>
                        <div className='flex gap-[3px] items-center w-72 truncate'>
                            {song.artists?.map((art, index) => (
                                <NavLink onClick={(e)=>{e.stopPropagation()}} className='hover:underline' to={`/artist/${art._id}`} key={index}>{decodeHtmlEntities(art.name)}{index !== song.artists.length - 1 ? ", " : ""}</NavLink>
                            ))}
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
