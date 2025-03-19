import React from "react";
import {FaPlay} from "../icons"
import { setAlbumPlaylist, setInAlbumPlaylist } from "../../store/Slice/albumSlice";

import {setPlaylist, setInAlbum} from "../../store/Slice/howler.js"
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";



const LeftSide = ({album}) => {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const albumPlaylist = useSelector((state)=>state.howler.songPlaylist)

  console.log(albumPlaylist,"this is album playlist");
  
 
  const handleClick=()=>{
      // dispatch(setInAlbumPlaylist(true))
      dispatch(setPlaylist(album?.songs))
      dispatch(setInAlbum(true))
      // dispatch(setAlbumPlaylist(album?.songs))
      navigate(`/music/${album?.songs?.[0]?.songId}`)
  }
  // console.log(playlsist,"leftside")
  // console.log(inAblumPlaylist);
  
  return (
    <div className="text-white flex items-center flex-col gap-5 ">
      <div className="w-72 flex justify-center mt-12">
        <img
          className="rounded-md"
          src={album?.images?.[2]?.url}
        />
      </div>
      <div className="flex  flex-col items-center justify-center gap-2">
        <div className="text-2xl font-bold">{album?.name}</div>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-[#aaa] font-bold text-xl  max-w-96 truncate">
            {album?.description}
          </div>
          <div className="text-[#aaa] font-bold text-lg">{album?.songCount} tracks</div>
        </div>
        <button
          onClick={handleClick}
          className="p-4 bg-white rounded-[50%] justify-center items-center"
        >
          <FaPlay color="black" size={25} />
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
