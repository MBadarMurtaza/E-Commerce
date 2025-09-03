import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumps from "../Components/BreadCrumps/BreadCrumps";
import ProductDisplay from "../Components/ProdcutDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();

  const product = all_product.find((e) => e.id === Number(productid));

  return (
    <div>
      <BreadCrumps name={product.name} category={product.category} />
      <ProductDisplay
        image={product.image}
        name={product.name}
        old_price={product.old_price}
        new_price={product.new_price}
        id={product.id}
      />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
