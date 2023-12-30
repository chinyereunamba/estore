"use client";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa6";
import style from "./shop.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductCard {
  id: number;
  productTitle: string;
  img: string;
  price: number;
  noOfStars?: number;
  productId: string;
}

export default function ProductCardList({
  productTitle,
  id,
  img,
  price,
  noOfStars,
  productId,
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
  const [like, setLike] = useState<boolean>(false);

  return (
    <div className={`${style.product_card_list} my-2`}>
      <div className={style.header}>
        <Image src={img} width={205} height={205} alt={productName} />
      </div>
      <div className={style.info}>
        <div>
          <Link href={`/shop/${id}/${slugify}`}>
            <p className={style.product_title}>{productTitle}</p>
          </Link>
          <div className={style.stars}>
            <FaStar className={style.colored} />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p className={style.price}>${price}</p>
      </div>
      <div className={style.footer}>
        <span
          onClick={() => {
            setLike(!like);
          }}
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
