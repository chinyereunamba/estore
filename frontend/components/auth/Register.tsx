"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [user, setUser] = useState({ email: "", password1: "", password2: "" });

  const [error, setError] = useState({ password1: "", password2: "" });

  const router = useRouter()

  const verifyInput = () => {
    const password1 = user.password1;
    const password2 = user.password2;

    if (password1.length <= 8) {
      setError({
        ...error,
        password1: "Password should be at least 8 characters",
      });
    } else if (password1 !== password2) {
      setError({
        ...error,
        password1: "",
        password2: "Passwords don't match",
      });
    } else {
      setError({ ...error });
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  useEffect(() => {
    verifyInput();
  }, [handleChange]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email: user.email,
      username: user.email,
      password1: user.password1,
      password2: user.password2,
    };

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "auth/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    return router.push('/')
    // return response;
  };

  return (
    <section className="h-96 flex justify-center items-center w-full">
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        onChange={verifyInput}
      >
        <div className="w-96">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            className="w-full p-4"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="w-96">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            className="w-full p-4"
            placeholder="**********"
            name="password1"
            onChange={handleChange}
          />
          <span className="text-red-700">{error.password1}</span>
        </div>
        <div className="w-96">
          <label htmlFor="password2">Re-enter password</label>

          <input
            type="password"
            className="w-full p-4"
            placeholder="**********"
            name="password2"
            onChange={handleChange}
          />
          <span className="text-red-700">{error.password2}</span>
        </div>
        <button type="submit" className="border">
          Register
        </button>
      </form>
    </section>
  );
}
