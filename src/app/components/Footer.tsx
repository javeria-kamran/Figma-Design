import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mt-32 flex flex-col sm:flex-row items-center justify-evenly px-4 sm:px-0">
        <div className="mb-6 sm:mb-0 text-center sm:text-left">
          <h1 className="font-bold font-robototext-[18px] sm:text-[20px]">
            Subscribe to our newsletter
          </h1>
          <p className="text-[16px] sm:text-[18px] font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-[#676767] w-full sm:w-[265px] h-[48px] rounded mr-4 pl-3 mb-4 sm:mb-0"
            />
            <button className="border border-[#676767] w-full sm:w-[119px] h-[48px] rounded font-roboto">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-center sm:text-left text-sm sm:text-base font-roboto">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-evenly mt-28 px-4 sm:px-0">
        <div className="mb-6 sm:mb-0">
          <Image src={"/Ddsgnr1.png"} alt="Logo" width={130.6} height={30.38} />
        </div>
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h1 className="font-bold text-[16px] sm:text-[18px] font-roboto">
            Courses
          </h1>
          <h4 className="text-sm sm:text-base font-roboto">Business</h4>
          <h4 className="text-sm sm:text-base font-roboto">Development</h4>
          <h4 className="text-sm sm:text-base font-roboto">Technology</h4>
          <h4 className="text-sm sm:text-base font-roboto">Design</h4>
          <h4 className="text-sm sm:text-base font-roboto">Programming</h4>
        </div>
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h1 className="font-bold text-[16px] sm:text-[18px] font-roboto">
            Resources
          </h1>
          <h4 className="text-sm sm:text-base font-roboto">Career</h4>
          <h4 className="text-sm sm:text-base font-roboto">Resume</h4>
          <h4 className="text-sm sm:text-base font-roboto">Learning</h4>
          <h4 className="text-sm sm:text-base font-roboto">
            Interview Preparation
          </h4>
          <h4 className="text-sm sm:text-base font-roboto">Jobs</h4>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-[16px] sm:text-[18px] font-roboto">
            About Us
          </h1>
          <h4 className="text-sm sm:text-base font-roboto">Contact</h4>
          <h4 className="text-sm sm:text-base font-roboto">Help/Support</h4>
          <h4 className="text-sm sm:text-base font-roboto">FAQ</h4>
          <h4 className="text-sm sm:text-base font-roboto">
            Terms and Conditions
          </h4>
          <h4 className="text-sm sm:text-base font-roboto">Partners</h4>
        </div>
      </div>

      <div className="border border-black mx-10 mt-16"></div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 mx-10 pb-24">
        <div className="text-center sm:text-left mb-4 sm:mb-0 text-sm sm:text-base font-roboto">
          2023 Ddsgnr. All rights reserved.
        </div>

        <div className="flex space-x-4 text-sm sm:text-base mb-4 sm:mb-0">
          <h4 className="cursor-pointer hover:underline font-roboto">
            Privacy Policy
          </h4>
          <h4 className="cursor-pointer hover:underline font-roboto">
            Terms of Service
          </h4>
          <h4 className="cursor-pointer hover:underline font-roboto">
            Cookies Settings
          </h4>
        </div>

        <div className="w-full sm:w-auto">
          <Image
            src={"/Ddsgnr1.png"}
            alt="Social Links"
            width={132}
            height={24}
            className="mx-auto sm:mx-0"
          />
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-[#000000] hover:text-[#676767]">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-[#000000] hover:text-[#676767]">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-[#000000] hover:text-[#676767]">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-[#000000] hover:text-[#676767]">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
