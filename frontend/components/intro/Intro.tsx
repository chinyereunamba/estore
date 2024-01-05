// "use client";
// import React from "react";
// import Link from "next/link";
import style from "./intro.module.css";
// import Image from "next/image";


import React from "react";

export default function Intro() {
  return (
    <section className={`${style.intro} flex items-center justify-center flex-col h-[80vh]`}>
      <div className="text-center max-w-[450px] mb-6 px-3 flex flex-col gap-3">
        <h1>Ship sites with style.</h1>
        <h4 className="text-2xl">
          Go from design to site with Framer, the web builder for creative pros.
        </h4>
      </div>
      <div className="flex gap-4">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </section>
  );
}
