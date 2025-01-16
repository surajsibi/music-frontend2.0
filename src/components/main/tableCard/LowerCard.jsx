import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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

const LowerCard = ({ index, title, image, artist }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="flex relative border">
      <div className={`group max-w-[20vw]`}>
        <NavLink className="flex gap-4 p-1">
          <div className="min-w-[20%] max-w-[20%] flex items-center relative">
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center ${
                dropdown ? "opacity-100" : "group-hover:opacity-100"
              }`}
            >
              <FaPlay color="white" size={25} />
            </div>
            <img className="w-full" src={image} alt="Song Thumbnail" />
          </div>
          <div className="flex gap-2 justify-center items-start">
            <div className="truncate relative">
              <div
                className={`text-white font-semibold truncate ${
                  dropdown ? "w-28" : "group-hover:w-28 w-[10rem]"
                }`}
              >
                {title}
              </div>
              <div
                className={`text-[#eee] truncate ${
                  dropdown ? "w-28" : "group-hover:w-28 w-[11rem]"
                }`}
              >
                {artist}
              </div>
            </div>
            {/* Heart Icon */}
            <div
              className={`relative cursor-pointer transition-transform duration-500 items-start ${
                dropdown ? "flex" : "hidden group-hover:flex"
              } ${isLiked ? "text-red-500 scale-125" : "text-white scale-100"}`}
              onClick={toggleLike}
            >
              {isLiked ? <FcLike size={25} /> : <CiHeart size={25} />}
            </div>
            {/* Vertical Dots */}
            <div
              onClick={toggleDropdown}
              className={`cursor-pointer transition-transform duration-500 items-start hover:bg-gray-900 rounded-full p-1 ${
                dropdown ? "flex bg-gray-900" : "hidden group-hover:flex"
              }`}
            >
              <HiDotsVertical size={20} color="white" />
            </div>
          </div>
        </NavLink>
      </div>
      {/* Dropdown Menu */}
      {dropdown && (
        <div
          ref={dropdownRef}
          className={`text-white z-50 bg-[#212121] p-2 rounded-md absolute border flex-col gap-2 flex w-[50%] ${
            index === 0 || index === 1 || index === 2
              ? "left-[95%]"
              : index === 3
              ? "right-[18%]"
              : index === 4 || index === 5 || index === 6
              ? " left-[95%] top-[-70%]"
              : index === 7
              ? "right-[18%] top-[-70%]"
              : index === 8 || index === 9 || index === 10
              ? "left-[95%] top-[-235%]"
              : index === 11
              ? "right-[18%] top-[-235%]"
              : index === 12 || index === 13 || index === 14
              ? "left-[95%] top-[-290%]"
              : index === 15
              ? "right-[18%] top-[-290%]"
              : ""
          }`}
        >
          <div className="flex justify-start gap-3 items-center hover:bg-[#2c2c2c] cursor-pointer">
            <MdOutlinePlaylistPlay size={35} color="white" />
            <span>Play {index}</span>
          </div>
          <div className="flex justify-start gap-3 items-center hover:bg-[#2c2c2c] cursor-pointer">
            <MdPerson size={30} color="white" />
            <span>Go to artist</span>
          </div>
          <div className="flex justify-start gap-3 items-center hover:bg-[#2c2c2c] cursor-pointer">
            <MdLibraryAdd size={25} color="white" />
            <span>Save to playlist</span>
          </div>
          <div className="flex justify-start gap-3 items-center hover:bg-[#2c2c2c] cursor-pointer">
            <MdQueueMusic size={25} color="white" />
            <span>Add to queue</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LowerCard;
