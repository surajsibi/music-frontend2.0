import React, { useEffect, useState } from "react";
import { FaPlay } from "../../icons";
import Lyrics from "../Lyrics";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../../../store/Slice/songSlice";
import { useNavigate } from "react-router-dom";
import {
  setInPlaylist,
  setPlaylist,
  setInAlbum,
} from "../../../store/Slice/howler";

const RightSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.song.currentSong);
  const [activeTab, setActiveTab] = useState("UP NEXT");
  const tabs = ["UP NEXT", "LYRICS"];
  const songs = useSelector((state) => state.howler.songPlaylist);
  const playlist = useSelector(
    (state) => state.playlist.currentPlaylist?.[0]?.songs,
  );
  const inPlaylist = useSelector((state) => state.howler.inPlaylist);
  const suggestions = useSelector((state) => state.song.suggestions);
  const isLoadingSuggestion = useSelector(
    (state) => state.song.isLoadingSuggestion,
  );
  const howlerCurrentSong = useSelector((state) => state.howler.currentSong);
  const albumPlaylist = useSelector((state) => state.album.albumPlaylist);
  const inAblumPlaylist = useSelector((state) => state.album.inAblumPlaylist);
  const inAlbum = useSelector((state) => state.howler.inAlbum);

  // console.log(albumPlaylist,"this is album playlist");
  // console.log(inAblumPlaylist,"this is inAblumPlaylist");

  // console.log(inAlbum,"this is in album");

  function decodeHtmlEntities(text) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    return doc.body.textContent;
  }

  const handleClick = (song) => {
    navigate(`/music/${song?.songId}`, { state: { optimisticSong: song } });
    dispatch(setInPlaylist(true));
    dispatch(setInAlbum(false));
  };

  // When we have a current song and we're not in album context, fetch suggestions for "Up Next"
  useEffect(() => {
    if (!currentSong?.songId || inAlbum) return;
    dispatch(getSuggestions(currentSong.songId));
  }, [currentSong?.songId, inAlbum, dispatch]);

  // Sync howler queue: use suggestions when not in playlist/album, otherwise use playlist songs
  useEffect(() => {
    if (inPlaylist && playlist?.length) {
      dispatch(setPlaylist(playlist));
    } else if (suggestions?.length && !inAlbum) {
      dispatch(setPlaylist(suggestions));
    }
  }, [dispatch, inPlaylist, inAlbum, playlist, suggestions]);

  // console.log(currentSong, "this is currentSong")
  // console.log(inPlaylist, "this is inPlaylist");

  return (
    <div className="text-white overflow-hidden h-[99%]">
      <div className="flex w-full justify-between ">
        {tabs.map((tab) => (
          <button
            className={`font-bold text-md  px-5 py-5 w-full justify-around mb-[2px] transition-all duration-700 ${
              activeTab == tab ? "border-b" : "border-b border-black"
            }`}
            key={tab}
            onClick={() => {
              setActiveTab(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "UP NEXT" && (
        <div className="overflow-x-scroll scrollbarMusic h-[67vh]">
          {inAlbum && songs?.length > 0
            ? songs?.map((song, index) => (
                <button
                  key={index}
                  className=" w-full  py-3 px-5 flex gap-5 justify-start items-center group"
                >
                  <div className="w-12 h-12 flex-shrink-0 relative">
                    {currentSong?.songId === song?.songId && (
                      <div
                        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-100 items-center `}
                      >
                        <FaPlay color="white" size={25} />
                      </div>
                    )}

                    <img
                      className="rounded-sm object-cover w-full h-full"
                      src={song?.images?.[0]?.url}
                    />
                  </div>
                  <div className="flex  flex-col items-start  w-full overflow-hidden  ">
                    <div className="truncate w-56 font-semibold text-start">
                      {song?.name}
                    </div>
                    <div className=" truncate w-56 text-start text-[#a1a1a1] ">
                      {song?.artists?.map((art, index) => (
                        <span key={index}>
                          {decodeHtmlEntities(art?.name)}
                          {index !== song?.artists.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))
            : inPlaylist && playlist?.length > 0
            ? playlist?.map((song, index) => (
                <button
                  key={index}
                  className=" w-full  py-3 px-5 flex gap-5 justify-start items-center group"
                >
                  <div className="w-12 h-12 flex-shrink-0 relative">
                    {currentSong?.songId === song?.songId && (
                      <div
                        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-100 items-center `}
                      >
                        <FaPlay color="white" size={25} />
                      </div>
                    )}

                    <img
                      className="rounded-sm object-cover w-full h-full"
                      src={song?.images?.[0]?.url}
                    />
                  </div>
                  <div className="flex  flex-col items-start  w-full overflow-hidden  ">
                    <div className="truncate w-56 font-semibold text-start">
                      {song?.name}
                    </div>
                    <div className=" truncate w-56  text-[#a1a1a1] ">
                      {song?.artists?.map((art, index) => (
                        <span key={index}>
                          {decodeHtmlEntities(art?.name)}
                          {index !== song?.artists?.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))
            : isLoadingSuggestion ? (
                  <div className="flex items-center justify-center py-8 text-[#a1a1a1]">
                    Loading up next…
                  </div>
                ) : Array.isArray(suggestions) && suggestions.length === 0 ? (
                  <div className="flex items-center justify-center py-8 text-[#a1a1a1]">
                    No suggestions available for this song.
                  </div>
                ) : (
                  (suggestions ?? []).map((song, index) => (
                  <button
                    onClick={() => handleClick(song)}
                    key={song?.songId}
                    className=" w-full  py-3 px-5 flex gap-5 justify-start items-center group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 relative">
                      {currentSong?.songId === song?.songId && (
                        <div
                          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center  items-center `}
                        >
                          <FaPlay color="white" size={25} />
                        </div>
                      )}
                      <div
                        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex justify-center opacity-0 items-center group-hover:opacity-100`}
                      >
                        <FaPlay color="white" size={25} />
                      </div>

                      <img
                        className="rounded-sm object-cover w-full h-full"
                        src={
                          typeof song?.images === "string"
                            ? song.images
                            : (song?.images?.[0]?.url ?? song?.images?.url)
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex  flex-col items-start  w-full overflow-hidden  ">
                      <div className="truncate w-56 font-semibold text-start">
                        {song?.name}
                      </div>
                      <div className=" truncate w-56  text-[#a1a1a1]  text-start">
                        {song?.artists?.map((art, index) => (
                          <span key={index}>
                            {decodeHtmlEntities(
                              typeof art === "string" ? art : (art?.name ?? ""),
                            )}
                            {index !== song?.artists?.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))
              )}
        </div>
      )}

      {activeTab === "LYRICS" && currentSong?.hasLyrics ? (
        <div className="overflow-x-scroll scrollbarMusic h-[67vh] ">
          <Lyrics />
        </div>
      ) : (
        <div className="flex justify-center items-center h-[67vh]">
          No Lyrics Found
        </div>
      )}
    </div>
  );
};

export default RightSide;
