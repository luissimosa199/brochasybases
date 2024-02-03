import React from "react";
import ProductCard from "./ProductCard";

const HomeProductList = ({
  title,
  productTipe,
}: {
  title: string;
  productTipe?: string | undefined;
}) => {
  return (
    <div className="mt-16">
      <h3 className="text-gray-600 text-2xl font-medium">{title}</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {[...Array(4)].map((_, idx) => {
          return <ProductCard key={idx} />;
        })}
      </div>
    </div>
  );
};

export default HomeProductList;
