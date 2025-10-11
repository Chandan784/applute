"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-1 md:py-4 relative z-50">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2 sm:space-x-3 ">
          <img
            src="/images/applutelogo.jpg"
            alt="Applute Logo"
            className=" h-10  w-20   lg:h-16 lg:w-36"
          />
          <h1 className="text-lg sm:text-2xl font-bold tracking-wide">
            <span className="text-blue-600">Applute</span>{" "}
            <span className="text-gray-900">Technologies</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-gray-800">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 text-center md:text-left">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 text-base font-medium hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer */}
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
              <ul className="flex flex-col mt-20 space-y-6 px-6">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={toggleMenu}
                      className="block text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
