"use client";
import { FaStar } from "react-icons/fa6";
import style from "./shop.module.css";
import Image from "next/image";
import Link from "next/link";
import { AddToCartProps, addToCart } from "@/model/fnc";
import { useUserContext } from "@/store/context";

interface ProductCard {
  id: number;
  productTitle: string;
  img: string;
  price: number;
  noOfStars?: number;
  productId: string;
  add: ()=>{}
}

export default function ProductCard({
  productTitle,
  id,
  img,
  price,
  noOfStars,
  productId,
  add
}: ProductCard) {
  const startFnc = noOfStars;
  const productName = productTitle.substring(0, 45) + "...";
  const slugify =
    productTitle
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-" +
    productId.substring(4, 12).toLowerCase();


  return (
    <div className={style.product_card}>
      <div className={style.header}>
        <Image src={img} width={205} height={214} alt={productName} />
      </div>
      <div className={style.info}>
        <Link href={`/shop/${id}/${slugify}`}>
          <p>{productName}</p>
        </Link>
        <p className="font-bold">${price}</p>
        <div className={`flex gap-1 pt-1 ${style.stars}`}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className={style.footer}>
        <button onClick={async() => {add()}}>Add to Cart</button>
      </div>
    </div>
  );
}
