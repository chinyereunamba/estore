import style from "./shop.module.css";
import { useEffect, useState } from "react";

export default function Filter() {
  const [category, setCategory] = useState<Category[]>([]);
  const [brand, setBrand] = useState<Brand[]>([]);

  const getCategory = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  const getBrand = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/brands", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBrand(data));
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  return (
    <div className={style.filter}>
      <div className={style.category}>
        <h5>Category</h5>
        <ul>
          {category.map((cat, index) => (
            <li key={index}>{cat.category}</li>
          ))}
        </ul>
      </div>
      <div className={style.brand}>
        <h5>Brand</h5>
        <ul>
          {brand.map((brand, index) => (
            <li key={index}>
              <input type="checkbox" name="brand" id={`brand_${index}`} />
              <label htmlFor={`brand_${index}`}>{brand.brand}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.price}>
        <h5>Price</h5>
      </div>
      <div className={style.price}>
        <h5>Product Rating</h5>
      </div>
    </div>
  );
}
