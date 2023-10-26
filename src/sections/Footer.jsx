/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="contact" className="mx-auto m-auto mt-16 sm:h-[250px]">
      <div className="bg-[#283F52] h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className="font-bold text-white text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className="flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="mailto: ishaqisco22@gmail.com"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <BiLogoGmail className="text-[#93a2ad] text-3xl hover:scale-125 cursor-pointer" />
            <p>Gmail</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://wa.me/9037142901"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className="text-[#93a2ad] text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.linkedin.com/in/ishaq-i/"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className="text-[#93a2ad] text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="sm:text-[12px] text-white">
          | CopyRight &copy; <span> 2023 Portfolio. </span> All rights reserved{" "}
          <a href="#"></a>|
        </div>
      </div>
    </div>
  );
};

export default Footer;
