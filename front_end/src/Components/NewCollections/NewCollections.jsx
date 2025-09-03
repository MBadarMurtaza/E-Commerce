import React from "react";
import Items from "../Items/Items";
import { useEffect } from "react";

function NewCollections() {
  const [newCollections, setnewCollections] = React.useState([]);
  useEffect(() => {
    const fetchNewCollections = async () => {
      try {
        let response = await fetch("http://localhost:4000/newcollection");
        let data = await response.json();
        setnewCollections(data);
      } catch (error) {
        console.error("Error fetching new collections:", error);
      }
    };
    fetchNewCollections();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-12 px-4 sm:px-8 mb-20">
      <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-28 sm:w-40 md:w-52 h-1.5 rounded-[10px] bg-[#252525]" />

      <div className="mt-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {newCollections.map((item, i) => (
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

export default NewCollections;
