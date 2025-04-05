import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopSearchComponent = ({ topQuery }) => {
  const navigate = useNavigate();

  function decodeHtmlEntities(str) {
    if (!str) return ""; // handle null/undefined safely
  return str.replace(/&amp;/g, "&");
  }

  const handleClick = () => {
    switch (topQuery?.[0]?.type) {
      case "song":
        navigate(`/music/${topQuery?.[0]?.id}`);
        break;
      case "album":
        navigate(`/album/${topQuery?.[0]?.id}`);
        break;
    }
  };
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(topQuery, "this is topQuery");
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className=" flex group "
    >
      <div className="">
        <div className="w-28 rounded-xl relative">
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <FaPlay color="white" size={30} />
          </div>
          <img className="rounded-lg" src={topQuery?.[0]?.image?.[1]?.url} />
        </div>
      </div>
      <div className="flex justify-between  items-center w-full mx-9">
        <div className=" flex justify-center flex-col">
          <div>
            <h1 className="text-2xl font-bold">{topQuery?.[0]?.title}</h1>
          </div>
          <div className="flex">
            <h4 className="text-[#e8dddd]">{capitalize(topQuery?.[0]?.type)}</h4>
            <h4 className="text-[#e8dddd] font-bold">·</h4>
            <h4 className="text-[#e8dddd]  truncate w-96">
              {decodeHtmlEntities(topQuery?.[0]?.type === "song" ? topQuery?.[0]?.title : topQuery?.[0]?.description)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSearchComponent;
