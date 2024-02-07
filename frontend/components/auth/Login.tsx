"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...credentials, redirect: true, callbackUrl: "/" };
    await signIn("credentials", data);
  };

  return (
    <section className="h-96 flex justify-center items-center w-full">
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-96">
          <label htmlFor="email" className="my-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-4 border rounded-lg"
            placeholder="johndoe@email.com"
            onChange={handleChange}
          />
        </div>
        <div className="w-96">
          <label htmlFor="password" className="my-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="w-full p-4 border rounded-lg"
            placeholder="**********"
            onChange={handleChange}
          />
        </div>
        <div className="w-96">
          <p>
            <Link className="hover:underline" href={"/"}>Forgot password?</Link>
          </p>
          <p>
            Don't have an account? <Link className="hover:underline" href={"/signup"}>Sign up</Link>
          </p>
        </div>
        <button type="submit" className="border bg-slate-500">
          Login
        </button>
      </form>
    </section>
  );
}
