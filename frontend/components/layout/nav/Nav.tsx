import React from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaBagShopping } from "react-icons/fa6";
import style from "../layout.module.css";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-5">
      <div className="flex gap-7 items-center">
        <div className="text-xl">Logo</div>
        <div className={`flex ${style.search}`}>
          <input type="text" placeholder="Search products..." />
          <FaMagnifyingGlass className="text-xl" />
        </div>
        <ul className="flex gap-2">
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
            <Link href={"/"} className="flex gap-3">
              <FaBagShopping className="text-xl" />
              Cart
            </Link>
          </li>
          <li className="border-2 border-text text-text text-semibold">
            <Link href="/login">Login</Link>
          </li>
          <li className="bg-accent text-background">
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
