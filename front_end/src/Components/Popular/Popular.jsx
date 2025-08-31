import React from "react";
import Prduct_data from "../Assets/data";
import Items from "../Items/Items";

function Popular() {
  return (
    <div className="flex flex-col items-center gap-2.5 h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />
      <div className="mt-[50px]  w-[80%] flex  justify-between mx-auto ">
  {Prduct_data.map((item, i) => (
    <Items
      key={i}
      name={item.name}
      img={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
    />
  ))}
</div>

    </div>
  );
}

export default Popular;
