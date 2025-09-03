import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

function BreadCrumps({ name, category }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs sm:text-sm md:text-base font-medium py-3 px-4">
      <Link to={"/"} className="flex items-center gap-2">
        <span className="cursor-pointer hover:text-black">HOME</span>
      </Link>

      <img src={arrow_icon} alt=">" className="w-3 h-3 opacity-70" />
      <Link to={`/${category}s`} className="flex items-center gap-2">
        <span className="capitalize cursor-pointer hover:text-black">
          {category}
        </span>
      </Link>
      <img src={arrow_icon} alt=">" className="w-3 h-3 opacity-70" />

      <span className="font-semibold text-black truncate max-w-[120px] sm:max-w-none">
        {name}
      </span>
    </div>
  );
}

export default BreadCrumps;
