import style from "./shop.module.css";

const getCategory = async () => {
  const response = await fetch(`http://127.0.0.1:8000/api/v1/categories`, {
    method: "GET",
    next: {
      revalidate: 5000,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  // await new Promise((resolve) => setTimeout(resolve, 500000));
  const data: Category[] = await response.json();
  return data;
};

const getBrand = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 500000));

  const response = await fetch(`http://127.0.0.1:8000/api/v1/brands`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Brand[] = await response.json();
  return data;
};

export default async function Filter() {
  // const category = await getCategory();
  // const brand = await getBrand();
  const category: Category[] = [];
  const brand: Brand[] = [];

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
