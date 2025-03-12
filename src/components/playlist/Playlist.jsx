import React, { useEffect } from "react";
import LeftsidePlaylist from "./LeftsidePlaylist";
import PlaylistSong from "./PlaylistSong";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistById } from "../../store/Slice/playlistSlice";

const PlaylistComponent = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCurrentPlaylist(id) {
      dispatch(getPlaylistById(id));
    }
    fetchCurrentPlaylist(id);
  }, [id]);
  const currentPlaylist = useSelector(
    (state) => state.playlist.currentPlaylist
  );
  const songs = currentPlaylist?.[0]?.songs;
  return (
    <>
      {songs?.length >= 1 ? (
        <div className=" w-full h-[90vh] flex relative overflow-y-hidden">
          <div className="absolute inset-0 bg-black/60 w-full h-[50vh]     flex justify-center  items-center opacity-30">
            <img
              className="w-full h-full object-cover blur-2xl"
              src={songs ? songs?.[0]?.images?.[0]?.url : ""}
            />
            <div className="absolute inset-0 "></div>
          </div>
          <div className=" w-[35%] h-full z-10">
            <LeftsidePlaylist playlist={currentPlaylist} songs={songs} />
          </div>
          <div className=" text-white w-[65%] h-full z-10 mt-16 overflow-y-auto">
            {songs.map((song) => (
              <PlaylistSong song={song} />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[90vh] w-full  flex justify-center items-center ">
          <div className="text-white text-7xl"> No songs </div>
        </div>
      )}
    </>
  );
};

export default PlaylistComponent;
