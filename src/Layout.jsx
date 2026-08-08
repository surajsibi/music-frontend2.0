import React from "react";
import { Navbar, Sidebar } from "./components/index";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 z-20 h-[9vh] bg-transparent">
        <Navbar />
      </nav>
      <div className="flex pt-[9vh]">
        <aside className="h-[calc(100vh-9vh)] w-[17vw] bg-[#000]">
          <Sidebar />
        </aside>
        <main className="h-[calc(100vh-9vh)] w-[83vw] border-l border-white/10 bg-[#000] overflow-y-scroll scrollbarMain">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
