import React from "react";
import upload_area from "../../Assets/upload_area.svg";
import { useState } from "react";

function AddProduct() {
  const [image, setimage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setimage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let responsedata;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        responsedata = data;
      });

    if (responsedata.success) {
      product.image = responsedata.image_url;
      console.log(product);

      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Product Added Successfully");
            setProductDetails({
              name: "",
              image: "",
              category: "",
              new_price: "",
              old_price: "",
            });
            setimage(false);
          } else {
            alert("Failed to add product");
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center p-6 w-full">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add New Product
        </h2>
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-1">Product Title</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={productDetails.name}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-gray-700 font-medium mb-1">Price</p>
            <input
              type="text"
              name="old_price"
              placeholder="Type here"
              value={productDetails.old_price}
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-1">Offer Price</p>
            <input
              type="text"
              name="new_price"
              placeholder="Type here"
              value={productDetails.new_price}
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-1">Category</p>
          <select
            name="category"
            value={productDetails.category}
            onChange={changeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <label
            htmlFor="file-input"
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full hover:border-indigo-500 transition"
          >
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="Upload"
              className="w-16 h-16 mb-2"
            />
            <p className="text-gray-500">Click to upload product image</p>
          </label>
          <input
            type="file"
            onChange={imageHandler}
            id="file-input"
            name="file-input"
            hidden
          />
        </div>

        <button
          onClick={Add_Product}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
