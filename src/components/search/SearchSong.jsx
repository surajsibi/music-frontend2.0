import React from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchSong = ({ song }) => {
  const navigate = useNavigate()
  function decodeHtmlEntities(str) {
    if (!str) return ""; // handle null/undefined safely
    return str.replace(/&amp;/g, "&");
  }

  const handleClick = (song) => {
    navigate(`/music/${song.id}`)
  };
  return (
    <div onClick={()=>handleClick(song)}>
      <div className=" flex  group  ">
        <div className="">
          <div className="w-16 rounded-xl relative">
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <FaPlay color="white" size={30} />
            </div>
            <img className="rounded-lg" src={song?.image?.[1]?.url} />
          </div>
        </div>
        <div className="flex justify-between  items-center w-[90%] mx-9 ">
          <div className=" flex justify-center flex-col w-[90%] ">
            <div>
              <h1 className="text-2xl font-bold">{song?.title}</h1>
            </div>
            <div className=" text-[#cec9c9] max-w-[98%] truncate ">
              {decodeHtmlEntities(song?.description)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSong;
