import React, { useEffect } from "react";
import TopSearchComponent from "../components/search/Search";
import SearchSong from "../components/search/SearchSong";
import SearchAlbum from "../components/search/SearchAlbum";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchAll } from "../store/Slice/search";
import store from "../store/store.js";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { querry } = useParams();
  const loading = useSelector((state) => state.search.searchLoading);
  const searchData = useSelector((state) => state.search.searchAll);

  useEffect(() => {
    if (querry) {
      fetchData();
    }
  }, [querry, dispatch]);
  console.log(searchData, "this is search");

  const fetchData = async () => {
    await dispatch(searchAll(querry));
  };

  if (loading || !searchData ) {
    return <div>loading.....</div>;
  } else {
    return (
      <div>
        <div className="text-white  p-16 h-full flex flex-col gap-10">
          <TopSearchComponent topQuery={searchData?.topQuery?.results} />
          <div className="font-bold text-2xl mb-2">Songs</div>
          {searchData?.songs?.results &&
            searchData?.songs?.results.map((song) => <SearchSong song={song} />)}
          <div className="font-bold text-2xl mb-2">Album</div>
          {searchData?.albums?.results && searchData?.albums?.results.map((album) => <SearchAlbum album={album}/>)}
        </div>
      </div>
    );
  }
};

export default Search;
