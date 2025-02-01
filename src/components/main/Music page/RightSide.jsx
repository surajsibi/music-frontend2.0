import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { FaPlay } from "../../icons"
import Lyrics from '../Lyrics'
const songs = [
  { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh",src:"/songs/song1.m4a" },
  { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh",src:"/songs/ajab se.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh",src:"/songs/song1.m4a" },
  { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ",src:"/songs/ajab se.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "Bulleya(from sultan)", image: "/songsimg/sultan.jpg", artist: "vishal papon and arijit singh ",src:"/songs/song1.m4a" },
  { title: "Akho mai tere ajab se", image: "/songsimg/akho mai tere.jpg", artist: "KK,vishal papon and arijit singh ",src:"/songs/ajab se.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/palpalhaibhari.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
  { title: "pal pal hai bhari", image: "/songsimg/Commute.jpg", artist: "ritik,KK,vishal papon and arijit singh ",src:"/songs/pal pal.m4a" },
]

const RightSide = () => {
  const [activeTab, setActiveTab] = useState("UP NEXT")
  const tabs = ["UP NEXT", "LYRICS"]
  return (
    <div className='text-white overflow-hidden h-[99%]'>
      <div className='flex w-full justify-between '>
        {tabs.map((tab) => (
          <button className={`font-bold text-md  px-5 py-5 w-full justify-around mb-[2px] transition-all duration-700 ${activeTab == tab ? "border-b" : "border-b border-black"}`}
            key={tab}
            onClick={() => { setActiveTab(tab) }}
          >{tab}</button>
        ))}
      </div>
      {activeTab === "UP NEXT" &&
        <div className='overflow-x-scroll scrollbarMusic h-[67vh]'>

          {songs.map((song, index) => (
            <button key={index} className=' w-full  py-3 px-5 flex gap-5 justify-start items-center group'>
              <div className='w-12 h-12 flex-shrink-0 relative'>
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}>
                  <FaPlay color="white" size={25} />
                </div>

                <img className='rounded-sm object-cover w-full h-full' src={song.image} /></div>
              <div className='flex  flex-col items-start  w-full overflow-hidden  '>
                <div className='truncate w-56 font-semibold text-start'>{song.title}</div>
                <div className=' truncate w-56  text-[#a1a1a1] '>{song.artist}</div>
              </div>
            </button>
          ))}

        </div>}


      {activeTab === "LYRICS" &&
        <div className='overflow-x-scroll scrollbarMusic h-[67vh] '>
          <Lyrics/>
        </div>
      }


    </div>
  )
}

export default RightSide
