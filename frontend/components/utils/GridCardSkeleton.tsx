// components/GridCardSkeleton.tsx
import React from "react";
import style from "./skeleton.module.css";

const GridCardSkeleton: React.FC = () => {
  return (
    <div
      className={`${style.product_card_grid_skeleton} p-4 m-2 rounded-md w-300 relative overflow-hidden`}
    >
      <div
        className={`${style.header_skeleton} ${style.before_skeleton}`}
      ></div>
      <div className={`${style.info_skeleton} ${style.before_skeleton}`}></div>
      <div className={`${style.stars_skeleton} ${style.before_skeleton}`}></div>
      
    </div>
  );
};

export default GridCardSkeleton;
