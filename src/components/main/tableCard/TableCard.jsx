import React from "react";
import UpperCard from "./UpperCard";
import LowerCard from "./LowerCard";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../../../store/Slice/howler";
import { getNewReleased } from "../../../store/Slice/songSlice.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const TableCard = ({songs}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const songs = useSelector((state) => state.song.trending);
  console.log(songs, "this is song 1");

  // useEffect(() => {
  //   dispatch(getNewReleased());
  // }, []);

  const songs1 = [
    {
      title: "Bulleya(from sultan)",
      image: "/songsimg/sultan.jpg",
      artist: "vishal papon and arijit singh",
      src: "/songs/song1.m4a",
    },
    {
      title: "Akho mai tere ajab se",
      image: "/songsimg/akho mai tere.jpg",
      artist: "KK,vishal papon and arijit singh ",
      src: "/songs/ajab se.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "Bulleya(from sultan)",
      image: "/songsimg/sultan.jpg",
      artist: "vishal papon and arijit singh ",
      src: "/songs/song1.m4a",
    },
    {
      title: "Akho mai tere ajab se",
      image: "/songsimg/akho mai tere.jpg",
      artist: "KK,vishal papon and arijit singh ",
      src: "/songs/ajab se.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "Bulleya(from sultan)",
      image: "/songsimg/sultan.jpg",
      artist: "vishal papon and arijit singh ",
      src: "/songs/song1.m4a",
    },
    {
      title: "Akho mai tere ajab se",
      image: "/songsimg/akho mai tere.jpg",
      artist: "KK,vishal papon and arijit singh ",
      src: "/songs/ajab se.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/Commute.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/Commute.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/Commute.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/palpalhaibhari.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
    {
      title: "pal pal hai bhari",
      image: "/songsimg/Commute.jpg",
      artist: "ritik,KK,vishal papon and arijit singh ",
      src: "/songs/pal pal.m4a",
    },
  ];


  const handleClick = (song) => {
    navigate(`/music/${song.songId}`);
    
  };
  return (
    <div className="my-10">
      <div className="text-white">
        <UpperCard />
      </div>
      <div className="grid grid-cols-4 gap-x-48 my-4 overflow-x-scroll gap-y-5 overflow-y-hidden scrollbar  ">
        {songs.map((song, index) => (
          <div
            onClick={() => handleClick(song)}
            className="w-[20vw]  "
            key={index}
          >
            <LowerCard
              index={index}
              title={song.name}
              image={song.images}
              artist={song.artists}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCard;
