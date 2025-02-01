import React from 'react'
import { Genre, HorizontalCrad, TableCard } from '../components/main'
import PlaylistCard from '../components/playlist/PlaylistCard'
import { changeSavePlaylist,changeNewPlaylist } from '../store/Slice/utilsSlice'
import { useSelector } from 'react-redux'
import NewPlaylist from '../components/playlist/NewPlaylist'

const Homepage = () => {
  const savePlaylist = useSelector(state => state.utils.savePlaylist)
  const newPlaylist = useSelector(state => state.utils.newPlaylist)
  return (
    <div>
      <div>
        <div className=' h-[40vh] '>
          <Genre />
        </div>
        <div className=''>
          <HorizontalCrad />
        </div>
        <div className='py-1 px-24'>
          <TableCard />
        </div>

      </div>
      {savePlaylist &&<div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
         <PlaylistCard/>
      </div>}
      {newPlaylist &&<div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
         <NewPlaylist/>
      </div>}

    </div>
    
  )
}

export default Homepage
