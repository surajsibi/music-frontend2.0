import React, { useEffect, useState } from "react";
import { RightSide } from "../components/main/index";

import LowerSide from "../components/main/Music page/LowerSide";
import { useSelector, useDispatch } from "react-redux";
import PlaylistCard from "../components/playlist/PlaylistCard";
import NewPlaylist from "../components/playlist/NewPlaylist";
import { useParams, useLocation } from "react-router-dom";
import { getSongById } from "../store/Slice/songSlice";
import { setCurrentSong } from "../store/Slice/howler";
import MusicPageSkeleton from "../skeleton/MusicPageSkeleton";
import { changeSavePlaylist, changeNewPlaylist } from "../store/Slice/utilsSlice";

const SKELETON_DELAY_MS = 200;

const Musicpage = () => {
  const savePlaylist = useSelector((state) => state.utils.savePlaylist);
  const newPlaylist = useSelector((state) => state.utils.newPlaylist.value);
  const dispatch = useDispatch();
  const song = useSelector((state) => state.howler.currentSong);
  const isLoadingSong = useSelector((state) => state.song.isLoadingSong);
  const responsesSong = useSelector((state) => state.song.currentSong);
  const [showSkeleton, setShowSkeleton] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const optimisticSong = location.state?.optimisticSong;

  useEffect(() => {
    if (id) dispatch(getSongById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (responsesSong) dispatch(setCurrentSong(responsesSong));
  }, [responsesSong, dispatch]);

  useEffect(() => {
    if (!isLoadingSong) {
      setShowSkeleton(false);
      return;
    }
    const timer = setTimeout(() => setShowSkeleton(true), SKELETON_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isLoadingSong]);

  if (isLoadingSong && optimisticSong) {
    const optimisticImg =
      optimisticSong?.images?.[0]?.url ??
      optimisticSong?.images?.url ??
      (typeof optimisticSong?.images === "string" ? optimisticSong.images : null);
    return (
      <div className="h-[100%] w-[100%]">
        <div className="h-[88%] flex pt-[2%] px-[9%]">
          <div className="h-full w-[60%] flex justify-center items-center relative">
            {optimisticImg && (
              <img
                className="w-[88%] rounded-lg object-cover aspect-square max-h-full"
                src={optimisticImg}
                alt=""
              />
            )}
            {!optimisticImg && (
              <div className="w-[88%] aspect-square max-h-full rounded-lg animate-pulse bg-white/10" />
            )}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          </div>
          <div className="h-full w-[40%]">
            <RightSide />
          </div>
        </div>
        <div className="w-full">
          <LowerSide />
        </div>
      </div>
    );
  }

  if (isLoadingSong && showSkeleton) {
    return (
      <>
        <MusicPageSkeleton />
        <LowerSide />
      </>
    );
  }

  if (isLoadingSong) {
    return (
      <>
        <div className="h-[88%] flex items-center justify-center text-white/60">
          Loading…
        </div>
        <LowerSide />
      </>
    );
  }

  return (
      <div className="h-[100%] w-[100%]">
        <div className="h-[88%] flex pt-[2%] px-[9%]">
          <div className="h-full w-[60%] flex justify-center items-center opacity-0 animate-scaleIn">
            <img className="w-[88%] rounded-lg shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]" src={song?.images?.[2]?.url} alt="" />
          </div>
          <div className="h-full w-[40%] opacity-0 animate-slideInRight animation-delay-100">
            <RightSide />
          </div>
        </div>

        <div className=" w-full">
          <LowerSide />
        </div>
        {savePlaylist && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60"
            onClick={() => {
              dispatch(changeSavePlaylist());
            }}
            role="presentation"
            aria-label="Close dialog"
          >
            <div onClick={(e) => e.stopPropagation()}>
              <PlaylistCard />
            </div>
          </div>
        )}
        {newPlaylist && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60"
            onClick={() => {
              dispatch(changeNewPlaylist());
            }}
            role="presentation"
            aria-label="Close dialog"
          >
            <div onClick={(e) => e.stopPropagation()}>
              <NewPlaylist />
            </div>
          </div>
        )}
      </div>
    );
};

export default Musicpage;
