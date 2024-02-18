import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

const HomeProductList = ({
  title,
  productTipe,
  products,
}: {
  title: string;
  productTipe?: string | undefined;
  products: Product[];
}) => {
  return (
    <div className="mt-16">
      <h3 className="text-gray-600 text-2xl font-medium">{title}</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((item) => {
          return (
            <ProductCard
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeProductList;
