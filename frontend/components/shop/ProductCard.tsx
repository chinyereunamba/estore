import { FaStar } from "react-icons/fa6";
import style from "./shop.module.css";

interface ProductCard {
  productTitle: string;
  img?: string;
  price: number;
  noOfStars?: number;
}

export default function ProductCard({
  productTitle,
  img,
  price,
  noOfStars,
}: ProductCard) {
  
    const startFnc = noOfStars
    const productName = productTitle.substring(0, 35) + '...'

  return (
    <div className={style.product_card}>
      <div className={style.header}></div>
      <div className={style.info}>
        <p>{productName}</p>
        <p className="font-bold">${price}</p>
        <div className={`flex gap-1 pt-1 ${style.stars}`}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className={style.footer}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
