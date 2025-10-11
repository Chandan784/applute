"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* About Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-gradient-blue">
            Applute Technologies
          </h2>
          <p className="text-gray-300">
            We believe in technology, innovation, and research for a better
            world. Building solutions that empower businesses and individuals
            globally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-gradient-blue">
            Quick Links
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-gradient-blue">
            Contact Us
          </h3>
          <p className="text-gray-300 mb-2">
            Email: info@applutetechnologies.com
          </p>
          <p className="text-gray-300 mb-4">Phone: +91 6370302039</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Applute Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
