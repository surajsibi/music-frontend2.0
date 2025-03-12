import React from 'react'
import { FaPlay } from "react-icons/fa"
import { Avatar } from "../../components/index"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentSong,setPlaylistPlaylist, } from '../../store/Slice/howler'

const LeftsidePlaylist = ({ songs, playlist }) => {
  const userData = useSelector(state => state.auth.userData)
  const currentPlaylist = useSelector(state => state.playlist.currentPlaylist)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  
  
  const handleClick = () => {
    dispatch(setCurrentSong(currentPlaylist?.[0].songs?.[0])  )  
    dispatch(setPlaylistPlaylist(currentPlaylist?.[0].songs))
    navigate(`/music/${currentPlaylist?.[0].songs?.[0]?.songId}`)

  }
  // console.log(currentPlaylist,"this is currentPlaylist")

  return (
    <div className='text-white flex items-center flex-col gap-5  '>
      <div className='w-72 flex justify-center mt-12 '>
        <img className='rounded-md' src={songs ? songs?.[0]?.images?.[2]?.url : ""} />
      </div>
      <div className='flex  flex-col items-center justify-center gap-2'>
        <div className='text-2xl font-bold'>{playlist?.[0]?.name}</div>
        <div className='flex items-center gap-2'>
          <div clas>
            <Avatar src={userData.avatar.url} className={"w-8 h-8"} />
          </div>
          <div className='text-sm'>{userData.username}</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-[#aaa] font-bold text-xl'>{playlist?.description}</div>
          <div className='text-[#aaa] font-bold text-lg'>{songs?.length} tracks</div>
        </div>
        <button onClick={handleClick} className='p-4 bg-white rounded-[50%] justify-center items-center'>
          <FaPlay color='black' size={25} />
        </button>
      </div>
    </div>
  )
}

export default LeftsidePlaylist
