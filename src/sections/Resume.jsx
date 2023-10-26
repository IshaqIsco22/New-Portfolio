/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications
        </p>
      </div>
      <div className="card wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-[#283F52]">
              Experience
            </legend>
            <div className=" relative sm:w-auto w-[60%] ml-[168px] sm:mx-auto">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-[#283F52]"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-[#283F52]"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-[#283F52] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  GITBITZ Software Private Limited
                </span>
                <span className=" text-[.9rem] font-semibold text-[#283F52] sm:text-base">
                  Jul 2022 - Jul 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  {/* In my current internship at Drafteq Engineering, I'm working
                  as a Full Stack Developer focusing on the frontend development
                  using React JS, where I work on creating interactive and
                  user-friendly interfaces. Additionally, I am responsible for
                  building the backend API using Node.js, Express.js, and
                  MongoDB, enabling data storage and retrieval for the application.*/}
                  I had the opportunity to work on FixBrix, a SaaS-based product
                  for construction management as a Frontend developer. I have
                  been responsible for developing table, forms, dashboard using different react
                  libraries. And also integrated api with support of backend
                  developers.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
