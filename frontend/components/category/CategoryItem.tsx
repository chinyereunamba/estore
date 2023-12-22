import React from "react";
import Image from "next/image";
import style from "./category.module.css";
import Link from "next/link";

interface CatInterface {
  img: string;
  title: string;
  link: string;
}

export default function CategoryItem({ img, title, link }: CatInterface) {
  return (
    <div className="max-w-80 w-full lg:w-96 flex flex-col h-96 shadow-lg rounded-lg bg-primary text-background ">
      <div className={`h-80 ${style.cat_img}`}>
        <Image src={img} alt={title} height={400} width={400} />
      </div>
      <div className="p-3">
        <Link href={link}>
          <h4>{title}</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </Link>
      </div>
    </div>
  );
}
