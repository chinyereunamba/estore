"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  product_id: string;
  description: string;
  price: number;
  quantity: number;
  weight: number;
  brand: {
    id: number;
    brand: string;
    date_created: string;
  };
  category: {
    id: number;
    category: string;
    date_created: string;
  };
  image: string;
  product_images: string[];
  color: string;
  size: string;
};

type ProductContext = {
  products: Product[] | undefined;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>;
};

export const ProductContext = createContext<ProductContext | null>(null);

type ProductContextProviderProps = {
  children: React.ReactNode;
};

export default function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    // Fetch products when the component mounts
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }

  return context;
}
