/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "./../assets/Ishaq-I-Resume.pdf";
import mine from "./../assets/IShaq.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div id="home" className={` bg-gradient-to-r from-white to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello
              <span className="wave">
                {/* <FontAwesomeIcon
                  icon={faHand}
                  // flip="horizontal"
                  size="sm"
                  className="text-[#283F52] -rotate-45 ml-2 "
                 /> */}
                &#x1F44B;
              </span>
              , I'm <span className="text-[#283F52]">Ishaq</span>
            </h2>
            <h2 data-aos="fade-up" className="text-4xl font-bold sm:text-3xl">
              I am a{" "}
              <TypeAnimation
                data-aos="fade-up"
                sequence={["React Js Developer", 2000, "Programmer", 2000]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                className="text-[#FBB100] text-4xl inline-block font-bold sm:text-3xl"
              />
            </h2>

            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              A dev who's passionate about learning, programming & developing websites.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            {/* <a
              href="https://www.linkedin.com/in/sarkar-sandip/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a> */}
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] text-white bg-[#FBB100] px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-[#283F52]"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5 md:mb-7"
            >
              <li>
                <a href="https://github.com/IshaqIsco22">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ishaq-i/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/_.the_witcher._?igshid=NzZlODBkYWE4Ng==">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ishaq.pallithan?mibextid=ZbWKwL">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              {/* <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[110%] w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              // src={"https://i.postimg.cc/ZYC1R40t/heyy.png"}
              // src={"https://i.postimg.cc/Y9hxNZm5/IShaq-1.png"}
              src={mine}
              alt="mine"
            />
            {/* <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
