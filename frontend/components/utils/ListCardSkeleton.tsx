// components/ListCardSkeleton.tsx
import React from "react";
import style from "./skeleton.module.css";

const ListCardSkeleton: React.FC = () => {
  return (
    <div className={`${style.product_card_list_skeleton}`}>
      <div
        className={`${style.header_skeleton} ${style.before_skeleton}`}
      ></div>
      <div className={``}>
        <div
          className={`${style.before_skeleton} ${style.title_skeleton}`}
        ></div>
        <div
          className={`${style.before_skeleton} ${style.stars_skeleton}`}
        ></div>
        <div
          className={`${style.before_skeleton} ${style.price_skeleton}`}
        ></div>
      </div>
      <div>
        <div
          className={`${style.heart_skeleton} ${style.before_skeleton}`}
        ></div>
      </div>
    </div>
  );
};

export default ListCardSkeleton;
