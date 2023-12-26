"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import style from "./shop.module.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { setUncaughtExceptionCaptureCallback } from "process";
import Filter from "./Filter";

export default function Home() {
  

  const [products, setProducts] = useState<Products[]>([]);
  

  const getProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

 

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="px-20 mt-5 pb-10">
      <form method="post" className={style.search}>
        <input type="text" placeholder="Search products ..." />
        <FaMagnifyingGlass />
        <button type="submit">Search</button>
      </form>
      <section className="flex gap-3 mt-3 py-3">
        <Filter />
        <div className={style.products}>
          <div className="border-b-1 pb-3 border-b-text border-opacity-40">
            <h4>Phones & Tablets</h4>
          </div>
          <div className="border-b-1 pb-3 border-b-text border-opacity-40">
            <p>{products.length} products found</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                productTitle={product.name}
                noOfStars={2}
                price={Number(product.price)}
                img={!product.image ? "/computing.jpg" : product.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
