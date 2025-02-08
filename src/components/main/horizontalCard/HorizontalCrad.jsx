import React,{useEffect,useState} from 'react'
import UpperCard from './UpperCard'
import LowerCard from './LowerCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSong } from '../../../store/Slice/howler'
import { getAllSongs } from '../../../store/Slice/songSlice'
import Logo from '../../Logo'
import { current } from '@reduxjs/toolkit'

const HorizontalCrad = () => {
  const dispatch = useDispatch()
  const songs = useSelector(state => state.song.songs)
  const loading = useSelector(state => state.song.isLoading)
  
  useEffect(() => {
    const fetchSongs = async () => {
      await dispatch(getAllSongs());
      
    };
  
    fetchSongs();
   
  }, [dispatch]);

  console.log(songs);
  
  
  // const songs = [
  //   { title: "Bulleya2(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh", src: "https://aac.saavncdn.com/348/04edacbb0838b0bf5851a33e7d6cfeb3_160.mp4" },
  //   { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
  //   { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
  //   { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh ", src: "/songs/song1.m4a" },
  //   { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
  //   { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
  //   { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh ", src: "/songs/song1.m4a" },
  //   { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
  //   { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
  //   { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
  // ]
  const navigate = useNavigate()
  const handleClick = (song) => {
    dispatch(setCurrentSong(song))
    navigate("/music")
  }

  if(loading){
    return (
      <div>Loading...</div>
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
