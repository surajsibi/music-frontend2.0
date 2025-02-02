import React from 'react'
import LeftsidePlaylist from './LeftsidePlaylist'
import PlaylistSong from './PlaylistSong'

const PlaylistComponent = () => {
    return (
        <div className=' w-full h-[90vh] flex relative'>
        <div className='absolute inset-0 bg-black/60 w-full h-[50vh]     flex justify-center  items-center opacity-30'>
        <img className='w-full h-full object-cover blur-2xl' src='/songsimg/sultan.jpg'/>
        <div className="absolute inset-0 "></div> 
        </div>
            <div className=' w-[35%] h-full z-10'>
            <LeftsidePlaylist />
            </div>
            <div className='border text-white w-[65%] h-full z-10'>
                <PlaylistSong />
            </div>
        </div>
    )
}

export default PlaylistComponent
