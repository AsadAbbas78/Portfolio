import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font mt-10">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Image
            className="lg:w-2/7 md:w-3/7 w-5/7 mb-10 object-cover object-center rounded h-[300px] w-[400px] "
            alt="hero"
            src={require("../../../public/assests/logo/assad2.png")}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl font-bold mb-3  text-yellow-500 mt-5">
              About Me
            </h1>
            <p className=" leading-relaxed ">
              I am a dedicated web developer with several years of experience in
              crafting dynamic and innovative digital solutions. My journey in
              web development began with a passion for creating impactful online
              experiences. Over the years, I have honed my skills in
              Typescript,Tailwind CSS, Next.js, and various other programming
              languages and frameworks.
            </p>
            <div className="flex w-full justify-center items-end mt-10">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-yellow-500"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-[#6fddfb] focus:bg-transparent border border-[#6fddfb] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-[#6fddfb]  py-2 px-10 focus:outline-none hover:bg-white hover:text-[#6fddfb]  rounded border border-[#6fddfb] focus text-lg">
                Submit
              </button>
            </div>
            
            <div className="flex mt-5">
              <button className="bg-[#6fddfb] inline-flex py-3 px-5  items-center ml-4 hover:bg-white focus:outline-none text-white hover:text-[#6fddfb]  border rounded border-[#6fddfb] focus">
                <FaGooglePlay className="text-2xl" />

                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-yellow-500 mb-1">
                    GET IT ON
                  </span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-[#6fddfb] inline-flex py-3 px-5  items-center ml-4 hover:bg-white focus:outline-none text-white hover:text-[#6fddfb]  border rounded border-[#6fddfb] focus">
                <FaApple className="text-2xl " />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-yellow-500 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium  ">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
