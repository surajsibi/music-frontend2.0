import React from "react";
import UpperCard from "./UpperCard";
import TrendingSongCard from "./TrendingSongCard";
import { useNavigate } from "react-router-dom";

const TableCard = ({ songs }) => {
  const navigate = useNavigate();
  const list = songs ?? [];

  const handleClick = (song) => {
    navigate(`/music/${song.songId}`);
  };

  return (
    <section className="trending-section my-10">
      <UpperCard />
      <div className="trending-scroll scrollbar">
        {list.length === 0 ? (
          <div className="trending-empty text-white/50 text-center py-12">
            No trending songs right now.
          </div>
        ) : (
          list.map((song, index) => (
            <div
              key={song.songId ?? index}
              className="opacity-0 animate-slideUp"
              style={{ animationDelay: `${80 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              <TrendingSongCard
                rank={index + 1}
                title={song.name}
                image={song.images}
                artist={song.artists}
                index={index}
                onClick={() => handleClick(song)}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TableCard;
