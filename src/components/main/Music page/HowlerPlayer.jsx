import React, { useRef, useEffect } from 'react'
import Howler from "react-howler"
import { useSelector, useDispatch } from 'react-redux'
import { setDuration } from "../../../store/Slice/howler"


const HowlerPlayer = ({ isPlaying }) => {
  const volume = useSelector(state => state.howler.volume)
  const howlerRef = useRef(null);
  const dispatch = useDispatch();
 
  const currentSong = useSelector(state => state.howler.currentSong)




  return (
    <div>
      <Howler
        src={currentSong.src} // Add your song URL here
        playing={isPlaying} // Controls the playback state
        loop={false} // Set to true if you want the song to loop
        volume={volume} // Set the initial volume (0 to 1)
        ref={howlerRef}
        onPlay={() => console.log("Audio is playing")}
        onEnd={() => console.log("Song has ended")}
      />
    </div>
  )
}

export default HowlerPlayer
