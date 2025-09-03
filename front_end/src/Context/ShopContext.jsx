import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch("http://localhost:4000/allproducts");
        let data = await response.json();
        setAllProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "content-type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCartItems(data.cartData);
          }
        });
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: itemId }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCartItems(data.cartData);
          }
        })
        .catch((error) => {
          console.error("Error removing from cart:", error);
        });
    }
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/deletefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCartItems(data.cartData);
          }
        })
        .catch((error) => {
          console.error("Error deleting from cart:", error);
        });
    }
  };

  const getTotalCartItems = () => {
    if (!localStorage.getItem("auth-token")) {
      return 0;
    }
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  useEffect(() => {}, [cartItems]);
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
