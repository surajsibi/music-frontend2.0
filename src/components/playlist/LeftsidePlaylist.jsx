import React from 'react'
import { FaPlay } from "react-icons/fa"
import {Avatar} from "../../components/index"

const LeftsidePlaylist = () => {
  return (
    <div className='text-white flex items-center flex-col gap-5  '>
      <div className='w-72 flex justify-center mt-12 '>
        <img className='rounded-md' src='/songsimg/sultan.jpg' />
      </div>
      <div className='flex  flex-col items-center justify-center gap-2'>
      <div className='text-2xl font-bold'>Playlist name</div>
      <div className='flex items-center gap-2'>
        <div clas>
          <Avatar src="/songsimg/sultan.jpg" className={"w-7"}/>
        </div>
        <div className='text-sm'>Username</div>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <div className='text-[#aaa] font-bold text-xl'>Playlist description</div>
      <div className='text-[#aaa] font-bold text-lg'>3 tracks</div>
      </div>
      <button className='p-4 bg-white rounded-[50%] justify-center items-center'>
        <FaPlay color='black' size={25} />
      </button>
      </div>
    </div>
  )
}

export default LeftsidePlaylist
