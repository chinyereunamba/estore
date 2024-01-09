import React from "react";
import SectionContainer from "../utils/SectionContainer";
import style from "./cart.module.css";
import Product from "./Product";

export default function CartHome() {
  return (
    <SectionContainer>
      <section className="flex gap-7 my-5 flex-col lg:flex-row">
        <h1>Cart</h1>
        <div className="lg:w-2/3 py-2 flex flex-col gap-4">
          <Product
            price={12}
            product="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            uantity={6}
          />
        </div>
        <div className="lg:w-1/3 min-h-96 flex flex-col justify-between">
          <div>
            <h3 className="mb-5">Review Order Details</h3>
            <div className="flex justify-between py-5 border-b">
              <p>Sub total</p>
              <p>$70.00</p>
            </div>
            <div className="flex justify-between py-5 border-b">
              <p>Estimated shipping</p>
              <p>$7</p>
            </div>
            <div className="flex justify-between py-5">
              <h4>Total Cost</h4>
              <h4>$77.00</h4>
            </div>
          </div>
          <div className="w-full text-center">
            <button className="w-full bg-gray-700 text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
