import React, { useEffect } from "react";
import { Genre, HorizontalCrad, TableCard } from "../components/main";
import PlaylistCard from "../components/playlist/PlaylistCard";
import {
  changeSavePlaylist,
  changeNewPlaylist,
} from "../store/Slice/utilsSlice";
import { useSelector, useDispatch } from "react-redux";
import NewPlaylist from "../components/playlist/NewPlaylist";
import { setInPlaylist } from "../store/Slice/howler";
import { setInAlbum } from "../store/Slice/howler";
import SearchComponent from "../components/search/Search";
import { getNewReleased } from "../store/Slice/songSlice";
import { getAllSongs } from "../store/Slice/songSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const inPlaylist = useSelector((state) => state.howler.inPlaylist);
  const genre = useSelector((state) => state.utils.currentGenre);
  const songsTable = useSelector((state) => state.song.trending);
  const songsUpper = useSelector((state) => state.song.songs);

  useEffect(() => {
    dispatch(setInPlaylist(false));
    dispatch(setInAlbum(false));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getNewReleased());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  const savePlaylist = useSelector((state) => state.utils.savePlaylist);
  const newPlaylist = useSelector((state) => state.utils.newPlaylist.value);
  return (
    <div>
      <div>
        {/* Hero: image extends behind content (no box), content floats on top */}
        <div className="relative min-h-[52vh]">
          {/* Background image layer - fades at top/bottom to merge with other sections */}
          <div className="heroFadeMask absolute inset-0 h-[52vh] w-full overflow-hidden">
            <Genre />
          </div>
          {/* Dark black overlay over hero image (same fade so it merges) */}
          <div
            className="heroFadeMask absolute inset-0 h-[52vh] w-full pointer-events-none bg-black/70"
          />
          {/* Content on top of image */}
          <div className="relative z-10 pt-6 opacity-0 animate-fadeInUp animation-delay-100">
            {genre === "defaultGenre" ? (
              <HorizontalCrad songs={songsUpper} />
            ) : (
              <HorizontalCrad />
            )}
          </div>
        </div>
        <div className="py-1 px-24 opacity-0 animate-slideUp animation-delay-200">
          {genre === "defaultGenre" ? (
            <TableCard songs={songsTable} />
          ) : (
            <TableCard />
          )}
        </div>
      </div>
      {savePlaylist && (
        <div className="w-[82vw] h-full absolute top-0 flex justify-center items-center bg-black/50 opacity-0 animate-fadeIn">
          <PlaylistCard />
        </div>
      )}
      {newPlaylist && (
        <div className="w-[82vw] h-full absolute top-0 flex justify-center items-center bg-black/50 opacity-0 animate-fadeIn">
          <NewPlaylist />
        </div>
      )}
      <SearchComponent />
    </div>
  );
};

export default Homepage;
