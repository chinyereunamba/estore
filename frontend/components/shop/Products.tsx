"use client"
import React, { useState, useEffect } from 'react'
import style from './shop.module.css'
import ProductCard from './ProductCard';


export default function Products() {
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
  );
}
