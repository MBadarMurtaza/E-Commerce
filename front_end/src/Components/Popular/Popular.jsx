import React, { useState, useEffect } from "react";
import Items from "../Items/Items";

function Popular() {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch("http://localhost:4000/popularwomens");
        let data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 py-12 px-4 sm:px-8">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-32 sm:w-40 md:w-52 h-1.5 rounded-[10px] bg-[#252525]" />

      <div className="mt-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0">
        {Product.map((item, i) => (
          <Items
            key={i}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
