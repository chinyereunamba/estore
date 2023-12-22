"use client";
import React, { useRef } from "react";
import {signIn} from 'next-auth/react'

export default function page() {
    const emailRef = useRef<HTMLInputElement>(null!)
    const passwordRef = useRef<HTMLInputElement>(null!)
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const email = emailRef.current!.value
      const password = passwordRef.current!.value
      console.log(email, password)

      const data = {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: "/",
      };

      await signIn("credentials", data);
  };
  return (
    <section className="h-96 flex justify-center items-center w-full">
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-96">
          <input
            type="email"
            className="w-full p-4"
            placeholder="Email address"
            ref={emailRef}
          />
        </div>
        <div className="w-96">
          <input
            type="password"
            className="w-full p-4"
            placeholder="**********"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="border">
          Login
        </button>
      </form>
    </section>
  );
}
