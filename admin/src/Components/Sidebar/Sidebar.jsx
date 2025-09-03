import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../../Assets/Product_Cart.svg";
import list_product_icon from "../../Assets/Product_list_icon.svg";

function Sidebar() {
  return (
    <div className="h-screen w-20 md:w-64 bg-white shadow-md flex flex-col items-center md:items-start py-6 space-y-6 sticky top-0">
      {/* Add Product */}
      <Link
        to="/addproduct"
        className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 rounded-lg transition"
      >
        <img src={add_product_icon} alt="Add Product" className="w-6 md:w-8" />
        <p className="hidden md:block text-gray-700 font-medium">Add Product</p>
      </Link>

      {/* Product List */}
      <Link
        to="/listproduct"
        className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 rounded-lg transition"
      >
        <img
          src={list_product_icon}
          alt="Product List"
          className="w-6 md:w-8"
        />
        <p className="hidden md:block text-gray-700 font-medium">
          Product List
        </p>
      </Link>
    </div>
  );
}

export default Sidebar;
