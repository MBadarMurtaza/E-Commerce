import React from "react";
import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";

function NewCollections() {
  return (
    <div className="flex flex-col items-center gap-2.5 h-auto mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-1.5 rounded-[10px] bg-[#252525]" />
      <div className="grid grid-cols-4 mt-[50px] gap-[15px]">
        {new_collections.map((item, i) => {
          return (
            <Items
              key={i}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
