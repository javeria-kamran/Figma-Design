"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[#F7F7F7] py-2 px-4 border-b border-[#676767]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-700 flex items-center space-x-4">
            <span>Phone Number: 956 742 455 678</span>
            <span>|</span>
            <span>Email: info@ddsgnr.com</span>
          </div>

          <div className="flex space-x-4 text-[#000000]">
            <a href="#" className="hover:text-[#676767]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#676767]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#676767]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#676767]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <nav className="w-full bg-[#F7F7F7] py-4 px-6 shadow-md border-[1px] border-[#676767]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/Ddsgnr1.png" alt="banner" width="90" height="30" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>

          <ul
            className={`${
              isMenuOpen
                ? "block absolute top-[80px] left-0 w-full bg-[#F7F7F7] shadow-md z-20"
                : "hidden"
            } md:flex md:space-x-6 md:static md:w-auto text-gray-700 font-roboto`}
          >
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              Home
            </li>
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              Courses
            </li>
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              Services
            </li>
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              Achievements
            </li>
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              About Us
            </li>
            <li className="hover:text-[#676767] cursor-pointer px-4 py-2 md:p-0">
              Testimonials
            </li>
          </ul>

          <div className="hidden md:flex space-x-4">
            <button className="px-6 py-2 font-roboto border bg-[#FFFFFF] text-[#000000] border-[#676767] rounded-md">
              Login
            </button>
            <button className="px-6 py-2 font-roboto bg-[#000000] text-[#FFFFFF] rounded-md border border-[#676767]">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
