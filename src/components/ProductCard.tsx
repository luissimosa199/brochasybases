import Image from "next/image";
import React from "react";
import AddToCartIcon from "./icons/AddToCartIcon";

const ProductCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover relative">
        <Image
          src="/assets/brochas-0004.jpg"
          alt={`${"brocha"}_${"name"}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="absolute z-10 object-contain"
        />
        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 relative z-20">
          <AddToCartIcon />
        </button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">Chanel</h3>
        <span className="text-gray-500 mt-2">★4.4</span>
      </div>
    </div>
  );
};

export default ProductCard;
