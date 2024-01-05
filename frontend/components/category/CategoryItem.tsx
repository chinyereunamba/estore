import React from "react";
import Image from "next/image";
import style from "./category.module.css";
import Link from "next/link";

type CategoryItemProps = {
  img: string;
  title: string;
  link: string;
}

export default function CategoryItem({ img, title, link }: CategoryItemProps) {
  return (
    <Link href={link}>
      <div className={`${style.category} flex flex-col shadow-lg`}>
        {/* <div className={`h-80 ${style.cat_img}`}>
          <Image src={img} alt={title} height={400} width={400} />
        </div>*/}
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
