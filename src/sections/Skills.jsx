/* eslint-disable no-unused-vars */
import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
} from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMui,
} from "react-icons/si";
import { BsGithub  } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import SkillBox from "../chips/SkillBox";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            <div className="relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
              <div className="first2 grid grid-cols-5 sm:grid-cols-3 gap-10">
                <SkillBox
                  logo={<IoLogoHtml5 />}
                  black={"white"}
                  white={"black"}
                  skill={"HTML5"}
                />
                <SkillBox
                  logo={<IoLogoCss3 />}
                  black={"black"}
                  white={"white"}
                  skill={"CSS"}
                />
                <SkillBox
                  logo={<IoLogoJavascript />}
                  black={"white"}
                  white={"black"}
                  skill={"JavaScript"}
                />
                <SkillBox
                  logo={<IoLogoReact />}
                  black={"black"}
                  white={"white"}
                  skill={"React Js"}
                />
                <SkillBox
                  logo={<SiTailwindcss />}
                  black={"white"}
                  white={"black"}
                  skill={"Tailwind CSS"}
                />
                <SkillBox
                  logo={<IoLogoNodejs />}
                  black={"black"}
                  white={"white"}
                  skill={"Node Js"}
                />
                <SkillBox
                  logo={<BsGithub />}
                  black={"white"}
                  white={"black"}
                  skill={"Github"}
                />
                <SkillBox
                  logo={<SiMui />}
                  black={"black"}
                  white={"white"}
                  skill={"Material UI"}
                />
                <SkillBox
                  logo={<IoLogoReact />}
                  black={"white"}
                  white={"black"}
                  skill={"React Native"}
                />
                <SkillBox
                  logo={<BiLogoNetlify />}
                  black={"black"}
                  white={"white"}
                  skill={"Netlify"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
