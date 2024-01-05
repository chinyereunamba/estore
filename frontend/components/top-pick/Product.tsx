import Image from "next/image";
import React from "react";
import style from "./top.module.css";

type ProductProps = {
  name: string;
};

export default function Product({ name }: ProductProps) {
  return (
    <div className={style.product}>
      <h3>{name}</h3>
    </div>
  );
}
