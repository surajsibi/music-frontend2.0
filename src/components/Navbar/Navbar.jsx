import Search from "./Search";
import { Logo, Avatar } from "../index";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeGenre } from "../../store/Slice/utilsSlice";
import { userLogout } from "../../store/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const INITIAL_AVATAR_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#7c3aed",
  "#5b21b6",
  "#0ea5e9",
  "#0284c7",
  "#0369a1",
  "#0c4a6e",
  "#10b981",
  "#059669",
  "#047857",
  "#065f46",
  "#f59e0b",
  "#d97706",
  "#b45309",
  "#ef4444",
  "#dc2626",
  "#b91c1c",
  "#ec4899",
  "#db2777",
  "#be185d",
];

const getInitialBgColor = (letter) => {
  if (!letter) return INITIAL_AVATAR_COLORS[0];
  const index =
    (letter.toUpperCase().charCodeAt(0) - 65) % INITIAL_AVATAR_COLORS.length;
  return INITIAL_AVATAR_COLORS[Math.max(0, index)];
};

const Navbar = () => {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayName = userData?.username || userData?.fullname || "You";
  const hasAvatar = !!userData?.avatar?.url;
  const initial =
    displayName && displayName[0] ? displayName[0].toUpperCase() : "?";

  const handleHome = () => {
    dispatch(changeGenre("defaultGenre"));
  };

  const handleLogout = async () => {
    await dispatch(userLogout());
    navigate("/login");
  };

  return (
    <nav className="bg-transparent flex justify-between p-[10px] h-full opacity-0 animate-fadeIn">
      <button
        onClick={handleHome}
        className="leftside flex ml-2 items-center"
      >
        <div className="flex items-center hover:bg-white">
          <Logo />
        </div>
      </button>
      <div className="searchbar w-[35%]">
        <Search />
      </div>
      <div className="rightSide mr-4 flex items-center gap-3">
        {hasAvatar ? (
          <Avatar src={userData.avatar.url} className="w-10 h-10" />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm select-none flex-shrink-0"
            style={{ backgroundColor: getInitialBgColor(initial) }}
          >
            {initial}
          </div>
        )}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          title="Log out"
        >
          <IoLogOutOutline size={22} />
          <span className="text-sm font-medium hidden sm:inline">Log out</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
