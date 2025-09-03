import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  const subtotal = all_product.reduce((total, item) => {
    const quantity = cartItems[item.id] || 0;
    return total + item.new_price * quantity;
  }, 0);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen">
      <div className="hidden md:grid grid-cols-6 font-semibold text-gray-800 border-b border-gray-300 pb-4 mb-6 text-xs md:text-sm uppercase tracking-wide">
        <div className="pl-4">Products</div>
        <div>Title</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Total</div>
        <div className="text-center">Remove</div>
      </div>

      {all_product.map((item) => {
        const quantity = cartItems[item.id] || 0;
        if (quantity > 0) {
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-6 items-center bg-white p-4 mb-4 rounded border border-gray-100 shadow-sm"
            >
              <div className="flex justify-center md:justify-start mb-3 md:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>

              <p className="text-gray-800 font-medium text-sm text-center md:text-left mb-2 md:mb-0">
                {item.name}
              </p>

              <p className="text-gray-800 font-semibold text-center text-sm mb-2 md:mb-0">
                ${item.new_price}
              </p>

              <div className="flex justify-center items-center gap-2 mb-2 md:mb-0">
                <button
                  className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <span className="px-3 py-1 border rounded text-sm">
                  {quantity}
                </span>
                <button
                  className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition text-sm"
                  onClick={() => addToCart(item.id)}
                >
                  +
                </button>
              </div>

              <p className="text-gray-900 font-semibold text-center text-sm mb-2 md:mb-0">
                ${(item.new_price * quantity).toFixed(2)}
              </p>

              <div className="flex justify-center">
                <img
                  src={remove_icon}
                  alt="remove"
                  onClick={() => deleteFromCart(item.id)}
                  className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform opacity-70 hover:opacity-100"
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      {Object.values(cartItems).every((qty) => qty === 0) && (
        <p className="text-center text-gray-500 text-base md:text-lg mt-12">
          Your cart is empty. Start adding some products!
        </p>
      )}

      {subtotal > 0 && (
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded border border-gray-200 mb-6">
            <p className="text-gray-600 mb-3 text-sm">
              If you have a promo code, Enter it here
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
              <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition text-sm">
                Submit
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded border border-gray-200">
            <h2 className="text-lg md:text-xl font-bold mb-6 uppercase">
              Cart Totals
            </h2>

            <div className="flex justify-between mb-3 text-gray-700 text-sm">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mb-4 text-gray-700 text-sm">
              <span>Shipping Fee</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex justify-between font-bold text-base mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black hover:bg-gray-800 text-white py-3 font-medium rounded transition text-sm">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems;
