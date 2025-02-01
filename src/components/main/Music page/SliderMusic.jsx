import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeVolume } from "../../../store/Slice/howler";
import { IoVolumeHighOutline ,IoVolumeMediumOutline ,IoVolumeLowOutline,IoVolumeMuteOutline } from "react-icons/io5";

const SliderMusic = () => {
  
  const volume = Math.floor((useSelector(state=>state.howler.volume))*100)
  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    
    dispatch(changeVolume(event.target.value)); // Update the volume in the store
    
  };
  
  

  return (
    <div className="flex justify-start items-center gap-x-2">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleSliderChange}
        className="sliderMusic"
        style={{
          background: `linear-gradient(to right, #af634c ${volume}%, white ${volume}%)`,
        }}
      />
      {volume >=70 ?  <IoVolumeHighOutline color='white' size={30}/>: volume >=40 && volume <=69 ? <IoVolumeMediumOutline color="white" size={30}/>: volume >=1 && volume <=39 ? <IoVolumeLowOutline color="white" size={30}/> : volume == 0 ? <IoVolumeMuteOutline color="white" size={30}/> : null }
      
    </div>
  );
};

export default SliderMusic;
