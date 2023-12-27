import React from "react";
import SectionContainer from "../utils/SectionContainer";
import Image from "next/image";
import style from "./shop.module.css";

export default function ProductPage({
  brand,
  category,
  description,
  id,
  image,
  name,
  price,
  product_id,
  product_images,
  quantity,
  weight,
}:Products) {
  return (
    <SectionContainer>
      <section className="flex w-full">
        <div className="lg:w-[35%] py-5 px-4">
          <div className={style.product_image_view}>
            <div className={style.display_image}>
              <Image
                src={image ? image : '/computing.jpg'}
                width={400}
                height={450}
                alt="Random"
              />
            </div>
            <div className={style.product_thumbnails}>
              {/* {product_images.map((img, index) => (
                <li key={index}></li>
              ))} */}
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] p-5">
          <h3>
            {name}
          </h3>
          <div className={style.price}>
            <h3>$ {price}</h3>
            <p className="line-through">$ 2,000</p>
            <span>40% off</span>
          </div>
          <small className={`${style.stock}`}>In stock</small>
          <div className={style.rating}>
            <p>3.7</p>
          </div>
          <div className={style.about_product}>
            <div className="">
              <span>Brand</span> <span> Generic</span>
            </div>
            <div className="">
              <span>Color</span> <span> Black</span>
            </div>
            <div className="">
              <span>Weight</span> <span> 1.9kg</span>
            </div>
            <div className="">
              <span>Size</span> <span> 12 x 10 x 5</span>
            </div>
          </div>
          <div className={style.cart_btn}>
            <button>Add to Cart</button>
          </div>
          <div className={style.product_details}>
            <h4>About this Item</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, mollitia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, mollitia.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, mollitia.
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[20%] py-5 px-4"></div>
      </section>
    </SectionContainer>
  );
}
