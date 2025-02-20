import React,{useEffect,useState} from 'react'
import { FaPlus } from "../icons"
import { NavLink } from 'react-router-dom'
import {changeNewPlaylist} from "../../store/Slice/utilsSlice"
import { useSelector,useDispatch } from 'react-redux'
import {getAllPlaylist}  from "../../store/Slice/playlistSlice"
import { useNavigate } from 'react-router-dom'


const LowerSidebar = () => {
    const Navigate = useNavigate()
    const userData = useSelector((state)=>state.auth.userData)
    const playlist = useSelector((state)=>state.playlist.playlists)

const dispatch = useDispatch()
    useEffect(() => {
        async function fetchPlaylists() {
            const result = await dispatch(getAllPlaylist(userData._id));
        }
        fetchPlaylists();
    }, [dispatch, userData]);

    const openNewPlaylist = ()=>{
        dispatch(changeNewPlaylist())
    }
    console.log(playlist,"playlist");
    
    return (
        <div>

            <div onClick={openNewPlaylist} className='bg-[#292727] rounded-xl flex justify-center items-center cursor-pointer'>
                <button className='flex py-2 px-4 justify-center items-center gap-4'>
                    <FaPlus size={25} color='white' />
                    <span className='text-white'>New Playlist</span>
                </button>
            </div>
            <div  className='mt-3 h-[53vh]  overflow-y-scroll scrollbarPlaylist overflow-x-hidden'>
                {playlist.map((item,index)=>(
                    <NavLink to={`/playlist/${item._id}`} key={index} className="flex flex-col justify-center items-start px-4 w-full   py-2 hover:bg-[#212121]">
                    <div className='text-white font-semibold text-base'>{item?.name}</div>
                    <div className='text-white font-extralight text-xs'> {item?.description}</div>
                </NavLink>
                ))}
            </div>
        </div>
    )
}

export default LowerSidebar
