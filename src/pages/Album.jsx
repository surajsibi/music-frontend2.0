import React, { useEffect } from "react";
import MainAlbum from "../components/album/MainAlbum";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAlbumSongs } from "../store/Slice/albumSlice";

const Album = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const albumSongs = useSelector((state) => state?.album?.currentAlbumSongs);
  console.log(albumSongs, "this is album songss");

  useEffect(() => {
    console.log("inside useeffect");
    
    if (id) {
      dispatch(getAlbumSongs(id))
    }
  }, [id,dispatch]);

  return (
    <div className="text-white ">
      <MainAlbum id={id} />
    </div>
  );
};

export default Album;
