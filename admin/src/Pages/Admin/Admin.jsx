import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import UpdateProduct from "../../Components/UpdateProduct/UpdateProduct";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-64 z-40`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-4 shadow-md flex items-center justify-between md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        </div>

        <div className="p-6 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
