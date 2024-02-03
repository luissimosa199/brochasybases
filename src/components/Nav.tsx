import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="sm:flex sm:justify-center sm:items-center mt-4 hidden">
      <div className="flex flex-col sm:flex-row">
        <Link
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Inicio
        </Link>
        <Link
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Shop
        </Link>
        <Link
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Categories
        </Link>
        <Link
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
          href="#"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
