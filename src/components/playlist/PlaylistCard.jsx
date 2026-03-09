import React, { useEffect } from "react";
import { RxCross2, FaPlus } from "../../components/icons";
import { changeSavePlaylist } from "../../store/Slice/utilsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addSongToPlaylist,
  deletePlaylistId,
  getAllPlaylist,
} from "../../store/Slice/playlistSlice";
import { changeNewPlaylist } from "../../store/Slice/utilsSlice";

const PlaylistCard = () => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlists);
  const currPlaylist = useSelector((state) => state.playlist.currentPlaylistId);

  const saveToPlaylist = async (id) => {
    try {
      await dispatch(addSongToPlaylist({ songId: currPlaylist, playlistId: id })).unwrap();
      await dispatch(getAllPlaylist(userData._id)).unwrap();
    } catch {
      // Error already shown by thunk (toast)
    }
  };
  useEffect(() => {
    async function fetchPlaylists() {
      const result = await dispatch(getAllPlaylist(userData._id));
    }
    fetchPlaylists();
  }, [userData]);

  const closeSavePlaylist = () => {
    dispatch(deletePlaylistId());
    dispatch(changeSavePlaylist());
  };

  const toogleNewPlaylist = () => {
    dispatch(changeNewPlaylist(""));
  };

  return (
    <div className="bg-[#212121] w-[90vw] min-w-[320px] max-w-[400px] rounded-xl opacity-0 animate-scaleIn shadow-2xl border border-white/5 overflow-hidden">
      <div className="flex justify-between items-center py-4 px-5 border-b border-white/10">
        <div className="text-white font-bold text-xl">Save to playlist</div>
        <div
          onClick={() => {
            dispatch(changeSavePlaylist());
          }}
          className="cursor-pointer hover:bg-white/10 rounded-full p-1.5 transition-colors"
        >
          <RxCross2 color="white" size={22} />
        </div>
      </div>
      <div className="text-white py-2.5 px-5 font-semibold text-sm text-white/70">All playlists</div>
      <div className="overflow-y-auto max-h-[45vh] min-h-[120px] scrollbarPlaylist px-1">
        {playlist?.map((item) => (
          <div
            onClick={() => {
              saveToPlaylist(item._id);
            }}
            key={item._id}
            className="flex gap-3 items-center rounded-lg mx-2 mb-1 py-2.5 px-3 hover:bg-white/10 cursor-pointer transition-colors"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
              <img
                className="w-full h-full object-cover"
                src={
                  item.songs?.[0]?.images?.[0]?.url ||
                  item.song?.[0]?.image?.[0]?.url
                }
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold truncate">
                {item?.name}
              </div>
              <div className="text-white/50 text-sm">
                {item?.songs?.length ?? 0} songs
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={toogleNewPlaylist}
        className="flex w-full justify-center py-4 px-5 border-t border-white/10"
      >
        <div className="flex items-center justify-center gap-2 bg-white text-black w-full max-w-[200px] py-2.5 px-4 rounded-lg hover:bg-white/90 transition-colors font-semibold cursor-pointer">
          <FaPlus size={20} />
          <span>New playlist</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
