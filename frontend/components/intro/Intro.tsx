import React from "react";
import Link from "next/link";
import style from "./intro.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Intro() {
  return (
    <section
      className={` flex items-center bg-secondary bg-opacity-20 ${style.intro}`}
    >
      <div className={`${style.intro_sec_1}`}>
        <h1>Discover the latest in technology and lifestyle.</h1>
        <Link href={'/'} className="flex items-center gap-2 text-xl">

         <span>Discover more</span>  <FaArrowRightLong />
        </Link>
      </div>
      <div className={`${style.intro_sec_2} px-5`}>
        <img src="img.png" alt="" />
      </div>
    </section>
  );
}
