import React from "react";
import SectionContainer from "../utils/SectionContainer";
import style from "./brand.module.css";
import Brand from "./Brand";
import { getBrand } from "@/model/fnc";

export default async function Brands() {
  const [brands] = await Promise.all([getBrand()]);
  return (
    <SectionContainer>
      <div className={`flex flex-wrap gap-7 ${style.brands}`}>
        {brands.map((brand, index) => (
          <Brand key={index} brandName={brand.brand} />
        ))}
      </div>
    </SectionContainer>
  );
}
