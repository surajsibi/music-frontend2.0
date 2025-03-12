import React, { useState } from "react";
import { FaPlay } from "../icons";
import { LuThumbsUp } from "../icons";

const AlbumSong = () => {
  const toggleLike = () => {
    console.log("hello");
  };

  const [isLiked, setIsliked] = useState(true);

  return (
    <div className="mt-8 w-full">
      <div className="flex w-full  justify-between px-4 items-center group ">
        <div className="flex gap-5">
          <div className="max-w-12 relative">
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
            >
              <FaPlay color="white" size={25} />
            </div>
            <img
              className="rounded-lg"
              src="https://c.saavncdn.com/026/Ra-One-Hindi-2011-50x50.jpg"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-medium w-64 ">Ra.One</div>
            <div className="flex gap-[3px] items-center w-72 truncate">
              suraj,singh,bisht
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              onClick={toggleLike}
              className={` ${
                isLiked ? "jack-in-the-box" : ""
              } animate__animated animate__jackInTheBox p-2 rounded-[50%] flex items-center justify-center hover:bg-[#3a3a3a]`}
            >
              <LuThumbsUp
                color={isLiked ? "transparent" : "white"}
                fill={isLiked ? "red" : "transparent"}
                size={20}
              />
            </div>
          </div>
        </div>
          <div className="mr-8">5:55</div>
      </div>
    </div>
  );
};

export default AlbumSong;
