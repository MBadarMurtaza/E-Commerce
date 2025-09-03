import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className="w-[90%] max-w-7xl flex flex-col md:flex-row items-center justify-between m-auto rounded-2xl mb-20 px-6 sm:px-10 py-10 md:py-0 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] shadow-lg">
      <div className="flex-1 flex flex-col justify-center gap-3 text-center md:text-left">
        <h1 className="text-[#171717] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Offers For You
        </h1>
        <p className="text-[#171717] text-base sm:text-lg md:text-xl font-medium mt-2">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-40 sm:w-52 md:w-60 h-12 sm:h-14 md:h-16 bg-[#ff4141] rounded-full text-white text-base sm:text-lg md:text-xl font-semibold mt-6 hover:bg-red-500 active:scale-95 transition">
          Check Now
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <img
          src={exclusive_img}
          alt="Exclusive Offers"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Offers;
