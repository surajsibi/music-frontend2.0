import React, { useEffect } from "react";
import { FaPlus } from "../icons";
import { NavLink } from "react-router-dom";
import { changeNewPlaylist } from "../../store/Slice/utilsSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlaylist } from "../../store/Slice/playlistSlice";

const LowerSidebar = () => {
  const userData = useSelector((state) => state.auth.userData);
  const playlist = useSelector((state) => state.playlist.playlists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData?._id) return;
    dispatch(getAllPlaylist(userData._id));
  }, [dispatch, userData?._id]);

  const openNewPlaylist = () => {
    dispatch(changeNewPlaylist());
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      <span className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        Playlists
      </span>
      <button
        type="button"
        onClick={openNewPlaylist}
        className="flex items-center justify-center gap-2.5 w-full py-2.5 px-3 rounded-lg border border-dashed border-white/20 text-white/70 hover:border-white/40 hover:bg-white/5 hover:text-white transition-all duration-200 mb-3"
      >
        <FaPlus size={18} className="flex-shrink-0" />
        <span className="text-sm font-medium">New Playlist</span>
      </button>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbarPlaylist pr-1">
        {playlist?.length ? (
          playlist.map((item, index) => (
            <NavLink
              to={`/playlist/${item._id}`}
              key={item._id ?? index}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 mb-0.5 transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/85 hover:bg-white/5"
                }`
              }
            >
              <div className="font-medium text-sm truncate">
                {item?.name || "Untitled"}
              </div>
              {item?.description ? (
                <div className="text-xs text-white/50 truncate mt-0.5">
                  {item.description}
                </div>
              ) : null}
            </NavLink>
          ))
        ) : (
          <p className="px-3 py-4 text-sm text-white/40">No playlists yet</p>
        )}
      </div>
    </div>
  );
};

export default LowerSidebar;
