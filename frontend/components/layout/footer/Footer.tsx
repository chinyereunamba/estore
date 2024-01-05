import React from "react";
import Link from "next/link";
import style from "../layout.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Logo from "@/components/utils/logo";

export default function Footer() {
  const help = [
    { name: "Chat with us", link: "/" },
    { name: "Help center", link: "/" },
    { name: "Contact us", link: "/" },
  ];
  const category = [
    { name: "Best Seller", link: "/" },
    { name: "Computing", link: "/" },
    { name: "Mobile Accessories", link: "/" },
    { name: "Home Appliances", link: "/" },
  ];
  const about = [
    { name: "Terms & Conditions", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];

  const useful = [
    { name: "Return Policy", link: "/" },
    { name: "Sell on Digital Harbor", link: "/" },
    { name: "Become a Sales Consultant", link: "/" },
    { name: "Become a Logistics Service Partner", link: "/" },
  ];

  return (
    <footer className={`pt-5 px-5 md:px-1`}>
      <section className={`${style.footer} m-auto`}>
        <div className={`flex gap-24 flex-wrap md:px-5 ${style.footer_sec_1}`}>
          <ul>
            <h5>Need help?</h5>
            <div className="pt-3">
              {help.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </div>
          </ul>
          <ul>
            <h5>Categories</h5>
            <div className="pt-3">
              {category.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </div>
          </ul>
          <ul>
            <h5>Useful links </h5>
            <div className="pt-3">
              {useful.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="flex justify-between py-10 border-t-2 border-t-secondary mt-8 items-center flex-wrap gap-5">
          <ul className="flex gap-5 items-center flex-wrap">
            <Link href={"/"}>
              <Logo />
            </Link>
            {about.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <div className="flex gap-4">
              <Link className="text-3xl" href={"/"}>
                <FaTwitter />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <FaFacebook />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <FaInstagram />
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </footer>
  );
}
