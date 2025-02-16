import React from 'react'
import { RightSide } from "../components/main/index"

import LowerSide from '../components/main/Music page/LowerSide'
import { useSelector } from 'react-redux'
import PlaylistCard from '../components/playlist/PlaylistCard'
import NewPlaylist from '../components/playlist/NewPlaylist'


const Musicpage = () => {
    const savePlaylist = useSelector(state => state.utils.savePlaylist)
    const newPlaylist = useSelector(state => state.utils.newPlaylist.value)


    const currentSong = useSelector((state) => state.howler.currentSong)
    console.log(currentSong);

    return (
        <div className=' h-[100%] w-[100%]'>
            <div className='h-[88%]   flex  pt-[2%] px-[9%]'>
                <div className='h-full w-[60%]   flex justify-center items-center '>
                    <img className='w-[88%] rounded-lg' src={currentSong?.images?.[2]?.url} />
                </div>
                <div className='h-full w-[40%]  '><RightSide /></div>
            </div>

            <div className=' w-full'><LowerSide /></div>
            {savePlaylist && <div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
                <PlaylistCard />
            </div>}
            {newPlaylist && <div className=' w-[82vw] h-full absolute top-0 flex justify-center items-center '>
                <NewPlaylist />
            </div>}

        </div>
    )
}

export default Musicpage
