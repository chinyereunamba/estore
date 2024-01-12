import React from "react";
import SectionContainer from "../utils/SectionContainer";
import style from "./cart.module.css";
import Product from "./Product";
import { getOrderItemsList, getProductById } from "@/model/fnc";

export default async function CartHome() {
  const cartItems = await getOrderItemsList();

  return (
    <SectionContainer>
      <section className="flex gap-7 flex-col lg:flex-row">
        <div className="lg:w-2/3 ">
          <h1 className="mb-5">Cart</h1>
          <div className="py-2 flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <Product
                key={index}
                id={item.id}
                product_id={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>
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
