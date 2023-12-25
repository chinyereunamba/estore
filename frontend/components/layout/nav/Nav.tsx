"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  FaMagnifyingGlass,
  FaBagShopping,
  FaHeart,
  FaListCheck,
} from "react-icons/fa6";
import style from "../layout.module.css";
import Logo from "@/components/utils/logo";

interface SessionData {
  exp: number;
  iat: number;
  jti: string;
  ref: number;
  access_token: string;
  refresh_token: string;
  user?: {
    first_name: string;
    last_name: string;
    email: string;
    pk: number;
  };
}

export default function Nav() {
  const { data: session } = useSession();
  const userData: SessionData | any = session;
  const [show, setShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-3 z-30">
      <div className={style.logo}>
        <Logo />
      </div>
      <div className="flex gap-4 items-center">
        <div className={`${style.nav_items} ${show ? style.active : ""}`}>
          <ul>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <li className={style.cart}>
              <span>
                <FaBagShopping />
                <small>4</small>
              </span>
              <Link href={"/"}>Cart</Link>
            </li>
            {!session && (
              <>
                <li className={style.auth_fnc}>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li className={style.auth_fnc}>
                  <Link href={"/"}>Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {session && (
          <div>
            <ul className={style.account}>
              <li
                className={`${style.auth_fnc} shadow-lg`}
                onClick={() => {
                  setShowAccount(!showAccount);
                }}
              >
                My Account
              </li>
              <ul
                className={`${style.account_items} ${
                  showAccount ? style.active : ""
                }`}
              >
                <li className="font-bold text-xl">
                  Hello, {userData?.user?.first_name}
                </li>
                <li>
                  <FaHeart color="#f44444" />
                  <Link href={"/"}>Liked Items</Link>
                </li>
                <li>
                  <FaListCheck />
                  <Link href={"/"}>My Wishlist</Link>
                </li>
                <li className="cursor-pointer" onClick={() => signOut()}>
                  Log out
                </li>
              </ul>
            </ul>
          </div>
        )}

        <div
          className={style.burger}
          onClick={() => {
            setShow(!show);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
