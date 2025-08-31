import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menue, setmenue] = useState("shop");
  return (
    <div className="flex justify-around p-[16px] shadow-[0px_1px_3px_-2px_black]">
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-[50px] text-[#626262] list-none font-medium text-xl">
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer font-poppins"
          onClick={() => {
            setmenue("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menue === "shop" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer font-poppins"
          onClick={() => {
            setmenue("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {menue === "mens" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer font-poppins"
          onClick={() => {
            setmenue("womens");
          }}
        >
          <Link to="/womens">Women</Link>
          {menue === "womens" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer font-poppins"
          onClick={() => {
            setmenue("kids");
          }}
        >
          <Link to="/kids">Kid</Link>
          {menue === "kids" ? (
            <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="/login">
          <button className="w-40 h-14 outline-none border-[1px] border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
        <div className="size-5 flex justify-center items-center -mt-[35px] -ml-[55px] rounded-[55px] text-sm bg-red-700 text-white font-semibold">
            0
          </div>
      </div>
    </div>
  );
}

export default Navbar;
