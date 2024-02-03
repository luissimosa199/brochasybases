import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="#"
          className="text-xl font-bold text-gray-500 hover:text-gray-400"
        >
          Brochas y Bases
        </Link>
        <p className="py-2 text-gray-500 sm:py-0">
          Todos los derechos reservados. | Lumedia | 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
