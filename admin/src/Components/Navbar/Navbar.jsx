import React from "react";
import navlogo from "../../Assets/nav-logo.svg";
import navProfile from "../../Assets/nav-profile.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-6 md:px-[60px] shadow-[0_1px_3px_-2px_#000] mb-[1px] bg-white">
      <img
        src={navlogo}
        alt="Logo"
        className="w-[120px] sm:w-[150px] md:w-[200px]"
      />

      <img
        src={navProfile}
        alt="Profile"
        className="w-[40px] sm:w-[50px] md:w-[75px] rounded-full object-cover"
      />
    </div>
  );
}

export default Navbar;
