import React from "react";
import SectionContainer from "../utils/SectionContainer";
import Product from "./Product";
import { getProduct } from "@/model/fnc";

export default async function TopPicks() {
  const [products] = await Promise.all([getProduct()])

  return (
    <SectionContainer>
      <div className="flex flex-wrap gap-7">
        {products.map((product, index) => (
          <Product key={index} name={product.name}/>
        ))}
      </div>
    </SectionContainer>
  );
}
