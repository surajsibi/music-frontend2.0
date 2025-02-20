import React, { useEffect } from 'react'
import { RightSide } from "../components/main/index"

import LowerSide from '../components/main/Music page/LowerSide'
import { useSelector,useDispatch } from 'react-redux'
import PlaylistCard from '../components/playlist/PlaylistCard'
import NewPlaylist from '../components/playlist/NewPlaylist'
import { useParams } from 'react-router-dom'
import { getSongById } from '../store/Slice/songSlice'
import { setCurrentSong } from '../store/Slice/howler'


const Musicpage = () => {
    const savePlaylist = useSelector(state => state.utils.savePlaylist)
    const newPlaylist = useSelector(state => state.utils.newPlaylist.value)
    const dispatch = useDispatch()
    const song = useSelector((state) => state.song.currentSong)

    const {id} = useParams()

    useEffect(() => {
        if(id){
            dispatch(getSongById(id))
        }
    }, [id,dispatch]);

    useEffect(() => {
        if(song){
            dispatch(setCurrentSong(song))
        }
    }, [song,dispatch]);


    const currentSong = useSelector((state) => state.howler.currentSong)
    console.log(song, "this is current song right now");
    

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
