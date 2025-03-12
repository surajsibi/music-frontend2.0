import React from "react";
import {FaPlay} from "../icons"



const LeftSide = ({album}) => {
  const handleClick=()=>{
      console.log("hello");   
  }
  // console.log(album,"leftside")
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
