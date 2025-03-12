import React from "react";
import {FaPlay} from "../icons"


const handleClick=()=>{
    console.log("hello");
    
}

const LeftSide = () => {
  return (
    <div className="text-white flex items-center flex-col gap-5 ">
      <div className="w-72 flex justify-center mt-12">
        <img
          className="rounded-md"
          src="https://c.saavncdn.com/026/Ra-One-Hindi-2011-500x500.jpg"
        />
      </div>
      <div className="flex  flex-col items-center justify-center gap-2">
        <div className="text-2xl font-bold">RA.ONE</div>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-[#aaa] font-bold text-xl  max-w-96 truncate">
            2020 · English Album · Dua Lipaaaaaa
          </div>
          <div className="text-[#aaa] font-bold text-lg">13 tracks</div>
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
