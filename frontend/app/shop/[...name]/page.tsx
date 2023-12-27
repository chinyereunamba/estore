"use client";
import ProductPage from "@/components/shop/ProductPage";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Page({ params }: { params: { name: string } }) {
  // const pathName = usePathname();
  // const id = Number(usePathname().split("/")[2]);
  // const product = getProduct();
  const path = params.name

  return (
    // <ProductPage
    //   id={id}
    //   description={product?.description}
    //   image={product.image}
    //   name={product?.name}
    //   price={product?.price}
    //   product_id={product?.product_id}
    //   product_images={[]}
    //   quantity={product?.quantity}
    //   weight={product?.weight}
    // />
    <>
    
      <h2>Hello</h2>
      <p>Slug: {path}</p>
    </>
  );
}
