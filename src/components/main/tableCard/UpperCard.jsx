import React from "react";
import { IoFlame } from "react-icons/io5";

const UpperCard = () => {
  return (
    <div className="trending-section-header flex items-end justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="trending-icon-wrap flex items-center justify-center rounded-xl">
          <IoFlame className="text-2xl text-amber-400" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Trending
          </h2>
          <p className="text-sm text-white/50 mt-0.5">
            Most played this week
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperCard;
