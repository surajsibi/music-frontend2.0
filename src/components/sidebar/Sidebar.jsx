import React from "react";
import UpperSidebar from "./UpperSidebar";
import LowerSidebar from "./LowerSidebar";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-black opacity-0 animate-fadeIn animation-delay-100">
      <div className="flex-shrink-0 px-3 py-4">
        <UpperSidebar />
      </div>
      <div className="flex-1 min-h-0 flex flex-col px-3 pb-4 border-t border-white/5">
        <LowerSidebar />
      </div>
    </div>
  );
};

export default Sidebar;
