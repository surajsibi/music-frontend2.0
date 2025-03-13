import React, { useState, useEffect } from "react";
import { Button } from "../components/index";
import { CiHeart, FcLike } from "../components/icons";
import { setCurrentSong } from "../store/Slice/howler";
import { useNavigate, NavLink } from "react-router-dom";
import { FaPlay } from "../components/icons";
import { useParams } from "react-router-dom";

import { getArtistById, getArtistTopSongs } from "../store/Slice/artistSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../store/Slice/howler";
import { getArtistTopAlbum } from "../store/Slice/albumSlice.js";
import { setSuggestion } from "../store/Slice/songSlice.js";

const Artist = () => {
  const dispatch = useDispatch();
  const artistSongs = useSelector((state) => state?.artist?.artistTopSongs);
  const { id } = useParams();

  useEffect(() => {
    console.log("say hello");
  }, [id]);
  // console.log(id, "this is id");
  useEffect(() => {
    // console.log("useEffect triggered with id:", id);

    if (id) {
      // console.log("Dispatching getArtistById with id:", id);
      dispatch(getArtistById(id));
    }
  }, [id]);

  const [currently, setCurrently] = useState("songs");
  function decodeHtmlEntities(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body.textContent;
  }
  function fixEncodingIssues(text) {
    return text
      .replace(/â€˜/g, "‘") // Fix left single quote
      .replace(/â€™/g, "’") // Fix right single quote
      .replace(/â€œ/g, "“") // Fix left double quote
      .replace(/â€/g, "”") // Fix right double quote
      .replace(/â€“/g, "–") // Fix en dash
      .replace(/â€”/g, "—"); // Fix em dash
  }
  

  function formatNumber(num) {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num?.toString();
  }

  const handleReadMore = () => {
    setCurrently("about");
  };

  //   console.log(artistSongs, "this is artist songs");

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const [activeTab, setActiveTab] = useState("Top Songs");
  const tabs = ["Top Songs", "Top Album"];

  const playlist = useSelector((state) => state.howler.songPlaylist);

  const artist = useSelector((state) => state?.artist?.artists);
  console.log(artist, "artist ");

  useEffect(() => {
    if (artist?.topAlbums) {
      dispatch(getArtistTopAlbum(artist.topAlbums));
    }
  }, [artist]);
  const topAlbumss = useSelector((state) => state?.album?.artistTopAlbum);
  console.log(topAlbumss, "this is top albumssssss");
  //   console.log(artist?.topAlbums, "this is top albums");

  useEffect(() => {
    if (artist?.songs) {
      dispatch(setPlaylist(artist.songs)); // Set playlist only when songs are updated
    }
  }, [artist]);
  const currentSong = (song) => {
    dispatch(setCurrentSong(song));
  };
  const navigate = useNavigate();

  const handlePlay = () => {
    setCurrently("songs");
  };

  // const handleClick = (art) =>{
  // navigate(`/album/${art?.albumId}`)
  // }

  const updatedArtistTopSongs = Array.isArray(artist?.topSongs)
    ? artist?.topSongs.map((song) =>
        typeof song === "string" ? song.replace(/'/g, '"') : song
      )
    : [];

  //   console.log("Updated artist top songs:", updatedArtistTopSongs);

  useEffect(() => {
    if (artist?.topSongs?.length > 0) {
      // console.log(artist?.topSongs, "this is toppppp songs");

      dispatch(getArtistTopSongs(updatedArtistTopSongs));
    }
  }, [artist]);

  //   console.log(artist?.topSongs, "this is top songsss");
  console.log(artistSongs, "this is top songs of artist");

  return (
    <div className="mb-10">
      <div className="flex w-full  items-center">
        <div className="  py-5 px-8 ">
          <img
            className=" h-[50vh]  rounded-[50%]"
            src={artist?.images?.[2]?.url}
          />
        </div>
        <div className="text-white ">
          <div className="text-5xl font-semibold mb-3">
            {" "}
            {decodeHtmlEntities(artist?.name)}
          </div>
          <div className="flex gap-2">
            <div className="text-lg">Artist</div>
            <div className="text- items-center font-bold">.</div>
            <div className="text-lg">{artist?.fanCount}</div>
            <div className="text-lg">Listeners</div>
          </div>
          <div className="mt-9 flex gap-5">
            <button
              onClick={handlePlay}
              className="text-white  py-2 px-10 rounded-2xl font-bold bg-[#1a867a] cursor-pointer hover:bg-[#11645b]"
            >
              Songs
            </button>
            {artist?.bio.length > 0 && (
              <button
                onClick={handleReadMore}
                className="text-white  py-2 px-6 rounded-2xl font-bold bg-[#1a867a] cursor-pointer hover:bg-[#11645b]"
              >
                Read More
              </button>
            )}
          </div>
        </div>
      </div>

      {currently === "about" ? (
        <div className="flex flex-col gap-5 mt-5 mb-10">
          {artist?.bio?.map((bio) =>
            bio?.title === "Top 10 Hit Songs" ? null : (
              <div className="flex flex-col mx-10 gap-4">
                <div className="text-white text-4xl font-bold">
                  {" "}
                  {fixEncodingIssues(decodeHtmlEntities(bio?.title))}
                </div>
                <div className="text-white font-semibold">
                  {" "}
                  {fixEncodingIssues(decodeHtmlEntities(bio?.text))}
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="px-16   flex flex-col  mt-10  ">
          <div className="flex gap-10">
            {tabs.map((tab) => (
              <button
                className={`text-white font-bold text-3xl px-5 py-5 w-full transition-all duration-700
                ${activeTab === tab ? "border-b" : "border-b border-black"}  `}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative mt-5 mb-10 ">
            <div
              className={`absolute inset-0 transition-opacity duration-500 transform ${
                activeTab === "Top Songs"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
            >
              {activeTab === "Top Songs" && artistSongs?.length > 0 && (
                <div className="px-16 flex flex-col mt-2 ">
                  <div className="mt-5 flex flex-col gap-6 mb-10">
                    {artistSongs?.map((art) => (
                      <div
                        key={art.songId}
                        className="group"
                        onClick={() => navigate(`/music/${art.id}`)}
                      >
                        <div className="flex items-center">
                          <div className="max-w-10 relative">
                            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100">
                              <FaPlay color="white" size={25} />
                            </div>
                            <img
                              className="w-full h-full rounded-md"
                              src={art?.image?.[0]?.url}
                            />
                          </div>
                          <div className="text-white font-bold w-56 max-w-56 truncate ml-16">
                            {art?.name}
                          </div>
                          <div className="text-[#9d9d9d] font-semibold w-96 truncate">
                            {art?.artists?.primary.map((artt, index) => (
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
                          <div className="w-20 ml-16 text-[#9d9d9d] font-semibold">
                            {formatNumber(art?.playCount)}
                          </div>
                          <div className="text-[#9d9d9d] font-semibold w-16 ml-16">
                            {formatTime(art?.duration)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className={`absolute inset-0 transition-opacity duration-500 transform ${
                activeTab === "Top Album"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {activeTab === "Top Album" && topAlbumss.length > 0 && (
                <div className="px-16 flex flex-col mt-2 ">
                  <div className="mt-5 flex flex-col gap-6 mb-10">
                    {topAlbumss?.map((art) => (
                      <div
                        onClick={() => {
                          navigate(`/album/${art.albumId}`);
                        }}
                        key={art.albumId}
                        className="group"
                      >
                        <div className="flex items-center justify-around">
                          <div className="max-w-10 relative">
                            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100">
                              <FaPlay color="white" size={25} />
                            </div>
                            <img
                              className="w-full h-full rounded-md"
                              src={art?.images?.[0]?.url}
                            />
                          </div>
                          <div className="text-white font-bold w-80 max-w-80 truncate ml-16">
                            {art?.name}
                          </div>
                          <div className="text-[#9d9d9d] font-semibold ml-20 w-48 truncate">
                            {art?.language}
                          </div>
                          <div className="w-20 ml-16 text-[#9d9d9d] font-semibold">
                            {formatNumber(art?.songCount)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* <div className='px-16   flex flex-col  mt-10'>
                <div className='text-white text-3xl font-bold'>Top Albums</div>
            </div> */}
    </div>
  );
};

export default Artist;
