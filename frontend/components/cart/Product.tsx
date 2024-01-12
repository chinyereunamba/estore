"use client"

import React from "react";
import style from "./cart.module.css";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { deleteOrderItem, getProductById } from "@/model/fnc";

type ProductProps = {
  id: number;
  quantity: number;
  product_id: number;
};

export default async function Product({
  id,
  quantity,
  product_id,
}: ProductProps) {
  const [product] = await Promise.all([getProductById(product_id)]);
  console.log(product)

  const price = product.price;
  const product_name = product.name;
  const total = Number(price) * quantity;

  return (
    <div className={style.checkout_product + " flex items-start gap-3"}>
      <div className={style.img + " w-1/5 h-[170px] border"}>
        <Image src={"/computing.jpg"} width={150} height={150} alt="" />
      </div>
      <div className={style.description + " w-3/5 flex flex-col gap-2"}>
        <h4>{product_name}</h4>
        <p>Color: black</p>
        <p>Quantity: {quantity}</p>
        <BiTrash
          className="text-2xl hover:cursor-pointer"
          onClick={async() => {
            console.log('Clicked delete')
            await Promise.resolve(deleteOrderItem(id));
          }}
        />
      </div>
      <div className={style.price + " w-1/5"}>
        <p className="text-xl">
          ${price} x {quantity}
        </p>
        <small className="py-3">Total</small>
        <p className="text-3xl font-bold">${total}</p>
      </div>
    </div>
  );
}
