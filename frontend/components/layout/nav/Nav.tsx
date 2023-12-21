import React from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaBagShopping } from "react-icons/fa6";
import style from "../layout.module.css";

export default function Nav() {
  return (
    <nav className={`${style.nav} flex justify-between items-center p-5`}>
      <div className="flex gap-7 items-center">
        <div className="text-xl">
          <h4 className={`${style.logo}`}>DigitalHabour</h4>
        </div>
        <div className={`flex ${style.search}`}>
          <input type="text" placeholder="Search products..." />
          <FaMagnifyingGlass className="text-xl text-primary" />
        </div>
        <ul className="flex">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href={"/"} className="flex gap-5">
              <span className="relative">
                <FaBagShopping className="text-xl" />
                <span className="absolute -top-4 -right-3 text-sm w-5 h-5 flex justify-center items-center text-background bg-accent rounded-full">5</span>
              </span>
              Cart
            </Link>
          </li>
          {/* <li className="border-2 cursor-pointer border-text text-text text-semibold">
            <Link href="/login">Login</Link>
          </li>
          <li className="cursor-pointer bg-accent text-background">
            <Link href="/signup">Sign up</Link> 
          </li>*/}
          <li className="py-2 px-2">
            <Link href="/">My Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
