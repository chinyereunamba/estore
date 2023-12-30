// pages/index.tsx
import React from "react";
import ProductCardList from "@/components/shop/ProductCardList";
import LoadingSkeleton from "@/components/utils/Skeleton";

const Home: React.FC = () => {
  const isLoading = true; // Set this based on your loading state

  return (
    <div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ProductCardList
          id={2}
          img="/computing.jpg"
          price={234}
          productId="232sdsds"
          productTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum voluptate!"
        />
      )}
    </div>
  );
};

export default Home;
