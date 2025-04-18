import React, { useEffect } from 'react'
import { RightSide } from "../components/main/index"

import LowerSide from '../components/main/Music page/LowerSide'
import { useSelector, useDispatch } from 'react-redux'
import PlaylistCard from '../components/playlist/PlaylistCard'
import NewPlaylist from '../components/playlist/NewPlaylist'
import { useParams } from 'react-router-dom'
import { getSongById, getSuggestions } from '../store/Slice/songSlice'
import { setCurrentSong } from '../store/Slice/howler'


const Musicpage = () => {
    const savePlaylist = useSelector(state => state.utils.savePlaylist)
    const newPlaylist = useSelector(state => state.utils.newPlaylist.value)
    const dispatch = useDispatch()
    const song = useSelector((state) => state.howler.currentSong)
    const isLoading = useSelector((state) => state.song.isLoading)
    const isLoadingSuggestion = useSelector((state)=>state.song.isLoadingSuggestion)

    const isLoadingSong = useSelector((state) => state.song.isLoadingSong)
    const responsesSong = useSelector((state) => state.song.currentSong)

    const { id } = useParams()
    useEffect(() => {
        if (id) {
            console.log(id,"is tis");
            
            const fetchData = async () => {
                dispatch(getSongById(id)) 
                console.log("fetching data of id ",id);               
            }
            fetchData()
        }
    }, [id, dispatch]); 


    useEffect(()=>{

        console.log(responsesSong,"this is responsesSong");
    },[responsesSong])
    
    

    useEffect(() => {
        if (responsesSong) {
            dispatch(setCurrentSong(responsesSong))                
        }
    }, [responsesSong, dispatch]);

    if (isLoadingSong ) {
        return (
            <div className='text-white'>Plz wait while Loading......</div>
        )
    }
    else {
        return (
            <div className=' h-[100%] w-[100%]'>
                <div className='h-[88%]   flex  pt-[2%] px-[9%]'>
                    <div className='h-full w-[60%]   flex justify-center items-center '>
                        <img className='w-[88%] rounded-lg' src={song?.images?.[2]?.url} />
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


}

export default Musicpage
