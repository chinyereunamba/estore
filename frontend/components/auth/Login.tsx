"use client";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = { ...credentials, redirect: true, callbackUrl: "/" };
    await signIn("credentials", data);
  };

  return (
    <section className="h-96 flex justify-center items-center w-full">
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-96">
          <input
            type="email"
            name="email"
            className="w-full p-4"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="w-96">
          <input
            type="password"
            name="password"
            className="w-full p-4"
            placeholder="**********"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="border">
          Login
        </button>
      </form>
    </section>
  );
}
