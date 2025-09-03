import React from "react";

function NewsLetter() {
  return (
    <div className="w-[90%] max-w-5xl flex flex-col items-center justify-center m-auto px-4 sm:px-6 py-16 sm:py-24 mb-20 bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] gap-6 rounded-2xl">
      <h1 className="text-[#454545] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-base sm:text-lg md:text-xl text-center">
        Subscribe to our newsletter and stay Updated
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white w-full sm:w-[90%] max-w-2xl h-auto sm:h-16 rounded-full border border-[#e3e3e3] overflow-hidden">
        <input
          className="flex-1 w-full px-4 py-3 sm:py-0 sm:ml-4 border-none outline-none text-[#616161] text-sm sm:text-base md:text-lg"
          type="email"
          placeholder="Your Email Id"
        />
        <button className="w-full sm:w-40 md:w-52 h-12 sm:h-full rounded-full bg-black text-white text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 active:scale-95 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
