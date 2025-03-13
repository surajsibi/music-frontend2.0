import React, { useEffect } from "react";
import LeftSide from "./LeftSide";
import AlbumSong from "./AlbumSong";

import { getAlbumSongs } from "../../store/Slice/albumSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MainAlbum = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const albumSongs = useSelector((state) => state?.album?.currentAlbumSongs);
  const loading = useSelector((state) => state?.album?.loadingSong);
  // console.log(albumSongs,"this is album songss");
  // console.log(id, "outside id");

  useEffect(() => {
    // console.log(id, "inside id");
    if (id) {
      dispatch(getAlbumSongs(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>loading....</div>;
  } else {
    return (
      <div className=" w-full h-[90vh] flex relative overflow-y-hidden">
        <div className="absolute inset-0 bg-black/60 w-full h-[50vh]     flex justify-center  items-center opacity-30">
          <img
            className="w-full h-full object-cover blur-2xl bg-bottom"
            src={albumSongs?.images?.[2]?.url}
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className=" w-[35%] h-full z-10">
          <LeftSide album={albumSongs} />
        </div>
        <div className="text-white w-[65%] h-full z-10 mt-16 overflow-y-auto scrollbar">
          {albumSongs?.songs.map((song) => (
            <AlbumSong song={song} key={song?.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default MainAlbum;
