// components/LoadingSkeleton.tsx
import React from "react";
import style from './skeleton.module.css'

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-300 p-4 m-4 rounded-md w-300 relative overflow-hidden">
      <div className={style.before_skeleton} />
    </div>
  );
};

export default LoadingSkeleton;
