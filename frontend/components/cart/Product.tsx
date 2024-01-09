import React from "react";
import style from "./cart.module.css";
import Image from "next/image";

type ProductProps = {
  product: string;
  price: number;
  uantity: number;
};

export default function Product({ product, price, uantity }: ProductProps) {
  const total = price * uantity;
  return (
    <div className={style.checkout_product + " flex items-start gap-3"}>
      <div className={style.img + " w-1/5 h-[170px] border"}>
        <Image src={"/computing.jpg"} width={150} height={150} alt="" />
      </div>
      <div className={style.description + " w-3/5 flex flex-col gap-2"}>
        <h4>{product}</h4>
        <p>Color: black</p>
        <p>uantity: {uantity}</p>
      </div>
      <div className={style.price + " w-1/5"}>
        <p className="text-xl">
          ${price} x {uantity}
        </p>
        <small className="py-3">Total</small>
        <p className="text-3xl font-bold">${total}</p>
      </div>
    </div>
  );
}
