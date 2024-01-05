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


// export default function Nav() {

//   return (
//     <nav className="flex items-center justify-between px-8 py-3 z-30">
//       <div className={style.logo}>
//         <Link href={"/"}>
//           <Logo />
//         </Link>
//       </div>
//       <div className="flex gap-4 items-center">
//         <div className={`${style.nav_items} ${show ? style.active : ""}`}>
//           <ul>
//             <li>
//               <Link href={"/shop"}>Shop</Link>
//             </li>
//             <li>
//               <Link href={"/"}>About</Link>
//             </li>
//             <li>
//               <Link href={"/"}>Contact</Link>
//             </li>
//             <li className={style.cart}>
//               <span>
//                 <FaBagShopping />
//                 <small>4</small>
//               </span>
//               <Link href={"/"}>Cart</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className={style.account}>
//             <li
//               className={`${style.auth_fnc} shadow-lg flex gap-1 items-center`}
//               onClick={() => {
//                 setShowAccount(!showAccount);
//               }}
//             >
//               My Account
//               <FaAngleDown />
//             </li>
//             <ul
//               className={`${style.account_items} ${
//                 showAccount ? style.active : ""
//               }`}
//             >
//               {!session ? (
//                 <>
//                   <li className={style.auth_fnc}>
//                     <Link href={"/login"}>Login</Link>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="font-bold text-xl">
//                     Hello, {userData?.user?.first_name}
//                   </li>
//                   <li>
//                     <FaHeart color="#f44444" />
//                     <Link href={"/"}>Liked Items</Link>
//                   </li>
//                   <li>
//                     <FaListCheck />
//                     <Link href={"/"}>My Wishlist</Link>
//                   </li>
//                   <li className="cursor-pointer" onClick={() => signOut()}>
//                     Log out
//                   </li>
//                 </>
//               )}
//             </ul>
//           </ul>
//         </div>

//         <div
//           className={style.burger}
//           onClick={() => {
//             setShow(!show);
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }

function Nav() {
  const { user } = useUserContext();
  const [show, setShow] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  return (
    <nav className="flex items-center justify-between px-5 py-3">
      <Link className="logo" href={"/"}>
        <Logo />
      </Link>
      <div className={style.nav_links}>
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
      </div>
    </nav>
  );
}

export default Nav;
