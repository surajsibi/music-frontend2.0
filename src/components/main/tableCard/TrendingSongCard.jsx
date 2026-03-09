import React, { useState } from "react";
import { FaPlay, CiHeart, FcLike, MdOutlinePlaylistAdd } from "../../icons";
import { changeSavePlaylist } from "../../../store/Slice/utilsSlice";
import { savePlaylistId } from "../../../store/Slice/playlistSlice";
import { useDispatch } from "react-redux";

function decodeHtmlEntities(text) {
  if (!text) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(text), "text/html");
  return doc.body.textContent || "";
}

const TrendingSongCard = ({ rank, title, image, artist, index, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const imgSrc = Array.isArray(image)
    ? image[0]?.url ?? image[0]
    : image?.url ?? image;

  const artistStr = (() => {
    const arr = Array.isArray(artist) ? artist : artist ? [artist] : [];
    return arr
      .map((art, i) =>
        decodeHtmlEntities(typeof art === "string" ? art : art?.name ?? "")
      )
      .join(", ");
  })();

  const handleCardClick = (e) => {
    if (e.target.closest("button")) return;
    onClick?.();
  };

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    dispatch(changeSavePlaylist());
    dispatch(savePlaylistId(index));
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick(e)}
      className="trending-song-card group group/card transition-transform duration-300 ease-out"
    >
      <div className="trending-card-inner">
        <div className="trending-card-art-wrap">
          <img
            src={imgSrc}
            alt=""
            className="trending-card-art"
          />
          <div className="trending-card-overlay">
            <button
              type="button"
              className="trending-play-btn"
              aria-label="Play"
            >
              <FaPlay className="text-lg" />
            </button>
          </div>
          {rank != null && (
            <span className={`trending-rank-badge ${rank > 3 ? "trending-rank-num" : ""}`}>
              {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : rank}
            </span>
          )}
        </div>
        <div className="trending-card-info">
          <p className="trending-card-title" title={title}>
            {title}
          </p>
          <p className="trending-card-artist" title={artistStr}>
            {artistStr || "—"}
          </p>
          <div className="trending-card-actions">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked((l) => !l);
              }}
              className={`trending-action-btn ${isLiked ? "text-red-500" : "text-white/70 hover:text-white"}`}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? <FcLike size={20} /> : <CiHeart size={20} />}
            </button>
            <button
              type="button"
              onClick={handleAddToPlaylist}
              className="trending-action-btn text-white/70 hover:text-white"
              aria-label="Add to playlist"
            >
              <MdOutlinePlaylistAdd size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSongCard;
