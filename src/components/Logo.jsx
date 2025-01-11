import React from "react";
import { FaHeadphones } from "./icons";
import { Link } from "react-router-dom";

function Logo({ size = "30" }) {
    return (
        <div className="flex items-end bg-black">
            <Link to={'/'} className="flex gap-2 items-center">
                <FaHeadphones
                    size={size}
                    color="#A855F7"
                />
                <span className="font-bold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">STREAMIFY</span>
            </Link>
        </div>
    );
}

export default Logo;