import React from 'react'
import { Button } from "../components/index"
import {
    CiHeart,
    FcLike,
} from "../components/icons"
import { setCurrentSong } from '../store/Slice/howler'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {FaPlay} from "../components/icons"

const song = {
    src: "/songs/song1.m4a"
}

const Artist = () => {
    const dispatch = useDispatch()
    const currentSong = () => {
        dispatch(setCurrentSong(song))
    }


    return (
        <div>
            <div className='flex w-full  items-center'>
                <div className='  py-5 px-8 '>
                    <img className=' h-[50vh]  rounded-[50%]' src='https://c.saavncdn.com/artists/Papon_500x500.jpg' />
                </div>
                <div className='text-white '>
                    <div className='text-5xl font-semibold mb-3'>Papon</div>
                    <div className='flex gap-2'>
                        <div className='text-lg'>Artist</div>
                        <div className='text- items-center font-bold'>.</div>
                        <div className='text-lg'>1,237,657</div>
                        <div className='text-lg'>Listeners</div>
                    </div>
                    <div className='mt-9'>
                        <button className='text-white  py-2 px-10 rounded-2xl font-bold bg-[#1a867a] cursor-pointer hover:bg-[#11645b]'>
                            Play
                        </button>


                    </div>
                </div>
            </div>
            <div className='px-16   flex flex-col  mt-10 '>
                <div className='text-white text-4xl font-bold'>
                    Songs
                </div>
                <div className='mt-5 flex flex-col gap-6'>
                    <NavLink to={"/music"} onClick={currentSong} className='  group'>
                        <div className=' flex justify-between items-center'>
                            <div className='max-w-10 relative'>
                                <div
                                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                                >
                                    <FaPlay color="white" size={25} />
                                </div>
                                <img className='w-full h-full rounded-md' src='https://c.saavncdn.com/778/Sultan-Hindi-2016-20190329150247-50x50.jpg' />
                            </div>
                            <div className='text-white font-bold'>Bulleya (from "Sultan")</div>
                            <div className='text-[#9d9d9d] font-semibold'><NavLink className="hover:underline">Vishal &amp; Shekhar</NavLink>,<NavLink className="hover:underline">Papon</NavLink>,<NavLink className="hover:underline">Irshad Kamil</NavLink></div>
                            <div className='text-[#9d9d9d] font-semibold'>306M plays</div>
                            <div className='text-[#9d9d9d] font-semibold'>Sultan</div>
                            <div className='text-[#9d9d9d] font-semibold'>5:91</div>
                        </div>
                    </NavLink>
                    <NavLink to={"/music"} onClick={currentSong} className='group '>
                        <div className=' flex justify-between items-center'>
                            <div className='max-w-10 relative'>
                            <div
                                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                                >
                                    <FaPlay color="white" size={25} />
                                </div>
                                <img className='w-full h-full rounded-md' src='https://c.saavncdn.com/778/Sultan-Hindi-2016-20190329150247-50x50.jpg' />
                            </div>
                            <div className='text-white font-bold'>Bulleya (from "Sultan")</div>
                            <div className='text-[#9d9d9d] font-semibold'><NavLink className="hover:underline">Vishal &amp; Shekhar</NavLink>,<NavLink className="hover:underline">Papon</NavLink>,<NavLink className="hover:underline">Irshad Kamil</NavLink></div>
                            <div className='text-[#9d9d9d] font-semibold'>306M plays</div>
                            <div className='text-[#9d9d9d] font-semibold'>Sultan</div>
                            <div className='text-[#9d9d9d] font-semibold'>5:91</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Artist
