import React from "react";
import { MdHomeFilled } from "../icons";
import { NavLink } from "react-router-dom";

const UpperSidebar = () => {
  const navItems = [
    { icon: MdHomeFilled, title: "Home", url: "/" },
  ];

  return (
    <nav className="flex flex-col gap-0.5">
      <span className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        Menu
      </span>
      {navItems.map(({ icon: Icon, title, url }) => (
        <NavLink
          key={title}
          to={url}
          className={({ isActive }) =>
            `flex items-center gap-3 w-full py-2.5 px-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
              isActive
                ? "bg-white/10 text-white"
                : "text-white/80 hover:bg-white/5 hover:text-white"
            }`
          }
        >
          <Icon className="flex-shrink-0" size={24} color="currentColor" />
          <span>{title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default UpperSidebar;
