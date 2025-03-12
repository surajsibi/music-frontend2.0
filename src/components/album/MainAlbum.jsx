import React from 'react'
import LeftSide from './LeftSide'
import AlbumSong from './AlbumSong'
import { useParams } from 'react-router-dom'

const MainAlbum = () => {
  const {id} = useParams
  
  return (
    <div className=' w-full h-[90vh] flex relative overflow-y-hidden'>
    <div className="absolute inset-0 bg-black/60 w-full h-[50vh]     flex justify-center  items-center opacity-30">
            <img
              className="w-full h-full object-cover blur-2xl bg-bottom"
              src='https://c.saavncdn.com/026/Ra-One-Hindi-2011-500x500.jpg'
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className=" w-[35%] h-full z-10">
           <LeftSide/>
          </div>
          <div className='text-white w-[65%] h-full z-10 mt-16 overflow-y-auto'>
            <AlbumSong/>

          </div>
      
    </div>
  )
}

export default MainAlbum
