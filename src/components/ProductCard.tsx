import Image from "next/image";
import React from "react";
import AddToCartIcon from "./icons/AddToCartIcon";
import { Product } from "@/types";
import Link from "next/link";

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden sm:hover:shadow-lg sm:hover:scale-105 transition-all">
      <div>
        <Link
          href={item.url}
          target="_black"
          className=""
        >
          <div className="flex items-end justify-end h-56 w-full bg-cover relative">
            <Image
              src={item.main_picture}
              alt={item.description}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute z-10 object-contain"
            />

            <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 relative z-20">
              <AddToCartIcon />
            </button>
          </div>
        </Link>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{item.name}</h3>
          <span className="text-gray-500 mt-2 font-semibold">
            ★{item.rank}
          </span>{" "}
          <span className="text-gray-500 mt-2 text-xs">
            ({item.review_count})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
