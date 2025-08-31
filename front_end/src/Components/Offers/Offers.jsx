import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className="w-[85%] max-w-[1200px] h-[70vh] flex items-center justify-between m-auto rounded-2xl mb-[150px] px-10 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] shadow-lg">
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h1 className="text-[#171717] font-bold text-[64px] leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] font-bold text-[64px] leading-tight">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[20px] font-medium">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[240px] h-[65px] bg-[#ff4141] rounded-full text-white text-[20px] font-semibold mt-6 hover:bg-red-500 transition">
          Check Now
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img
          src={exclusive_img}
          alt="Exclusive Offers"
          className="max-h-[450px] object-cover"
        />
      </div>
    </div>
  );
}

export default Offers;
