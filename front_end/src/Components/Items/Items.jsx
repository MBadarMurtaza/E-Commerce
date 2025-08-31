import React from "react";

function Items({ name, img, new_price, old_price }) {
  return (
    <div className="w-[290px] bg-white shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <div className="w-full h-[300px] flex items-center justify-center   bg-gray-50">
        <img src={img} alt={name} className="w-full h-full object-fit" />
      </div>
      <p className="mt-3 text-gray-800 font-medium text-lg line-clamp-2 text-center">
        {name}
      </p>
      <div className="flex  items-center gap-3 mt-2 justify-center">
        <span className="text-[#374151] text-[18px] font-semibold">
          ${new_price}
        </span>
        <span className="text-[#8c8c8c] text-[16px] line-through">
          ${old_price}
        </span>
      </div>
    </div>
  );
}

export default Items;
