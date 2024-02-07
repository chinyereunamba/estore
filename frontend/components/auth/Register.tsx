"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCheck, FaCircleXmark, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

type ErrorProps = {
  uppercase: boolean;
  lowercase: boolean;
  symbol: boolean;
  length: boolean;
  number: boolean;
  match: boolean;
};

function Register() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const rePasswordInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ErrorProps>({
    uppercase: false,
    lowercase: false,
    symbol: false,
    length: false,
    number: false,
    match: false,
  });
  const [emailError, setEmailError] = useState<boolean | null>(null);

  const router = useRouter();

  const handleChange = (e: React.FormEvent) => {
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    const rePassword = rePasswordInputRef.current?.value;

    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numbereRegex = /[0-9]/;
    const symbolRegex = /[^A-Za-z0-9]/;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let emailCorrect: boolean | null = false;

    if (emailRegex.test(email)) {
      emailCorrect = true;
    } else if (email.length == 0) {
      emailCorrect = null;
    }
    setEmailError(emailCorrect);

    let length = false;
    let uppercase = false;
    let lowercase = false;
    let numbers = false;
    let symbols = false;
    let match = false;

    if (password.length > 8) {
      length = true;
    }

    if (upperRegex.test(password)) {
      uppercase = true;
    }
    if (lowerRegex.test(password)) {
      lowercase = true;
    }
    if (numbereRegex.test(password)) {
      numbers = true;
    }
    if (symbolRegex.test(password)) {
      symbols = true;
    }
    if (password === rePassword && password?.length != 0) {
      match = true;
    }

    setError({
      length: length,
      uppercase: uppercase,
      lowercase: lowercase,
      number: numbers,
      symbol: symbols,
      match: match,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    const rePassword = rePasswordInputRef.current!.value;

    const data = {
      email: email,
      username: email,
      password1: password,
      password2: rePassword,
    };

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "auth/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    return router.push("/");
  };

  return (
    <section className="min-h-96 flex justify-center items-center w-full">
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-96">
          <label htmlFor="email">Email Address</label>
          <span className="relative">
            <input
              type="email"
              className="w-full p-4 border rounded-lg"
              placeholder="johndoe@email.com"
              name="email"
              id="email"
              onChange={handleChange}
              ref={emailInputRef}
            />
            <span className="text-lg absolute -translate-y-1/2 top-1/2 right-3">
              {emailError == null ? (
                ""
              ) : emailError ? (
                <FaCheckCircle className="text-green-600" />
              ) : (
                <FaCircleXmark className="text-red-600" />
              )}
            </span>
          </span>
        </div>
        <div className="w-96">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            id="password1"
            className="w-full p-4 border rounded-lg"
            placeholder="**********"
            name="password1"
            onChange={handleChange}
            ref={passwordInputRef}
          />
          <span>
            <ul className="py-2">
              <li
                className={`flex items-center gap-2 ${
                  error.uppercase ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.uppercase ? <FaCheck /> : <FaXmark />} Password must have
                an uppercase letter
              </li>
              <li
                className={`flex items-center gap-2 ${
                  error.lowercase ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.lowercase ? <FaCheck /> : <FaXmark />} Password must have
                a lowercase letter
              </li>
              <li
                className={`flex items-center gap-2 ${
                  error.number ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.number ? <FaCheck /> : <FaXmark />}Password must have a
                number
              </li>
              <li
                className={`flex items-center gap-2 ${
                  error.symbol ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.symbol ? <FaCheck /> : <FaXmark />} Password must have a
                symbol
              </li>
              <li
                className={`flex items-center gap-2 ${
                  error.length ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.length ? <FaCheck /> : <FaXmark />} Password must have a
                be a least 8 characters
              </li>
              <li
                className={`flex items-center gap-2 ${
                  error.match ? "text-green-500" : "text-red-600"
                }`}
              >
                {error.match ? <FaCheck /> : <FaXmark />} Passwords must match
              </li>
            </ul>
          </span>
        </div>
        <div className="w-96">
          <label htmlFor="password2">Re-enter password</label>
          <input
            type="password"
            className="w-full p-4 border rounded-lg"
            id="password2"
            placeholder="**********"
            name="password2"
            onChange={handleChange}
            ref={rePasswordInputRef}
          />
          <span className="text-red-700"></span>
        </div>
        <div className="w-96">
          <p>
            Already have an account?{" "}
            <Link className="hover:underline" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
        <button type="submit" className="bg-slate-500">
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
