import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { CgAdd } from "react-icons/cg";
import { CgCopyright } from "react-icons/cg";

const Skill = () => {
  return (
    <div id="Skill">
      <h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-sm text-[#6fddfb] tracking-widest font-bold title-font mb-1">
                SKILLS
              </h1>
              <h1 className="sm:text-4xl text-yellow-500   title-font font-bold">
                My Skills
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <FaHtml5 />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      HTML
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[100%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <FaCss3Alt />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      CSS
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[85%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      85%
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <TbBrandJavascript />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Javascript/Typescript
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[30%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      30%
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <FaPython />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Python
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[5%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      5%
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <CgAdd />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      C++
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[15%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      15%
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#6fddfb] text-white flex-shrink-0">
                      <CgCopyright />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      C#
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className=" relative h-1 w-full bg-gray-300 rounded-xl ">
                      <div className="absolute bg-yellow-500 h-1 rounded-xl w-[10%]"></div>
                    </div>
                    <p className="font-bold text-[#6fddfb] relative top-1 text-right">
                      10%
                    </p>
                  </div>
                </div>
              </div>
              {/* skillll */}
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
};

export default Skill;
