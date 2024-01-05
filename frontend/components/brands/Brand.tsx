import React from "react";
import style from "./brand.module.css";

type BrandProps = {
  brandName: string;
};

export default function Brand({ brandName }: BrandProps) {
  return (
    <div className={style.brand}>
      <p>{brandName}</p>
    </div>
  );
}
