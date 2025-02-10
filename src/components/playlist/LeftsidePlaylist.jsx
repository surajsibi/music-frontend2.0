import React from 'react'
import { FaPlay } from "react-icons/fa"
import {Avatar} from "../../components/index"
import { useSelector } from 'react-redux'

const LeftsidePlaylist = ({songs,playlist}) => {
  // console.log(songs,"this is songs");
  // console.log(playlist,"this is ss");
  const userData = useSelector(state=>state.auth.userData)

  console.log("this is userdata",userData);
  
  
  
  return (
    <div className='text-white flex items-center flex-col gap-5  '>
      <div className='w-72 flex justify-center mt-12 '>
        <img className='rounded-md' src={songs ? songs?.[0]?.images?.[2]?.url : ""}/>
      </div>
      <div className='flex  flex-col items-center justify-center gap-2'>
      <div className='text-2xl font-bold'>{playlist?.[0]?.name}</div>
      <div className='flex items-center gap-2'>
        <div clas>
          <Avatar src={userData.avatar.url} className={"w-8 h-8"}/>
        </div>
        <div className='text-sm'>{userData.username}</div>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <div className='text-[#aaa] font-bold text-xl'>{playlist?.description}</div>
      <div className='text-[#aaa] font-bold text-lg'>{songs?.length} tracks</div>
      </div>
      <button className='p-4 bg-white rounded-[50%] justify-center items-center'>
        <FaPlay color='black' size={25} />
      </button>
      </div>
    </div>
  )
}

export default LeftsidePlaylist
