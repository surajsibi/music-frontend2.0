import React, { useState } from "react";
import { FaPlay } from "../icons";
import { LuThumbsUp } from "../icons";
import { NavLink } from "react-router-dom";

const AlbumSong = ({song}) => {
  const toggleLike = () => {
    console.log("hello");
  };

  function decodeHtmlEntities(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body.textContent;
  }
  
  console.log(song,"this is songsssss")

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
              src={song?.images?.[0]?.url}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-medium w-64 ">{song?.name}</div>
            <div className="flex gap-[3px] items-center w-72 truncate">
            {song?.artists?.map((artt, index) => (
                              <NavLink
                                to={`/artist/${artt.id}`}
                                onClick={(e) => e.stopPropagation()}
                                key={index}
                                className="hover:underline"
                              >
                                {index > 0 && ", "}
                                {decodeHtmlEntities(artt.name)}
                              </NavLink>
                            ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
          <div className="mr-8">{song.playCount}</div>
            
          </div>
        </div>
          <div className="mr-8">5:55</div>
      </div>
    </div>
  );
};

export default AlbumSong;
