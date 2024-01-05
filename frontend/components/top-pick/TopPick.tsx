import React from "react";
import SectionContainer from "../utils/SectionContainer";
import Product from "./Product";

export default function TopPicks(): React.JSX.Element {
  return (
    <SectionContainer>
      <div className="flex flex-wrap gap-7 justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </SectionContainer>
  );
}
