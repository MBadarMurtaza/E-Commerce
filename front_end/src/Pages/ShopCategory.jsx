import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

function ShopCategory({ banner, category }) {
  const { all_product } = useContext(ShopContext);

  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProducts = all_product.filter(
    (item) => item.category === category
  );

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleExploreMore = () => {
    setVisibleCount((prev) => prev + 12); // load next 12 products
  };

  return (
    <div className="w-full">
      <img
        className="block my-6 mx-auto w-[90%] max-w-[1200px] rounded-lg object-cover"
        src={banner}
        alt="banner"
      />

      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] max-w-[1200px] mx-auto my-4 gap-4">
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold">
            Showing {displayedProducts.length}
          </span>{" "}
          out of {filteredProducts.length} products
        </p>
        <div className="flex items-center gap-2 py-2 px-4 rounded-full border border-[#888] cursor-pointer hover:bg-gray-100 transition">
          <span className="text-sm font-medium text-gray-700">Sort by</span>
          <img
            src={drop_down}
            alt="dropdown icon"
            className="w-3 h-3 object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-[90%] max-w-[1200px] mx-auto my-8">
        {displayedProducts.map((item, i) => (
          <Items
            key={i}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            id={item.id}
          />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div
          onClick={handleExploreMore}
          className="flex justify-center items-center mx-auto my-16 w-[180px] sm:w-[220px] h-[55px] sm:h-[65px] rounded-full bg-[#ededed] text-[#787878] font-medium text-base sm:text-lg cursor-pointer hover:bg-gray-200 transition"
        >
          Explore More
        </div>
      )}
    </div>
  );
}

export default ShopCategory;
