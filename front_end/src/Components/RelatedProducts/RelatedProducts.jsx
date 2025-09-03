import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";

function RelatedProducts() {
  return (
    <div className="flex flex-col items-center gap-4 py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-center">
        Related Products
      </h1>
      <hr className="w-[120px] sm:w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />

      <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {data_product.map((item, i) => (
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

export default RelatedProducts;
