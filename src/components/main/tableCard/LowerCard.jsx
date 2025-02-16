import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from "react-router-dom";
import  {MdOutlinePlaylistAdd} from "../../icons"
import { changeSavePlaylist } from "../../../store/Slice/utilsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  FaPlay,
  CiHeart,
  FcLike,
  HiDotsVertical,
  MdOutlinePlaylistPlay,
  MdPerson,
  MdLibraryAdd,
  MdQueueMusic,
} from "../../icons";
import { savePlaylistId } from "../../../store/Slice/playlistSlice";
 

const LowerCard = ({ index, title, image, artist }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  

 const id= useSelector((state)=>state.playlist.currentPlaylistId)


  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleSavePlaylist=(index)=>{
    dispatch(changeSavePlaylist())
    dispatch(savePlaylistId(index))
   
  }
  
  return (
    <div className="flex relative mb-1  group">
      <div className={` max-w-[20vw] flex items-center`}>
        <NavLink to={"/music"} className="flex gap-4 p-1">
          <div className="min-w-12 max-w-8 flex items-center relative">
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
            >
              <FaPlay color="white" size={25} />
            </div>
            <img className="w-full" src={image} alt="Song Thumbnail" />
          </div>
          <div className="flex gap-2 justify-center items-start">
            <div className="truncate relative">
              <div
                className={`text-white font-semibold truncate group-hover:w-28 w-[10rem]`}
              >
                {title}
              </div>
              <div
                className={`text-[#eee] truncate group-hover:w-28 w-[11rem]`}
              >
                {artist}
              </div>
            </div>


          </div>
        </NavLink>
        {/* Heart Icon */}
      <div className="flex gap-2">
      <div
          className={`relative cursor-pointer transition-transform duration-500 items-start hidden group-hover:flex
             ${isLiked ? "text-red-500 scale-125" : "text-white scale-100"}`}
          onClick={toggleLike}
        >
          {isLiked ? <FcLike size={25} /> : <CiHeart size={25} />}
        </div>
        <div onClick={()=>{toggleSavePlaylist(index)}} className="cursor-pointer hidden group-hover:flex">
          <MdOutlinePlaylistAdd size={26} color="white"/>
        </div>
      </div>
        
        
      </div>


    </div>
  );
};

export default LowerCard;
