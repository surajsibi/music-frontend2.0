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
  console.log(genre);
  const songsTable = useSelector((state) => state.song.trending);
  const songsUpper = useSelector(state => state.song.songs)

  useEffect(() => {
    dispatch(setInPlaylist(false));
    dispatch(setInAlbum(false));
  }, []);
  useEffect(() => {
dispatch(getNewReleased());
  }, []);
  useEffect(() => {
    const fetchSongs = async () => {
      await dispatch(getAllSongs());
    };
    fetchSongs();
  }, [dispatch]);
  console.log("home page ",songsUpper );

  const savePlaylist = useSelector((state) => state.utils.savePlaylist);
  const newPlaylist = useSelector((state) => state.utils.newPlaylist.value);
  return (
    <div>
      <div>
        <div className=" h-[40vh] ">
          <Genre />
        </div>
       { genre == "defaultGenre" ? (<div>
        <div className="">
          <HorizontalCrad songs={songsUpper}/>
        </div>
        <div className="py-1 px-24">
          <TableCard songs={songsTable} />
        </div>
       </div>) :(
        <div>
        <div className="">
          <HorizontalCrad />
        </div>
        <div className="py-1 px-24">
          <TableCard  />
        </div>
       </div>
       )
        }
      </div>
      {savePlaylist && (
        <div className=" w-[82vw] h-full absolute top-0 flex justify-center items-center ">
          <PlaylistCard />
        </div>
      )}
      {newPlaylist && (
        <div className=" w-[82vw] h-full absolute top-0 flex justify-center items-center ">
          <NewPlaylist />
        </div>
      )}
      <SearchComponent />
    </div>
  );
};

export default Homepage;
