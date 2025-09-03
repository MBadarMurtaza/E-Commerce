import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)]">
      <div className="flex-1 flex flex-col justify-center gap-6 text-center md:text-left leading-tight">
        <h2 className="text-[#090909] text-lg sm:text-xl md:text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-5">
            <p className="text-[#171717] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              new
            </p>
            <img
              className="w-12 sm:w-16 md:w-20 lg:w-[80px]"
              src={hand_icon}
              alt="hand"
            />
          </div>
          <p className="text-[#171717] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            collections
          </p>
          <p className="text-[#ff4141] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            for everyone
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 w-fit mx-auto md:mx-0 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full mt-6 bg-[#ff4141] text-white text-base sm:text-lg md:text-xl font-medium hover:bg-[#e63a3a] active:scale-95 transition">
          Latest Collection
          <img src={arrow_icon} alt="arrow" className="w-4 sm:w-5 md:w-6" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img
          src={hero_img}
          alt="hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
