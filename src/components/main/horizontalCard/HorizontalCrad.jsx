import React from 'react'
import UpperCard from './UpperCard'
import LowerCard from './LowerCard'

const HorizontalCrad = () => {
  const songs = [
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh" },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh " },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh " },
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh " },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh " },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh " },
    { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh " },
    { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh " },
    { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh " },
    { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh " },
  ]
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
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCrad
