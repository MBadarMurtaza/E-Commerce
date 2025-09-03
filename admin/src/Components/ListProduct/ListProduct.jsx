import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import cross_icon from "../../Assets/cross_icon.png";

function ListProduct() {
  const [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("http://localhost:4000/allproducts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAllProducts(data);
        });
    };
    fetchProducts();
  }, []);

  const Remove_Product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Product Removed Successfully");
          setAllProducts((prev) => prev.filter((item) => item.id !== id));
        } else {
          alert("Failed to remove product");
        }
      });
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h1>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-7 gap-4 font-semibold text-gray-700 border-b pb-2 text-center">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Edit</p>
        <p>Remove</p>
      </div>

      {/* Table Rows */}
      <div className="divide-y">
        {allproducts.length === 0 ? (
          <div className="mt-32 text-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              No product found
            </h1>
            <p className="text-lg text-gray-500">
              Please add a product to display here.
            </p>
          </div>
        ) : (
          allproducts.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center py-4 text-center"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-md mx-auto"
                />
              </div>

              {/* Title */}
              <p className="text-gray-800 font-medium truncate">{item.name}</p>

              {/* Old Price */}
              <p className="text-gray-500 line-through">${item.old_price}</p>

              {/* New Price */}
              <p className="text-green-600 font-semibold">${item.new_price}</p>

              {/* Category */}
              <p className="capitalize">{item.category}</p>

              {/* ✅ Edit Button */}
              <div className="flex justify-center">
                <Link
                  to={`/update/${item.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  Edit
                </Link>
              </div>

              {/* Remove Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => Remove_Product(item.id)}
                  className="hover:scale-110 transition"
                >
                  <img
                    src={cross_icon}
                    alt="Remove"
                    className="w-6 h-6 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListProduct;
