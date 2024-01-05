import React from "react";
import Title from "../utils/Title";
import SectionContainer from "../utils/SectionContainer";
import CategoryItem from "./CategoryItem";
import { getCategory } from "@/model/fnc";


export default async function Category() {
  const [category] = await Promise.all([getCategory()]);
  return (
    <SectionContainer>
      {/* <Title title="Categories" /> */}
      <div className="flex flex-wrap gap-7 m-auto">
        {category.map((item, index) => (
        <CategoryItem key={index} img="/best_seller.jpg" title={item.category} link="/" />
        ))}
      </div>
    </SectionContainer>
  );
}
