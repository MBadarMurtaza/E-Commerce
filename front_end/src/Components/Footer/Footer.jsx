import React from "react";
import footer_log from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Navigate } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 px-6 sm:px-10 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Logo + Brand */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={footer_log} alt="logo" className="w-12 sm:w-16" />
            <p className="text-[#383838] text-2xl sm:text-3xl font-bold">
              SHOPPER
            </p>
          </div>
          <p className="text-gray-600 text-center lg:text-left max-w-sm text-sm sm:text-base">
            Your one-stop shop for the latest collections. Style, quality, and
            offers you can’t resist.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 text-gray-700 text-sm sm:text-base font-medium">
          <li className="cursor-pointer hover:text-black transition">
            Company
          </li>
          <li className="cursor-pointer hover:text-black transition">
            Products
          </li>
          <li className="cursor-pointer hover:text-black transition">
            Offices
          </li>
          <li className="cursor-pointer hover:text-black transition">About</li>
          <li className="cursor-pointer hover:text-black transition">
            Contact
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[instagram_icon, pintester_icon, whatsapp_icon].map((icon, i) => (
            <div
              key={i}
              className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <img src={icon} alt="social icon" className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm sm:text-base">
        <p>© 2025 Shopper. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
