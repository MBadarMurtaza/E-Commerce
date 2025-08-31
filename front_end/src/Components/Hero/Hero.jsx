import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="h-[calc(100vh-80px)] flex bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)]">
      <div className="flex-1 flex flex-col justify-center gap-6 pl-[150px] leading-[1.1]">
        <h2 className="text-[#090909] text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-7xl md:text-8xl font-bold">new</p>
            <img className="w-[80px]" src={hand_icon} alt="hand" />
          </div>
          <p className="text-[#171717] text-7xl md:text-8xl font-bold">
            collections
          </p>
          <p className="text-[#ff4141] text-6xl md:text-7xl font-bold">
            for everyone
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center gap-3 w-fit px-8 py-4 rounded-full mt-6 bg-[#ff4141] text-white text-xl font-medium hover:bg-[#e63a3a] transition">
          Latest Collection
          <img src={arrow_icon} alt="arrow" className="w-5" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={hero_img}
          alt="hero"
          className="max-h-[95%]  drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
