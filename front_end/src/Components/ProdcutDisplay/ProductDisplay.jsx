import React, { useContext } from "react";
import star from "../Assets/star_icon.png";
import star_dul from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay({ image, name, old_price, new_price, id }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 lg:py-16 flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:w-1/2 items-center">
        <div className="flex lg:flex-col gap-3 sm:gap-4 order-2 lg:order-1">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={image}
              alt={name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover border rounded-md cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>

        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <img
            src={image}
            alt={name}
            className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="flex-1 lg:w-1/2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
          {name}
        </h1>

        <div className="flex items-center gap-1 mt-3">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={star}
              alt="star"
              className="w-4 sm:w-5 h-4 sm:h-5"
            />
          ))}
          <img
            src={star_dul}
            alt="star dull"
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
          <p className="ml-2 text-gray-600 text-xs sm:text-sm">(122 reviews)</p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-base sm:text-lg text-gray-400 line-through">
            ${old_price}
          </span>
          <span className="text-lg sm:text-2xl font-bold text-red-500">
            ${new_price}
          </span>
        </div>

        <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          sapiente placeat vero cum velit reiciendis, ut culpa, eum ullam
          tempore impedit quod dicta voluptate? Aliquid necessitatibus nobis
          reiciendis omnis perferendis?
        </p>

        <div className="mt-6">
          <h2 className="font-semibold text-gray-800 mb-2">Select Size</h2>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="px-3 sm:px-4 py-1.5 sm:py-2 border rounded-lg text-gray-700 cursor-pointer hover:bg-red-100 hover:border-red-400 transition text-sm sm:text-base"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button
          className="mt-8 w-full sm:w-[240px] bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition text-sm sm:text-base"
          onClick={() => addToCart(id)}
        >
          ADD TO CART
        </button>

        <p className="mt-6 text-gray-600 text-sm sm:text-base">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop
          Top
        </p>
        <p className="text-gray-600 text-sm sm:text-base">
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
