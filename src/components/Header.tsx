import React from "react";
import LocationIcon from "./icons/LocationIcon";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import Nav from "./Nav";
import Logo from "./icons/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <LocationIcon />
            <span className="mx-1 text-sm">ES</span>
          </div>
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            Brochas y Bases
          </div>
          <div className="flex items-center justify-end w-full">
            <Link
              href="/admin"
              className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
            >
              <Logo />
            </Link>

            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
        <Nav />
        <div className="relative mt-6 maW-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon />
          </span>
          <input
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Buscar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
