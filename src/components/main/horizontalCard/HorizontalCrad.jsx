import React,{useEffect,useState} from 'react'
import UpperCard from './UpperCard'
import LowerCard from './LowerCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSong } from '../../../store/Slice/howler'
import { getAllSongs } from '../../../store/Slice/songSlice'
import Logo from '../../Logo'
import { setPlaylist } from '../../../store/Slice/howler'
const HorizontalCrad = () => {
  const dispatch = useDispatch()
  const songs = useSelector(state => state.song.songs)
  const loading = useSelector(state => state.song.isLoadingAllSongs)
  
  useEffect(() => {
    const fetchSongs = async () => {
      await dispatch(getAllSongs());
    };
    fetchSongs();
   
  }, [dispatch]);

  // useEffect(()=>{
  //   if(songs){
  //     dispatch(setPlaylist(songs))
  //   }
  // },[songs])



  const navigate = useNavigate()
  const handleClick = (song) => {
    dispatch(setCurrentSong(song))
    navigate(`/music/${song.songId}`)
  }

  if(loading){
    return (
      <div className='text-white'>Loading...</div>
    )
  }

  
  return (
    <div className='px-24'>
      <div className='text-white relative top-[-5]'>
        <UpperCard />
      </div>
      <div className='h-[40vh] py-4 flex  items-center gap-8 overflow-hidden hover:overflow-x-scroll scrollbar'>

      
        {songs.map((song,index) => (
          <div key={index}>
            <LowerCard
              song={song}
              onClick={() => handleClick(song)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCrad
