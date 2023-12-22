import React from "react";
import Title from "../utils/Title";
import SectionContainer from "../utils/SectionContainer";
import CategoryItem from "./CategoryItem";

export default function Category() {
  return (
    <SectionContainer>
      <Title title="Categories" />
      <div className="flex gap-8 flex-wrap lg:flex-nowrap gap-y-10">
        <CategoryItem img="/best_seller.jpg" title="Best Seller" link="/" />
        <CategoryItem img="/computing.jpg" title="Computing" link="/" />
        <CategoryItem img="/mobile.png" title="Mobile Accessories" link="/" />
        <CategoryItem img="/home.jpg" title="Home Appliances" link="/" />
      </div>
    </SectionContainer>
  );
}
