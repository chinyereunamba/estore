"use client";
import React from "react";
import SectionContainer from "../utils/SectionContainer";
import style from "./admin.module.css";
import { useProductContext } from "@/store/productContext";
import { FaPen, FaTrash } from "react-icons/fa6";
import Link from "next/link";

export default function Products() {
  const { products } = useProductContext();
  return (
    <SectionContainer>
      <table className={`${style.productsTable} w-full m-auto`}>
        <thead>
          <tr>
            <th>S/n</th>
            <th>Products</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Color</th>
            <th>Weight</th>
            <th>Size</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.category.category}</td>
              <td>{product.brand.brand}</td>
              <td>${product.price}</td>
              <td>{product.color}</td>
              <td>{product.weight}</td>
              <td>{product.size}</td>
              <td className="text-center">
                <Link href={`./products/${product.id}/edit`}>
                  <FaPen />
                </Link>
              </td>
              <td className="text-center">
                <Link href={`./products/${product.id}/delete`}>
                  <FaTrash />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionContainer>
  );
}
