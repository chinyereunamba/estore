"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  FaBagShopping,
  FaHeart,
  FaListCheck,
  FaAngleDown,
} from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import style from "../layout.module.css";
import Logo from "@/components/utils/logo";
import { useUserContext } from "@/store/context";

function Nav() {
  const { user } = useUserContext();
  const [show, setShow] = useState<boolean>(false);
  const [categoryActive, setCategoryActive] = useState<boolean>(false);
  const [supportActive, setSupportActive] = useState<boolean>(false);

  return (
    <nav style={{ background: "#adc" }}>
      <div
        className={`flex items-center m-auto justify-between lg:px-0 px-5 py-3 ${style.nav}`}
      >
        <Link className="logo" href={"/"}>
          <Logo />
        </Link>
        <div className={`${style.nav_links} ${show && style.active}`}>
          <ul className="flex gap-5 text-lg items-center">
            <li
              className={`${style.category} ${categoryActive && style.active}`}
            >
              <Link
                href={"/"}
                onClick={() => setCategoryActive(!categoryActive)}
                className="flex gap-2 items-center"
              >
                Categories <FaAngleDown />
              </Link>
              <ol className={`${style.category_menu} flex flex-col gap-5`}>
                <li>
                  <Link href={"/"}>Chat with us</Link>
                </li>
                <li>
                  <Link href={"/"}>Call us</Link>
                </li>
                <li>
                  <Link href={"/"}>Refund</Link>
                </li>
              </ol>
            </li>
            <li className={`${style.support} ${supportActive && style.active}`}>
              <Link
                onClick={() => setSupportActive(!supportActive)}
                href={"/"}
                className="flex gap-2 items-center"
              >
                Support <FaAngleDown />
              </Link>
              <ol className={`${style.support_menu} flex flex-col gap-5`}>
                <li>
                  <Link href={"/"}>Chat with us</Link>
                </li>
                <li>
                  <Link href={"/"}>Call us</Link>
                </li>
                <li>
                  <Link href={"/"}>Refund</Link>
                </li>
              </ol>
            </li>
            {!user ? (
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/signup"}>Sign up</Link>
                </li>
              </>
            ) : (
              <>
                <Link href={"/cart"} className={`text-2xl ${style.cart}`}>
                  <span>3</span>
                  <BiCart />
                </Link>
                <li className="font-bold">{user?.user?.first_name}</li>
                <button onClick={() => signOut()}>Logout</button>
              </>
            )}
          </ul>
          <div className={style.burger} onClick={() => setShow(!show)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
