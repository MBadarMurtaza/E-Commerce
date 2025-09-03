import React from "react";
import { Link } from "react-router-dom";

function Items({ name, img, new_price, old_price, id }) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden">
      <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center bg-gray-50">
        <Link to={`/product/${id}`} className="block w-full h-full">
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={img}
            alt={name}
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      <p className="mt-3 text-gray-800 font-medium text-base sm:text-lg text-center px-2 line-clamp-2">
        {name}
      </p>

      <div className="flex items-center gap-3 mt-2 justify-center">
        <span className="text-[#374151] text-lg sm:text-xl font-semibold">
          ${new_price}
        </span>
        <span className="text-[#8c8c8c] text-sm sm:text-base line-through">
          ${old_price}
        </span>
      </div>
    </div>
  );
}

export default Items;
