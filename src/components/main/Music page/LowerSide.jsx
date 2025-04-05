import React, { useState, useRef, useEffect } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LuThumbsUp, RxLoop, LuThumbsDown, FaPlay, IoPlaySkipForward, IoPlaySkipBackSharp, MdOutlinePlaylistAdd, IoMdArrowDropup, IoMdArrowDropdown, FaPause, RxAvatar } from "../../icons"
import SliderMusic from './SliderMusic'
import { useNavigate } from 'react-router-dom'
import ReactHowler from 'react-howler';
import { useSelector, useDispatch } from 'react-redux'
import { current } from '@reduxjs/toolkit'
import { playNext, playPrev } from '../../../store/Slice/howler.js'
import { changeSavePlaylist } from '../../../store/Slice/utilsSlice.js'
import { savePlaylistId } from '../../../store/Slice/playlistSlice.js'
import { toggleLike } from "../../../store/Slice/likeSlice.js"
import store from "../../../store/store.js"



const LowerSide = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isLooping, setIsLooping] = useState(false)
  const [seekTime, setSeekTime] = useState(0);
  const [isLiked, setIsliked] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [arrow, setArrow] = useState("up")
  const volume = useSelector(state => state.howler.volume)
  const howlerRef = useRef(null)
  const currentSong = useSelector(state => state.howler.currentSong)
  const duration = currentSong?.duration
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentSong) {
      setIsliked(currentSong?.isLiked)
    }
  }
    , [currentSong])


    // console.log(currentSong,"this is cs")



  function decodeHtmlEntities(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc?.body?.textContent;
  }

  useEffect(() => {
    setLoading(true)
  }, [currentSong]);

  const handleOnLoad = () => {
    setLoading(false)
  }
  useEffect(() => {
    let interval = null
    if (isPlaying) {
      interval = setInterval(() => {
        if (howlerRef?.current) {
          const current = howlerRef?.current.seek() // Get current time
          setCurrentTime(current)
        }
      }, 500) // Update every 500ms
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval) // Clean up
  }, [isPlaying])

  useEffect(() => {
    if (howlerRef?.current && seekTime !== currentTime) {
      howlerRef?.current.seek(seekTime); // Set the current time to the seek time
    }
  }, [seekTime]);



  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }




  const changeArrow = () => {
    setArrow(prev => (prev == "up" ? "down" : "up"))
    if (arrow == "up") {
      navigate("/")
    }
  }

  const toggleLoop = () => {
    setIsLooping((prev) => !prev)
  }

  const handleToggleLike = async (currentSong) => {
    const likedd = await dispatch(toggleLike(currentSong))
    console.log(likedd?.payload?.[0]);
    setIsliked(likedd?.payload?.[0].isLiked)
  }
  const toggleSavePlaylist = (songs) => {
    dispatch(changeSavePlaylist(songs))
    dispatch(savePlaylistId(songs._id))
  }


  // console.log(songPlaylist, "this is song playlist");
  const handleSongEnd = () => {
    const updatedPlaylist = store?.getState()?.howler?.songPlaylist; // Get latest Redux state
    const currentIndex = updatedPlaylist?.findIndex(song => song?.songId === currentSong?.songId)
    if (currentIndex == updatedPlaylist?.length - 1) {
      navigate(`/music/${updatedPlaylist?.[0]?.songId}`)
    }
    if (currentIndex == -1) {
      navigate(`/music/${updatedPlaylist?.[0]?.songId}`)
    }
    else {
      navigate(`/music/${updatedPlaylist[currentIndex + 1]?.songId}`)
    }

  }

  const handleNext = () => {
    const updatedPlaylist = store?.getState()?.howler?.songPlaylist; // Get latest Redux state
    const currentIndex = updatedPlaylist?.findIndex(song => song?.songId === currentSong?.songId)
    if (currentIndex == updatedPlaylist?.length - 1) {
      navigate(`/music/${updatedPlaylist?.[0]?.songId}`)
    }
    if (currentIndex == -1) {
      navigate(`/music/${updatedPlaylist?.[0].songId}`)
    }
    else {
      navigate(`/music/${updatedPlaylist[currentIndex + 1]?.songId}`)
    }
  }
  const handlePrev = () => {
    const updatedPlaylist = store?.getState()?.howler?.songPlaylist; // Get latest Redux state
    const currentIndex = updatedPlaylist?.findIndex(song => song?.songId === currentSong?.songId)
    if (currentIndex == 0) {
      navigate(`/music/${updatedPlaylist[updatedPlaylist.length - 1]?.songId}`)
    }
    if (currentIndex == -1) {
      navigate(`/music/${updatedPlaylist[updatedPlaylist.length - 1]?.songId}`)
    }
    else {
      navigate(`/music/${updatedPlaylist[currentIndex - 1]?.songId}`)
    }
  }

  // console.log(currentSong, "this is current song")

  return (
    <div>

      <div className="flex items-center gap-x-2  w-full">
        {/* Progress Bar */}
        <input
          type="range"
          step="any"
          className="w-full h-[2px] rounded-lg bg-gray-600  progressBar cursor-pointer"
          min="0"
          max={duration}
          value={currentTime}
          loop={isLooping}
          onChange={(e) => setSeekTime(Number(e.target.value))} // Update seek time
          onMouseUp={() => howlerRef.current.seek(seekTime)} // Seek on mouse release
          onTouchEnd={() => howlerRef.current.seek(seekTime)} // Seek on touch release
        />

      </div>


      <div className='w-full h-[10vh] items-center flex px-5 justify-between'>
        <div className='flex items-center pl-5'>
          <div className='w-[3.3vw]'>
            <img className='w-full h-full rounded-md' src={currentSong?.images?.[2]?.url} />
          </div>
          <div className='text-white flex flex-col items-start ml-5  max-w-[15vw] min-w-[15vw]'>
            <div className='truncate  max-w-[15vw] min-w-[15vw] font-bold text-base'>{currentSong?.name}</div>
            <div className='truncate  max-w-[15vw] min-w-[15vw] '>{current?.artist?.map((art, index) => (
              <NavLink key={index}>{art?.name}{index !== artist?.length - 1 ? ", " : ""}</NavLink>
            ))}</div>
          </div>

        </div>
        <div className='flex items-center gap-x-5'>
          <div onClick={() => handlePrev()} className='cursor-pointer'><IoPlaySkipBackSharp color='white' size={20} /></div>
          <div className='cursor-pointer transition-all duration-[2s] ' onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <FaPause className='icon-transition icon-pause' color='white' size={25} /> : <FaPlay className='icon-transition icon-play' color='white' size={25} />}</div>
          <div onClick={() => handleNext()} className='cursor-pointer'><IoPlaySkipForward color='white' size={20} /></div>
          <div className='text-white text-sm  flex w-[6vw] justify-center'>
            {formatTime(currentTime)}/{formatTime(duration)}
          </div>
          <div className='flex'>

            <div onClick={() => { handleToggleLike(currentSong) }} className={` ${isLiked ? "jack-in-the-box" : ""} animate__animated animate__jackInTheBox p-2 rounded-[50%] flex items-center justify-center hover:bg-[#3a3a3a]`}><LuThumbsUp color={isLiked ? "transparent" : "white"} fill={isLiked ? "red" : ""} size={20} /></div>
            <div onClick={() => { toggleSavePlaylist(currentSong) }} className='py-1 px-1 rounded-[40%] flex items-center  hover:bg-gray-700'><MdOutlinePlaylistAdd color='white' size={24} /></div>
            <div className='p-1 rounded-[50%] flex items-center relative '>

              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md   text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                  <RxAvatar color='white' size={24} />
                </MenuButton>
                <MenuItems
                  transition
                  anchor="top center"
                  className="w-40 overflow-y-auto h-45 scrollbarMain origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {currentSong?.artists && currentSong?.artists.map((artist, index) => (
                    <MenuItem key={index} onClick={() => { navigate(`/artist/${artist.artistId}`) }} >
                      <button className="group flex w-full bg-black items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-800">
                        <div className='w-6 rounded-[50%] flex gap-x-3'>
                          <img className='w-full h-full rounded-[40%]' src={artist?.images?.[0]?.url} />
                          <div className='text-white'>{decodeHtmlEntities(artist?.name)}</div>
                        </div>
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>


          </div>
        </div>



        <div className='flex  items-center  gap-x-2 '>
          <div className='cursor-pointer  flex items-center w-[40%] gap-x-2'>
            <SliderMusic />

          </div>
          <div className={`${isLooping ? "bg-[#476652]" : "hover:bg-[#3a3a3a]"}  p-2 rounded-[50%] flex items-center justify-center  `} onClick={toggleLoop}><RxLoop color='white' size={20} /></div>
          <div onClick={changeArrow} className='  hover:bg-gray-600 items-center justify-center flex rounded-[50%] p-[0.2%]' >{arrow == "up" ? <IoMdArrowDropup size={24} color="white" /> : <IoMdArrowDropdown size={24} color="white" />}</div>
        </div>

        <div>
          <ReactHowler
            src={currentSong?.songUrl} // Add your song URL here
            playing={isPlaying} // Controls the playback state
            loop={false} // Set to true if you want the song to loop
            volume={volume} // Set the initial volume (0 to 1)
            ref={howlerRef}
            onLoad={handleOnLoad}
            onPlay={() => console.log("Audio is playing")}
            onEnd={handleSongEnd}
          />
        </div>
      </div>
    </div>

  )
}

export default LowerSide
