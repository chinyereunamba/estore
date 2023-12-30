"use client";
import React, { useEffect, useState } from "react";
import style from "./shop.module.css";
import ProductCard from "./ProductCard";
import { FaList } from "react-icons/fa6";
import { FaThLarge } from "react-icons/fa";
import ProductCardList from "./ProductCardList";
import { useProductContext } from "@/store/productContext";
import GridCardSkeleton from "../utils/GridCardSkeleton";
import ListCardSkeleton from "../utils/ListCardSkeleton";

export default function Products() {
  const [grid, setGrid] = useState<boolean>(true);
  const { products } = useProductContext();
  const { isLoading } = useProductContext();

  return (
    <div className={style.products}>
      <div className="border-b-1 pb-3 border-b-text border-opacity-40 flex justify-between">
        <h4></h4>
        <div className={`${style.product_display} flex gap-4 items-center`}>
          <span
            className={grid ? style.active : ""}
            onClick={() => {
              setGrid(true);
            }}
          >
            <FaThLarge />
          </span>
          <span
            onClick={() => {
              setGrid(false);
            }}
            className={grid ? "" : style.active}
          >
            <FaList />
          </span>
        </div>
      </div>
      <div className="border-b-1 pb-3 border-b-text border-opacity-40">
        <p>{!products?.length ? 0 : products?.length} products found</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {isLoading &&
          Array(12)
            .fill(0)
            .map((el, index) =>
              grid ? (
                <GridCardSkeleton key={index} />
              ) : (
                <ListCardSkeleton key={index} />
              )
            )}
        {products?.map((product, index) =>
          grid ? (
            <ProductCard
              key={index}
              id={product.id}
              productTitle={product.name}
              noOfStars={2}
              price={Number(product.price)}
              img={!product.image ? "/computing.jpg" : product.image}
              productId={product.product_id}
            />
          ) : (
            <ProductCardList
              key={index}
              id={product.id}
              productTitle={product.name}
              noOfStars={2}
              price={Number(product.price)}
              img={!product.image ? "/computing.jpg" : product.image}
              productId={product.product_id}
            />
          )
        )}
      </div>
    </div>
  );
}
