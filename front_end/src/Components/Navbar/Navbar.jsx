import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("auth-token"); // ✅ check login

  const menuItems = [
    { name: "Shop", path: "/", key: "shop" },
    { name: "Men", path: "/mens", key: "mens" },
    { name: "Women", path: "/womens", key: "womens" },
    { name: "Kid", path: "/kids", key: "kids" },
  ];

  const getActiveKey = () => {
    if (location.pathname === "/") return "shop";
    if (location.pathname.startsWith("/mens")) return "mens";
    if (location.pathname.startsWith("/womens")) return "womens";
    if (location.pathname.startsWith("/kids")) return "kids";
    return "";
  };

  const activeKey = getActiveKey();

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="w-full shadow-[0px_1px_3px_-2px_black] bg-white relative z-50">
      <div
        className={`flex items-center ${
          isLoggedIn ? "justify-between px-6 md:px-12" : "justify-center px-4"
        } py-4`}
      >
        {/* Logo + Name (always visible) */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-[#171717] text-2xl md:text-[32px] lg:text-[38px] font-semibold">
            SHOPPER
          </p>
        </div>

        {/* Rest of the Navbar (only if logged in) */}
        {isLoggedIn && (
          <>
            {/* Menu (Desktop) */}
            <ul className="hidden md:flex items-center gap-8 text-[#626262] font-medium text-lg ">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="flex flex-col items-center gap-1 cursor-pointer font-poppins"
                >
                  <Link to={item.path}>{item.name}</Link>
                  {activeKey === item.key && (
                    <hr className="border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]" />
                  )}
                </li>
              ))}
            </ul>

            {/* Cart + Auth Buttons */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Link to="/cart">
                  <img
                    src={cart}
                    alt="cart"
                    className="w-7 h-7 lg:w-8 lg:h-8"
                  />
                </Link>
                <div className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center rounded-full text-xs bg-red-700 text-white font-semibold">
                  {getTotalCartItems()}
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="hidden md:block w-28 lg:w-40 h-12 lg:h-14 border border-[#7a7a7a] rounded-full text-[#515151] text-base lg:text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3]"
              >
                Logout
              </button>

              {/* Mobile Menu Toggle */}
              <div className="flex md:hidden z-50">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-3xl text-gray-700 focus:outline-none"
                >
                  {isOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu (only if logged in) */}
      {isLoggedIn && isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-40">
          <ul className="flex flex-col items-center gap-6 py-6 text-[#626262] font-medium text-lg">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className="cursor-pointer font-poppins"
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}

            <button
              onClick={handleLogout}
              className="w-32 h-12 border border-[#7a7a7a] rounded-full text-[#515151] text-base font-medium bg-white cursor-pointer active:bg-[#f3f3f3]"
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
