"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  FaBagShopping,
  FaHeart,
  FaListCheck,
  FaAngleDown,
} from "react-icons/fa6";
import style from "../layout.module.css";
import Logo from "@/components/utils/logo";
import { useUserContext } from "@/store/context";

function Nav() {
  const { user } = useUserContext();
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div
        className={`flex items-center m-auto justify-between lg:px-0 px-5 py-3 ${style.nav}`}
      >
        <Link className="logo" href={"/"}>
          <Logo />
        </Link>
        <div className={`${style.nav_links} ${show && style.active}`}>
          <ul className="flex gap-5 text-lg">
            <li>
              <Link href={"/"} className="flex gap-2 items-center">
                Categories <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="flex gap-2 items-center">
                Support <FaAngleDown />
              </Link>
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
                <li>{user?.user?.first_name}</li>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
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
