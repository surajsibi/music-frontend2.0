import React from 'react'
import UpperCard from './UpperCard'
import LowerCard from './LowerCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentSong } from '../../../store/Slice/howler'

const HorizontalCrad = () => {
  const dispatch = useDispatch()
  const songs = [
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh", src: "/songs/song1.m4a" },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh ", src: "/songs/song1.m4a" },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh ", src: "/songs/song1.m4a" },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ", src: "/songs/ajab se.m4a" },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
    { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ", src: "/songs/pal pal.m4a" },
  ]
  const navigate = useNavigate()
  const handleClick = (song) => {
    dispatch(setCurrentSong(song))
    navigate("/music")
  }
 
  
  return (
    <div className='px-24'>
      <div className='text-white relative top-[-5]'>
        <UpperCard />
      </div>
      <div className='h-[40vh] py-4 flex  items-center gap-8 overflow-hidden hover:overflow-x-scroll scrollbar'>
        {songs.map((song, index) => (
          <div key={index}>
            <LowerCard
              title={song.title}
              image={song.image}
              artist={song.artist}
              onClick={() => handleClick(song)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCrad
